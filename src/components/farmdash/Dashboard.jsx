import React, { useEffect } from "react";
import styled from "styled-components";
import NavBar from "./NavBar";
import Analytics from "./Analytics";
import FAQs from "./FAQs";
import Earnings from "./Earnings";
import Transfers from "./Transfers";
import Profile from "./Profile";
import scrollreveal from "scrollreveal";

function Dashboard() {
  useEffect(() => {
    const sr = scrollreveal({
      origin: "bottom",
      distance: "80px",
      duration: 1000,
      reset: false,
    });

    sr.reveal(
      `
            nav,
            .row__one,
            .row__two
          `,
      {
        opacity: 0,
        interval: 100,
      }
    );
  }, []);

  return (
    <Section>
      <NavBar />
      <div className="grid">
        <div className="row__one">
          <Analytics />
          <FAQs />
        </div>
        <div className="row__two">
          <Earnings />
          <Transfers />
          <Profile />
        </div>
      </div>
    </Section>
  );
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

export default Dashboard;
