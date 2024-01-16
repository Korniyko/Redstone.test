import React from "react";
import "./Button.scss"

const Button = (props) => {
    const { label, onClick,style} = props;

    return (
        <div className="button">
             <div className="backgroundColor"></div>
            <button onClick={onClick} >
                {label}
            </button>
        </div>

    );
};

export default Button;
