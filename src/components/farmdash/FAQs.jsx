import React from 'react'
import styled from "styled-components";
import { IoIosArrowForward } from "react-icons/io";
import { AiFillCalendar } from "react-icons/ai";
import { MdTimelapse } from "react-icons/md";
import { IoMdCash } from "react-icons/io";
import { cardStyle } from "./ReusableStyles";


function FAQs() {
    const faqs = [
        {
            icon: <AiFillCalendar />,
            text: "How to manage time and get good marks for trips",
        },
        {
            icon: <MdTimelapse />,
            text: "How to regulate transactions over time",
        },
        {
            icon: <IoMdCash />,
            text: "Withdrawing money through an ATM",
        },
        {
            icon: <AiFillCalendar />,
            text: "How to manage time and get good marks for trips",
        },
        {
            icon: <MdTimelapse />,
            text: "How to regulate transactions over time",
        },
        {
            icon: <IoMdCash />,
            text: "Withdrawing money through an ATM",
        },
    ];

    return (
        <Section className='content'>
            <div className="title">
                <h2>Information for Farmer</h2>
            </div>
            <div className="faqs">
                {
                    faqs.map((faq, index) => {
                        return (
                            <div className="faq" key={index}>
                                <div className="info">
                                    {faq.icon}
                                    <h4>{faq.text}</h4>
                                </div>
                                <IoIosArrowForward />
                            </div>
                        )
                    })
                }
            </div>
        </Section>
    )
}

const Section = styled.section`
     ${cardStyle}
   .content{
       padding:2rem;
   }
    .title {
        h2 {
            color: #4DB852;
            font-family: 'Permanent Marker', cursive;
            letter-spacing: 0.3rem;
        }
    }
    .faqs {
        display: flex;
        padding:2rem;
        flex-direction: column;
        gap: 1rem;
        margin-top: 1rem;
        .faq {
            display: flex;
            align-items: center;
            justify-content: space-between;
            cursor: pointer;
            .info {
                display: flex;
                gap: 1rem;
                align-items: center;
            }
            svg {
                font-size: 1.4rem;
            }
            &:nth-of-type(2) {
                border-top: 0.01rem solid #6c6e6e;
                border-bottom: 0.01rem solid #6c6e6e;
                padding: 0.8rem 0;
            }
        }
    }

    @media screen and (min-width: 280px) and (max-width: 1080px) {
        svg {
            font-size: 2rem !important;
        }
    }
`;

export default FAQs
