
import Home from "./Pages/HomePage";
import PortPolioPages from "./Pages/PortPolioPages";
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
