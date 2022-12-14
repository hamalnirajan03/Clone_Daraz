import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Footer = () => {
    return (
        <Wrapper>
            <div className="footer">
                <div className="footer-cont grid grid-three-column">
                    <div className="content-1">
                        <div className="customer-care">
                            <ul>
                                <h3>Customer Care</h3>

                                <li>
                                    <NavLink className="nav-link">Help Center</NavLink>
                                </li>
                                <li>
                                    <NavLink className="nav-link">How to Buy</NavLink>
                                </li>
                                <li>
                                    <NavLink className="nav-link">Returns & Refunds</NavLink>
                                </li>
                                <li>
                                    <NavLink className="nav-link">Contact Us</NavLink>
                                </li>

                            </ul>
                        </div>

                        <div className="earn-wiith-daraz">
                            <ul>
                                <h3>Earn with Daraz</h3>

                                <li>
                                    <NavLink className="nav-link">Daraz University</NavLink>
                                </li>
                                <li>
                                    <NavLink className="nav-link">Sell on daraz</NavLink>
                                </li>
                                <li>
                                    <NavLink className="nav-link">Code of Conduct</NavLink>
                                </li>

                            </ul>
                        </div>

                    </div>

                    <div className="content-2">
                        <ul>
                            <h3>Daraz</h3>

                            <li>
                                <NavLink className="nav-link">About Daraz</NavLink>
                            </li>
                            <li>
                                <NavLink className="nav-link">Careers</NavLink>
                            </li>
                            <li>
                                <NavLink className="nav-link">Daraz Blog</NavLink>
                            </li>
                            <li>
                                <NavLink className="nav-link">Terms & Conditions</NavLink>
                            </li>
                            <li>
                                <NavLink className="nav-link">Privacy Policy</NavLink>
                            </li>
                            <li>
                                <NavLink className="nav-link">Digital Payments</NavLink>
                            </li>
                            <li>
                                <NavLink className="nav-link">Daraz Customer University</NavLink>
                            </li>
                            <li>
                                <NavLink className="nav-link">Daraz Affiliate Program</NavLink>
                            </li>

                        </ul>
                    </div>

                    <div className="content-main">
                        <div className="content-3">
                            <img src="https://laz-img-cdn.alicdn.com/images/ims-web/TB12bJbXwFY.1VjSZFnXXcFHXXa.png"></img>

                            <div className="daraz-logo2">
                                <img src="https://icms-image.slatic.net/images/ims-web/a672d2c8-76a8-4661-8ec4-ebdbb114294e.png" />
                                <p>Happy Shopping</p>
                                <p>Download App</p>
                            </div>
                        </div>


                        <div className="available">
                            <img src="images/appstore.png"></img>

                            <img src="images/googleplay.png" />

                            <img src="images/download-app-gallery.webp" />

                        </div>

                    </div>



                </div>

                <div className="important-links">
                    <div className="payment">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnoTGNkO0TmSawy4xwxBazlFjo4lyXH4f_Zw&usqp=CAU" />
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7kSbRymbxFo4lwLOr1tPZQwAYBd1zaLegKA&usqp=CAU" />
                        <img src="" />
                    </div>

                    <div className="international">

                    </div>

                    <div className="follow-us">

                    </div>

                    <div className="verified">

                    </div>

                </div>

            </div>
        </Wrapper>
    )
};

const Wrapper = styled.section`
.footer-cont{
    background-color: #2B3773;
    width: 100%;

    display: flex;
    
   

    .content-1{
        .customer-care{
            h3{
                color: white;
            }

            li{
                list-style: none;
                color: white;
                text-decoration: none;
               
            }
        }
    }



    .content-main{
        img{
            width: 100px;
            height: 100px;
        }

        .content-3{
            display: flex;
            margin: 20px;

            img{
                margin: 5px;
            }
        }

        .daraz-logo2{
            margin-left: 10px;
            img{
                width: 50px;
                height: 50px;
            }

            p{
                color: white;
                font-weight: bold;
                font-size: 15px;
                line-height: 5px;
            }
        }
        .available{
                img{
                width: 150px;
                height: 40px;
                margin: 5px;
                
            }
        }
    }
    
}
`;

export default Footer;