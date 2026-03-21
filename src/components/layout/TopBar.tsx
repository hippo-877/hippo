import { Search } from 'lucide-react'
import { Input } from '../ui/input'
import { Badge } from '../ui/badge'

export function TopBar() {
  return <header className="flex h-14 items-center justify-between border-b bg-white px-4">
    <div className='flex items-center gap-4 text-sm'>
      <h1 className='text-base font-semibold'>SoC AI Platform</h1>
      <Badge className='border-slate-200 bg-slate-50'>Repo: soc-main</Badge>
      <Badge className='border-slate-200 bg-slate-50'>Branch: feature/register-agent</Badge>
    </div>
    <div className='flex items-center gap-3'>
      <div className='relative w-80'><Search className='absolute left-3 top-2.5 h-4 w-4 text-slate-400'/><Input placeholder='Global search (mock)' className='pl-9' /></div>
      <Badge className='border-amber-200 bg-amber-50 text-amber-700'>Mock Mode</Badge>
      <div className='flex h-8 w-8 items-center justify-center rounded-full bg-slate-200 text-xs font-semibold'>U</div>
    </div>
  </header>
}
