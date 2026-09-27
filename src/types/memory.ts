export type MemorySize = 'normal' | 'wide' | 'tall' | 'big'

export interface MemoryContent {
  title?: string
  date?: string
  text?: string
  size?: MemorySize
}

export type MemoryContentMap = Record<string, MemoryContent>
