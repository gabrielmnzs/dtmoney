import { GlobalStyle } from './styles/global';

import Header from './Components/Header';
import Dashboard from './Components/Dashboard';

export function App() {
  return (
    <div className="App">
      <Header />
      <Dashboard />
      <GlobalStyle />
    </div>
  );
}
