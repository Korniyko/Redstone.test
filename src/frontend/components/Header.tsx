import React, { useEffect, useState } from "react";
import './Header.scss'
import Logo from '../img/logo.svg';
import Button from "./common/Button";
import PopUp from "./common/PopUp";
import Menu from "./Menu";
import { IoPhonePortraitSharp } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";


const Header = () => {

    const [isOpenPopUp, setOpenPopUp] = useState(false)
    const [isOpenPopUpMenu, setOpenPopUpMenu] = useState(false)
    const [contactModalContent, setContactModalContent] = useState('')

    useEffect(() => {
        fetch('http://localhost:6500/merge/uk/_popup.php', {
            headers: {
                'Content-type': 'text/html'
            },
            method: 'GET',
        }).then(response => response.text())
            .then(html => {
                const tempElement = document.createElement('div');
                tempElement.innerHTML = html;
                const targetDiv = tempElement.querySelector('.popup-feedback');

                if (targetDiv) {
                    const content = targetDiv.innerHTML;
                    setContactModalContent(content);
                }
            })
            .catch((error: Error) => {
                console.error(`Error happend on getCategories:${error}`)
            })
    }, [])

    useEffect(() => {
        if (isOpenPopUp) {
            setTimeout(() => {
                const closeButton = document.querySelector('.popup-feedback .btn-close');

                closeButton?.addEventListener('click', function () {
                    setOpenPopUp(false)
                })
            }, 0)
        }



    }, [isOpenPopUp])

    const openPopUp = () => {
        setOpenPopUp(true)
    }
    const openPopUpMenu = () => {
        setOpenPopUpMenu(true)
    }


    return (
        <>
            <header >
                <div className="headers container">
                    <div className="logoContainer">
                        <div className="logo">
                            <img src={Logo} alt="logo" />
                        </div>

                        <div className="menuBanner" onClick={() => openPopUpMenu()} >
                            <RxHamburgerMenu />   МЕНЮ
                        </div>
                    </div>
                    <nav className="menu">
                        <ul className="menuList">
                            <li >
                                <a className="menuListItem" href="#">ПОРТФОЛІО</a>
                            </li>
                            <li >
                                <a className="menuListItem" href="#">ПОСЛУГИ</a>
                            </li>
                            <li >
                                <a className="menuListItem" href="#">БРЕНДИНГ</a>
                            </li>
                            <li >
                                <a className="menuListItem" href="#">КОНТАКТИ</a>
                            </li>
                        </ul>
                    </nav>
                    <div className="containerContacts">
                        <div className="telephone">
                            <a href="tel:+380676075784"><IoPhonePortraitSharp /> +38 067 607 57 84</a>
                        </div>
                        <Button label='Задати запитання' onClick={() => openPopUp()} />
                    </div>

                </div>
            </header>
            {isOpenPopUp && (
                <PopUp backgroundColor="white">
                    <div className="popup-feedback" dangerouslySetInnerHTML={{ __html: contactModalContent }}></div>
                </PopUp>
            )}
            {isOpenPopUpMenu && (
                <PopUp backgroundColor="rgb(66 66 66)">
                    <Menu setOpenPopUpMenu={setOpenPopUpMenu} />
                </PopUp>
            )}

        </>

    )
}
export default Header;