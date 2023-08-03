import React, {FC} from 'react';
import { AppComponent } from './styles/appStyles';
import {Column} from './components';

const App:FC = () => {
  return (
   <AppComponent>
    <Column text={'This is the first column'}/>
   </AppComponent>
  );
}

export default App;
