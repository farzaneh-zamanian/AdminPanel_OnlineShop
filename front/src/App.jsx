import ModalProvider from "./Providers/ModalContext";
import TanstackQueryProvider from "./Providers/TanstackQueryProvider";
import Router from "./router/Router";

function App() {
  return (
    <TanstackQueryProvider>
      <ModalProvider>
        <Router />;
      </ModalProvider>
    </TanstackQueryProvider>
  );
}

export default App;
