import { Dashboard, CustomerOrder } from "./index";
import { Home } from "./Home/Home";

export const appRoutes = [
  { element: Dashboard, path: "Dashboard" },
  { element: CustomerOrder, path: "Orders" },
  { element: Home, path: "/" },
];
