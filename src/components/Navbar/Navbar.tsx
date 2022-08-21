import {
    ChatBubbleOutlineOutlined,
    DarkModeOutlined,
    FullscreenExitSharp,
    LanguageOutlined,
    ListOutlined,
    NotificationsNoneOutlined,
    SearchOutlined,
} from "@mui/icons-material";
import React, { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";
import "./Navbar.scss";

export const Navbar = () => {
    const { dispatch } = useContext(DarkModeContext)


    return (
        <div className="navbar">
            <div className="wrapper">
                <div className="search">
                    <input type="text" placeholder="Search . . ." />
                    <SearchOutlined />
                </div>
                <div className="items">
                    <div className="item">
                        <LanguageOutlined className="icon" />
                        English
                    </div>
                    <div className="item" onClick={() => dispatch({ type: 'TOGGLE' })} style={{ 'cursor': 'pointer' }}>
                        <DarkModeOutlined className="icon" />
                    </div>
                    <div className="item">
                        <FullscreenExitSharp className="icon" />
                    </div>
                    <div className="item">
                        <NotificationsNoneOutlined className="icon" />
                        <div className="counter">1</div>
                    </div>
                    <div className="item">
                        <ChatBubbleOutlineOutlined className="icon" />
                        <div className="counter">2</div>
                    </div>
                    <div className="item">
                        <ListOutlined className="icon" />
                    </div>
                    <div className="item">
                        <img src="https://i.pravatar.cc/40" alt="" className="avatar" />
                    </div>
                </div>
            </div>
        </div>
    );
};
