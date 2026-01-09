// Pyodide Web Worker with Golden Standard Validation Engine
importScripts("https://cdn.jsdelivr.net/pyodide/v0.24.1/full/pyodide.js");

let pyodide = null;
let inputBuffer = null;
let inputIndex = 0;

// Initialize Pyodide
async function initPyodide() {
  pyodide = await loadPyodide({
    indexURL: "https://cdn.jsdelivr.net/pyodide/v0.24.1/full/",
  });

  // Mock Turtle Graphics Class
  const mockTurtleCode = `
class MockTurtle:
    def __init__(self):
        self.x = 0
        self.y = 0
        self.angle = 0
        self.pen_down = True
        self.pen_color = "white"
        self.pen_size = 2
        
    def forward(self, distance):
        import math
        old_x, old_y = self.x, self.y
        self.x += distance * math.cos(math.radians(self.angle))
        self.y += distance * math.sin(math.radians(self.angle))
        if self.pen_down:
            self._draw_line(old_x, old_y, self.x, self.y)
    
    def backward(self, distance):
        self.forward(-distance)
    
    def right(self, angle):
        self.angle -= angle
    
    def left(self, angle):
        self.angle += angle
    
    def penup(self):
        self.pen_down = False
    
    def pendown(self):
        self.pen_down = True
    
    def color(self, c):
        self.pen_color = c
    
    def pensize(self, size):
        self.pen_size = size
    
    def speed(self, s):
        pass  # Speed doesn't matter in our implementation
    
    def circle(self, radius, extent=360):
        import math
        steps = int(abs(extent) / 5)  # 5 degrees per step
        step_angle = extent / steps
        step_distance = 2 * math.pi * abs(radius) * abs(extent) / (360 * steps)
        
        for _ in range(steps):
            self.forward(step_distance)
            self.left(step_angle)
    
    def _draw_line(self, x1, y1, x2, y2):
        # Send draw command to main thread
        import js
        js.postMessage({
            'type': 'DRAW',
            'action': 'line',
            'x1': x1,
            'y1': y1,
            'x2': x2,
            'y2': y2,
            'color': self.pen_color,
            'width': self.pen_size
        })

# Create global turtle instance
turtle = MockTurtle()
`;

  await pyodide.runPythonAsync(mockTurtleCode);

  self.postMessage({ type: "READY" });
}

// Error translation for pedagogical messages (12-14 year olds)
function translateError(errorType, errorMessage) {
  const translations = {
    'SyntaxError': {
      emoji: '⚠️',
      title: 'Syntax Error',
      message: "The computer didn't understand that. Check for missing quotes, parentheses, or colons."
    },
    'NameError': {
      emoji: '⚠️',
      title: 'Unknown Variable',
      message: "You tried to use a variable that doesn't exist yet. Make sure you've defined it first."
    },
    'TypeError': {
      emoji: '⚠️',
      title: 'Type Error',
      message: "You're trying to mix incompatible types. For example, you can't add a number to text."
    },
    'IndentationError': {
      emoji: '⚠️',
      title: 'Indentation Error',
      message: "Your code isn't indented correctly. Python needs proper spacing to understand code blocks."
    },
    'ValueError': {
      emoji: '⚠️',
      title: 'Value Error',
      message: "The value you're using isn't valid for this operation. Check your input data."
    },
    'ZeroDivisionError': {
      emoji: '⚠️',
      title: 'Division by Zero',
      message: "You can't divide by zero! Check your math operations."
    },
    'IndexError': {
      emoji: '⚠️',
      title: 'Index Out of Range',
      message: "You're trying to access a position that doesn't exist in your list or string."
    }
  };

  const translation = translations[errorType] || {
    emoji: '❌',
    title: 'Runtime Error',
    message: 'Something went wrong while running your code.'
  };

  return `${translation.emoji} ${translation.title}: ${translation.message}`;
}

