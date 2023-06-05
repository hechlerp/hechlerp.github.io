import { useCallback, useMemo } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate, Outlet } from "react-router-dom";
import './App.css';
import { routes } from './routes';


function App() {

    const navigate = useNavigate();

    const handleNav = useCallback((routeName: string) => {
        navigate(routeName);
    }, []);
    const pageLinks = useMemo(() => {
        return routes.map(({ displayName, route }) => {
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
    }, [handleNav]);
    return (
        <Box sx={{ display: "flex", flexDirection: "column", height: "100%"}}>
            <AppBar position="static">
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'flex' } }}>
                            <Typography
                                variant="h6"
                                noWrap
                                component="a"
                                href="/"
                                sx={{
                                    mr: 2,
                                    display: { xs: 'none', sm: 'flex' },
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

                          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            {pageLinks}
                          </Box>
                    </Toolbar>
                </Container>
            </AppBar>
            <div className="card full-height">
                <Outlet />
            </div>
            <p className="read-the-docs">
                here's where the socials go
            </p>
        </Box>
    )
}

export default App
