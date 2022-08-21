import React from 'react'
import './List.sass'
import { Sidebar } from '../../components/Sidebar/Sidebar'
import { Navbar } from '../../components/Navbar/Navbar'
import { Datatable } from '../../components/Datatable/Datatable'

interface IList {
    dataType: 'users' | 'products',
}


export const List = React.memo<IList>(({ dataType }) => {
    return (
        <div className="list">
            <Sidebar />
            <div className="listContainer">
                <Navbar />
                <Datatable dataType={dataType} />
            </div>
        </div>
    )
})
