import AboutMe from "./body-components/AboutMe";
import ContactMe from "./body-components/ContactMe";
import Portfolio from "./body-components/Portfolio";
import Resume from "./body-components/Resume";

export default function Body(props) {
  const activePage = props.activePage;
  switch (activePage) {
    case "about-me":
      return <AboutMe />;
    case "portfolio":
      return <Portfolio />;
    case "resume":
      return <Resume />;
    case "contact-me":
      return <ContactMe />;
    default:
      return <AboutMe />;
  }
}
