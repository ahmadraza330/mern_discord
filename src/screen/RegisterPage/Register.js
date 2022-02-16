import React, {useState, useEffect} from 'react'
import AuthBox from '../../components/AuthBox'
import RegisterPageFooter from './RegisterPageFooter'
import RegisterPageInputs from './RegisterPageInputs'
import { Typography } from '@mui/material'
import {validateRegisterForm} from '../../utils/validators'
import { connect } from 'react-redux';
import { getActions } from '../../store/actions/authActions';
import { useHistory } from 'react-router-dom';


const Register = ({register}) => {
  const [userName, setUserName] = useState('')
  const [mail, setMail] = useState('')
  const [password, setPassword] = useState('')
  const [isFormValid, setIsFormValid] = useState(false);

  const history = useHistory()

    useEffect(() => {
        setIsFormValid(validateRegisterForm({userName, mail,  password }));
    }, [userName, mail, password, setIsFormValid]);

  const handleRegister = () => {
    const userDetails = { userName, mail, password };
    register(userDetails, history)
  }
  return (
      <AuthBox>
          <Typography variant="h5" sx={{ color: 'white' }}>
              Create an account
          </Typography>
          <RegisterPageInputs
              userName={userName}
              setUserName={setUserName}
              mail={mail}
              setMail={setMail}
              password={password}
              setPassword={setPassword}
          />
          <RegisterPageFooter
              isFormValid={isFormValid}
              handleRegister={handleRegister}
          />
      </AuthBox>
  );
}

const mapStateToProps = (dispatch) => {
  return {
    ...getActions(dispatch)
  }
}
export default connect(null, mapStateToProps) (Register)