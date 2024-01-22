import About from "../Pages/About";
import Articles from "../Pages/Articles";
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
        route: "articles",
        displayName: "Articles",
        component: <Articles />
    },
    {
        route: "contact",
        displayName: "Contact",
        component: <Contact />
    }
];