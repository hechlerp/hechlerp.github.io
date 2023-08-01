import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Games from "../Pages/Games";

export const routes = [
    {
        route: "about",
        displayName: "About Me",
        component: <About />
    },
    {
        route: "games",
        displayName: "Games",
        component: <Games />
    },
    {
        route: "contact",
        displayName: "Contact",
        component: <Contact />
    }
];