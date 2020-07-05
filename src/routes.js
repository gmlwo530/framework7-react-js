import HomePage from "./pages/HomePage";
import DetailPage from "./pages/DetailPage";
import NewPopupPage from "./pages/NewPopupPage";

const routes = [
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "/detail/:id/",
    component: DetailPage,
  },
  {
    path: "/new/",
    popup: {
      component: NewPopupPage,
    },
  },
];

export default routes;
