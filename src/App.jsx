import Navbar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <ItemListContainer greeting="¡Explora nuestros productos y comienza tu aventura deportiva hoy!" />
    </>
  );
}

export default App;
