import {createBrowserRouter} from "react-router-dom";
import { routes as brochureRoutes } from "./brochure/routes";
import { routes as workoutRoutes } from "./workouts/routes";


const router = createBrowserRouter([
  ...brochureRoutes,
  ...workoutRoutes,
]);


export default router;