import logo from './logo.svg';
import './App.css';
import CreatePhotos from './Pages/CreatePhotos/CreatePhotos';

function App() {
  return (
    <div className="App">
      <div className = "blur" style = {{top: '20%', right:"0"}}></div>
      <div className = "blur"  style = {{top: '50%', left:"-8rem"}}></div>
      <CreatePhotos />
    </div>
  );
}

export default App;
