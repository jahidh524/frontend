import React from 'react';
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import routes from "./routes/routes";
import theme from "./theme/theme";
import Layout from "./layouts/Layout";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Routes>
          {routes.map((route, index) => {
            // Handle /admin route with children
            if (route.id === "admin") {
              return (
                <Route
                  key={index}
                  path={route.path}
                  element={route.element}
                >
                  {route.children &&
                    route.children.map((childRoute, childIndex) => (
                      <Route
                        key={`${index}-${childIndex}`}
                        path={childRoute.path}
                        element={childRoute.element}
                      >
                        {childRoute.children &&
                          childRoute.children.map((nestedRoute, nestedIndex) =>
                            nestedRoute.index ? (
                              <Route
                                key={`${index}-${childIndex}-${nestedIndex}`}
                                index
                                element={nestedRoute.element}
                              />
                            ) : (
                              <Route
                                key={`${index}-${childIndex}-${nestedIndex}`}
                                path={nestedRoute.path}
                                element={nestedRoute.element}
                              />
                            )
                          )}
                      </Route>
                    ))}
                </Route>
              );
            }

            // All other routes wrapped in the main Layout
            return (
              <Route
                key={index}
                path={route.path}
                element={<Layout>{route.element}</Layout>}
              />
            );
          })}
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
