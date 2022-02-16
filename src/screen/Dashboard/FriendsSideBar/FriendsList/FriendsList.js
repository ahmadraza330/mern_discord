import React from 'react';
import { styled } from '@mui/system';
import FriendListItem from './FriendListItem';

const DUMMY_FRIENDS = [
    {
        id: 1,
        userName: 'John',
        isOnline: false
    },
    {
        id: 2,
        userName: 'Sara',
        isOnline: true
    },
    {
        id: 3,
        userName: 'Sam',
        isOnline: false
    },
    {
        id: 4,
        userName: 'Jane',
        isOnline: true
    }
]
const MainContainer = styled('div')({
    flexGrow: '1',
    width: '100%',

});

const FriendsList = () => {
    return (
        <MainContainer>
            {DUMMY_FRIENDS.map((f) => (
                <FriendListItem
                    key={f.id}
                    user={f.userName}
                    id={f.id}
                    isOnline={f.isOnline}
                />
            ))}
        </MainContainer>
    );
};

export default FriendsList;
