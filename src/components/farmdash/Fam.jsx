import React from 'react'
import styled from 'styled-components'
import SideBar from './SideBar'
import Dashboard from './Dashboard'
import './farmer.css'
import Chats from './Chats'
import RightSection from './RightSection'
function App() {
  return (
    <div >
      <SideBar/>
      <Dashboard/>

    </div>
  )
}

const Div = styled.div``;

export default App