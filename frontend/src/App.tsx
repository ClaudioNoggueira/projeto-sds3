import NavBar from "assets/components/NavBar";
import DataTable from "assets/components/DataTable";
import Footer from "assets/components/Footer";

function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <h1 className="text-primary">Olá mundo!</h1>


        <DataTable />
      </div>
      <Footer />
    </>
  );
}

export default App;
