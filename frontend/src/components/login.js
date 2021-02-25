import React from 'react';

export default function Login(props){
    const { values, submit, errors } = props;

    const onSubmit = event => {
        event.preventDefault()
        submit()
    }

    // const onChange = event => {
    //     const { name, value, type } = event.target
    //     const usedValue = type === 'checkbox' ? checked: value
    //     change(name, usedValue)
    // }

    return(
        <form onSubmit = {onSubmit}>
            <div className = 'form-inputs'>
                <label> Username:
                    <input 
                        name = 'username'
                        type = 'text'
                        value = {values.username}
                        onChange= {onChange}
                    />
                </label>
                <label>Password:
                    <input
                        name = 'password'
                        type = 'text'
                        value = {values.password}
                        onChange = {onChange}
                    />
                </label>
            </div>
            <div className = 'errors'>
                <div>{errors.username}</div>
                <div>{errors.email}</div>
                <div>{errors.password}</div>
            </div>
            <button id = 'submitBtn' disabled = {disabled}>Log In</button>
        </form>
    )
}