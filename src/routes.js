import {createBrowserRouter} from "react-router-dom";
import { routes as brochureRoutes } from "./brochure/routes";


const router = createBrowserRouter([
  ...brochureRoutes,
]);


export default router;