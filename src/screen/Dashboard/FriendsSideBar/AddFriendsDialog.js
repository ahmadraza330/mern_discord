import React, {useState, useEffect} from 'react'
import { validateMail } from '../../../utils/validators';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Typography } from '@mui/material';

import InputWithLabel from '../../../components/InputWithLabel'
import CustomPrimaryButton from '../../../components/CustomPrimaryButton';

const AddFriendsDialog = ({
    isDialogOpen,
    closeDialogHandler,
    sendFriendInvitation = () => {}
}) => {

    const [mail, setMail]  = useState('')
    const [isVaildForm, setIsVaildForm] = useState(true);

    const handleSendInvitation = () => {}

    const handleCloseDialog = () => {
        closeDialogHandler()
        setMail('')
    }

    useEffect(() => {
        setIsVaildForm(validateMail(mail));
    },[mail, setIsVaildForm])

  return (
      <Dialog open={isDialogOpen} onClose={handleCloseDialog}>
          <DialogTitle>
              <Typography>Invita a Friend</Typography>
          </DialogTitle>
          <DialogContent>
              <DialogContentText>
                  <Typography>
                      Enter E-mail address of friend which you would like to
                      invite.
                  </Typography>
                  <InputWithLabel
                      value={mail}
                      setValue={setMail}
                      label="Mail"
                      type="text"
                      placeholder="Enter mail address"
                  />
              </DialogContentText>
          </DialogContent>
          <DialogActions>
              <CustomPrimaryButton
                  onClick={handleSendInvitation}
                  disabled={!isVaildForm}
                  label="Send"
                  additionlStyles={{ margingLeft: '15px', margingRight: '15px', marginBottom: '10px' }}
              />
          </DialogActions>
      </Dialog>
  );
}

export default AddFriendsDialog