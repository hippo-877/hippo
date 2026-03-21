import { Badge } from '../ui/badge'

export function SeverityBadge({ value }: { value: string }) {
  const v = value.toLowerCase()
  const cls = v.includes('high') ? 'bg-red-50 text-red-700 border-red-200' : v.includes('medium') || v.includes('warn') ? 'bg-amber-50 text-amber-700 border-amber-200' : 'bg-blue-50 text-blue-700 border-blue-200'
  return <Badge className={cls}>{value}</Badge>
}
