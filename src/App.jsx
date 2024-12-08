import { useState } from 'react'
import './App.css'
import BirthdayCard from './BirthdayCard';
import data from '../public/data';


function App() {
  const [people,setPeople] = useState(data);
  // console.log('data', people);
  

  return (
    
     <main>
      <section className='container'>
          <h2 > Birthday Today</h2>
            <BirthdayCard data={people} />
         <button onClick={()=> setPeople([])}>Clear all!!</button>
        </section>
    </main>
  )
}

export default App
