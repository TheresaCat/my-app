import "./App.css";
import Component from "./Component";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Wilkommen zum Git Workshop</h1>
        <p>
          Mit diesem Hands-On Beispiel wollen wir gemeinsam schauen, wie Version
          Control im Collaborativem Development mit Hilfe von Git/GitHub
          funktioniert.
        </p>
      </header>
      <Component name="Jan" title="Dr.ama." topic="Drama baby, drama!" meal="Doenerstange" />
      <Component name="Thersa" title="UI/UX" topic="Cention" meal="Tofu" />
    </div>
  );
}

export default App;
