import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs'
import { Table, TBody, TD, TH, THead, TR } from '../components/ui/table'
import { differences, evidenceMap, highRiskFields } from '../data/mockData'
import { SeverityBadge } from '../components/domain/SeverityBadge'
import { StatusBadge } from '../components/domain/StatusBadge'

const summary = [['Total Registers','43'],['Total Fields','211'],['Differences Found','12'],['High-Risk Fields','5'],['Parse Unknown','3'],['Review Status','Pending']]

export function RegisterTaskResultPage() {
  const [selected, setSelected] = useState(differences[0].type)
  const evidence = evidenceMap[selected] ?? evidenceMap.reset_value_mismatch

  return <div className='grid h-full grid-cols-[1fr_320px] gap-3 p-4'>
    <div className='space-y-3 overflow-auto'>
      <Card><CardContent className='grid grid-cols-3 gap-3 pt-4 text-sm'>
        <div><div className='text-slate-500'>Task Name</div><div className='font-medium'>uart_ctrl spec-rtl consistency</div></div>
        <div><div className='text-slate-500'>Source files</div><div>uart_ctrl_spec.xlsx, uart_ctrl.sv</div></div>
        <div><div className='text-slate-500'>Run mode</div><div>Full Pipeline</div></div>
        <div><div className='text-slate-500'>Status</div><StatusBadge value='Pending' /></div>
        <div><div className='text-slate-500'>Reviewer</div><div>alice</div></div>
        <div><div className='text-slate-500'>Last run</div><div>2026-03-17 09:42</div></div>
      </CardContent></Card>
      <Tabs defaultValue='summary'>
        <TabsList><TabsTrigger value='summary'>Summary</TabsTrigger><TabsTrigger value='registers'>Extracted Registers</TabsTrigger><TabsTrigger value='diff'>Differences</TabsTrigger><TabsTrigger value='risk'>High-Risk Fields</TabsTrigger></TabsList>
        <TabsContent value='summary' className='mt-3 space-y-3'>
          <div className='grid grid-cols-6 gap-2'>{summary.map(([k,v])=><Card key={k}><CardContent className='pt-4'><div className='text-xs text-slate-500'>{k}</div><div className='text-xl font-semibold'>{v}</div></CardContent></Card>)}</div>
          <Card><CardHeader><CardTitle>Task Summary</CardTitle></CardHeader><CardContent className='text-sm text-slate-700'>This task compares spec table and RTL definitions for uart_ctrl and identifies mismatches and high-risk fields.</CardContent></Card>
        </TabsContent>
        <TabsContent value='registers' className='mt-3'>
          <Card><CardContent className='pt-4'><Table><THead><TR>{['Register','Offset','Field','Bit Range','Access','Reset','Source','Confidence'].map(h=><TH key={h}>{h}</TH>)}</TR></THead><TBody>
            <TR><TD>CTRL</TD><TD>0x00</TD><TD>EN</TD><TD>[0]</TD><TD>RW</TD><TD>0x1</TD><TD>RTL</TD><TD>0.98</TD></TR>
            <TR><TD>STAT</TD><TD>0x04</TD><TD>IRQ_STICKY</TD><TD>[3]</TD><TD>RW1C</TD><TD>0x0</TD><TD>RTL</TD><TD>0.88</TD></TR>
          </TBody></Table></CardContent></Card>
        </TabsContent>
        <TabsContent value='diff' className='mt-3'>
          <Card><CardContent className='pt-4'><Table><THead><TR>{['Difference Type','Object Path','Spec','RTL','Severity','Source Ref','Reviewer Decision','Comment'].map(h=><TH key={h}>{h}</TH>)}</TR></THead><TBody>
            {differences.map(d=><TR key={d.path} className='cursor-pointer' onClick={()=>setSelected(d.type)}><TD className='font-medium'>{d.type}</TD><TD>{d.path}</TD><TD>{d.spec}</TD><TD>{d.rtl}</TD><TD><SeverityBadge value={d.severity} /></TD><TD>{d.ref}</TD><TD>{d.decision}</TD><TD>{d.comment || '-'}</TD></TR>)}
          </TBody></Table></CardContent></Card>
        </TabsContent>
        <TabsContent value='risk' className='mt-3'>
          <Card><CardContent className='pt-4'><Table><THead><TR>{['Register','Field','Risk Category','Matched Rule','Explanation','Suggested Action'].map(h=><TH key={h}>{h}</TH>)}</TR></THead><TBody>
            {highRiskFields.map((r)=><TR key={r[1]}><TD>{r[0]}</TD><TD>{r[1]}</TD><TD>{r[2]}</TD><TD>{r[3]}</TD><TD>{r[4]}</TD><TD>{r[5]}</TD></TR>)}
          </TBody></Table></CardContent></Card>
        </TabsContent>
      </Tabs>
    </div>
    <Card className='h-fit sticky top-4'>
      <CardHeader><CardTitle>Evidence / Context Panel</CardTitle></CardHeader>
      <CardContent className='space-y-3 text-sm'>
        <div><div className='font-medium'>Source Snippet</div><div className='mt-1 rounded border bg-slate-50 p-2 font-mono text-xs'>{evidence.snippet}</div></div>
        <div><div className='font-medium'>Rule Hits</div><ul className='mt-1 list-disc pl-5'>{evidence.rules.map(r=><li key={r}>{r}</li>)}</ul></div>
        <div><div className='font-medium'>AI Reasoning</div><p className='text-slate-700'>{evidence.reasoning}</p></div>
        <div><div className='font-medium'>Parser Notes</div><p className='text-slate-700'>{evidence.parser}</p></div>
        <div><div className='font-medium'>Confidence</div><p>{evidence.confidence}</p></div>
      </CardContent>
    </Card>
  </div>
}
