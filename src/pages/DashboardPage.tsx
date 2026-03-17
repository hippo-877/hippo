import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'
import { Button } from '../components/ui/button'
import { activities, kpis, riskOverview } from '../data/mockData'

export function DashboardPage({ gotoWorkspace, gotoReview }: { gotoWorkspace: () => void; gotoReview: () => void }) {
  return <div className='space-y-4 p-4'>
    <div>
      <h2 className='text-2xl font-semibold'>SoC AI Platform Dashboard</h2>
      <p className='text-sm text-slate-600'>Engineering review and delivery workspace for SoC lifecycle automation.</p>
    </div>
    <div className='grid grid-cols-6 gap-3'>{kpis.map(([k,v]) => <Card key={k}><CardHeader><CardTitle>{k}</CardTitle></CardHeader><CardContent><div className='text-2xl font-semibold'>{v}</div></CardContent></Card>)}</div>
    <div className='grid grid-cols-3 gap-3'>
      <Card className='col-span-2'><CardHeader><CardTitle>Recent Activities</CardTitle></CardHeader><CardContent><ul className='space-y-2 text-sm'>{activities.map(a => <li key={a} className='rounded border p-2'>{a}</li>)}</ul></CardContent></Card>
      <Card><CardHeader><CardTitle>Quick Actions</CardTitle></CardHeader><CardContent className='space-y-2'>
        <Button className='w-full justify-start' onClick={gotoWorkspace}>New Register Review</Button>
        <Button variant='outline' className='w-full justify-start'>Import Spec</Button>
        <Button variant='outline' className='w-full justify-start'>Analyze Git Diff</Button>
        <Button variant='secondary' className='w-full justify-start' onClick={gotoReview}>Open Review Queue</Button>
      </CardContent></Card>
    </div>
    <Card><CardHeader><CardTitle>Risk Overview</CardTitle></CardHeader><CardContent><div className='grid grid-cols-6 gap-2'>{riskOverview.map(([k,v]) => <div key={k} className='rounded border bg-slate-50 p-3 text-center'><div className='text-sm text-slate-500 uppercase'>{k}</div><div className='text-xl font-semibold'>{v}</div></div>)}</div></CardContent></Card>
  </div>
}
