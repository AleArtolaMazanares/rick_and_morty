import ComponentRoutes from "./components/ComponentRoutes";
import RickAndMProvider from "./components/ComponenteContext/provider";

function App() {
  return(
    <RickAndMProvider>
      <ComponentRoutes/>
    </RickAndMProvider>
  )
}

export default App;
