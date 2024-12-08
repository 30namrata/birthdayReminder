import React from 'react';
import data from '../public/data';
import './index.css'


function BirthdayCard() {
  const today = new Date(); // Ensure this is correctly initialized as a Date object
  console.log(today);
  
  const todayBirthdays = data.filter(person => {
    const dob = new Date(person.dob); // Convert dob string to Date object
    console.log(dob);
    
    return dob.getMonth() === today.getMonth() && dob.getDate() === today.getDate();
  });

  return (
    <div className="container mt-4">
      <h3 className="text-center mb-4">{todayBirthdays.length >0 ?todayBirthdays.length:"" } Today's Birthday</h3>
      <div className="row justify-content-center">
        {data.map((person) => {
            const { id, name, image, dob } = person;
            return (
            <article key={id} className='person'>
            <img src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <p> {`Age: ${today.getFullYear() - new Date(dob).getFullYear()} years`}</p>
            </div>
          </article>);
        })
        }
      </div>
    </div>
  );
}

export default BirthdayCard;
