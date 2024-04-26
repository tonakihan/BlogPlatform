import type { FC } from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "../components/Router";
//import Footer from "../components/Footer";
import Header from "../components/Header";
import { useCheckIsAuth } from "../hooks/useCheckIsAuth";

const App: FC = () => {
  useCheckIsAuth();

  return (
    <div id="app">
      <BrowserRouter>
        <Header/>
        <main>
          <Router/>
        </main>
        {/*<Footer/>*/}
      </BrowserRouter>
    </div>
  )
}

export default App;