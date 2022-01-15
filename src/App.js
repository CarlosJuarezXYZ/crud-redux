import { Provider } from "react-redux";
import store from "./app/store";
import Average from "./components/layout/Average";
import Clients from "./components/layout/Clients";
import FormClient from "./components/layout/FormClient";



function App() {
  return (
    <Provider store={store}>
      <Clients/>
      <FormClient/>
    </Provider>
  );
}

export default App;
