import AboutMe from "./body-components/AboutMe";
import ContactMe from "./body-components/ContactMe";
import Portfolio from "./body-components/Portfolio";
import Resume from "./body-components/Resume";
import ContactSuccess from "./body-components/ContactSuccess";

export default function Body(props) {
  const activePage = props.activePage;
  const setActivePage = props.setActivePage;
  switch (activePage) {
    case "about-me":
      return <AboutMe setActivePage={setActivePage} />;
    case "portfolio":
      return <Portfolio />;
    case "resume":
      return <Resume />;
    case "contact-me":
      return <ContactMe setActivePage={setActivePage} />;
    case "contact-success":
      return <ContactSuccess />;
    default:
      return <AboutMe setActivePage={setActivePage} />;
  }
}
