import { SyntheticEvent, useCallback, useMemo, useRef, useState } from 'react';
import { FormControlLabel, IconButton, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import { Switch } from '@mui/material';
import { styled } from "@mui/material/styles";
import { useNavigate, Outlet, useLocation, Navigate } from "react-router-dom";
import './App.css';
import { routes } from './Routing/routes';
import Socials from './Sections/Socials';

const DarkModeSwitch = styled(Switch)(() => ({
    "& .MuiSwitch-switchBase.Mui-checked": {
        color: "#171718"
    },
    "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
        backgroundColor: "#171718"
    }
}))


const appBase = "/";
const defaultPage = "/about";

function setInitialDarkModeState() {
    const localStorageColorScheme = localStorage.getItem("colorScheme");
    if (localStorageColorScheme) {
        return localStorageColorScheme === "true";
    } else {
        // failing a stored scheme, check the window defaults.
        if (window.matchMedia) {
            if (window.matchMedia("prefers-color-scheme: light").matches) {
                return false;
            } else if (window.matchMedia("prefers-color-scheme: dark").matches) {
                return true;
            }
        }
    }
    return false;
}

function App() {

    const navigate = useNavigate();
    const location = useLocation();

    const handleNav = useCallback((routeName: string) => {
        navigate(routeName);
    }, []);

    const [isMenuOpen, updateMenuOpen] = useState(false);

    const openNavMenu = useCallback(() => {
        updateMenuOpen(true);
    }, [updateMenuOpen]);

    const closeNavMenu = useCallback(() => {
        updateMenuOpen(false);
    }, [updateMenuOpen]);

    const { pageLinks, routeMenuItems } = useMemo(() => {
        const links = routes.map(({ displayName, route }) => {
            return (
                <Button
                    key={route}
                    onClick={() => handleNav(route)}
                    sx={{ my: 2, color: 'white', display: 'block' }}
                >
                    {displayName ?? ""}
                </Button>
            )
        });
        const routeMenuItems = routes.map(({ displayName, route }, index) => {
            const navToRoute = () => {
                handleNav(route);
                closeNavMenu();
            }
            return (
                <MenuItem value={route} onClick={navToRoute} key={index + route}>
                    <Typography textAlign="center">
                        {displayName}
                    </Typography>
                </MenuItem>
            );
        })
        return { pageLinks: links, routeMenuItems };
    }, [handleNav]);

    const iconAnchor = useRef<HTMLButtonElement>(null);

    const [shouldUseDarkTheme, setColorScheme] = useState<boolean>(setInitialDarkModeState);
    
    const toggleColorScheme = useCallback(() => {
        localStorage.setItem("colorScheme", "" + !shouldUseDarkTheme);
        setColorScheme(!shouldUseDarkTheme);
    }, [shouldUseDarkTheme, setColorScheme]);
    const colorSchemeController = (
        <Box sx={{minWidth: "150px", display: "flex"}}>
            <FormControlLabel sx={{ margin: "auto" }} control={
                <DarkModeSwitch checked={shouldUseDarkTheme} onChange={toggleColorScheme} />
            } label={shouldUseDarkTheme ? "Dark Mode" : "Light Mode"} />
        </Box>
    );

    const onMenuToggleColorScheme = useCallback((e: SyntheticEvent) => {
        e.preventDefault();
        e.stopPropagation();
        localStorage.setItem("colorScheme", "" + !shouldUseDarkTheme);
        setColorScheme(!shouldUseDarkTheme);
    }, [shouldUseDarkTheme, setColorScheme]);

    if (location.pathname === appBase) {
        if (location.search !== "") {
            const targetedRoute = location.search.split("/")[1];
            const foundRoute = routes.find(route => targetedRoute.includes(route.route));
            if (foundRoute) {
                return <Navigate to={foundRoute.route} replace={true} />
            }
        }
        return <Navigate to={defaultPage} replace={true} />
    }

    return (
        <Box data-theme={shouldUseDarkTheme ? "dark" : "light"} className="site-root" sx={{ width: { xs: "100%", md: "80vw" }, margin: "0 auto", colorScheme: shouldUseDarkTheme ? "dark" : "light" }}>
            <Box sx={{ display: "flex", flexDirection: "column", height: "100%", width: "100%"}}>
                <AppBar position="static">
                    <Container maxWidth="xl">
                        <Toolbar disableGutters>
                            <Box sx={{ flexGrow: 1, display: "flex" }}>
                                <Typography
                                    variant="h6"
                                    noWrap
                                    component="a"
                                    href="/"
                                    sx={{
                                        mr: 2,
                                        display: "flex",
                                        fontFamily: 'cinzel',
                                        fontWeight: 700,
                                        letterSpacing: '.3rem',
                                        color: 'inherit',
                                        textDecoration: 'none',
                                    }}
                                >
                                    Peter Hechler
                                </Typography>
                            </Box>
                            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: "flex-end" }}>
                                {pageLinks}
                                {colorSchemeController}
                            </Box>
                            <Box sx={{ display: { xs: "flex", md: "none" } }}>
                                <IconButton onClick={openNavMenu} ref={iconAnchor}>
                                    <MenuIcon sx={{color: "#fff"}} />
                                </IconButton>
                                <Menu
                                    anchorEl={iconAnchor.current}
                                    open={isMenuOpen}
                                    onClose={closeNavMenu}
                                >
                                    {routeMenuItems}
                                    <MenuItem value="controller" onClick={onMenuToggleColorScheme}>
                                        {colorSchemeController}
                                    </MenuItem>

                                </Menu>
                            </Box>
                        </Toolbar>
                    </Container>
                </AppBar>
                <div className="card full-height">
                    <Outlet />
                </div>
                <Box className="socials-container">
                    <Socials />
                </Box>
            </Box>
        </Box>
    )
}

export default App
