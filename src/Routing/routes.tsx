import About from "../Pages/About";
import Articles from "../Pages/Articles";
import Contact from "../Pages/Contact";
import Games from "../Pages/GamesV2";

export const routes = [
    {
        route: "games",
        displayName: "Games",
        component: <Games />
    },
    {
        route: "about",
        displayName: "About Me",
        component: <About />
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