import { Blogs } from "../pages/Blogs";
import { Home } from "../pages/Home";
import { PlanetCare } from "../pages/PlantCare";
import { Shop } from "../pages/Shop";

export const data = [
    {
        id: 1,
        title: 'Home',
        path: '/',
        element: <Home />,
        child: [],
        hidden: false,
        isPrivate: true,
    },
    {
        id: 2,
        title: 'Shop',
        path: '/shop',
        element: <Shop />,
        child: [],
        hidden: false,
        isPrivate: true,
    },
    {
        id: 3,
        title: 'Planet Care',
        path: '/planet-care',
        element: <PlanetCare />,
        child: [],
        hidden: false,
        isPrivate: true,
    },
    {
        id: 4,
        title: 'Blogs',
        path: '/blogs',
        element: <Blogs />,
        child: [],
        hidden: false,
        isPrivate: true,
    },
]