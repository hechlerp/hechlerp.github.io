import { useCallback, useMemo, useRef, useState } from 'react';
import { IconButton, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate, Outlet, useLocation, Navigate } from "react-router-dom";
import './App.css';
import { routes } from './Routing/routes';
import Menu from "@mui/material/Menu";
import Socials from './Sections/Socials';


const appBase = "/";
const defaultPage = "/about";

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
        return { pageLinks: links, routeMenuItems};
    }, [handleNav]);

    const iconAnchor = useRef<HTMLButtonElement>(null);
    if (location.pathname === appBase) {
        return <Navigate to={defaultPage} replace={true} />
    }
    return (
        <Box className="site-root" sx={{ width: { xs: "100%", md: "80vw" }, margin: "0 auto" }}>
            <Box sx={{ display: "flex", flexDirection: "column", height: "100%", width: "100%"}}>
                <AppBar position="static">
                    <Container maxWidth="xl">
                        <Toolbar disableGutters>
                            <Box sx={{ flexGrow: 1, display: "flex" }}>
                                <Typography
                                    variant="h6"
                                    noWrap
                                    component="a"
                                    href="/about"
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
