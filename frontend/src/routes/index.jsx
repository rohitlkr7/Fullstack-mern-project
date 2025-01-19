import {createBrowserRouter} from 'react-router-dom';
import App from '../App';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Recover from '../pages/Recover';
import AddToCart from '../pages/AddToCart';
import Women from '../pages/Women';
import Men from '../pages/Men';

const router = createBrowserRouter([
    {
        path :"/",
        element : <App/>,
        children :[
            {
                path : "",
                element : <Home/>
            },
            {
                path : "login",
                element : <Login/>
            },
            {
                path : "Register",
                element : <Register/>
            },
            {
                path : "Recover",
                element : <Recover/>
            },
            {
                path : "AddtoCart",
                element : <AddToCart/>
            },
            {
                path : "Women",
                element : <Women/>
            },
            {
                path : "Men",
                element : <Men/>
            }
        ]
    }
])

export default router;