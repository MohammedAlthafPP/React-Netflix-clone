import React from 'react'

import {originals,action,romance,horror,science_fiction,animation,comady} from './urls'
import './App.css';
import Banner from './Components/Banner/Banner';
import NavBar from './Components/NavBar/NavBar';
import Rowpost from './Components/RowPost/Rowpost'

function App() {

  return (
    <div className="App" >
      
      <NavBar/>
      <Banner/>
      <Rowpost url={originals} title='Netflix originals'/>  
      <Rowpost url={action} title='Action' isSmall />
      <Rowpost url={romance} title='Romantic films' isSmall />
      <Rowpost url={science_fiction} title='Popular sci-fi films' isSmall />
      <Rowpost url={horror} title='Popular horror films' isSmall />
      <Rowpost url={animation} title='Popular animated films' isSmall />
      <Rowpost url={comady} title='Popular comedies' isSmall />


     
      
     
    </div>
  );
}

export default App;
