import React from 'react'
import styled from 'styled-components'
import SideBar from './SideBar'
import Dashboard from './Dashboard'
import './farmer.css'

function App() {
  return (
    <Div >
      <SideBar/>
      <Dashboard />

    </Div>
  )
}

const Div = styled.div``;

export default App