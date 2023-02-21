import { useState } from 'react';
import './App.css';
import RegisterFormInput from './components/RegisterForm';

function App() {

  const [values, setValues]= useState({
    firstname:"",
    lastname:"",
    username:"",
    email:"",
    password:"",
    confirmPassword:"",
    birthday:""
  })

  const inputs = [
    {
      id: 1,
      name: "firstname",
      type: "text",
      placeholder: "firstname",
      errorMessage:
        "firstname should be 3-16 characters and shouldn't include any special character!",
      label: "First Name",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "lastname",
      type: "text",
      placeholder: "lastname",
      errorMessage:
        "lastname should be 3-16 characters and shouldn't include any special character!",
      label: "Last Name",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 3,
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character!",
      label: "Username",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 4,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      required: true,
    },
    {
      id: 5,
      name: "birthday",
      type: "date",
      placeholder: "Birthday",
      label: "Birthday",
      required: true
    },
    {
      id: 6,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
      id: 7,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Passwords don't match!",
      label: "Confirm Password",
      pattern: values.password,
      required: true,
    },
  ];


  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log(values)
  }


  const onChange = (e) => {
    setValues({...values, [e.target.name]:e.target.value})
  }


  
  return (
  <box className="App">
    <h1>Register Form</h1>
    <box>
  <form onSubmit = {handleSubmit}>
    {inputs.map((input) => (
      <RegisterFormInput key={input.id} {...input} value={values[input.name]}
      onChange={onChange}/>
    ))}
   <button>Submit</button>
  </form>
  </box>
    </box>
  );
}

export default App;
