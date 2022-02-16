import React from 'react';
import CustomPrimaryButton from '../../components/CustomPrimaryButton';
import RedirectInfo from '../../components/RedirectInfo';
import {useHistory} from 'react-router-dom'
import {Tooltip} from '@mui/material'

const getFormNotValidMessage = () => {
    return 'Username should contains between 3 and 6 charaters and password should contains between 6 and 12 characters';
}

const getFormValidMessage = () => {
    return 'Press to register';
};

const RegisterPageFooter = ({ isFormValid, handleRegister }) => {

    const history = useHistory()

    const handlePushToLogin = () => {
        history.push('/login')
    };

    return (
        <>
            <Tooltip
                title={
                    !isFormValid
                        ? getFormNotValidMessage()
                        : getFormValidMessage()
                }
            >
                <div>
                    <CustomPrimaryButton
                        label="Register"
                        additionlStyles={{ marginTop: '30px' }}
                        disabled={!isFormValid}
                        onClick={handleRegister}
                    />
                </div>
            </Tooltip>
            <RedirectInfo
                text=""
                redirectText="Already have an account?"
                additionalStyles={{ marginTop: '5px' }}
                redirectHandler={handlePushToLogin}
            />
        </>
    );
};

export default RegisterPageFooter;
