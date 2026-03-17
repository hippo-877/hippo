import { LayoutDashboard, Bot, Workflow, ListChecks, FolderKanban, ShieldCheck, FileText, Settings, Library } from 'lucide-react'
import logoWordmark from '../../assets/logo-wordmark.svg'
import { cn } from '../../lib/utils'

const items = [
  ['dashboard', 'Dashboard', LayoutDashboard],
  ['workspace', 'Agents', Bot],
  ['skills', 'Skill Library', Library],
  ['dashboard', 'Workflows', Workflow],
  ['result', 'Tasks', ListChecks],
  ['assets', 'Assets', FolderKanban],
  ['review', 'Review Queue', ShieldCheck],
  ['assets', 'Reports', FileText],
  ['dashboard', 'Settings', Settings],
] as const

export function Sidebar({ page, setPage }: { page: string; setPage: (page: string) => void }) {
  return <aside className="w-64 border-r bg-white p-3">
    <div className='mb-3 rounded-lg bg-slate-900 p-2.5'>
      <img src={logoWordmark} alt='Platform Logo' className='h-auto w-full rounded object-contain' />
      <div className='mt-2 px-1'>
        <p className='text-xs font-semibold uppercase tracking-wide text-slate-200'>SoC AI Platform</p>
        <p className='text-[11px] text-slate-400'>Platform Workspace</p>
      </div>
    </div>
    {items.map(([key, label, Icon]) => (
      <button key={label} onClick={() => setPage(key)} className={cn('mb-1 flex w-full items-center gap-3 rounded-md px-3 py-2 text-left text-sm hover:bg-slate-100', page===key && 'bg-slate-900 text-white hover:bg-slate-900')}><Icon className='h-4 w-4' />{label}</button>
    ))}
  </aside>
}
