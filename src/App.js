import { createBrowserRouter, Route, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home";
import ListsGenerator from "./pages/ListsGenerator";
import SubscribedTicketsCreate from "./components/SubscribedLists/SubscribedTicketsCreate";
import SubscribedTicketsEdit from "./components/SubscribedLists/SubscribedTicketsEdit";
import SubscribedTicketsCreateV2 from "./components/SubscribedLists/SubscribedTicketsCreateV2"

import RootLayout from "./pages/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/lists-generator", element: <ListsGenerator /> },
      { path: "/lists-generator/create", element: <SubscribedTicketsCreateV2 /> },
      { path: "/edit/:id", element: <SubscribedTicketsEdit /> },
    ]
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
