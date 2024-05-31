import './App.css';
import Routers from './Router/Routers';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <>
    <Toaster position="top-center" reverseOrder={false} />
<Routers/>
</>
  );
}

export default App;
