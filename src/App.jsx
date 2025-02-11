import { BrowserRouter, Route, Routes } from "react-router-dom";

//Layout
import DefaultLayout from "./Layout/DefaultLayout";
import AuthLayout from "./Layout/AuthLayout";

//pages
import HomePages from "./pages/HomePage";
import AboutUs from "./pages/AboutUs";
import Contacts from "./pages/Contacts";
import PageNotFound from "./pages/PageNotFound";
import Login from "./pages/admin/Login";
import DashboardLayout from "./Layout/DashboardLayout";
import Index from "./pages/admin/Index";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<HomePages />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contacts" element={<Contacts />} />
        </Route>
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
        </Route>
        <Route path="/admin" element={<DashboardLayout />}>
          <Route index element={<Index />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
