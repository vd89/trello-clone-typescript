import React, {FC} from 'react';
import { AppComponent } from './styles/appStyles';
import {AddNewItem, Column} from './components';
import { useAppState } from './states/AppContext';

const App:FC = () => {
  const {state,dispatch} = useAppState()
  return (
   <AppComponent>
      {state.lists.map((list, i) => (
        <Column text={list.text} key={list.id} id={list.id} index={i}/>
      ))}
     <AddNewItem toggleButtonText='+ Add another list' onAdd={text => dispatch({type:"ADD_LIST", payload: text})}/>
   </AppComponent>
  );
}

export default App;
