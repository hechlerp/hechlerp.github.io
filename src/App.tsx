import { useCallback, useMemo, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import './App.css';

const ROUTES_TO_PAGE_NAMES: Record<string, string> = {
    games: "Games",
    contact: "Contact"
} as const;

function App() {
    const [count, setCount] = useState(0);
    const handleNav = useCallback((routeName: string) => {
        console.log(routeName);
    }, []);
    const pageLinks = useMemo(() => {
        return Object.keys(ROUTES_TO_PAGE_NAMES).map(route => {
            return (
                <Button
                    key={route}
                    onClick={() => handleNav(route)}
                    sx={{ my: 2, color: 'white', display: 'block' }}
                >
                    {ROUTES_TO_PAGE_NAMES[route] ?? ""}
                </Button>
            )
        });
    }, [handleNav]);
    return (
        <>
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
            <div>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                <p>
                  Edit <code>src/App.tsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </>
  )
}

export default App
