import CharacterCard from "./components/CharacterCard";
import data from "./assets/data.json";
import "./styles.css";

function App() {
  return (
    <div className="app">
      <h1>Rick and Morty Characters</h1>
      <div className="container">
        {
          data.map(item => {
              return <CharacterCard key={item.id} name={item.name} image={item.image} status={item.status} species={item.species} locationUrl={item.location.url} locationName={item.location.name}
              originUrl={item.origin.url} originName={item.origin.name}/>
          })
        }
      </div>
    </div>
  );
}

export default App;
