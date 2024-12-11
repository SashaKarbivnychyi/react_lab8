import './App.css';

import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import SideBar from './components/SideBar/SideBar';

function App() {
  return (
    <div className="App">
      <Header name="website (Header)"></Header>
      <SideBar name="SideBar"></SideBar>
      <Content name="Content">
        <h1>Hello</h1>
      </Content>
      <Footer name="Footer"></Footer>
    </div>
  );
}

export default App;
