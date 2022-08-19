import { AccountBalanceWalletOutlined, ArrowDropDown, ArrowDropUp, MonetizationOnOutlined, PersonOutlineOutlined, ShoppingCartOutlined } from '@mui/icons-material'
import React from 'react'
import './Widget.scss'

interface IWidget {
    type: 'user' | 'earning' | 'order' | 'balance'
}

interface IData {
    title: string
    isMoney: boolean
    link: string
    icon: React.ReactElement
}

export const Widget: React.FC<IWidget> = ({ type }) => {
    let data: IData

    const amount = 100
    const diff = 20

    switch (type) {
        case 'user':
            data = {
                title: 'USERS',
                isMoney: false,
                link: 'See all users',
                icon: <PersonOutlineOutlined className='icon' />
            }
            break;
        case 'order':
            data = {
                title: 'ORDERS',
                isMoney: false,
                link: 'View all orders',
                icon: <ShoppingCartOutlined className='icon' />
            }
            break
        case 'earning':
            data = {
                title: 'EARNING',
                isMoney: true,
                link: 'View net earnings',
                icon: <MonetizationOnOutlined className='icon' />
            }
            break
        case 'balance':
            data = {
                title: 'BALANCE',
                isMoney: true,
                link: 'View details',
                icon: <AccountBalanceWalletOutlined className='icon' />
            }
            break
        default:
            data = {
                title: '',
                isMoney: false,
                link: '',
                icon: <></>
            }
            break;
    }

    return (
        <div className='widget'>
            <div className="left">
                <span className="title">{data.title}</span>
                <span className="counter">{data.isMoney && "$"} {amount}</span>
                <span className="link">{data.link}</span>
            </div>
            <div className="right">
                <div className="percentage positive">
                    {diff}%
                    <ArrowDropUp />
                </div>
                {data.icon}
            </div>
        </div>
    )
}
