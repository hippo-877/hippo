export type SkillStatus = 'Active' | 'Draft' | 'Review' | 'Deprecated'

export type SkillCategory =
  | 'Extraction'
  | 'Comparison'
  | 'Risk Detection'
  | 'Draft Generation'
  | 'Log Analysis'
  | 'Integration'

export interface SkillQuality {
  unitCoverage: string
  goldenSamples: number
  mockPassRate: string
  needsReview: boolean
}

export interface SkillItem {
  id: string
  name: string
  category: SkillCategory
  version: string
  status: SkillStatus
  owner: string
  description: string
  inputSchema: string
  outputSchema: string
  linkedAgents: string[]
  rules: string[]
  dependencies: string[]
  updatedAt: string
  reviewRequired: boolean
  quality: SkillQuality
  exampleUseCases: string[]
}
