import AwesomeContent from "./Components/AwesomeContent";
import AwesomeFooter from "./Components/AwesomeFooter";
import AwesomeNavbar from "./Components/AwesomeNavbar";

const Reactfacts = () => {
  return (
    <div className="flex flex-col min-h-screen min-w-screen static">
      <AwesomeNavbar />
      <AwesomeContent />
      <AwesomeFooter />
    </div>
  );
};

export default Reactfacts;
