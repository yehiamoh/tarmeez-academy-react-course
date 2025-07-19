import "./App.css";
import Header from "./components/HeaderComponent/Header";
import SideMenu from "./components/SideMenuComponent/SideMenu";
import Card from "./components/CardComponent/Card";
function App() {
  return (
    <div>
      <Header />
      <div className="pageBody">
        <div className="postsSection">
          <Card
            title="20"
            subTitle="اكاديميه ترميز"
            content="اكاديميه مخصصه لتعليم البرمجه"
          />
          <Card title="hello world" content="This is hello world article" />
          <Card title="Post 3" content="This is The Body of post 3" />
        </div>
        <div className="sideMenuSection">
          <SideMenu />
        </div>
      </div>
    </div>
  );
}

export default App;
