import { useState } from "react";
import { MovieCard } from "../movie-card";
import { MovieView } from "../movie-view";

import "index.scss";

const App = () => {
    return <MainView />;
};

const container = document.querySelector("#root");
const root = createRoot(container);
root.render(<App />);