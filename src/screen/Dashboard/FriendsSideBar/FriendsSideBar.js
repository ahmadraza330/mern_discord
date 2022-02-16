import React from 'react'
import { styled } from '@mui/system';
import AddFriendButton from './AddFriendButton';
import FriendsTitle from './FriendsTitle';
import FriendsList from './FriendsList/FriendsList';
import PenddingInvitationsList from './PendingInvitationsList/PenddingInvitationsList';



const MainContainer = styled('div')({
    width: '224px',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    background: '#2f3136',
});

const FriendsSideBar = () => {
  return (
      <MainContainer>
          <AddFriendButton />
          <FriendsTitle title="Private Message" />
          <FriendsList/>
          <FriendsTitle title="Invitations" />
          <PenddingInvitationsList/>
      </MainContainer>
  );
}

export default FriendsSideBar