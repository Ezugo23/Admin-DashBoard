/* eslint-disable react/prop-types */
import { Outlet, Link } from "react-router-dom";
import { MobileView } from 'react-device-detect';
export default function DashbaordSidebar(props) {

    return (

        <>

            <div className="sidebar col-md-3 col-lg-2 ">
                <div className="offcanvas-md offcanvas-end h-100" tabIndex="-1" id="sidebarMenu" aria-labelledby="sidebarMenuLabel">
                    <div className="offcanvas-header">
                        
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" data-bs-target="#sidebarMenu" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body d-md-flex flex-column p-0 pt-lg-3 overflow-y-auto sidebar_content_wrap">
                        
                        <ul className="nav flex-column">

                            <li className="nav-item mb-2">
                                <Link to="/" className="nav-link d-flex align-items-center gap-2" style={{ color: `${props.nav_item_color1}` }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M11.3572 0.543C11.6898 0.514 12.0255 0.5 12.3651 0.5C18.7665 0.5 23.9564 5.649 23.9564 12C23.9564 12.337 23.9423 12.67 23.9131 13H22.3951C21.8891 18.053 17.5913 22 12.3651 22C6.7983 22 2.28577 17.523 2.28577 12C2.28577 6.815 6.26409 2.551 11.3572 2.05V0.543ZM11.3572 13V4.062C7.13726 4.59472 4.06007 8.28785 4.32646 12.5C4.59284 16.7122 8.11118 19.9948 12.3651 20C16.4289 19.9999 19.8577 17.0001 20.3661 13H11.3572ZM13.3731 2.552C17.8638 3.02442 21.4119 6.54461 21.8881 11H13.3731V2.552Z" fill="black" />
                                    </svg>
                                    DASHBOARD
                                </Link>
                            </li>


                            <li className="nav-item mb-2">
                                <Link to="/profile" className="nav-link d-flex align-items-center gap-2" style={{ color: `${props.nav_item_color2}` }} href="./page/profile">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M2 3.993C2.00381 3.44656 2.44556 3.00436 2.992 3H21.008C21.556 3 22 3.445 22 3.993V20.007C21.9962 20.5534 21.5544 20.9956 21.008 21H2.992C2.44397 20.9994 2 20.555 2 20.007V3.993ZM4 5V19H20V5H4ZM12 7H6V13H12V7ZM8 9V11H10V9H8ZM18 17V15H6V17H18ZM14 7H18V9H14V7ZM18 11H14V13H18V11Z" fill="black" />
                                    </svg>
                                    PROFILE
                                </Link>
                            </li>

                            <li className="nav-item mb-2">
                                
                                <button className="w-100 nav-link text-dark btn btn-toggle item-flex rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#user-collapse" aria-expanded="false">
                                    <div className="nav-item d-flex align-items-center gap-2">

                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M6 7C6 10.315 8.685 13 12 13C15.315 13 18 10.315 18 7C18 3.685 15.315 1 12 1C8.685 1 6 3.685 6 7ZM14 16.342V14.252V14.251C11.6039 13.6323 9.05641 14.1574 7.10022 15.673C5.14402 17.1887 3.99937 19.5243 4 21.999L6 22C5.99963 20.052 6.94499 18.225 8.53543 17.1002C10.1259 15.9754 12.1634 15.6927 14 16.342ZM12 11C14.21 11 16 9.21 16 7C16 4.79 14.21 3 12 3C9.79 3 8 4.79 8 7C8 9.21 9.79 11 12 11ZM18 14V17H15V19H18V22H20V19H23V17H20V14H18Z" fill="black"/>
                                        </svg>
                                        USERS
                                    </div>
                                    
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M12 14L8 10H16L12 14Z" fill="black"/>
                                    </svg>
                                   
                                </button>
                                
                                <div className="collapse pl-3" id="user-collapse" style={{ paddingLeft: '20px' }}>
                                    <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                        <li><Link to="/administrators" className="nav-link d-flex align-items-center gap-2" style={{ color: `${props.nav_item_color3}` }}><svg xmlns="http://www.w3.org/2000/svg" width="13" height="1" viewBox="0 0 13 1" fill="none">
                                                <path d="M0.5 0.5H12.5" stroke="black" strokeWidth="0.5" strokeLinecap="square"/>
                                            </svg>Administrators</Link></li>
                                        <li><Link to="/operators" className="nav-link d-flex align-items-center gap-2" style={{ color: `${props.nav_item_color4}` }}><svg xmlns="http://www.w3.org/2000/svg" width="13" height="1" viewBox="0 0 13 1" fill="none">
                                                <path d="M0.5 0.5H12.5" stroke="black" strokeWidth="0.5" strokeLinecap="square"/>
                                            </svg>Operators</Link></li>
                                        <li><Link to="/all-user" className="nav-link d-flex align-items-center gap-2" style={{ color: `${props.nav_item_color5}` }}><svg xmlns="http://www.w3.org/2000/svg" width="13" height="1" viewBox="0 0 13 1" fill="none">
                                                <path d="M0.5 0.5H12.5" stroke="black" strokeWidth="0.5" strokeLinecap="square"/>
                                            </svg>All Users</Link></li>
                                        
                                    </ul>
                                </div>
                            </li>

                            <li className="nav-item mb-2">
                                
                                <button className="nav-link item-flex w-100 text-dark btn btn-toggle rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#foodsell-collapse" aria-expanded="false">
                                    <div className="nav-item d-flex align-items-center gap-2">

                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M21 13.242V20H22V22H2V20H3V13.242C1.74968 12.4075 0.999173 11.0033 1 9.5C1 8.673 1.224 7.876 1.633 7.197L4.345 2.5C4.52363 2.19061 4.85375 2.00001 5.211 2H18.79C19.1473 2.00001 19.4774 2.19061 19.656 2.5L22.358 7.182C23.5973 9.24037 22.9992 11.9093 21 13.242ZM19 13.972C17.6063 14.1283 16.2195 13.6254 15.25 12.612C14.4017 13.4993 13.2275 14.0011 12 14.001C10.7728 14.0016 9.59863 13.5005 8.75 12.614C7.78034 13.627 6.39354 14.1296 5 13.973V20H19V13.973V13.972ZM3.356 8.213L5.789 4H5.79H18.21L20.635 8.197C21.1204 9.00196 21.1133 10.0112 20.6166 10.8092C20.1198 11.6072 19.2174 12.0592 18.2808 11.9789C17.3442 11.8987 16.5318 11.2999 16.178 10.429C15.842 9.592 14.657 9.592 14.322 10.429C13.9429 11.3792 13.0231 12.0025 12 12.0025C10.9769 12.0025 10.0571 11.3792 9.678 10.429C9.342 9.592 8.157 9.592 7.822 10.429C7.15379 11.5524 5.73304 11.9714 4.56218 11.3904C3.39133 10.8094 2.86563 9.42459 3.356 8.213Z" fill="black"/>
                                        </svg>
                                        FOOD SELLERS
                                    </div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M12 14L8 10H16L12 14Z" fill="black"/>
                                    </svg>
                                </button>
                                
                                <div className="collapse pl-3" id="foodsell-collapse" style={{ paddingLeft: '20px' }}>
                                    <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                        <li><Link to="/food-setting" className="nav-link d-flex align-items-center gap-2" style={{ color: `${props.nav_item_color6}` }}><svg xmlns="http://www.w3.org/2000/svg" width="13" height="1" viewBox="0 0 13 1" fill="none">
                                                <path d="M0.5 0.5H12.5" stroke="black" strokeWidth="0.5" strokeLinecap="square"/>
                                            </svg>Settings</Link></li>
                                        <li><Link to="/food-seller-list" className="nav-link d-flex align-items-center gap-2" style={{ color: `${props.nav_item_color7}` }}><svg xmlns="http://www.w3.org/2000/svg" width="13" height="1" viewBox="0 0 13 1" fill="none">
                                                <path d="M0.5 0.5H12.5" stroke="black" strokeWidth="0.5" strokeLinecap="square"/>
                                            </svg>Food Sellers List</Link></li>
                                        <li><Link to="/owe-amount" className="nav-link d-flex align-items-center gap-2" style={{ color: `${props.nav_item_color8}` }}><svg xmlns="http://www.w3.org/2000/svg" width="13" height="1" viewBox="0 0 13 1" fill="none">
                                                <path d="M0.5 0.5H12.5" stroke="black" strokeWidth="0.5" strokeLinecap="square"/>
                                            </svg>Owe Amount</Link></li>    
                                    </ul>
                                </div>
                            </li>

                            <li className="nav-item mb-2">
                                
                                <button className="nav-link item-flex w-100 text-dark btn btn-toggle rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#drivers-collapse" aria-expanded="false">
                                    <div className="nav-item d-flex align-items-center gap-2">

                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M19 13C19.0009 10.4987 17.6665 8.18713 15.5 6.937H15.501C15.662 6.645 15.789 6.33 15.874 6H19V4H15.874C15.4165 2.23479 13.8235 1.00206 12 1.00206C10.1765 1.00206 8.58351 2.23479 8.126 4H5V6H8.125C8.20967 6.32701 8.33569 6.64188 8.5 6.937C6.33349 8.18713 4.99909 10.4987 5 13V21H9.17C9.5934 22.2 10.7275 23.0025 12 23.0025C13.2725 23.0025 14.4066 22.2 14.83 21H19V13ZM12 9C12.748 9 13.448 8.795 14.047 8.437C15.8441 9.24369 17.0002 11.0302 17 13V19H15V15C15 13.3432 13.6569 12 12 12C10.3431 12 9 13.3432 9 15V19H7V13C6.99977 11.0302 8.15591 9.24369 9.953 8.437C10.5718 8.8065 11.2793 9.00109 12 9ZM12 14C11.4477 14 11 14.4477 11 15V20C11 20.5523 11.4477 21 12 21C12.5523 21 13 20.5523 13 20V15C13 14.4477 12.5523 14 12 14ZM14 5C14 6.10457 13.1046 7 12 7C10.8954 7 10 6.10457 10 5C10 3.89543 10.8954 3 12 3C13.1046 3 14 3.89543 14 5Z" fill="black"/>
                                        </svg>
                                        DRIVERS
                                    </div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M12 14L8 10H16L12 14Z" fill="black"/>
                                    </svg>
                                </button>
                                
                                <div className="collapse pl-3" id="drivers-collapse" style={{ paddingLeft: '20px' }}>
                                    <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                        <li>
                                            <Link to="/driver-setting" className="nav-link d-flex align-items-center gap-2" style={{ color: `${props.nav_item_color9}` }}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="1" viewBox="0 0 13 1" fill="none">
                                                <path d="M0.5 0.5H12.5" stroke="black" strokeWidth="0.5" strokeLinecap="square"/>
                                            </svg>Setting
                                            </Link>
                                        </li>
                                        <li><Link to="/driver-list" className="nav-link d-flex align-items-center gap-2" style={{ color: `${props.nav_item_color10}` }}><svg xmlns="http://www.w3.org/2000/svg" width="13" height="1" viewBox="0 0 13 1" fill="none">
                                                <path d="M0.5 0.5H12.5" stroke="black" strokeWidth="0.5" strokeLinecap="square"/>
                                            </svg>List of Drive</Link></li>
                                        <li><Link to="/driver-owe-amount" className="nav-link d-flex align-items-center gap-2" style={{ color: `${props.nav_item_color11}` }}><svg xmlns="http://www.w3.org/2000/svg" width="13" height="1" viewBox="0 0 13 1" fill="none">
                                                <path d="M0.5 0.5H12.5" stroke="black" strokeWidth="0.5" strokeLinecap="square"/>
                                            </svg>Owe Amount</Link></li>    
                                    </ul>
                                </div>
                            </li>
                            
                            <li className="nav-item mb-2">
                                <Link to="/other-history" className="nav-link d-flex align-items-center gap-2" style={{ color: `${props.nav_item_color12}` }} href="./page/profile">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M5 19V3H3V21H21V19H5ZM21.707 7.707L20.293 6.293L16 10.585L13 7.586L7.293 13.293L8.707 14.707L13 10.415L16 13.414L21.707 7.707Z" fill="black"/>
                                    </svg>
                                    OTHER HISTORY
                                </Link>
                            </li>
                            <li className="nav-item mb-2">
                                <Link to="/faq" className="nav-link d-flex align-items-center gap-2" style={{ color: `${props.nav_item_color13}` }} href="./page/profile">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2C6.477 2 2 6.477 2 12ZM20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM13 15V17H11V15H13ZM13 14V13.355C14.6436 12.8651 15.6904 11.2566 15.4726 9.55541C15.2549 7.8542 13.8368 6.56119 12.1228 6.50102C10.4087 6.44085 8.90349 7.63124 8.567 9.313L10.529 9.706C10.6839 8.93117 11.4133 8.40935 12.1966 8.51295C12.9799 8.61655 13.5486 9.31006 13.4967 10.0985C13.4448 10.887 12.7902 11.5 12 11.5C11.4477 11.5 11 11.9477 11 12.5V14H13Z" fill="black"/>
                                    </svg>
                                    FAQ
                                </Link>
                            </li>
                            
                            <li className="nav-item">
                                <Link to="/general-setting" className="nav-link d-flex align-items-center gap-2" style={{ color: `${props.nav_item_color14}` }} href="./page/profile">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M2.21276 9.94C1.92517 11.2983 1.92517 12.7017 2.21276 14.06C3.32276 13.929 4.29176 14.296 4.60876 15.061C4.92576 15.826 4.49976 16.772 3.62276 17.464C4.3798 18.6277 5.37209 19.62 6.53576 20.377C7.22876 19.499 8.17376 19.074 8.93876 19.391C9.70276 19.707 10.0698 20.677 9.93976 21.787C11.298 22.0746 12.7015 22.0746 14.0598 21.787C13.9288 20.677 14.2958 19.708 15.0608 19.391C15.8258 19.074 16.7718 19.5 17.4638 20.377C18.6274 19.62 19.6197 18.6277 20.3768 17.464C19.4988 16.771 19.0738 15.826 19.3908 15.061C19.7068 14.297 20.6768 13.93 21.7868 14.06C22.0744 12.7017 22.0744 11.2983 21.7868 9.94C20.6768 10.071 19.7078 9.704 19.3908 8.939C19.0738 8.174 19.4998 7.228 20.3768 6.536C19.6197 5.37233 18.6274 4.38004 17.4638 3.623C16.7708 4.501 15.8258 4.926 15.0608 4.609C14.2968 4.293 13.9298 3.323 14.0598 2.213C12.7015 1.92541 11.298 1.92541 9.93976 2.213C10.0708 3.323 9.70376 4.292 8.93876 4.609C8.17376 4.926 7.22776 4.5 6.53576 3.623C5.37209 4.38004 4.3798 5.37233 3.62276 6.536C4.50076 7.229 4.92576 8.174 4.60876 8.939C4.29276 9.703 3.32276 10.07 2.21276 9.94ZM6.45676 14.296C6.00676 13.212 5.09976 12.515 3.99976 12.21C3.99576 12.07 3.99576 11.93 3.99976 11.79C5.09976 11.485 6.00676 10.788 6.45676 9.704C6.90476 8.619 6.75676 7.485 6.19476 6.492C6.29076 6.39 6.38976 6.291 6.49176 6.195C7.48376 6.757 8.61876 6.906 9.70376 6.457C10.7878 6.007 11.4848 5.1 11.7898 4C11.9297 3.99629 12.0698 3.99629 12.2098 4C12.5148 5.1 13.2118 6.007 14.2958 6.457C15.3808 6.905 16.5148 6.757 17.5078 6.195C17.6094 6.29136 17.7084 6.3904 17.8048 6.492C17.2428 7.484 17.0938 8.619 17.5428 9.704C17.9928 10.788 18.8998 11.485 19.9998 11.79C20.0038 11.93 20.0038 12.07 19.9998 12.21C18.8998 12.515 17.9928 13.212 17.5428 14.296C17.0948 15.381 17.2428 16.515 17.8048 17.508C17.7088 17.61 17.6098 17.709 17.5078 17.805C16.5158 17.243 15.3808 17.094 14.2958 17.543C13.2118 17.993 12.5148 18.9 12.2098 20C12.0698 20.004 11.9298 20.004 11.7898 20C11.4848 18.9 10.7878 17.993 9.70376 17.543C8.61876 17.095 7.48476 17.243 6.49176 17.805C6.38976 17.709 6.29076 17.61 6.19476 17.508C6.75676 16.516 6.90576 15.381 6.45676 14.296ZM11.9998 15C10.3429 15 8.99976 13.6569 8.99976 12C8.99976 10.3431 10.3429 9 11.9998 9C13.6566 9 14.9998 10.3431 14.9998 12C14.9998 13.6569 13.6566 15 11.9998 15ZM12.9998 12C12.9998 12.5523 12.552 13 11.9998 13C11.4475 13 10.9998 12.5523 10.9998 12C10.9998 11.4477 11.4475 11 11.9998 11C12.552 11 12.9998 11.4477 12.9998 12Z" fill="black"/>
                                    </svg>
                                    GENERAL SETTING
                                </Link>
                            </li>


                        </ul>


                        

                        <MobileView>
                            <div className="row justify-content-center">

                                <div className="col-9" style={{  }}>

                                    <div className="input-group input-flex mt-5">
                                        <input className="form-control bg-white border text-dark rounded-pill" type="text" placeholder="search" id="example-search-input" />
                                        <span className="input-group-append">
                                            <button className="btn  ms-n5" type="button">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M11 2C15.968 2 20 6.032 20 11C20 15.968 15.968 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2ZM11 18C14.867 18 18 14.867 18 11C18 7.132 14.867 4 11 4C7.132 4 4 7.132 4 11C4 14.867 7.132 18 11 18ZM22.314 20.899L19.485 18.071L18.071 19.485L20.899 22.314L22.314 20.899Z" fill="black" />
                                                </svg>
                                            </button>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </MobileView>
                        <div>
                            <hr/>
                        <footer className="footer mt-auto py-3">
                            
                                    <div className="d-flex justify-content-center align-items-center gap-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                            <path d="M14.7747 3.77068C14.2657 3.99581 13.726 4.14366 13.1734 4.20935C13.7559 3.86097 14.1918 3.31269 14.4 2.66668C13.8534 2.99201 13.254 3.22001 12.6294 3.34335C11.7666 2.42023 10.3909 2.19274 9.27688 2.78898C8.16287 3.38523 7.58912 4.65611 7.8787 5.88601C5.63672 5.77364 3.54786 4.71468 2.13204 2.97268C1.88423 3.39831 1.75401 3.88217 1.7547 4.37468C1.7547 5.34135 2.2467 6.19535 2.9947 6.69535C2.55204 6.68141 2.11912 6.56187 1.73204 6.34668V6.38135C1.73231 7.7087 2.66771 8.8521 3.9687 9.11535C3.55778 9.22671 3.12691 9.24312 2.7087 9.16335C3.07345 10.2995 4.12034 11.0779 5.31337 11.1C4.14533 12.0174 2.66053 12.4328 1.18604 12.2547C2.4605 13.0743 3.9441 13.5094 5.45937 13.508C10.588 13.508 13.3927 9.25935 13.3927 5.57468C13.3927 5.45468 13.3894 5.33335 13.384 5.21468C13.9299 4.82013 14.4011 4.33136 14.7754 3.77135L14.7747 3.77068Z" fill="black"/>
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                            <path d="M9.33317 9.00001H10.9998L11.6665 6.33334H9.33317V5.00001C9.33317 4.31334 9.33317 3.66668 10.6665 3.66668H11.6665V1.42668C11.4492 1.39801 10.6285 1.33334 9.76184 1.33334C7.95184 1.33334 6.6665 2.43801 6.6665 4.46668V6.33334H4.6665V9.00001H6.6665V14.6667H9.33317V9.00001Z" fill="black"/>
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M8.00016 1.33334C4.32016 1.33334 1.3335 4.32001 1.3335 8.00001C1.3335 11.68 4.32016 14.6667 8.00016 14.6667C11.6735 14.6667 14.6668 11.68 14.6668 8.00001C14.6668 4.32001 11.6735 1.33334 8.00016 1.33334ZM12.4035 4.40668C13.224 5.40621 13.678 6.65625 13.6902 7.94934L13.6709 7.94561C13.3994 7.89274 11.5707 7.53657 9.72816 7.76868C9.70151 7.71086 9.67738 7.65027 9.65282 7.58861C9.63745 7.55002 9.62192 7.51102 9.6055 7.47201C9.48752 7.19404 9.36215 6.91928 9.2295 6.64801C11.3262 5.79468 12.2808 4.56534 12.4035 4.40668ZM11.7748 3.74868C10.7695 2.85934 9.44683 2.31668 8.00016 2.31668C7.54977 2.31514 7.10073 2.36615 6.66216 2.46868L6.66506 2.47262C6.83365 2.70186 7.86098 4.09875 8.78816 5.80201C10.8128 5.04268 11.6735 3.89268 11.7748 3.74868ZM5.57816 2.85201C6.34111 3.90956 7.04593 5.00785 7.6895 6.14201C5.07628 6.83786 2.76324 6.83566 2.44125 6.83535H2.44124L2.4255 6.83534C2.79689 5.08819 3.96304 3.61479 5.57816 2.85201ZM2.30216 7.83334V8.00668H2.30283C2.30259 9.41135 2.82272 10.7663 3.76283 11.81C3.89283 11.5927 5.45483 9.00401 8.39083 8.05734C8.42812 8.04595 8.46737 8.03474 8.50664 8.02352C8.54321 8.01307 8.57979 8.00262 8.61483 7.99201C8.47016 7.66668 8.31883 7.34134 8.15216 7.02334C5.31016 7.87668 2.54883 7.84001 2.30216 7.83334ZM8.00016 13.698C6.73445 13.7002 5.50461 13.2776 4.5075 12.498C4.60883 12.288 5.76616 10.0607 8.97616 8.94001C8.98236 8.93719 8.98724 8.93557 8.99187 8.93403C8.99821 8.93192 9.00407 8.92997 9.01216 8.92534C9.55372 10.3223 9.96068 11.7677 10.2275 13.242C9.52404 13.5447 8.76598 13.6999 8.00016 13.698ZM10.0675 8.66534C10.8128 10.7113 11.1168 12.3747 11.1742 12.7213C12.4818 11.8464 13.365 10.4654 13.6108 8.91134C13.4162 8.84601 11.8542 8.38334 10.0675 8.66534Z" fill="black"/>
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M7.67766 4.62334C7.22766 4.50001 6.73516 4.45834 6.20266 4.45834H0.833496V15.8367H6.326C6.81766 15.8367 7.30933 15.7542 7.801 15.63C8.26753 15.5137 8.71082 15.3186 9.11183 15.0533C9.481 14.8058 9.8085 14.435 10.0135 14.0225C10.2185 13.61 10.3418 13.1158 10.3418 12.5383C10.3418 11.8375 10.1368 11.2192 9.8085 10.7242C9.481 10.23 8.9485 9.85918 8.25183 9.65251C8.7435 9.40501 9.1535 9.07584 9.39933 8.70418C9.686 8.33334 9.8085 7.83918 9.8085 7.26168C9.8085 6.76751 9.72683 6.31334 9.56266 5.94251C9.39933 5.57168 9.1535 5.28251 8.82516 5.07668C8.47579 4.85237 8.08601 4.69838 7.67766 4.62334ZM6.981 8.74584C6.69433 8.95168 6.32516 9.07501 5.87433 9.07501L5.87516 9.07584H3.3335V6.39584H5.71016C5.95683 6.39584 6.161 6.39584 6.366 6.43751C6.571 6.47834 6.73516 6.56084 6.89933 6.64334C7.06266 6.76668 7.186 6.89084 7.26766 7.05584C7.34933 7.22001 7.391 7.46751 7.391 7.71501C7.391 8.16834 7.26766 8.54001 6.981 8.74584ZM5.99766 13.94C6.2435 13.94 6.48933 13.8983 6.69433 13.8575C6.90131 13.8182 7.09706 13.7336 7.26766 13.61C7.43465 13.4894 7.57435 13.3349 7.67766 13.1567C7.75933 12.9508 7.84183 12.7033 7.84183 12.415C7.84183 11.8375 7.67766 11.425 7.35016 11.1367C7.02183 10.8892 6.571 10.7658 6.0385 10.7658H3.3335V13.9408H5.99766V13.94ZM15.3827 14.3933C14.7268 14.3933 14.2352 14.2283 13.9077 13.8983V13.8992C13.5793 13.5692 13.3335 12.9508 13.3335 12.2908H19.276C19.3168 11.6317 19.276 11.0542 19.1943 10.4775C19.0413 9.91643 18.7918 9.38629 18.4568 8.91084C18.1285 8.41584 17.7193 8.08584 17.186 7.79751C16.6535 7.50918 16.0385 7.38501 15.3418 7.38501C14.752 7.38301 14.1674 7.49506 13.6202 7.71501C13.1285 7.92168 12.6777 8.25084 12.3085 8.62168C11.9372 9.03141 11.6456 9.50675 11.4485 10.0233C11.2435 10.56 11.161 11.1367 11.161 11.755C11.161 12.415 11.2435 12.9917 11.4485 13.5275C11.6057 14.0415 11.8871 14.5088 12.2677 14.8883C12.6235 15.294 13.0741 15.6055 13.5793 15.795C14.1408 16.0149 14.7388 16.1268 15.3418 16.125C16.2843 16.125 17.0627 15.8775 17.7193 15.465C18.3743 15.0117 18.866 14.3108 19.1943 13.3217H17.186C17.1043 13.5692 16.8993 13.8167 16.571 14.0642C16.2435 14.27 15.8335 14.3933 15.3827 14.3933ZM16.4893 9.57001C16.2027 9.28168 15.7518 9.11668 15.2185 9.11668C14.8502 9.11668 14.5627 9.19918 14.3168 9.32251C14.0727 9.44584 13.9099 9.60946 13.7468 9.77335L13.7435 9.77668C13.5926 9.93606 13.4928 10.1369 13.4568 10.3533C13.45 10.3871 13.4432 10.4197 13.4367 10.4514L13.4367 10.4514C13.4029 10.6137 13.3743 10.7511 13.3743 10.8892H17.0627C16.981 10.2708 16.776 9.85918 16.4893 9.57001ZM17.4727 5.24168H12.8835V6.35501H17.4727V5.24168Z" fill="black"/>
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                            <path d="M2.04283 5.00668C3.17406 2.75408 5.47947 1.33255 8.00016 1.33334C9.79683 1.33334 11.3062 1.99334 12.4602 3.07001L10.5488 4.98201C9.8575 4.32134 8.97883 3.98468 8.00016 3.98468C6.2635 3.98468 4.7935 5.15801 4.27016 6.73334C4.13683 7.13334 4.06083 7.56001 4.06083 8.00001C4.06083 8.44001 4.13683 8.86668 4.27016 9.26668C4.79416 10.8427 6.2635 12.0153 8.00016 12.0153C8.89683 12.0153 9.66016 11.7787 10.2575 11.3787C10.9573 10.9179 11.4381 10.191 11.5882 9.36668H8.00016V6.78801H14.2788C14.3575 7.22401 14.4002 7.67868 14.4002 8.15134C14.4002 10.182 13.6735 11.8913 12.4122 13.0513C11.3095 14.07 9.80016 14.6667 8.00016 14.6667C6.23184 14.6674 4.53573 13.9652 3.28534 12.7148C2.03494 11.4644 1.33279 9.76834 1.3335 8.00001C1.3335 6.92401 1.59083 5.90668 2.04283 5.00668Z" fill="black"/>
                                        </svg>
                                    </div>
                                
                            
                        </footer>
                        </div>
                        
                        
                    </div>
                </div>
            </div>

            <Outlet />

        </>

    )

}