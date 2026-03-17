import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'
import { Checkbox } from '../components/ui/checkbox'
import { Button } from '../components/ui/button'
import { Table, TBody, TD, TH, THead, TR } from '../components/ui/table'
import { registerTasks } from '../data/mockData'
import { StatusBadge } from '../components/domain/StatusBadge'

export function RegisterWorkspacePage({ openResult }: { openResult: () => void }) {
  return <div className='space-y-4 p-4'>
    <div><h2 className='text-2xl font-semibold'>Register Agent</h2><p className='text-sm text-slate-600'>Register extraction, consistency review and high-risk field analysis</p></div>
    <div className='grid grid-cols-4 gap-3'>
      {['Input Sources','Run Mode','Advanced Options','Output Options'].map((title,i)=><Card key={title}><CardHeader><CardTitle>{title}</CardTitle></CardHeader><CardContent className='space-y-2 text-sm'>
        {(i===0?['Spec Document','Register CSV / Excel','RTL Module','Rule Template']:i===1?['Extract Table','Extract RTL','Compare Spec vs RTL','Identify High-Risk Fields','Full Pipeline']:i===2?['Strict reset match','Access type normalization','Duplicated field check','Parse unknown as warning']:['JSON','Markdown Report','CSV Diff','Testplan Draft']).map(item=><label key={item} className='flex items-center gap-2'><Checkbox defaultChecked={item.includes('Spec') || item.includes('Full') || item.includes('JSON') || item.includes('Strict')}/>{item}</label>)}
      </CardContent></Card>)}
    </div>
    <Card><CardHeader className='flex flex-row items-center justify-between'><CardTitle>Recent Tasks</CardTitle><Button>Run Task (Mock)</Button></CardHeader><CardContent>
      <Table><THead><TR>{['Task Name','Input Files','Run Mode','Status','Differences','High-Risk','Last Updated'].map(h=><TH key={h}>{h}</TH>)}</TR></THead><TBody>
        {registerTasks.map(t=><TR key={t.id} className='cursor-pointer' onClick={openResult}><TD className='font-medium'>{t.name}</TD><TD>{t.files}</TD><TD>{t.mode}</TD><TD><StatusBadge value={t.status}/></TD><TD>{t.diff}</TD><TD>{t.risk}</TD><TD>{t.updated}</TD></TR>)}
      </TBody></Table>
    </CardContent></Card>
  </div>
}
