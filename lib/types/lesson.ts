// Lesson and Exercise Types

export interface QuizExercise {
  id: string
  type: "quiz"
  title: string
  description: string
  options: string[]
  correctAnswer: number
  xp: number
  points?: number
}

export interface TypingExercise {
  id: string
  type: "typing"
  title: string
  description: string
  targetCode: string
  xp: number
  points?: number
}

export interface TestCase {
  input: string
  expectedOutput: string
  expectedInputPrompt?: string  // Optional: For validating input() prompt text
}

export interface DebugExercise {
  id: string
  type: "debug"
  title: string
  description: string
  brokenCode: string
  starterCode: string
  testCases: TestCase[]
  solution: string
  xp: number
  points?: number
}

export interface CodeExercise {
  id: string
  type: "code"
  title: string
  description: string
  starterCode: string
  solution: string
  testCases: TestCase[]
  xp: number
  points: number
}

export type Exercise = QuizExercise | TypingExercise | DebugExercise | CodeExercise

export interface Lesson {
  lesson_id: string
  title: string
  module: string
  duration_minutes: number
  slide_url: string
  objectives: string[]
  description: string
  exercises: Exercise[]
}

export interface ExerciseProgress {
  exerciseId: string
  completed: boolean
  passed: boolean
  attempts: number
  xpEarned: number
}

export interface LessonProgress {
  lessonId: string
  currentExerciseIndex: number
  exerciseProgress: Record<string, ExerciseProgress>
  totalXP: number
  startedAt: Date
  completedAt?: Date
}

// Validation System Types
export type ErrorType =
  | 'SYNTAX_ERROR'
  | 'RUNTIME_ERROR'
  | 'VALIDATION_ERROR'
  | 'INPUT_PROMPT_ERROR'
  | 'TYPE_ERROR'
  | 'NAME_ERROR'
  | 'INDENTATION_ERROR'

export interface ValidationResult {
  passed: boolean
  error?: string
  errorType?: ErrorType
  actualOutput?: string
  expectedOutput?: string
  actualPrompts?: string[]
  expectedPrompts?: string[]
  friendlyMessage?: string  // Pedagogical error message for students
}
