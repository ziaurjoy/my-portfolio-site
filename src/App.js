
import Route from "./Route/AppRoute";
import {BrowserRouter} from 'react-router-dom'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Route />
      </BrowserRouter>
    </div>
  );
}

export default App;
