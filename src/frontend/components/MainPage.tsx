import React, { useEffect } from "react";
import Categories from "../containers/Categories";
import MainScreen from "../containers/MainScreen";



type AppProps = {
    
}

const MainPage = ({  }: AppProps) => {



    return (
        <>
            <MainScreen/>
            <Categories />
          
        </>
    )
}
export default MainPage;