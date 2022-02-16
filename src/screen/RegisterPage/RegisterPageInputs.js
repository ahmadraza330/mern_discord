import React from 'react'
import InputWithLabel from '../../components/InputWithLabel'

const RegisterPageInputs = ({
    mail,
    setMail,
    password,
    setPassword,
    userName,
    setUserName,
}) => {
    return (
        <>
            <InputWithLabel
                value={userName}
                setValue={setUserName}
                label="Name"
                type="text"
                placeholder="Enter your name"
            />
            <InputWithLabel
                value={mail}
                setValue={setMail}
                label="Email"
                type="text"
                placeholder="Enter your email address"
            />
            <InputWithLabel
                value={password}
                setValue={setPassword}
                label="Password"
                type="password"
                placeholder="Enter your password"
            />
        </>
    );
};

export default RegisterPageInputs;