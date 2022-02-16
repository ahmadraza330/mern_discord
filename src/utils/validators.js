export const validateLoginForm = ({mail, password}) => {
    const isMailValid = validateMail(mail)
    const isPasswordValid = validatePassword(password);

    return isMailValid && isPasswordValid
};

export const validateRegisterForm = ({ userName, mail, password }) => {
    const isMailValid = validateMail(mail);
    const isPasswordValid = validatePassword(password);
    const isUserName = validUserName(userName);

    return isMailValid && isPasswordValid && isUserName;
};

const validatePassword = (password) => {
    return password.length > 5 && password.length < 13
}

export const validateMail = (mail) => {
    const emailPattern = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        
    return emailPattern.test(mail)

}

const validUserName = (userName) => {
    return userName.length > 2 && userName.length < 13;
};