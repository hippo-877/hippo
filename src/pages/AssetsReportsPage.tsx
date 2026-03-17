import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs'
import { assets } from '../data/mockData'
import { Table, TBody, TD, TH, THead, TR } from '../components/ui/table'
import { StatusBadge } from '../components/domain/StatusBadge'

export function AssetsReportsPage() {
  return <div className='space-y-3 p-4'>
    <h2 className='text-2xl font-semibold'>Assets & Reports</h2>
    <Tabs defaultValue='draft'>
      <TabsList><TabsTrigger value='draft'>Draft Artifacts</TabsTrigger><TabsTrigger value='approved'>Approved Reports</TabsTrigger><TabsTrigger value='schemas'>Schemas</TabsTrigger><TabsTrigger value='templates'>Templates</TabsTrigger></TabsList>
      <TabsContent value='draft' className='mt-3'><AssetTable /></TabsContent>
      <TabsContent value='approved' className='mt-3'><AssetTable /></TabsContent>
      <TabsContent value='schemas' className='mt-3'><AssetTable /></TabsContent>
      <TabsContent value='templates' className='mt-3'><AssetTable /></TabsContent>
    </Tabs>
  </div>
}

function AssetTable() {
  return <Card><CardHeader><CardTitle>Repository Assets</CardTitle></CardHeader><CardContent><Table><THead><TR>{['Name','Type','Agent','Version','Status','Updated At','Location'].map(h=><TH key={h}>{h}</TH>)}</TR></THead><TBody>
    {assets.map(a=><TR key={a[0]}><TD className='font-medium'>{a[0]}</TD><TD>{a[1]}</TD><TD>{a[2]}</TD><TD>{a[3]}</TD><TD><StatusBadge value={a[4]} /></TD><TD>{a[5]}</TD><TD>{a[6]}</TD></TR>)}
  </TBody></Table></CardContent></Card>
}
