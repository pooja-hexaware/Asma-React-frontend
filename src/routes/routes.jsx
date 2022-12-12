import NotFound from 'views/sessions/NotFound'
import sessionRoutes from 'views/sessions/SessionRoutes'
import MatxLayout from '../components/MatxLayout/MatxLayout'
import homeRoutes from 'views/home/HomeRoutes'
import Restaurants from 'views/Restaurants/Restaurants'
import Four from 'views/Restaurants/465/four'
import Seven from 'views/Restaurants/772/seven'
import Eight from 'views/Restaurants/891/Eight'
import Nine from 'views/Restaurants/902/Nine'
import { Navigate } from 'react-router-dom'
import Orders from 'views/Orders/Orders'
import Cart from 'views/Cart/Cart'
export const AllPages = () => {
    const all_routes = [
        {
            element: <MatxLayout />,
            children: [...homeRoutes],
        },
        ...sessionRoutes,
        {
            path: '/',
            element: <Navigate to = "Home"/>,
        },
        {
            path: '/cart',
            element: <Cart />
        },
        {
            path: '/stores',
            element: <Restaurants />
        },
        {
            path:'/stores/465',
            element:<Four />
        },
        {
            path:'/stores/772',
            element:<Seven />
        },
        {
            path:'/stores/891',
            element:<Eight />
        },
        {
            path:'/stores/901',
            element:<Nine />
        },
        {
            path: '/orders',
            element: <Orders />
        },
        {
            path: '*',
            element: <NotFound />,
        },
    ]
    return all_routes
}
