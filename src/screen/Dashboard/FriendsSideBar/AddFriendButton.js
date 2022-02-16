import React , {useState} from 'react'
import CustomPrimaryButton from '../../../components/CustomPrimaryButton'
import AddFriendsDialog from './AddFriendsDialog'

const additionlStyles = {
    marginTop: '10px',
    marginLeft: '5px',
    width: '80%',
    height: '30px',
    background: '#3ba55d'

}



const AddFriendButton = () => {
    const [isDialogOpen, setIsDialogOpen] = useState(false)

    const handleOpenAddFriendDialog = () => {
        setIsDialogOpen(true)
    };
    const handleCloseAddFriendDialog = () => {
        setIsDialogOpen(false)
    };


  return (
      <>
          <CustomPrimaryButton
              additionlStyles={additionlStyles}
              label="Add Friends"
              onClick={handleOpenAddFriendDialog}
          />
          <AddFriendsDialog
              isDialogOpen={isDialogOpen}
              closeDialogHandler={handleCloseAddFriendDialog}
          />
      </>
  );
}

export default AddFriendButton