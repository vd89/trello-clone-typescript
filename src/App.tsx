import React, {FC} from 'react';
import { AppComponent } from './styles/appStyles';
import {AddNewItem, Column} from './components';
import { useAppState } from './states/AppContext';

const App:FC = () => {
  const {state} = useAppState()
  return (
   <AppComponent>
      {state.lists.map((list, i) => (
        <Column text={list.text} key={list.id} index={i}/>
      ))}
     <AddNewItem toggleButtonText='+ Add another list' onAdd={console.log}/>
   </AppComponent>
  );
}

export default App;
