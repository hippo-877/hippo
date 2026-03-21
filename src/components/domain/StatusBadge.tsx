import { Badge } from '../ui/badge'

const map: Record<string, string> = {
  Pending: 'bg-amber-50 text-amber-700 border-amber-200',
  'Needs Review': 'bg-amber-50 text-amber-700 border-amber-200',
  Draft: 'bg-blue-50 text-blue-700 border-blue-200',
  Approved: 'bg-green-50 text-green-700 border-green-200',
  Failed: 'bg-red-50 text-red-700 border-red-200',
  Escalated: 'bg-red-50 text-red-700 border-red-200',
  'In Review': 'bg-indigo-50 text-indigo-700 border-indigo-200',
}

export function StatusBadge({ value }: { value: string }) {
  return <Badge className={map[value] ?? 'bg-slate-50 text-slate-700 border-slate-200'}>{value}</Badge>
}
