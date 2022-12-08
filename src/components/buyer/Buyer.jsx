import React from 'react'
import styled from 'styled-components'
import SideBar from './SideBar'
import Dashboard from './Dashboard'
import './buyer.css'

function Buyer() {
  return (
    <Div >
      <SideBar/>
      <Dashboard />

    </Div>
  )
}

const Div = styled.div``;

export default Buyer