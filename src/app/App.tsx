import type { FC } from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "../components/Router";
//import Footer from "../components/Footer";
import Header from "../components/Header";

const App: FC = () => {
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