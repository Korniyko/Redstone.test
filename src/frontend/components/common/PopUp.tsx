import React from "react";
import './PopUp.scss';

type PopUpProps ={
    children:React.ReactNode;
    backgroundColor:string
}



const PopUp = ({ children,backgroundColor}:PopUpProps) => {
    const popUpStyle = {
        backgroundColor: backgroundColor || "transparent", 
    };
    return (
        <div className="popUpContainer" style={popUpStyle}>
            <div className="popUpContent">
                {children}
            </div>
        </div>
    )
}
export default PopUp;