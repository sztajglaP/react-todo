import Header from "./components/Header";
import Main from "./components/Main";
import Menu from "./components/Menu";

function App() {
  return (
    <div className="App">
      <Header/>
        <div className="wrapper">
          <Menu/>
          <Main/>
        </div>
    </div>
  );
}

export default App;
