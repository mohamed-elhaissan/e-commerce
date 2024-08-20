import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./componants/pages/Home";

import Header from "./componants/header";
import Collection from "./componants/pages/collection";
import New from "./componants/pages/new";
import NotFound from "./componants/pages/NotFound";

function App() {
  return (
    <>
      <div className="px-8">
       
        <Header />
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/new" element={<New />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
       
      </div>
    </>
  );
}

export default App;
