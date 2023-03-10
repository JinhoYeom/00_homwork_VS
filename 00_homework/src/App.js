import Content from './component/Content';
import Menu from './component/Menu';
import Header from './component/Header';
import './style.css'

function App() {


  return (
    <div className="container">
      <Header />
      <Menu />
      <Content />
    </div>
  );
}

export default App;
