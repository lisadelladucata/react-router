import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePages from "./pages/HomePage";
import PageNotFound from "./pages/PageNotFound";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePages />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
