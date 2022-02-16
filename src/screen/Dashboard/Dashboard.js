import React from 'react'
import {styled} from '@mui/system'
import SideBar from './Sidebar/SideBar'
import FriendsSideBar from './FriendsSideBar/FriendsSideBar'
import { Messanger } from './Messanger/Messanger'
import { AppBar } from './AppBar/AppBar'



const Wrapperd = styled('div')({
  width: '100%',
  height: '100vh',
  display: 'flex'
})

const Dashboard = () => {
  return (
      <Wrapperd>
          <SideBar />
          <FriendsSideBar />
          <Messanger/>
          <AppBar/>
      </Wrapperd>
  );
}

export default Dashboard