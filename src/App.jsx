import './App.css';
//Importo los componentes creados
import Form from './components/Form';
import Nav from './components/Nav';
function App() {
  
  return (
    <div className='container p-4'>
      <Nav></Nav>
      <div className="row">
        <div className="col-md-4 mx-auto">
        <br /><Form></Form>
        </div>
      </div>
      
      
    </div>
  );
}

export default App;
