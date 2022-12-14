import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import CarouselComponent from '../../CarouselComponent';

const Home = () => {
    return (
        <Wrapper>
            <div className="main-section">
                <div className="carousel">
                    <CarouselComponent />
                </div>

                <div className="sale">
                    <img src="https://gcp-img.slatic.net/lazada/ac0b1cef-9c47-46bd-977a-bc69029f364b_NP-1920-282.gif"></img>
                </div>
            </div>
        </Wrapper>

    )

};

const Wrapper = styled.section`
    .main-section{
        .sale{
            padding-left: 180px;
            align-items: center;
            justify-content: center;
            img{
                width: 60rem;
                height: 10rem;
            }
        }
    }
`;


export default Home;