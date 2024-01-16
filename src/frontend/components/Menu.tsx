import React from "react";
import './Menu.scss'
import Button from "./common/Button";





const Menu = () => {

    return (
        <div className="menuContainers">
            <div className="menuContent">
                <div className="menu">
                    <div className="row">
                        <a href="#">Портфоліо</a>
                        <a href="#">Послуги</a>
                        <a href="#">Нагороди</a>
                    </div>
                    <div className="row">
                        <a href="#">Блог</a>
                        <a href="#">Відгуки</a>
                        <a href="#">Контакти</a>
                    </div>
                </div>
                <div className="containerRow">
                    <div className="containerEmail">
                        <p>email:</p>
                        <a href="#">office@redstone.media</a>
                        <p>email:</p>
                        <a href="#">support@redstone.media</a>
                    </div>
                    <div className="entry">
                        <p>У Вас є цікавий проект, давай втілимо його в реальність</p>
                        <Button label="ЗАПОВНИТИ БРИФ"/>
                    </div>
                </div>

            </div>
        </div>

    )
}
export default Menu;