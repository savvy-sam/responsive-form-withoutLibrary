import React, { useState } from 'react'
import './RegisterForm.css'

const RegisterFormInput = (props) => {

    const [focused, setFocused] = useState(false);
    const { label, errorMessage, onChange, id, ...inputProps } = props;

    const handleFocus = (e) => {
        setFocused(true);
      };

  return (

    <box className='formInput'>
        <label>{label}</label>
    <input
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        onFocus={() =>
          inputProps.name === "confirmPassword" && setFocused(true)
        }
        focused={focused.toString()}
      />
      <span>{errorMessage}</span>
    </box>
    
  )
}

export default RegisterFormInput