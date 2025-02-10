import { BrowserRouter, Route, Routes } from "react-router-dom";

//Layout
import DefaultLayout from "./Layout/DefaultLayout";

//pages
import HomePages from "./pages/HomePage";
import AboutUs from "./pages/AboutUs";
import Contacts from "./pages/Contacts";
import PageNotFound from "./pages/PageNotFound";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<HomePages />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contacts" element={<Contacts />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
