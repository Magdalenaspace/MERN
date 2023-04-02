import React, {useState} from "react";

const People = (props) => {   
    const { firstName, lastName, age, hairColor } = props; //destruction
          //getter   setter
    const [birthday, setBirthday] = useState(age)
    // hook is used to initialize the state of birthday

    // const updateBirthday = () => {
    //     setBirthday(prevAge => prevAge + 1)
    // } -> inside onClick handler we will put {updateBirthday}

        return (
            <div className="container"> 
                <h2>{firstName} {lastName}</h2>  
                <p>Age: {birthday}</p>
                <p>Hair Color: {hairColor}</p>
                {/* setBirthday(birthday-1)
                  setBirthday(birthday-1) -> runs async way, as setters are being put on the side */}
                {/* setBirthday(prevAge => prevAge + 1)
                  setBirthday(prevAge => prevAge + 1) -> runs sync way double increasing */}
                <button onClick={() => setBirthday(prevAge => prevAge + 1)}>
                Birthday Button 🎂
                </button>
                {/* onClick handler is used to update the state of birthday */}
            </div>
    )            
    // state updates are asynchronous in React,  functional update 
    // can help ensure that the state is updated correctly 

}


export default People
// Use JS JSX Snippets

// Async will start its work, 
// but then step out of the way for the following commands to
//  continue processing without being held up by a potentially
//   slow asynchronous function. Once all other work is completed,
//   the asynchronous function can return with its own completed work.

// notice the getter and the setter are different colors:
// getter is a variable, and a setter is a function 
// the anonymous function makes it so it doesn't run automatically. it waits for the event
//  react app operates pretty much gets rid of the need for document.getElementById and querySelector. You can just synthetically inject variables into your JSX now.