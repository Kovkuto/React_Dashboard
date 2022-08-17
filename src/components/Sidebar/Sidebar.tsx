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
import { Icon } from "@mui/material";
import React, { useRef } from "react";
import "./Sidebar.scss";

export const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="top">
                <span className="logo">Kovkuto Dev</span>
            </div>
            <hr />
            <div className="center">
                <ul>
                    <p className="title">MAIN</p>
                    <SidebarItem
                        text="Dashboard"
                        icon={<DashboardOutlined />}
                    />
                    <p className="title">LISTS</p>
                    <SidebarItem
                        text="Users"
                        icon={<PersonOutlineOutlined />}
                    />
                    <SidebarItem text="Products" icon={<StoreOutlined />} />
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
}

const SidebarItem: React.FC<ISidebarItem> = ({ text, icon }) => {
    return (
        <li>
            <>
                <p className="icon">{icon}</p>
                <span>{text}</span>
            </>
        </li>
    );
};
