import React from 'react'
import Analytics from './Analytics'
import Earnings from './Earnings'
import FAQs from './FAQs'
import Profile from './Profile'
import Transfers from './Transfers'
import styled from "styled-components";

export default function StartsDash() {
  return (
    <div className="grid">
    <div className="row__one">
      <Analytics/>
      <FAQs/>
    </div>
    <div className="row__two">
      <Earnings/>
      <Transfers/>
      <Profile/>
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
      gap: 1rem;
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


