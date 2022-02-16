import React from 'react'
import Button from '@mui/material/Button'
import GroupIcons from '@mui/icons-material/Groups'

const MainPageButton = () => {
  return (
    <Button style={{
        width: '48px',
        height: '48px',
        borderRadius: '16px',
        marging: 0,
        padding: 0,
        minWidth: 0,
        marginTop: '10px',
        color: 'white',
        backgroundColor: '#5865f2'
    }}>
<GroupIcons/>
    </Button>
  )
}

export default MainPageButton