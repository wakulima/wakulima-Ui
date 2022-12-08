import React from 'react'
import styled from 'styled-components'
import { AreaChart, Area, Tooltip, ResponsiveContainer } from 'recharts'
import { cardStyle } from './farmdash/ReusableStyles'


function AgriChat({data, title,units}) {
    return (
        <Section>
            <div className="top">
                <div className="info">
                    <h4>{title}</h4>
                    <h1>{units}</h1>
                    <div className="growth">
                        <span>+2.45%</span>
                    </div>
                </div>
            </div>
            <div className="chart">
                <ResponsiveContainer height="100%" width="100%">
                    <AreaChart width={500} height={400} data={data} margin={{ top: 0, left: 0, right: 0, bottom: 0 }}>
                        <Tooltip cursor={true} />
                        <Area 
                            animationBegin={800}
                            animationDuration={2000}
                            type="monotone"
                            dataKey="price"
                            stroke="#ffc187"
                            fill="#8068223e"
                            strokeWidth={4}
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </Section>
    )
}

const Section = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 20rem;
    ${cardStyle}
    padding: 2rem 0 0;
    .top {
        .info {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 0.3rem;
            h1 {
                font-size: 2rem;
            }
            .growth {
                background-color: #90f795;
                padding: 0.5rem;
                border-radius: 1rem;
                transition: 0.3s ease-in-out;
                &:hover {
                    background-color: #4DB852;
                    
                    span {
                        color: white;
                    }
                }
                span {
                    color: black;
                }
            }
        }
    }
    .chart {
        height: 70%;
        .recharts-default-tooltip {
            background-color: black !important;
            border-color: black !important;
        }
    }
`;

export default AgriChat
