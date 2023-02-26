import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Component/Home/Home';
import { Provider } from 'react-redux';
import Countertool from './Component/ReduxToolkit/Countertool';
import storeeasythunk from './Component/ReduxToolkit/Store/Storetool';

function App() {
  return (
    <div>
      <Home />
      <Provider store={storeeasythunk}>
        <Countertool />
      </Provider>
    </div>
  );
}

export default App;
