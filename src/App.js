import TopBanner from './components/TopBanner/TopBanner'
import Service from './components/Service/Service'
import TopNaver from './components/TopNaver/TopNaver'
import Analysis from './components/Analysis/Analysis'
import Summary from './components/Summary/Summary'
import RecentProjects from './components/RecentProject/RecentProjects'
import Courses from './components/Courses/Courses'

function App() {
  return (
    <div>
      <TopNaver />
      <TopBanner />
      <Service />
      <Analysis />
      <Summary />
      <RecentProjects />
      <Courses />
    </div>
  );
}

export default App;