// Python Validation Wrapper
const validationWrapperTemplate = `
import sys
import builtins
from io import StringIO
import json

# Capture stdout
output_capturer = StringIO()
sys.stdout = output_capturer

# Capture input prompts
captured_prompts = []
test_inputs = __TEST_INPUTS__  # Will be replaced with actual test inputs
input_index = [0]

def validation_input(prompt=""):
    """Mock input() that captures prompts and returns test data"""
    # Capture the prompt (convert to string and store)
    captured_prompts.append(str(prompt))
    
    # Return test input if available
    if input_index[0] < len(test_inputs):
        value = test_inputs[input_index[0]]
        input_index[0] += 1
        return value
    return ""  # Default fallback

# Override builtins.input
original_input = builtins.input
builtins.input = validation_input

# Execution tracking
execution_error = None
error_type = None

# Execute user code
try:
    exec(__USER_CODE__, {})
except SyntaxError as e:
    execution_error = str(e)
    error_type = 'SYNTAX_ERROR'
except NameError as e:
    execution_error = str(e)
    error_type = 'NAME_ERROR'
except TypeError as e:
    execution_error = str(e)
    error_type = 'TYPE_ERROR'
except IndentationError as e:
    execution_error = str(e)
    error_type = 'INDENTATION_ERROR'
except ValueError as e:
    execution_error = str(e)
    error_type = 'VALUE_ERROR'
except ZeroDivisionError as e:
    execution_error = str(e)
    error_type = 'ZERO_DIVISION_ERROR'
except IndexError as e:
    execution_error = str(e)
    error_type = 'INDEX_ERROR'
except Exception as e:
    execution_error = str(e)
    error_type = 'RUNTIME_ERROR'

# Get captured output
actual_output = output_capturer.getvalue()

# Restore original stdout so we can print the result
sys.stdout = sys.__stdout__

# Validation result
result = {
    'execution_error': execution_error,
    'error_type': error_type,
    'actual_output': actual_output,
    'captured_prompts': captured_prompts
}

# Output as JSON (to the restored stdout)
print("__VALIDATION_RESULT__" + json.dumps(result))
`;

// Run code with validation
async function runWithValidation(code, testCases) {
  if (!pyodide) {
    self.postMessage({
      type: "VALIDATION_RESULT",
      result: {
        passed: false,
        errorType: 'RUNTIME_ERROR',
        error: 'Pyodide not initialized',
        friendlyMessage: '❌ System Error: The Python environment is not ready yet. Please wait a moment and try again.'
      }
    });
    return;
  }

  try {
    // Process all test cases
    const results = [];

    for (const testCase of testCases) {
      // Prepare test inputs
      const testInputs = testCase.input ? testCase.input.split('\\n') : [];

      // Create validation wrapper with user code and test inputs
      let validationCode = validationWrapperTemplate
        .replace('__USER_CODE__', JSON.stringify(code))
        .replace('__TEST_INPUTS__', JSON.stringify(testInputs));

      // Capture stdout
      let capturedOutput = "";
      pyodide.setStdout({
        batched: (text) => {
          capturedOutput += text;
        }
      });

      // Run validation
      try {
        await pyodide.runPythonAsync(validationCode);
      } catch (e) {
        // Python execution failed
        self.postMessage({
          type: "VALIDATION_RESULT",
          result: {
            passed: false,
            errorType: 'RUNTIME_ERROR',
            error: e.message,
            friendlyMessage: `❌ System Error: ${e.message}`
          }
        });
        return;
      }

      // Parse validation result
      const resultMarker = '__VALIDATION_RESULT__';
      const resultIndex = capturedOutput.indexOf(resultMarker);

      if (resultIndex === -1) {
        self.postMessage({
          type: "VALIDATION_RESULT",
          result: {
            passed: false,
            errorType: 'RUNTIME_ERROR',
            error: 'Validation result marker not found',
            friendlyMessage: '❌ System Error: Could not find validation result'
          }
        });
        return;
      }

      const resultJson = capturedOutput.substring(resultIndex + resultMarker.length);
      let validationData;

      try {
        validationData = JSON.parse(resultJson);
      } catch (e) {
        self.postMessage({
          type: "VALIDATION_RESULT",
          result: {
            passed: false,
            errorType: 'RUNTIME_ERROR',
            error: 'Failed to parse validation JSON',
            friendlyMessage: '❌ System Error: Invalid validation format'
          }
        });
        return;
      }

      // Check for execution errors
      if (validationData.execution_error) {
        const friendlyMessage = translateError(
          validationData.error_type,
          validationData.execution_error
        );

        self.postMessage({
          type: "VALIDATION_RESULT",
          result: {
            passed: false,
            errorType: validationData.error_type,
            error: validationData.execution_error,
            friendlyMessage: friendlyMessage,
            actualOutput: validationData.actual_output
          }
        });
        return;
      }

      // Validate output (exact match)
      const actualOutput = validationData.actual_output;
      const expectedOutput = testCase.expectedOutput;

      if (actualOutput !== expectedOutput) {
        const friendlyMessage = `❌ Mission Failed: Your code runs, but the output isn't exactly what the mission required.\\n\\nExpected:\\n"${expectedOutput}"\\n\\nYour output:\\n"${actualOutput}"`;

        self.postMessage({
          type: "VALIDATION_RESULT",
          result: {
            passed: false,
            errorType: 'VALIDATION_ERROR',
            error: 'Output mismatch',
            friendlyMessage: friendlyMessage,
            actualOutput: actualOutput,
            expectedOutput: expectedOutput
          }
        });
        return;
      }

      // Validate input prompts (if expected)
      if (testCase.expectedInputPrompt) {
        const expectedPrompts = [testCase.expectedInputPrompt];
        const actualPrompts = validationData.captured_prompts;

        // Smart strictness: trim whitespace before comparing
        const normalizedExpected = expectedPrompts.map(p => p.trim());
        const normalizedActual = actualPrompts.map(p => p.trim());

        if (normalizedActual.length !== normalizedExpected.length) {
          const friendlyMessage = `❌ Input Prompt Error: Your code should ask for input ${normalizedExpected.length} time(s), but it asked ${normalizedActual.length} time(s).`;

          self.postMessage({
            type: "VALIDATION_RESULT",
            result: {
              passed: false,
              errorType: 'INPUT_PROMPT_ERROR',
              error: 'Input prompt count mismatch',
              friendlyMessage: friendlyMessage,
              actualPrompts: actualPrompts,
              expectedPrompts: expectedPrompts
            }
          });
          return;
        }

        // Check each prompt (exact match after trim)
        for (let i = 0; i < normalizedExpected.length; i++) {
          if (normalizedActual[i] !== normalizedExpected[i]) {
            const friendlyMessage = `❌ Input Prompt Error: Your input() prompt doesn't match exactly.\\n\\nExpected: "${normalizedExpected[i]}"\\nYour prompt: "${normalizedActual[i]}"\\n\\nMake sure to use the exact text, including punctuation and capitalization.`;

            self.postMessage({
              type: "VALIDATION_RESULT",
              result: {
                passed: false,
                errorType: 'INPUT_PROMPT_ERROR',
                error: 'Input prompt text mismatch',
                friendlyMessage: friendlyMessage,
                actualPrompts: actualPrompts,
                expectedPrompts: expectedPrompts
              }
            });
            return;
          }
        }
      }

      results.push({ passed: true });
    }

    // All tests passed!
    self.postMessage({
      type: "VALIDATION_RESULT",
      result: {
        passed: true,
        friendlyMessage: '✅ Mission Complete! All tests passed. Great work, Agent!'
      }
    });

  } catch (error) {
    self.postMessage({
      type: "VALIDATION_RESULT",
      result: {
        passed: false,
        errorType: 'RUNTIME_ERROR',
        error: error.message,
        friendlyMessage: `❌ System Error: ${error.message}`
      }
    });
  }
}

