import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Heading from "./components/Heading";
import FormInfo from "./components/FormInfo";
const App = () => {
  return (
    <div className="card style p-3 mb-2 bg-success-subtle text-success-emphasis">
      <Heading />
      <FormInfo />
    </div>
  );
};

export default App;
