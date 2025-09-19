import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Home from "./pages/Home";
import DoaList from "./pages/DoaList";
import DoaDetail from "./pages/DoaDetail";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function Layout() {
  return (
    <div className="min-h-dvh flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/doa", element: <DoaList /> },
      { path: "/doa/:id", element: <DoaDetail /> },
    ],
  },
]);

export default function App() {
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    AOS.init({
      once: true, // animasi hanya sekali
      duration: 600,
      easing: "ease-out",
      offset: 100,
    });

    // refresh saat semua asset sudah loaded
    const onLoad = () => AOS.refresh();
    window.addEventListener("load", onLoad);
    return () => window.removeEventListener("load", onLoad);
  }, []);

  return <RouterProvider router={router} />;
}
