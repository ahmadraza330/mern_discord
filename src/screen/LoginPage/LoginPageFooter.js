import React from 'react';
import CustomPrimaryButton from '../../components/CustomPrimaryButton';
import RedirectInfo from '../../components/RedirectInfo';
import {useHistory} from 'react-router-dom'
import {Tooltip} from '@mui/material'

const getFormNotValidMessage = () => {
    return 'Enter correct email and password and password should contains between 6 and 12 characters'
}

const getFormValidMessage = () => {
    return 'Press to login';
};

const LoginPageFooter = ({ isFormValid, handleLogin }) => {

    const history = useHistory()

    const handlePushToRegister = () => {
        history.push('/register')
    };

    return (
        <>
            <Tooltip title={!isFormValid ? getFormNotValidMessage() : getFormValidMessage()}>
                <div>
                    <CustomPrimaryButton
                        label="Login"
                        additionlStyles={{ marginTop: '30px' }}
                        disabled={!isFormValid}
                        onClick={handleLogin}
                    />
                </div>
            </Tooltip>
            <RedirectInfo
                text="Need an account? "
                redirectText="Create an account"
                additionalStyles={{ marginTop: '5px' }}
                redirectHandler={handlePushToRegister}
            />
        </>
    );
};

export default LoginPageFooter;
