import React from 'react'
import styled from 'styled-components'
import img from '../../assets/profile.jpg'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { cardStyle} from './ReusableStyles'

function Profile() {
    return (
        <Section>
            <div className="image">
                <img src={'https://i.natgeofe.com/n/17fe550f-c244-47cf-9be3-f875d2d829e3/pepsico-woman-plants-rice-in-paddies_3x2.jpg'} alt="" />
            </div>
            <div className="title">
                <h2>Wara Farm</h2>
                <h5><HiOutlineLocationMarker />Nairobi, Kenya</h5>
            </div>
            <div className="info">
                <div className="container">
                    <h5>Days at work</h5>
                    <h3>25</h3>
                </div>
                <div className="container">
                    <h5>Orders</h5>
                    <h3>427</h3>
                </div>
                <div className="container">
                    <h5>Hours</h5>
                    <h3>76</h3>
                </div>
            </div>
        </Section>
    )
}

const Section = styled.section`
    ${cardStyle}
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    .image {
        max-height: 10rem;
        overflow: hidden;
        border-radius: 20rem;
        img {
            height: 10rem;
        width: 10rem;
        object-fit: cover;
        border-radius: 20rem;
        transition: 0.5s ease-in-out;
        }
        &:hover {
            img {
                transform: scale(1.1);
            }
        }
    }
    .title {
        text-align: center;
        h2, h5 {
            color: #4DB852;
            font-family: 'Permanent Marker', cursive;
            letter-spacing: 0.3rem;
        }
        h5 {
            letter-spacing: 0.2rem;
        }
    }
    .info {
        display: flex;
        gap: 1rem;
        .container {
            text-align: center;
        }
    }
`;

export default Profile
