import React from 'react'
import { styled } from '@mui/system';

const AvatrPreview = styled('div')({
    height: '42px',
    width: '42px',
    backgroundColor: '#5865f2',
    borderRadius: '42px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '20px',
    fontWeight: '700',
    marginLeft: '5px',
    color: 'white'
})

const Avatar = ({ user, large }) => {
    return <AvatrPreview style={large ? {  height: '80px',
    width: '80px'} : {}}>{user.substring(0,2)}</AvatrPreview>;
};



export default Avatar