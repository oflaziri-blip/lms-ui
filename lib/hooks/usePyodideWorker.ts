import { useEffect, useRef, useState, useCallback } from "react"
import { ValidationResult, TestCase } from "@/lib/types/lesson"

export interface PyodideMessage {
  type: "READY" | "OUTPUT" | "COMPLETE" | "ERROR" | "STDIN_REQUEST" | "DRAW" | "VALIDATION_RESULT"
  text?: string
  output?: string
  error?: string
  traceback?: string
  action?: string
  x1?: number
  y1?: number
  x2?: number
  y2?: number
  color?: string
  width?: number
  result?: ValidationResult  // NEW: Validation result
}

export interface UsePyodideWorkerReturn {
  isReady: boolean
  isRunning: boolean
  output: string
  error: string | null
  runCode: (code: string) => void
  runCodeWithValidation: (code: string, testCases: TestCase[]) => Promise<ValidationResult>  // NEW
  writeInput: (text: string) => void
  stopExecution: () => void
  waitingForInput: boolean
  drawCommands: PyodideMessage[]
}

export function usePyodideWorker(): UsePyodideWorkerReturn {
  const workerRef = useRef<Worker | null>(null)
  const inputBufferRef = useRef<SharedArrayBuffer | null>(null)
  const inputArrayRef = useRef<Int32Array | null>(null)

  const [isReady, setIsReady] = useState(false)
  const [isRunning, setIsRunning] = useState(false)
  const [output, setOutput] = useState("")
  const [error, setError] = useState<string | null>(null)
  const [waitingForInput, setWaitingForInput] = useState(false)
  const [drawCommands, setDrawCommands] = useState<PyodideMessage[]>([])

  // Initialize worker
  useEffect(() => {
    // Check if SharedArrayBuffer is available
    const hasSharedArrayBuffer = typeof SharedArrayBuffer !== "undefined"

    // Create worker
    workerRef.current = new Worker("/pyodide.worker.js")

    // Create shared buffer for input synchronization (if available)
    if (hasSharedArrayBuffer) {
      // Buffer size: 1024 int32s (4KB)
      inputBufferRef.current = new SharedArrayBuffer(1024 * 4)
      inputArrayRef.current = new Int32Array(inputBufferRef.current)
    }

    // Message handler
    workerRef.current.onmessage = (event: MessageEvent<PyodideMessage>) => {
      const { type } = event.data

      switch (type) {
        case "READY":
          setIsReady(true)
          break

        case "OUTPUT":
          setOutput(prev => prev + (event.data.text || ""))
          break

        case "COMPLETE":
          setIsRunning(false)
          setWaitingForInput(false)
          break

        case "ERROR":
          setError(event.data.error || "Unknown error")
          setIsRunning(false)
          setWaitingForInput(false)
          break

        case "STDIN_REQUEST":
          setWaitingForInput(true)
          break

        case "DRAW":
          setDrawCommands(prev => [...prev, event.data])
          break
      }
    }

    // Initialize worker with buffer
    workerRef.current.postMessage({
      type: "INIT",
      buffer: inputBufferRef.current,
    })

    // Cleanup
    return () => {
      workerRef.current?.terminate()
    }
  }, [])

  // Run Python code
  const runCode = useCallback((code: string) => {
    if (!workerRef.current || !isReady) {
      console.error("Worker not ready")
      return
    }

    setIsRunning(true)
    setOutput("")
    setError(null)
    setWaitingForInput(false)
    setDrawCommands([])

    workerRef.current.postMessage({
      type: "RUN_CODE",
      code,
    })
  }, [isReady])

  // Run code with Golden Standard validation
  const runCodeWithValidation = useCallback((code: string, testCases: TestCase[]): Promise<ValidationResult> => {
    if (!workerRef.current || !isReady) {
      return Promise.reject(new Error("Worker not ready"))
    }

    return new Promise<ValidationResult>((resolve) => {
      setIsRunning(true)
      setOutput("")
      setError(null)
      setWaitingForInput(false)
      setDrawCommands([])

      // Create one-time message handler for validation result
      const handleValidationResult = (event: MessageEvent<PyodideMessage>) => {
        if (event.data.type === "VALIDATION_RESULT" && event.data.result) {
          setIsRunning(false)
          workerRef.current?.removeEventListener('message', handleValidationResult)
          resolve(event.data.result)
        }
      }

      if (!workerRef.current) {
        resolve({ passed: false, error: "Worker not available" })
        return
      }

      workerRef.current.addEventListener('message', handleValidationResult)

      // Send validation request
      if (workerRef.current) {
        workerRef.current.postMessage({
          type: "RUN_WITH_VALIDATION",
          code,
          testCases,
        })
      }
    })
  }, [isReady])

  // Write input to shared buffer
  const writeInput = useCallback((text: string) => {
    if (!workerRef.current || !inputArrayRef.current) {
      console.error("Cannot write input: worker or buffer not available")
      return
    }

    workerRef.current.postMessage({
      type: "WRITE_INPUT",
      text,
    })

    setWaitingForInput(false)
  }, [])

  // Stop execution
  const stopExecution = useCallback(() => {
    if (workerRef.current) {
      // Terminate and recreate worker
      workerRef.current.terminate()
      workerRef.current = new Worker("/pyodide.worker.js")

      // Re-initialize
      workerRef.current.postMessage({
        type: "INIT",
        buffer: inputBufferRef.current,
      })

      setIsRunning(false)
      setWaitingForInput(false)
    }
  }, [])

  return {
    isReady,
    isRunning,
    output,
    error,
    runCode,
    runCodeWithValidation,  // NEW
    writeInput,
    stopExecution,
    waitingForInput,
    drawCommands,
  }
}
