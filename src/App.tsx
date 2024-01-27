import ToDo from "./components/ToDo";
import CoinTracker from "./components/CoinTracker";
import Home from "./routes/Home";
import {BrowserRouter, createBrowserRouter, Route, Routes} from "react-router-dom";
import Detail from "./routes/Detail";

function App() {
  return (
    <div>
      {/*<ToDo/>*/}
      {/*/!*<CoinTracker/>*!/*/}
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/movie/:id" element={<Detail/>}/>
          <Route path="/" element={<Home/>}/>
          <Route path="*" element={
            <main>
              <p>404 Page Not Found</p>
            </main>
          }/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
