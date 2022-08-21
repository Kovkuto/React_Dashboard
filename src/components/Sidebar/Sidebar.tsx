import {
    AccountCircleOutlined,
    CreditCard,
    Dashboard,
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
import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.scss";


export const Sidebar = () => {
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
                    <SidebarItem text="Orders" icon={<CreditCard />} />
                    <SidebarItem
                        text="Delivery"
                        icon={<LocalShippingOutlined />}
                    />
                    <p className="title">USEFUL</p>

                    <SidebarItem text="Stats" icon={<QueryStatsOutlined />} />
                    <SidebarItem
                        text="Notifications"
                        icon={<NotificationsOutlined />}
                    />
                    <p className="title">SERVICE</p>

                    <SidebarItem
                        text="System Health"
                        icon={<SettingsSystemDaydreamOutlined />}
                    />
                    <SidebarItem text="Logs" icon={<PsychologyOutlined />} />
                    <SidebarItem text="Settings" icon={<SettingsOutlined />} />
                    <p className="title">USER</p>

                    <SidebarItem
                        text="Profile"
                        icon={<AccountCircleOutlined />}
                    />
                    <SidebarItem text="Logout" icon={<LogoutOutlined />} />
                </ul>
            </div>
            <div className="bottom">
                <div className="colorOption"></div>
                <div className="colorOption"></div>
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
    return (<>{
        to ? <Link to={to}>< li >
            <p className="icon">{icon}</p>
            <span>{text}</span></li >
        </Link >
            : <li>
                <p className="icon">{icon}</p>
                <span>{text}</span>
            </li>
    }</>)

};
