import Dashboard from "./containers/dashboard";
import Footer from "./containers/footer";
import Header from "./containers/header";
import { WorkspaceProvider } from "./context/WorkspaceContext";
import "./App.css";

function App() {

  return (
    <WorkspaceProvider>
      <Header />
      <Dashboard />
      <Footer />
    </WorkspaceProvider>
  );
}

export default App;