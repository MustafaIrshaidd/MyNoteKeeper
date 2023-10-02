import "./App.css";
import LoaderProvider from "./contexts/LoaderContext";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      <LoaderProvider>
        <HomePage/>
      </LoaderProvider>
    </>
  );
}

export default App;
