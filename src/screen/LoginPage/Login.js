import React, {useState, useEffect} from 'react'
import AuthBox from '../../components/AuthBox'
import LoginPageFooter from './LoginPageFooter'
import LoginPageHeader from './LoginPageHeader'
import LoginPageInputs from './LoginPageInputs'
import { validateLoginForm } from '../../utils/validators';
import {connect} from 'react-redux'
import {getActions} from '../../store/actions/authActions'
import {useHistory} from 'react-router-dom'

const Login = ({login}) => {
    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');
    const [isFormValid, setIsFormValid] = useState(true);

    const history = useHistory()

    useEffect(() => {
        setIsFormValid(validateLoginForm({ mail, password }));
    }, [mail, password, setIsFormValid]);

    const handleLogin = (e) => {
      const userDetails = {mail, password}
      login(userDetails, history)
    }
  return (
      <AuthBox>
          <LoginPageHeader />
          <LoginPageInputs
              mail={mail}
              setMail={setMail}
              password={password}
              setPassword={setPassword}
          />
          <LoginPageFooter
              isFormValid={isFormValid}
              handleLogin={handleLogin}
          />
      </AuthBox>
  );
}

const mapStateToProps = (dispatch) => {
    return {
        ...getActions(dispatch),
    };
}

export default connect(null, mapStateToProps)( Login)