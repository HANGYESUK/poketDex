import PokeCardList from "./List/PokeCardList";
import React from "react";
import {Route, Routes} from "react-router-dom";

const PageNavigator = () => {

    return <Routes>
        <Route path={"/"} element={<PokeCardList/>}/>
    </Routes>
}

export default PageNavigator