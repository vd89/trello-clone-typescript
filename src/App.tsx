import React, {FC} from 'react';
import { AppComponent } from './styles/appStyles';
import {AddNewItem, Card, Column} from './components';

const App:FC = () => {
  return (
   <AppComponent>
    <Column text={'To Do'}>
      <Card text='Generate app scaffold'/>
    </Column>
    <Column text={'In Progress'}>
      <Card text='Learn Typescript'/>
    </Column>
    <Column text={'Done'}>
      <Card text='Begin to use static typing'/>
    </Column>
     <AddNewItem toggleButtonText='+ Add another list' onAdd={console.log}/>
   </AppComponent>
  );
}

export default App;
