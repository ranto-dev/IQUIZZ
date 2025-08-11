import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import QuizzBody from "./pages/Quizz";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/quizz-start",
      element: <QuizzBody />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}
