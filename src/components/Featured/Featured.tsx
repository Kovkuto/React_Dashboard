import React from 'react'
import { ArrowDropDown, ArrowDropUp, MoreVertOutlined } from '@mui/icons-material'
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar'
import './Featured.scss'
import 'react-circular-progressbar/dist/styles.css';

export const Featured = () => {
    const styles = buildStyles({
        pathColor: '#345B63',
        textColor: '#345B63'
    })

    return (
        <div className='featured'>
            <div className="top">
                <h1 className="title">Total Income</h1>
                <MoreVertOutlined fontSize='small' />
            </div>
            <div className="bottom">
                <div className="featuredChart">
                    <CircularProgressbar styles={styles} value={70} text="70%" strokeWidth={5} />
                </div>
                <div className='featuredItemsContainer'>
                    <p className="title">Total sales made today</p>
                    <p className="amount">$420</p>
                </div>
                <p className="desc">
                    Previous transactions processing. Last payments may not be included.
                </p>
                <div className="summary">
                    <div className="item">
                        <div className="itemTitle">Target</div>
                        <div className="itemResult negative">
                            <ArrowDropDown fontSize='small' />
                            <div className="resultAmount">$12.4k</div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="itemTitle">Last Week</div>
                        <div className="itemResult positive">
                            <ArrowDropUp fontSize='small' />
                            <div className="resultAmount">$12.4k</div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="itemTitle">Last Month</div>
                        <div className="itemResult positive">
                            <ArrowDropUp fontSize='small' />
                            <div className="resultAmount">$12.4k</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
