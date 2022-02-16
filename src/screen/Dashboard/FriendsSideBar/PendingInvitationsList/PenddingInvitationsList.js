import React from 'react'
import { styled } from '@mui/system';
import PendingInvitationListItem from './PendingInvitationListItem';

const DUMMY_INVIT = [
  {
    id: 1,
    senderId: {
      username: 'mark',
      mail: 'mark@dev.com'
    }
  },
  {
    id: 2,
    senderId: {
      username: 'peter',
      mail: 'peter@dev.com'
    }
  }
]

const MainContainer = styled('div')({
    width: '100%',
    height: '22%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    overflow: 'auto'
});

const PenddingInvitationsList = () => {
  return (
      <MainContainer>
          {DUMMY_INVIT.map((invite) => (
              <PendingInvitationListItem
                  key={invite.id}
                  username={invite.senderId.username}
                  mail={invite.senderId.mail}
                  id={invite.id}
              />
          ))}
      </MainContainer>
  );
}

export default PenddingInvitationsList