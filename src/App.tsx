import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./Layout";
import { Introduction } from "./components/pages/Introduction";
import { PersonalProjects } from "./components/pages/PersonalProjects";
import { ProfessionalExperience } from "./components/pages/ProfessionalExperience";
import { Skills } from "./components/pages/Skills";
import { Contact } from "./components/pages/Contact";

export const App = () => {
  return (
    <div className="size-full">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Introduction />} />
            <Route path="personal-projects" element={<PersonalProjects />} />
            <Route
              path="professional-experience"
              element={<ProfessionalExperience />}
            />
            <Route path="skills" element={<Skills />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};
