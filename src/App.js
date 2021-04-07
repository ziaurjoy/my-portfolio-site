import TopBanner from './components/TopBanner/TopBanner'
import Service from './components/Service/Service'
import TopNaver from './components/TopNaver/TopNaver'
import Analysis from './components/Analysis/Analysis'
import Summary from './components/Summary/Summary'
import RecentProjects from './components/RecentProject/RecentProjects'

function App() {
  return (
    <div>
      <TopNaver />
      <TopBanner />
      <Service />
      <Analysis />
      <Summary />
      <RecentProjects />
    </div>
  );
}

export default App;
