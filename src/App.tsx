import { Routes, Route } from "react-router-dom";
import ClientLayout from "./Layout/ClientLayout";
import routes from "./Config/routes";
import Home from "./Pages/Home";
import DetailProduct from "./Pages/DetailProduct";

function App() {
  return (
    <>
      <Routes>
        <Route path={routes.home} element={<ClientLayout />}>
          <Route index element={<Home />} />
          <Route path={routes.detail} element={<DetailProduct />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
