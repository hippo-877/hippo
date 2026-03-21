import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Separator } from '../ui/separator'
import { SkillCategoryBadge } from './SkillCategoryBadge'
import { SkillStatusBadge } from './SkillStatusBadge'
import type { SkillItem } from '../../types/skill'

export function SkillDetailPanel({ skill }: { skill: SkillItem }) {
  return <div className='space-y-3'>
    <Card>
      <CardHeader><CardTitle>Skill Overview</CardTitle></CardHeader>
      <CardContent className='space-y-2 text-sm'>
        <div className='font-semibold'>{skill.name}</div>
        <div className='flex gap-2'><SkillCategoryBadge category={skill.category} /><SkillStatusBadge status={skill.status} /></div>
        <div className='grid grid-cols-2 gap-2 text-slate-600'>
          <div>Version: {skill.version}</div><div>Owner: {skill.owner}</div>
          <div>Last Updated: {skill.updatedAt}</div><div>Review Required: {skill.reviewRequired ? 'Yes' : 'No'}</div>
        </div>
      </CardContent>
    </Card>

    <Card>
      <CardHeader><CardTitle>Description</CardTitle></CardHeader>
      <CardContent className='text-sm text-slate-700'>{skill.description}</CardContent>
    </Card>

    <Card>
      <CardHeader><CardTitle>Input / Output Contract</CardTitle></CardHeader>
      <CardContent className='space-y-2 text-sm'>
        <div><span className='font-medium'>Input Schema:</span> {skill.inputSchema}</div>
        <div><span className='font-medium'>Output Schema:</span> {skill.outputSchema}</div>
        <div><span className='font-medium'>Dependencies:</span> {skill.dependencies.join(', ')}</div>
      </CardContent>
    </Card>

    <Card>
      <CardHeader><CardTitle>Linked Agents</CardTitle></CardHeader>
      <CardContent className='text-sm'><ul className='list-disc space-y-1 pl-5'>{skill.linkedAgents.map((a) => <li key={a}>{a}</li>)}</ul></CardContent>
    </Card>

    <Card>
      <CardHeader><CardTitle>Example Use Cases</CardTitle></CardHeader>
      <CardContent className='text-sm'><ul className='list-disc space-y-1 pl-5'>{skill.exampleUseCases.map((c) => <li key={c}>{c}</li>)}</ul></CardContent>
    </Card>

    <Card>
      <CardHeader><CardTitle>Quality / Validation</CardTitle></CardHeader>
      <CardContent className='space-y-1 text-sm'>
        <div>Unit Test Coverage: {skill.quality.unitCoverage}</div>
        <div>Golden Samples: {skill.quality.goldenSamples}</div>
        <div>Mock Pass Rate: {skill.quality.mockPassRate}</div>
        <div>Needs Review: {skill.quality.needsReview ? 'Yes' : 'No'}</div>
      </CardContent>
    </Card>

    <Card>
      <CardHeader><CardTitle>Rules / Templates</CardTitle></CardHeader>
      <CardContent className='text-sm'><ul className='list-disc space-y-1 pl-5'>{skill.rules.map((r) => <li key={r}>{r}</li>)}</ul></CardContent>
    </Card>

    <Card>
      <CardHeader><CardTitle>Execution Preview</CardTitle></CardHeader>
      <CardContent className='text-sm text-slate-700'>
        This skill is used in Register Agent workflow. Dependency chain: Parser Layer → Skill Library Layer → Agent Layer → Workflow/Orchestrator Layer.
        <Separator className='my-3' />
        Related assets: register_review_schema_v0.1, uart_ctrl_register_consistency_report_v0.1.md
      </CardContent>
    </Card>
  </div>
}
