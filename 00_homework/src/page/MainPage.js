import Content from './component/Content';
import Menu from './component/Menu';
import Header from './component/Header';
import './style.css'

function MainPage() {


  return (
    <div className="container">
      <Header />
      <Menu />
      <Content />
    </div>
  );
}

export default MainPage;
