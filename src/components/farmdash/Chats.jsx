import React,{useEffect,useState} from 'react'
import styled from "styled-components";
import Earnings from './Earnings';
import data from '../../data/data';
import rice from '../../data/rice';
import beef from '../../data/beef';
import sugar from '../../data/sugar';
function Chats() {



  return (
    <div className="grid">

    <div className="row__two">
      <Earnings data={data} title={'beans'} units={"/100kg bag"} />
    
      
      <Earnings data={sugar} title={"sugar"} />
      
      
      <Earnings data={sugar} title={"Maize"} units={'/100kg bag'}/>
      <Earnings data={data} title={"Fruits"} units={'/1 crate'}/>
      
      <Earnings data={data} title={"Milk"} units={'/40L'}/>
      <Earnings data={data} title={"Oilseeds"} units={'/1 crate'}/>
      <Earnings data={rice} title={'Rice'} units={rice[0].unit}/>
      <Earnings data={beef} title={'Beef'} units={beef[0].unit}/>
      <Earnings data={beef} title={'Avocado'} units={'/tonne'}/>
      <Earnings/>
    </div>
  </div>
  )
}

const Section = styled.section`
  margin-left: 18vw;
  padding: 2rem;
  height: 100%;
  .grid {
    
    display: flex;
    flex-direction: column;
    height: 100%;
    gap: 1rem;
    margin-top: 2rem;
    .row__one {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      height: 50%;
      gap: 1rem;
    }
    .row__two {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      height: 50%;
      gap: 3rem;
    }
  }

  @media screen and (min-width: 280px) and (max-width: 1080px) {
    margin-left: 0;
    .grid {
      .row__one,
      .row__two {
        grid-template-columns: 1fr;
      }
    }
  }
`;

export default Chats
