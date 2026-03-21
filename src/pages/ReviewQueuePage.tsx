import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'
import { Select } from '../components/ui/select'
import { Table, TBody, TD, TH, THead, TR } from '../components/ui/table'
import { reviewItems } from '../data/mockData'
import { Button } from '../components/ui/button'
import { SeverityBadge } from '../components/domain/SeverityBadge'
import { StatusBadge } from '../components/domain/StatusBadge'

export function ReviewQueuePage() {
  const [active, setActive] = useState(reviewItems[0])
  return <div className='grid grid-cols-[1fr_340px] gap-3 p-4'>
    <div className='space-y-3'>
      <h2 className='text-2xl font-semibold'>Review Queue</h2>
      <Card><CardContent className='grid grid-cols-5 gap-2 pt-4'>
        {['Type','Severity','Agent','Status','Assignee'].map(f => <Select key={f}><option>{f}</option></Select>)}
      </CardContent></Card>
      <Card><CardContent className='pt-4'><Table><THead><TR>{['Item Title','Agent','Type','Severity','Status','Assignee','Updated At'].map(h=><TH key={h}>{h}</TH>)}</TR></THead><TBody>
        {reviewItems.map((r)=><TR key={r[0]} className='cursor-pointer' onClick={()=>setActive(r)}><TD className='font-medium'>{r[0]}</TD><TD>{r[1]}</TD><TD>{r[2]}</TD><TD><SeverityBadge value={r[3]} /></TD><TD><StatusBadge value={r[4]} /></TD><TD>{r[5]}</TD><TD>{r[6]}</TD></TR>)}
      </TBody></Table></CardContent></Card>
    </div>
    <Card className='h-fit sticky top-4'><CardHeader><CardTitle>Review Detail</CardTitle></CardHeader><CardContent className='space-y-3 text-sm'>
      <div><div className='text-slate-500'>Summary</div><div className='font-medium'>{active[0]}</div></div>
      <div><div className='text-slate-500'>Evidence</div><div className='rounded border bg-slate-50 p-2'>Spec vs RTL mismatch detected with high confidence. Manual review required before merge.</div></div>
      <div><div className='text-slate-500'>Reviewer Comment</div><div className='rounded border p-2'>Please verify reset behavior against warm reset requirement.</div></div>
      <div className='grid grid-cols-2 gap-2'>
        <Button variant='secondary'>Approve</Button><Button variant='outline'>Reject</Button><Button variant='outline'>Escalate</Button><Button>Assign</Button>
      </div>
    </CardContent></Card>
  </div>
}
