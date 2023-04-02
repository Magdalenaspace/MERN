import React, {useState} from 'react';

const MoreForm = (props) => {
    const [newUser, setUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        // state that will hold either true or false,depending on if the createUser function has been invoked.
        hasBeenSubmitted: false,
        // formMessage function will be run every time the component is re-rendered (every time state is changed) and it will evaluate if hasBeenSubmitted is true or false.
    })
      // state of the form is managed by the useState hook
    
    const changeHandler = (e) => {
        console.log("name", e.target.name);
        console.log("value", e.target.value);
        setUser({ ...newUser, [e.target.name]: e.target.value });
      //handles input field that was changed with the event object (e), uses spread, and comp prop "name" 
      // updates state with new value
    }
    
    const { firstName, lastName, email, password, confirmPassword, hasBeenSubmitted } = newUser;
      // each input element should be assigned to the corresponding property of the user object in state.
    const createUser = (e) => {
        // submit handler  
        e.preventDefault();
        console.log(newUser);
        // setHasBeenSubmitted( true );
        setUser({ ...newUser, hasBeenSubmitted: true});
    };

    const inputDataDivStyle = {
        borderRadius: "5px",
        backgroundColor: "#f2f2f2",
        border: "1px solid darkgrey",
        padding: "0px 10px",
        margin: "5px"
    };

    return (
        <div>
         {/* <h3 style={{ textAlign: 'center' }}>{ formMessage(if,else) }</h3> */}
            <form onSubmit={createUser} style={{ marginTop: "20px" }}>
                {
                    hasBeenSubmitted ? 
                        <h3>{ firstName }, Thank you for submitting the form!</h3> :
                        <h3>Welcome { firstName }, please submit the form.</h3> 
                }
                <div style={inputDataDivStyle}>
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" name="firstName" value={firstName} 
                    onChange={changeHandler}/>
                    {newUser.firstName.length < 5 && firstName.length > 0 ? <p>First Name must be at least 5 characters</p> : null}
                </div>
                {/* htmlFor: prop of the label elements,connects input fields with the atributes */}
                <div style={inputDataDivStyle}>
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" name="lastName" value={lastName} 
                    onChange= {changeHandler} /> 
                    {/* onChange={(e) => changeHandler(e)} */}
                    {newUser.lastName.length < 5 && lastName.length > 0 ? <p>Last Name must be at least 5 characters</p> : null}
                </div>
                <div style={inputDataDivStyle}>
                    <label>Email Address: </label> 
                    <input type="text" name="email" value={email} 
                    onChange= {changeHandler} />
                    {newUser.email.length < 5 && email.length > 0 ? <p>email must be at least 5 characters</p> : null}
                    
                </div>
                <div style={inputDataDivStyle}>
                    <label htmlFor="password">Password: </label>
                    <input type="password" name="password" value={password} 
                    onChange= {changeHandler} />
                    {newUser.password.length < 5 && password.length > 0 ? <p>Password must be at least 5 characters</p> : null}
                </div>
                <div style={inputDataDivStyle}>
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input type="password" name="confirmPassword" value={confirmPassword} 
                    onChange= {changeHandler}/>
                    {newUser.confirmPassword.length !==password && confirmPassword.length > 0? <p>Password must match.</p> : null}
                </div>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <input type="submit" value="Create User" /> 
                </div>
            </form>
        </div>
        
        );
}
export default MoreForm;
