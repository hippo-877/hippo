import { useState } from 'react'
import { Sidebar } from './components/layout/Sidebar'
import { TopBar } from './components/layout/TopBar'
import { DashboardPage } from './pages/DashboardPage'
import { RegisterWorkspacePage } from './pages/RegisterWorkspacePage'
import { RegisterTaskResultPage } from './pages/RegisterTaskResultPage'
import { ReviewQueuePage } from './pages/ReviewQueuePage'
import { AssetsReportsPage } from './pages/AssetsReportsPage'
import { SkillLibraryPage } from './pages/SkillLibraryPage'

export default function App() {
  const [page, setPage] = useState('dashboard')

  return <div className='h-screen overflow-hidden'>
    <TopBar />
    <div className='flex h-[calc(100vh-56px)]'>
      <Sidebar page={page} setPage={setPage} />
      <main className='flex-1 overflow-auto'>
        {page === 'dashboard' && <DashboardPage gotoWorkspace={() => setPage('workspace')} gotoReview={() => setPage('review')} />}
        {page === 'workspace' && <RegisterWorkspacePage openResult={() => setPage('result')} />}
        {page === 'skills' && <SkillLibraryPage />}
        {page === 'result' && <RegisterTaskResultPage />}
        {page === 'review' && <ReviewQueuePage />}
        {page === 'assets' && <AssetsReportsPage />}
      </main>
    </div>
  </div>
}
