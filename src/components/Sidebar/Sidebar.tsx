import {
    AccountCircleOutlined,
    CreditCard,
    DashboardOutlined,
    LocalShippingOutlined,
    LogoutOutlined,
    NotificationsOutlined,
    PersonOutlineOutlined,
    PsychologyOutlined,
    QueryStatsOutlined,
    SettingsOutlined,
    SettingsSystemDaydreamOutlined,
    StoreOutlined,
} from "@mui/icons-material";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import "./Sidebar.scss";


export const Sidebar = () => {
    const { dispatch } = useContext(DarkModeContext)

    return (
        <div className="sidebar">
            <div className="top">
                <Link to={'/'} style={{ 'textDecoration': 'none' }}>
                    <span className="logo">Kovkuto Dev</span>
                </Link>
            </div>
            <hr />
            <div className="center">
                <ul>
                    <p className="title">MAIN</p>
                    <SidebarItem
                        to="/"
                        text="Dashboard"
                        icon={<DashboardOutlined />}
                    />
                    <p className="title">LISTS</p>
                    <SidebarItem
                        text="Users"
                        to={'/users/'}
                        icon={<PersonOutlineOutlined />}
                    />
                    <SidebarItem to="/products" text="Products" icon={<StoreOutlined />} />
                </ul>
            </div>
            <div className="bottom">
                <div className="colorOption" onClick={() => dispatch({ type: 'LIGHT' })}></div>
                <div className="colorOption" onClick={() => dispatch({ type: 'DARK' })}></div>
            </div>
        </div>
    );
};

interface ISidebarItem {
    text: string;
    icon: React.ReactElement;
    to?: string
}

const SidebarItem: React.FC<ISidebarItem> = ({ text, icon, to }) => {
    return (<>
        {
            to ? <Link to={to}>
                <li>
                    <p className="icon">{icon}</p>
                    <span>{text}</span>
                </li>
            </Link >
                : <li>
                    <p className="icon">{icon}</p>
                    <span>{text}</span>
                </li>
        }
    </>)

};
