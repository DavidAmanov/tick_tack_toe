import './App.css';
import Block from './components/block/block';
import Field from './components/field/field';
import Header from './components/header/header';
import Score from './components/score/score';


function App() {
  return (
    <>
    <Header />
    <div className="App">
      <Field />
      <div className='X_O_blocks'>
      <Score />
      <Block name={'X'} color={'green'}/>
      <Block name={'O'} color={'orange'}/>
      </div>
    </div>
    </>
  );
}

export default App;
