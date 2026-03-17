import { LayoutDashboard, Bot, Workflow, ListChecks, FolderKanban, ShieldCheck, FileText, Settings } from 'lucide-react'
import { cn } from '../../lib/utils'

const items = [
  ['dashboard', 'Dashboard', LayoutDashboard],
  ['workspace', 'Agents', Bot],
  ['dashboard', 'Workflows', Workflow],
  ['result', 'Tasks', ListChecks],
  ['assets', 'Assets', FolderKanban],
  ['review', 'Review Queue', ShieldCheck],
  ['assets', 'Reports', FileText],
  ['dashboard', 'Settings', Settings],
] as const

export function Sidebar({ page, setPage }: { page: string; setPage: (page: string) => void }) {
  return <aside className="w-64 border-r bg-white p-3">{items.map(([key, label, Icon]) => (
    <button key={label} onClick={() => setPage(key)} className={cn('mb-1 flex w-full items-center gap-3 rounded-md px-3 py-2 text-left text-sm hover:bg-slate-100', page===key && 'bg-slate-900 text-white hover:bg-slate-900')}><Icon className='h-4 w-4' />{label}</button>
  ))}</aside>
}
