import "./App.css";
import Header from "./components/HeaderComponent/Header";
import SideMenu from "./components/SideMenuComponent/SideMenu";
import Card from "./components/CardComponent/Card";
function App() {
  const CardsList = [
    { id: 1, title: "hello world", content: "This is hello world article" },
    {
      id: 2,
      title: "Post 55",
      subTitle: "ooooo",
      content: "This is the body of post 55",
    },
    {
      id: 3,
      title: "Post 15",
      subTitle: "ooo3333",
      content: "This is the body of post 15",
    },
    {
      id: 4,
      title: "اكاديميه ترميز",
      subTitle: "20",
      content: "اكاديميه مخصصه لتعليم البرمجه",
    },
  ];
  return (
    <div>
      <Header />
      <div className="pageBody">
        <div className="postsSection">
          {CardsList.map((card) => (
            <Card
              key={card.id}
              title={card.title}
              subTitle={card.subTitle}
              content={card.content}
            />
          ))}
        </div>
        <div className="sideMenuSection">
          <SideMenu />
        </div>
      </div>
    </div>
  );
}

export default App;
