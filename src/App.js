
import './App.scss';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Link to='/Publicar'>Publicar Anime</Link>
      <Link to='/Consultar'>Consultar Anime</Link>
    </div>
  );
}

export default App;
