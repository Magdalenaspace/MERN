const MovieForm = ( ) => {
    const [title, setTitle] = useState("");
    const [titleError, setTitleError] = useState("");
    
    const handleTitle = (e) => {
        setTitle(e.target.value);
        if(e.target.value.length < 1) {
            setTitleError("Title is required!");
        } else if(e.target.value.length < 3) {
            setTitleError("Title must be 3 characters or longer!");
        } else {
            // an empty string is considered a "falsy" value
            setTitleError("");
        }
    }
    
    {/* this functionality can be repeated for each input needing validation */}
    
    return (
        <form onSubmit={ (e) => e.preventDefault() }>
            <div>
                <label>Title: </label>
                <input type="text" onChange={ handleTitle } />
                {
                    titleError ?
                    <p>{ titleError }</p> :
                    ''
                    // JavaScript will treat an empty string as being a "falsy" value to make our ternaries easier to write. I
                }
            </div>
            {
                titleError ?
                <input type="submit" value="Create Movie" disabled /> : 
                // we disable the submit button until the form is valid by using ternaries. If the titleError state is set to an empty string, it will take the else case which removes the disabled attribute from the button.
                <input type="submit" value="Create Movie" />
            }
        </form>
    );
}
