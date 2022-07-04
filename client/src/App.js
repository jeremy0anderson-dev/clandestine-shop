import Navbar, {Sidebar} from "./Components/Navigation/Navbar";
import {useEffect, useState} from "react";
import {IoAppsOutline, IoSearchOutline} from "react-icons/io5";
import {Route, Routes} from 'react-router-dom';


function App() {
    const [menu, setMenu] = useState(false);
    const [search, setSearch] = useState(false);
    useEffect(()=>{

    }, [setMenu, setSearch])
  return (
    <div className="App">
        <Navbar toggleDrawer={()=>{setMenu(!menu)}}>
            <Sidebar open={menu} onClose={()=>{setMenu(!menu)}}></Sidebar>
        </Navbar>
            <Routes>
                {/*<Route path={"/"} element={<Home/>}></Route>*/}
                {/*<Route path={"/register"}></Route>*/}
                {/*<Route path={"/login"}></Route>*/}
                {/*<Route path={"/"}></Route>*/}
            </Routes>
    </div>
  );
}

export default App;
