import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar />

      <ItemListContainer
        greeting="Saludos desde mi APP"
        saludos="Hola desde mi app"
      />
    </>
  );
}

export default App;
