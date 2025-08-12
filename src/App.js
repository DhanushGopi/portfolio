import './App.css';
import {createHashRouter, RouterProvider} from 'react-router-dom';
import { pathsandelements } from './config/routes';
function App() {
  
  const navs = createHashRouter(pathsandelements);
  return (
    <div className="App">
      <RouterProvider router={navs}/>
    </div>
  );
}

export default App;
