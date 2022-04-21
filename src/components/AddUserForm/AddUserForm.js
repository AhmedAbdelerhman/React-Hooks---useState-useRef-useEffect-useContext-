import Button from "../UI/Button";
import Card from "../UI/Card";
import styles from "./AddUserForm.module.css";
import React, { useState ,useRef } from "react";
import ErrorModule from "../UI/ErrorModule";
const AddUserForm = (props) => {
  // const [enteredUserName, reenteredUserName] = useState("");
  // const [enteredAge, decenteredAge] = useState("");
 const [ error, setError]=useState()

  const nameInputRef = useRef()
  const ageInputRef = useRef()

  const onSubmitHandler = (event) => {
   const enteredName=  nameInputRef.current.value
   const entered = ageInputRef.current.value
    event.preventDefault();
    if (enteredName.trim().length === 0 || entered.trim().length === 0) {
      console.log("not valid");
      setError({error:"in valid input",message:"please enter all info"})
      return;
    }
    if (+entered < 1) {
      setError({error:"in valid input",message:"please enter valid age"})

      console.log("not valid");
      return;
    }

    props.getUserData({
      username: enteredName,
      age: entered,
      id: Math.random().toString(),
    });

    nameInputRef.current.value=""
    ageInputRef.current.value=""
  };

  const OnConfirmHandler = () => {

    setError(null)

  };
  
  return (
    <React.Fragment>
     { error && <ErrorModule  errorMessage={error} OnConfirm={OnConfirmHandler} /> } 
      <Card>
        <form className={styles.form} onSubmit={onSubmitHandler}>
          <label htmlFor="userName">user name</label>
          <input
            type="text"
            id="userName"
           
            ref={nameInputRef}
          />
          <label htmlFor="age">age</label>
          <input
            type="number"
            id="age"
            
            ref={ageInputRef}

          />
          <Button type="submit">add user</Button>
        </form>
      </Card>
    </React.Fragment>
  );
};
export default AddUserForm;
