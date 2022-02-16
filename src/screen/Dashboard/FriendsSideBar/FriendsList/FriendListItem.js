import React from 'react'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography';
import Avatar from '../../../../components/Avatar'
import OnlineIndicator from './OnlineIndicator';

const FriendListItem = ({id, isOnline, user}) => {
  return (
      <Button
          style={{
              width: '100%',
              height: '42px',
              marginTop: '10px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              textTransform: 'none',
              color: 'black',
              position: 'relative',
          }}
      >
          <Avatar user={user} />
          <Typography
              variant="subtitle1"
              align="left"
              style={{ marginLeft: '7px', fontWeight: 700, color: '#8e9297' }}
          >
              {' '}
              {user}
          </Typography>
          {isOnline && <OnlineIndicator />}
      </Button>
  );
}

export default FriendListItem