import './app.css';
import Body from './Components/Body';
import Map from './Components/Map';
import { InputDataProvider } from './Store/InputDataContext';

function App() {
  return (
    <div className="App">
      <InputDataProvider>
        <Body />
        <Map />
      </InputDataProvider>
    </div>
  );
}

export default App;
