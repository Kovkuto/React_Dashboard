import React from 'react'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import './Chart.scss'

const data = [
    { name: 'Jenuary', Total: 1200 },
    { name: 'February', Total: 1800 },
    { name: 'March', Total: 1700 },
    { name: 'April', Total: 1900 },
    { name: 'May', Total: 2000 },
    { name: 'June', Total: 1800 }
]

export const Chart = () => {
    return (
        <div className='chart'>
            <div className="title">Last 6 Months (Revenue)</div>
            <ResponsiveContainer width={'100%'} aspect={2 / 1}>
                <AreaChart width={730} data={data}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <defs>
                        <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <XAxis dataKey="name" stroke='gray' />
                    <CartesianGrid strokeDasharray="3 3" className='chartGrid' />
                    <Tooltip />
                    <Area
                        type="monotone"
                        dataKey="Total"
                        stroke="#8884d8"
                        fillOpacity={1}
                        fill="url(#total)"
                    />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    )
}
