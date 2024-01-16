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
    const [contactModalContent, setcontactModalContent] = useState('')

    useEffect(() => {
        fetch('https://redstone.media/merge/uk/_popup.php', {
            headers: {
                'Content-type': 'text/html'
            },
            method: 'GET',
        }).then((response: Response) => {
            if (!response.ok) {
                throw new Error(response.statusText)
            }
            return response
        }).then((response: Response) => response.json())
            .then((data: any) => {
                if (data.htmlPart) {
                    
                    const unescapedHtmlText = data.htmlPart.replace(/\\\\\\"/g, '"').replace(/\\n/g, '').replace(/\\\\"/g, '');
                    // const decodedHtml = decodeURIComponent(unescapedHtmlText);
                    setcontactModalContent(unescapedHtmlText)
                }

            })
            .catch((error: Error) => {
                console.error(`Error happend on getCategories:${error}`)
            })
    }, [])

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
                    <div dangerouslySetInnerHTML={{__html:contactModalContent}}></div>
                </PopUp>
            )}
            {isOpenPopUpMenu && (
                <PopUp backgroundColor="rgb(66 66 66)">
                    <Menu />
                </PopUp>
            )}

        </>

    )
}
export default Header;