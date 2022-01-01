import { ThemeProvider } from "@emotion/react";
import { CssBaseline, StyledEngineProvider } from "@mui/material";

// routing
import Routes from "routes";

// defaultTheme
import themes from "themes";

// project imports
import NavigationScroll from "layout/NavigationScroll";
import { useSelector } from "react-redux";

const App = () => {
  const customization = useSelector((state) => state.customization);
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={themes(customization)}>
        <CssBaseline />
        <NavigationScroll>
          <Routes />
        </NavigationScroll>
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default App;
