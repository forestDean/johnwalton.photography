import { useRoutes } from "react-router-dom";
import routesList from "./routesList";
import Home from '../../pages/Home/Home';
import About from '../../pages/About/About';
import EppingForest from '../../pages/EppingForest/EppingForest';
import Contact from '../../pages/Contact/Contact'
import Prints from '../../pages/Prints/Prints'


const Router = () => {
let element = useRoutes([
    // routesList.map((item, index) => (
    //     `{
    //     key: `{index}`,
    //     path:`{item.path}`,
    //     element:<`{item.element}`/>
    //     }`
    //   ))
    {
        path: "/", 
        element: <Home />
    },
    {
        path: "about", 
        element: <About /> 
    },
    {
        path: "epping-forest", 
        element: <EppingForest /> 
    },
    {
        path: "prints", 
        element: <Prints />
    },
    {
        path: "contact", 
        element: <Contact />
    }
 ]);
// console.log(routesList);
return element;
}
 
export default Router