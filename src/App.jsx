import About from "./components/About";
import Blogs from "./components/Blogs";
import Connect from "./components/Connect";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./components/Layout";

function AppRouter() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="projects" element={<Projects />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/connect" element={<Connect />} />
        </Route>
      </>
    )
  );
  return <RouterProvider router={router}></RouterProvider>;
}

export default function App() {
  return <AppRouter />;
}
