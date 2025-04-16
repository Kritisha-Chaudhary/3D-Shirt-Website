import Canvas from './canvas';
import Customizer from './pages/cutomizer';
import Home from './pages/home';

function App() {
  return (
      <main className="app transition-allease-in">
        <Home />
        <Canvas />
        <Customizer />
      </main>
  )
}

export default App
