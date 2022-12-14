import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
const Navbar = () => {
    return (

        <Nav >
            <div className="nav-bar">
                <ul className="navbar-list">
                    <li>
                        <NavLink className="nav-link">save more on app</NavLink>
                    </li>

                    <li>
                        <NavLink className="nav-link">sell on daraz</NavLink>
                    </li>

                    <li>
                        <NavLink className="nav-link">customer care</NavLink>
                    </li>

                    <li>
                        <NavLink className="nav-link">track my order</NavLink>
                    </li>

                    <li>
                        <NavLink to="/login" className="nav-link">Login</NavLink>
                    </li>

                    <li>
                        <NavLink to="/signup" className="nav-link">sign up</NavLink>
                    </li>

                    <li>
                        <NavLink className="nav-link">Language</NavLink>
                    </li>

                </ul>
            </div>

            <div className="search-component">
                <div className="logo" >
                    <NavLink to="/"><img src="https://icms-image.slatic.net/images/ims-web/458d4688-ae26-4e6d-8f39-c26194de228a.png"
                        alt="darax"
                    /></NavLink>

                </div>

                <div className="search-comp">
                    <input type="text" placeholder="Search in Daraz" />
                    <div className="search-icon">
                        <  SearchIcon className="hello" />

                    </div>
                </div>

                <div className="cart">
                    <ShoppingCartIcon />
                </div>

                <div className="download-app-icon">
                    <img src="https://icms-image.slatic.net/images/ims-web/c116120e-aea1-4350-9f1c-c0eab8783647.gif" />
                </div>
            </div>


        </Nav>




    )
};

const Nav = styled.nav`
    .nav-bar{
        background-color: #EAE6E5;
        height: 20px;
        width: auto;

        .navbar-list{
            font-size: 12px;
            justify-content: space-between;
            text-align: right;
            justify-content: space-between;
            text-transform: uppercase;
            align-items: center;

            

            li{
                display: inline-block;
                list-style: none;
                
                
                .nav-link{
                    text-decoration: none;
                    padding: 25px 20px;
                    color: black;
                    /* align-items: center; */

                    &:hover{
                    text-decoration: underline;
                    color: orange;
                }
                }

               
            }
            
        }
    }

    .search-component{
        height: 7rem;
        /* background-color: aliceblue; */
        display: flex;
        align-items: center;
        justify-content: space-between;

        .logo{
            /* width: 20px; */
            padding-bottom: 50px;
            padding-left: 70px;
            
            img{
                width: 9rem;
                height: 45px;
            }
        }

        .search-comp{
            padding-left: 80px;
            padding-bottom: 50px;
            display: flex;
            input{
                height: 38px;
                width: 35rem;
                background-color: #EAE6E5;
                /* padding-bottom: 150px; */
                border-style:none;
            }

            .search-icon{
                /* padding-bottom: 50px; */
                /* padding-top: 30px; */
                /* margin-top: 40px; */
                width: 2.5rem;
                height: 40px;
                background-color: #F95F1D;
                align-items: center;
                justify-content: center;

                .hello{
                    align-items: center;
                    justify-content: center;
                    padding: 6px 6px;
                }
            }
        }

        .download-app-icon{
            flex: 1;
            padding-bottom: 90px;
            /* padding-right:250px; */

            img{
                width: 13rem;
                height: 2.9rem;
                position: absolute;
                padding-left: 100px;
                
            }
        }

        .cart{
            position: relative;
            width: 3rem;
            padding-left:50px;
            padding-bottom: 45px;

        }
    }
`;

export default Navbar;