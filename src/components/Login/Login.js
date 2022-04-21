import React, { useState , useEffect , useReducer} from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';

const emailReducer =(state , action ) =>{
  if(action.type === "USER_INPUT")
  {
    return {value : action.value , isValid:action.value.includes('@')}
  }

  if(action.type === "EMAIL_VALIDATION")
  {
    return  { value:state.value , isValid:state.isValid}
  }
}
const passwordReducer =(passwordState, action) =>{
       if( action.type ==="PASSWORD_INPUT")
       {
        return {value : action.value ,isValid : action.value.length >6 } 
       }

       if( action.type ==="PASSWORD_VALIDATION")
       {
        return {value : passwordState.value ,isValid : passwordState.isValid} 
       }
}

const Login = (props) => {
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState('');
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);
  const [emailState , dispatchEmail]=useReducer(emailReducer ,{value : "" })
  const [PasswordState , dispatchPassword]=useReducer(passwordReducer ,{ value :""})


  useEffect(()=>{
 const timerId =    setTimeout(()=>{
  setFormIsValid(
    emailState.isValid && PasswordState.isValid
  );
  console.log("useEffect");

    }, 500)
  
 return ()=>{
   clearTimeout(timerId)
 }
  }, [emailState.isValid , PasswordState.isValid])

  const emailChangeHandler = (event) => {
    dispatchEmail({type:"USER_INPUT",value:event.target.value});
  
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({type:"PASSWORD_INPUT",value : event.target.value});


  };

  const validateEmailHandler = () => {
    dispatchEmail({type : "EMAIL_VALIDATION"});
  };

  const validatePasswordHandler = () => {
    dispatchPassword({type : "PASSWORD_VALIDATION"});
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(emailState.value, PasswordState.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            PasswordState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={PasswordState.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
