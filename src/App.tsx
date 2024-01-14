import BackgroundPattern from "./components/BackgroundPattern";
import Menu from "./components/Menu";

const App = () => {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex-1"></div>
      <BackgroundPattern />
      <Menu />
    </div>
  );
};

export default App;
