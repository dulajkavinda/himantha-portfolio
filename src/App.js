import './App.css';
import Header from './components/Header.js/Header'
import About from './components/About/About'
import Edu from './components/Education/Edu'
import Work from './components/Work/Work'
import Personal from './components/Personal/Personal'
import Skills from './components/Skills/Skill'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
  <div className="container" style={{height: "100%", overflow: 'hidden'}}>
  <Header />
  <div>
    <div class="row align-items-center">
      <div class="col-sm">
      <About />
      <Edu />
      <Work />
      </div>
      <div class="col-sm">
      <Personal />
      <Skills />
      </div>
    </div>
  </div> 
  </div>
  );
}

export default App;
