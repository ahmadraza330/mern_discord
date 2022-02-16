import React from 'react'
import {Typography} from '@mui/material'

const FriendsTitle = ({title}) => {
  return (
    <Typography sx={{
        color: '#839297',
        fontSize: '14px',
        marginTop: '10px'
    }}>{title}</Typography>
  )
}

export default FriendsTitle