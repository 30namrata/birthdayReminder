import React from 'react';
// import data from '../public/data';
import './index.css'


function BirthdayCard({data}) {
  const today = new Date(); // Ensure this is correctly initialized as a Date object
  console.log(data);
  
  const todayBirthdays = data.filter(person => {
    const dob = new Date(person.dob); // Convert dob string to Date object
    console.log(dob);
    
    return dob.getMonth() === today.getMonth() && dob.getDate() === today.getDate();
  });

  return (
    <>
        {todayBirthdays.length >0 &&
          <h3 className="text-center mb-4">{ todayBirthdays.length } Today's Birthday</h3>
        }
        {data.map((person) => {
            const { id, name, image, dob } = person;
            return (
            <article key={id} className='person'>
            <img src={image} alt={name} />
            <div className='left-align'>
              <h4 >{name}</h4>
              <p> {`Age: ${today.getFullYear() - new Date(dob).getFullYear()} years`}</p>
            </div>
          </article>);
        })
        }
        </>
  );
}

export default BirthdayCard;
