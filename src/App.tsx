import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";

export const App = () => {
  return (
    <div id="app-main-div" className="size-full">
      <Navigation />
      <Hero />
    </div>
  );
};