// Handle input() calls (for interactive mode)
function setupStdin() {
  pyodide.setStdin({
    stdin: () => {
      // Request input from main thread
      self.postMessage({ type: "STDIN_REQUEST" });

      // Wait for input using Atomics (blocking)
      if (inputBuffer) {
        const result = Atomics.wait(inputBuffer, inputIndex, 0);
        if (result === "ok") {
          // Read the input string
          const length = inputBuffer[inputIndex + 1];
          const chars = [];
          for (let i = 0; i < length; i++) {
            chars.push(String.fromCharCode(inputBuffer[inputIndex + 2 + i]));
          }
          // Reset the buffer
          Atomics.store(inputBuffer, inputIndex, 0);
          return chars.join("") + "\\n";
        }
      }
      return "";
    }
  });
}

// Message handler
self.onmessage = async (event) => {
  const { type, code, buffer, testCases } = event.data;

  switch (type) {
    case "INIT":
      inputBuffer = buffer ? new Int32Array(buffer) : null;
      await initPyodide();
      if (inputBuffer) {
        setupStdin();
      }
      break;

    case "RUN_WITH_VALIDATION":
      await runWithValidation(code, testCases);
      break;

    case "RUN_CODE":
      // Legacy mode: simple execution without validation
      if (!pyodide) {
        self.postMessage({ type: "ERROR", error: "Pyodide not initialized" });
        return;
      }

      try {
        // Capture stdout
        let output = "";
        pyodide.setStdout({
          batched: (text) => {
            output += text;
            self.postMessage({ type: "OUTPUT", text });
          }
        });

        // Run the code
        await pyodide.runPythonAsync(code);

        self.postMessage({ type: "COMPLETE", output });
      } catch (error) {
        self.postMessage({
          type: "ERROR",
          error: error.message,
          traceback: error.toString()
        });
      }
      break;

    case "WRITE_INPUT":
      if (inputBuffer && event.data.text) {
        const text = event.data.text;
        // Write length
        Atomics.store(inputBuffer, inputIndex + 1, text.length);
        // Write characters
        for (let i = 0; i < text.length; i++) {
          Atomics.store(inputBuffer, inputIndex + 2 + i, text.charCodeAt(i));
        }
        // Signal that input is ready
        Atomics.store(inputBuffer, inputIndex, 1);
        Atomics.notify(inputBuffer, inputIndex);
      }
      break;
  }
};
