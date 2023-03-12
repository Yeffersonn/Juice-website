import { Header } from "./content/Header";
import { Home } from "./content/Home";

function App() {
    return (
        <div className="App">
            <Header />
            <main className="main">
                <Home />
            </main>
        </div>
    );
}

export default App;
