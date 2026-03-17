import { Badge } from '../ui/badge'

const styleMap: Record<string, string> = {
  Active: 'bg-green-50 text-green-700 border-green-200',
  Draft: 'bg-blue-50 text-blue-700 border-blue-200',
  Review: 'bg-amber-50 text-amber-700 border-amber-200',
  Deprecated: 'bg-slate-100 text-slate-600 border-slate-300',
}

export function SkillStatusBadge({ status }: { status: string }) {
  return <Badge className={styleMap[status] ?? 'bg-slate-50 text-slate-700 border-slate-200'}>{status}</Badge>
}
