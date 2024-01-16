import React from "react";
import './MainScreen.scss'
import Button from "./common/Button";
import clutchco from '../img/clutchco.svg';
import greenAwwwards from '../img/green-awwwards.svg';
import itr_logo from '../img/itr_logo.svg';
import other from '../img/other.svg';




type MainScreenProps = {

}
const MainScreen = ({ }: MainScreenProps) => {




    return (

        <div className="mainScreenSection container">
            <div className="mainScreen">
                <div className="mainScreenOrder-1">
                    <div className="mainScreenTitle">
                        Сайти <b>.</b> Арр <b>.</b> Брендинг - Робимо складне простим
                    </div>
                    <Button label='НАШІ РОБОТИ' onClick={() => { }} />
                    <div className="mainScreenLogo">

                        <img src={clutchco} alt="clutchco" />
                        <img src={greenAwwwards} alt="green-awwwards" />
                        <img src={itr_logo} alt="logo" />
                        <img src={other} alt="logo" />
                        
                    </div>
                </div>
                <div className="mainScreenOrder-2">
                    <div className="titleBoldNumber">
                        18
                    </div>
                    <div className="mainScreenDescription">
                        РОКІВ ПЕРЕНОСИМО ВАШ БІЗНЕС ONLINE
                    </div>
                </div>
            </div>
        </div>


    )
}
export default MainScreen;