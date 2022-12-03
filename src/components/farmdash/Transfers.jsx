import React from 'react'
import styled from "styled-components";
import { HiArrowNarrowRight } from "react-icons/hi";
import avatarImage from "../../assets/avatarImage.jpeg";
import { cardStyle } from "./ReusableStyles";


function Transfers() {
    const transactions = [
        {
            image: avatarImage,
            name: "From Kishan Sheth",
            time: "Today, 16:36",
            amount: "+$50",
        },
        {
            image: avatarImage,
            name: "To Lauras Santos",
            time: "Today, 08:49",
            amount: "-$25",
        },
        {
            image: avatarImage,
            name: "From Jadon S.",
            time: "Yesterday, 14:36",
            amount: "+$150",
        },
    ];

    return (
        <Section>
            <div className="title">
                <h2>Your transfers</h2>
            </div>
            <div className="transactions">
                {
                    transactions.map((transaction, index) => {
                        return (
                            <div className="transaction" key={index}>
                                <div className="transaction__title">
                                    <div className="transaction__title__image">
                                        <img src={transaction.image} alt="transactions" />
                                    </div>
                                    <div className="transaction__title__details">
                                        <h3>{transaction.name}</h3>
                                        <h5>{transaction.time}</h5>
                                    </div>
                                    <div className="transaction__amount">
                                        <span>{transaction.amount}</span>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <a href="/" className="view">
                View all <HiArrowNarrowRight />
            </a>
        </Section>
    )
}

const Section = styled.section`
    ${cardStyle}
    display: flex;
    flex-direction: column;
    gap: 1rem;
    .title {
        h2 {
            color: #4DB852;
            font-family: 'Permanent Marker', cursive;
            letter-spacing: 0.3rem;
        }
    }
    .transactions {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        margin-top: 1rem;
        .transaction {
            display: flex;
            justify-content: space-between;
            align-items: center;
            &__title {
                display: flex;
                gap: 1rem;
                &__image {
                    img {
                        height: 2.5rem;
                    border-radius: 3rem;
                    }
                }
            }
            &__amount {
                background-color: #4DB852;
                padding: 0.2rem 0.5rem;
                width: 4rem;
                border-radius: 1rem;
                text-align: center;
                color: white;
                transition: 0.3s ease-in-out;
                &:hover {
                    background-color: #ffc107;
                    span {
                        color: black;

                    }
                }
                span {
                    color: white;
                }
            }
        }
    }
    .view {
        width: 100%;
        display: flex;
        justify-content: flex-end;
        text-align: center;
        align-items: center;
        text-decoration: none;
        font-weight: bold;
        margin-top: 1rem;
        gap: 0.5rem;
        color: #4DB852;
        svg {
            font-size: 1.4rem;
            transition: 0.3s ease-in-out;
            
        }
        &:hover {
            transform: translateX(0.5rem);
        }
    }

    @media screen and (min-width: 280px) and (max-width: 1080px) {
        .transactions {
            .transaction {
               flex-direction: column;
               align-items: center;
               gap: 1rem;
            }
        }   
    }
`;

export default Transfers
