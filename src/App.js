import './App.css';
import React from 'react';
import Block from './components/block/block';
import Field from './components/field/field';
import Header from './components/header/header';
import Score from './components/score/score';
import { useState } from 'react';

/*
012
345
678

3 - горизонтальных
3 - вертикальных
2 - диагональных

*/



function App() {
  const [scoreValueX, setScoreValueX] = useState(0);
  const [scoreValueO, setScoreValueO] = useState(0);
  function changeScore(value){
    if(value==='X'){
      setScoreValueX(scoreValueX+1);
    }else{
      setScoreValueO(scoreValueO+1);
    }
  };

  const [fieldValue, setFieldValue] = useState([
    {id:0, value:'', color: 'black'},
    {id:1, value:'', color: 'black'},
    {id:2, value:'', color: 'black'},
    {id:3, value:'', color: 'black'},
    {id:4, value:'', color: 'black'},
    {id:5, value:'', color: 'black'},
    {id:6, value:'', color: 'black'},
    {id:7, value:'', color: 'black'},
    {id:8, value:'', color: 'black'},
  ])

  function afterGame(){
    const newField = fieldValue.map(item => ({
      id: item.id,
      value: '',
      color: item.color 
    }));
    setFieldValue(newField);
  }
   const [draggingItem, setDraggingItem]= useState(null);
   const handleDragStart=(item)=>{
    setDraggingItem(item)
    console.log(fieldValue)
   }
    const handleDragEnd=(index)=>{
    if(draggingItem){
      const newField = [...fieldValue];
      newField[index].value = draggingItem.name;
      newField[index].color = draggingItem.color;
      setFieldValue(newField);
      setDraggingItem(null);
      console.log(fieldValue)

      if(fieldValue[0].value=== 'X' && fieldValue[1].value=== 'X' && fieldValue[2].value=== 'X'
        || fieldValue[0].value=== 'O' && fieldValue[1].value=== 'O' && fieldValue[2].value=== 'O'){
        alert(`Winner is ${fieldValue[0].value}`)
        changeScore(fieldValue[0].value)
        afterGame()
        

      } else if(fieldValue[3].value=== 'X' && fieldValue[4].value=== 'X' && fieldValue[5].value=== 'X'
      || fieldValue[3].value=== 'O' && fieldValue[4].value=== 'O' && fieldValue[5].value=== 'O'){
        alert(`Winner is ${fieldValue[3].value}`)
        changeScore(fieldValue[3].value)
        afterGame()

      } else if(fieldValue[6].value=== 'X' && fieldValue[7].value=== 'X' && fieldValue[8].value=== 'X'
      || fieldValue[6].value=== 'O' && fieldValue[7].value=== 'O' && fieldValue[8].value=== 'O'){
        alert(`Winner is ${fieldValue[6].value}`)
        changeScore(fieldValue[6].value)
        afterGame()

      } else if(fieldValue[0].value=== 'X' && fieldValue[4].value=== 'X' && fieldValue[8].value=== 'X'
      || fieldValue[0].value=== 'O' && fieldValue[4].value=== 'O' && fieldValue[8].value=== 'O'){
        alert(`Winner is ${fieldValue[0].value}`)
        changeScore(fieldValue[0].value)
        afterGame()

      } else if(fieldValue[2].value=== 'X' && fieldValue[4].value=== 'X' && fieldValue[6].value=== 'X'
      || fieldValue[2].value=== 'O' && fieldValue[4].value=== 'O' && fieldValue[6].value=== 'O'){
        alert(`Winner is ${fieldValue[2].value}`)
        changeScore(fieldValue[2].value)
        afterGame()

      } else if(fieldValue[0].value=== 'X' && fieldValue[3].value=== 'X' && fieldValue[6].value=== 'X'
      || fieldValue[0].value=== 'O' && fieldValue[3].value=== 'O' && fieldValue[6].value=== 'O'){
        alert(`Winner is ${fieldValue[0].value}`)
        changeScore(fieldValue[0].value)
        afterGame()
      
      }else if(fieldValue[1].value=== 'X' && fieldValue[4].value=== 'X' && fieldValue[7].value=== 'X'
      || fieldValue[1].value=== 'O' && fieldValue[4].value=== 'O' && fieldValue[7].value=== 'O'){
        alert(`Winner is ${fieldValue[1].value}`)
        changeScore(fieldValue[1].value)
        afterGame()

      } else if(fieldValue[2].value=== 'X' && fieldValue[5].value=== 'X' && fieldValue[8].value=== 'X'
      || fieldValue[2].value=== 'O' && fieldValue[5].value=== 'O' && fieldValue[8].value=== 'O'){
        alert(`Winner is ${fieldValue[2].value}`)
        changeScore(fieldValue[2].value)
        afterGame()
      }
   }
  }
  return (
    <>
    <Header />
    <div className="App">
      <div className='feild'>
        {fieldValue.map((item, index)=>{
          return(<Field key={item.id} value={item.value} color={item.color} item={item.id} onDrop={()=>handleDragEnd(index)}/>)})
        }
      </div>
      <div className='X_O_blocks'>
      <Score x={scoreValueX} o={scoreValueO}/>
      <div className='drag-block' draggable onDragStart={()=>handleDragStart({name: 'X', color: 'green'})}>
        <Block name={'X'} color={'green'} />
      </div>
      <div className='drag-block' draggable onDragStart={()=>handleDragStart({name: 'O', color: 'orange'})}>
        <Block name={'O'} color={'orange'} />
      </div>
      </div>
    </div>
    </>
  );
}

export default App;
