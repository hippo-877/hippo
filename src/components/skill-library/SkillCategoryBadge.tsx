import { Badge } from '../ui/badge'

export function SkillCategoryBadge({ category }: { category: string }) {
  return <Badge className='border-indigo-200 bg-indigo-50 text-indigo-700'>{category}</Badge>
}
