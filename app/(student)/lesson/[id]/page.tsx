"use client"

import * as React from "react"
import { SplitPane } from "@/components/layout/SplitPane"
import { LessonContent } from "@/components/lesson/LessonContent"
import { CodeEditor } from "@/components/lesson/CodeEditor"
import { Terminal } from "@/components/lesson/Terminal"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function LessonPage({ params }: { params: { id: string } }) {
  const [code, setCode] = React.useState(`# Welcome to Python Core - Loops
# Complete the following task:

# Task: Print numbers from 1 to 10 using a for loop
# Your code here:

`)
  const [terminalOutput, setTerminalOutput] = React.useState("")
  const [isRunning, setIsRunning] = React.useState(false)

  const handleRun = () => {
    setIsRunning(true)
    setTerminalOutput("")
    
    // Simulate code execution
    setTimeout(() => {
      // Mock output
      const mockOutput = `> Running code...
> Output:
1
2
3
4
5
6
7
8
9
10
> Execution completed successfully!`
      setTerminalOutput(mockOutput)
      setIsRunning(false)
    }, 2000)
  }

  const handleStop = () => {
    setIsRunning(false)
    setTerminalOutput(terminalOutput + "\n> Execution stopped by user.")
  }

  // Mock lesson content
  const lessonContent = `
    <h1>Introduction to Loops</h1>
    <p>Loops are a fundamental concept in programming that allow you to execute a block of code repeatedly.</p>
    
    <h2>For Loops</h2>
    <p>A <code>for</code> loop is used to iterate over a sequence (such as a list, tuple, or string) or other iterable objects.</p>
    
    <h3>Syntax</h3>
    <pre><code>for variable in sequence:
    # code to execute</code></pre>
    
    <h3>Example</h3>
    <pre><code>for i in range(1, 11):
    print(i)</code></pre>
    
    <h2>Your Task</h2>
    <p>Complete the code in the editor to print numbers from 1 to 10 using a for loop.</p>
    
    <h3>Tips</h3>
    <ul>
      <li>Use the <code>range()</code> function to generate a sequence of numbers</li>
      <li>Remember that <code>range(1, 11)</code> generates numbers from 1 to 10 (inclusive of 1, exclusive of 11)</li>
      <li>Use the <code>print()</code> function to output each number</li>
    </ul>
  `

  return (
    <SplitPane
      left={
        <div className="h-full overflow-y-auto p-4 sm:p-6 md:p-8 bg-background">
          <div className="max-w-3xl mx-auto">
            <LessonContent content={lessonContent} />
          </div>
        </div>
      }
      right={
        <div className="h-full flex flex-col bg-[#1e1e1e]">
          <Tabs defaultValue="editor" className="flex-1 flex flex-col">
            <TabsList className="w-full justify-start rounded-none border-b bg-[#252526] px-4">
              <TabsTrigger value="editor" className="data-[state=active]:bg-[#1e1e1e]">
                Editor
              </TabsTrigger>
              <TabsTrigger value="terminal" className="data-[state=active]:bg-[#1e1e1e]">
                Terminal
              </TabsTrigger>
            </TabsList>
            <TabsContent value="editor" className="flex-1 m-0 p-0">
              <div className="h-full">
                <CodeEditor
                  value={code}
                  onChange={(value) => setCode(value || "")}
                  language="python"
                />
              </div>
            </TabsContent>
            <TabsContent value="terminal" className="flex-1 m-0 p-0">
              <Terminal
                output={terminalOutput}
                isRunning={isRunning}
                onRun={handleRun}
                onStop={handleStop}
              />
            </TabsContent>
          </Tabs>
        </div>
      }
      defaultLeftSize={50}
    />
  )
}
