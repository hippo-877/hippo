import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'

export function SkillMetricCards({ metrics }: { metrics: Array<[string, string | number]> }) {
  return <div className='grid grid-cols-6 gap-3'>
    {metrics.map(([title, value]) => (
      <Card key={title}>
        <CardHeader><CardTitle>{title}</CardTitle></CardHeader>
        <CardContent><div className='text-2xl font-semibold'>{value}</div></CardContent>
      </Card>
    ))}
  </div>
}
