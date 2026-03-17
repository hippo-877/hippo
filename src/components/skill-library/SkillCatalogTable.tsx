import { Table, TBody, TD, TH, THead, TR } from '../ui/table'
import { SkillStatusBadge } from './SkillStatusBadge'
import type { SkillItem } from '../../types/skill'

export function SkillCatalogTable({
  rows,
  selectedId,
  onSelect,
}: {
  rows: SkillItem[]
  selectedId: string
  onSelect: (id: string) => void
}) {
  return <Table>
    <THead><TR>{['Skill Name', 'Category', 'Version', 'Status', 'Linked Agents', 'Last Updated'].map((h) => <TH key={h}>{h}</TH>)}</TR></THead>
    <TBody>
      {rows.map((s) => (
        <TR key={s.id} onClick={() => onSelect(s.id)} className={selectedId === s.id ? 'bg-slate-50' : 'cursor-pointer'}>
          <TD className='font-medium'>{s.name}</TD>
          <TD>{s.category}</TD>
          <TD>{s.version}</TD>
          <TD><SkillStatusBadge status={s.status} /></TD>
          <TD>{s.linkedAgents.length}</TD>
          <TD>{s.updatedAt}</TD>
        </TR>
      ))}
    </TBody>
  </Table>
}
