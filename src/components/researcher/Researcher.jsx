import React from 'react'
import styled from 'styled-components'
import SideBar from './SideBar'
import Dashboard from '../farmdash/Dashboard'
import './farmer.css'

function Researcher
() {
  return (
    <Div >
      <SideBar/>
      <Dashboard />

    </Div>
  )
}

const Div = styled.div``;

export default Researcher
