import { useMemo, useState } from 'react'
import { Button } from '../components/ui/button'
import { Card, CardContent } from '../components/ui/card'
import { Input } from '../components/ui/input'
import { Select } from '../components/ui/select'
import { skills } from '../data/skills'
import { SkillMetricCards } from '../components/skill-library/SkillMetricCards'
import { SkillCatalogTable } from '../components/skill-library/SkillCatalogTable'
import { SkillDetailPanel } from '../components/skill-library/SkillDetailPanel'

export function SkillLibraryPage() {
  const [selectedId, setSelectedId] = useState(skills[0].id)
  const [category, setCategory] = useState('All')
  const [status, setStatus] = useState('All')
  const [search, setSearch] = useState('')

  const filtered = useMemo(() => skills.filter((skill) => {
    const catOk = category === 'All' || skill.category === category
    const statusOk = status === 'All' || skill.status === status
    const keyword = search.trim().toLowerCase()
    const searchOk = !keyword || skill.name.toLowerCase().includes(keyword)
    return catOk && statusOk && searchOk
  }), [category, status, search])

  const activeSkill = filtered.find((s) => s.id === selectedId) ?? filtered[0] ?? skills[0]

  const metrics: Array<[string, string | number]> = [
    ['Total Skills', skills.length],
    ['Active Skills', skills.filter((s) => s.status === 'Active').length],
    ['Draft Skills', skills.filter((s) => s.status === 'Draft').length],
    ['Skills Under Review', skills.filter((s) => s.status === 'Review').length],
    ['Agents Using Skills', new Set(skills.flatMap((s) => s.linkedAgents)).size],
    ['Workflow-Linked Skills', skills.filter((s) => s.dependencies.some((d) => d.includes('workflow'))).length],
  ]

  return <div className='space-y-4 p-4'>
    <div className='flex items-start justify-between'>
      <div>
        <h2 className='text-2xl font-semibold'>Skill Library</h2>
        <p className='text-sm text-slate-600'>Reusable capabilities for parsing, extraction, comparison, risk detection, draft generation and flow integration.</p>
      </div>
      <div className='flex gap-2'>
        <Button>New Skill</Button>
        <Button variant='outline'>Import Template</Button>
        <Button variant='secondary'>Export Catalog</Button>
      </div>
    </div>

    <SkillMetricCards metrics={metrics} />

    <div className='grid grid-cols-[1fr_420px] gap-3'>
      <Card>
        <CardContent className='space-y-3 pt-4'>
          <div className='grid grid-cols-4 gap-2'>
            <Select value={category} onChange={(e) => setCategory(e.target.value)}>
              {['All', 'Extraction', 'Comparison', 'Risk Detection', 'Draft Generation', 'Log Analysis', 'Integration'].map((v) => <option key={v}>{v}</option>)}
            </Select>
            <Select value={status} onChange={(e) => setStatus(e.target.value)}>
              {['All', 'Active', 'Draft', 'Review', 'Deprecated'].map((v) => <option key={v}>{v}</option>)}
            </Select>
            <Select>
              <option>Linked Agent</option>
              <option>Register Agent</option>
              <option>Doc2Req Agent</option>
              <option>ClockReset Agent</option>
            </Select>
            <Input value={search} onChange={(e) => setSearch(e.target.value)} placeholder='Search Skill' />
          </div>
          <SkillCatalogTable rows={filtered} selectedId={activeSkill.id} onSelect={setSelectedId} />
        </CardContent>
      </Card>
      <SkillDetailPanel skill={activeSkill} />
    </div>
  </div>
}
