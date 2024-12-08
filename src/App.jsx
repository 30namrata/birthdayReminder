import { useState } from 'react'
import './App.css'
import BirthdayCard from './BirthdayCard';

function App() {
  // const [people,setPeople] = useState(data);
  // console.log('data', people);
  

  return (
    
     <main>
      <section className='container'>
          <h2 > Birthday Today</h2>
            <BirthdayCard  />
         
        </section>
    </main>
  )
}

export default App
