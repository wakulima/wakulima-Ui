import React,{useState,useEffect} from 'react'
import styled from 'styled-components'
import SideBar from './SideBar'
import Dashboard from './Dashboard'
import './farmer.css'
import Chats from './Chats'
import RightSection from './RightSection'
function App() {
  const [data,setData]=useState('')

// useEffect(()=>{
//   fetch('http://localhost:3000/graph_products')
//   .then(res=>res.json())
//   .then(data=>setData(data))
// },[])
  
  return (
    <div >
      <SideBar/>
      <Dashboard />

    </div>
  )
}

const Div = styled.div``;

export default App