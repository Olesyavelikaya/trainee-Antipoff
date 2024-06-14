import Cookies from "js-cookie";
import { Registration } from "./component/Registration/Registration";
import { Catalog } from "./component/Catolog/Catolog";
import "./App.css";

function App() {
  const isRegisteredUser = Cookies.get("name");
  return <>{isRegisteredUser ? <Catalog /> : <Registration />}</>;
}

export default App;
