import React, { useEffect, useState } from 'react'
import './Datatable.scss'
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid'
import { Table } from '../Table/Table'
import { Link } from 'react-router-dom'

interface IUser {
    id: number
    name: string
    username: string
    email: string
    website: string,
    phone: string
}

interface IDatatable {
    dataType: 'users' | 'products',
}


type Params = GridValueGetterParams<undefined, IUser>

export const Datatable = React.memo<IDatatable>(({ dataType }) => {
    const [rows, setRows] = useState<IUser[]>([])
    const actionColumn = [
        {
            field: 'action',
            headerName: 'Action',
            width: 200,
            renderCell: () => (
                <div className="cellAction">
                    <Link to={'/users/test'} style={{ 'textDecoration': 'none' }}>
                        <div className="viewButton">View</div>
                    </Link>
                    <div className="deleteButton">Delete</div>
                </div>
            )
        }
    ]

    useEffect(() => {
        const fetchFunc = () => {
            if (dataType === 'users') {
                fetch('https://jsonplaceholder.typicode.com/users')
                    .then(response => response.json()).then(data => setRows(data))
            }
        }

        fetchFunc()
    }, [])


    return (
        <div className='datatable'>
            <div className="datatableTitle">
                Add New {dataType === 'users' ? 'User' : 'Product'}
                <Link to={`/${dataType}/new`} className='link'>
                    Add New
                </Link>
            </div>
            {dataType === 'users'
                ? <DataGrid
                    className='datagrid'
                    rows={rows}
                    columns={usersColumns.concat(actionColumn)}
                    pageSize={9}
                    rowsPerPageOptions={[5]}
                    checkboxSelection
                /> : <Table />}
        </div>
    )
})

// {
//     "id": 1,
//     "name": "Leanne Graham",
//     "username": "Bret",
//     "email": "Sincere@april.biz",
//     "address": {
//     "street": "Kulas Light",
//     "suite": "Apt. 556",
//     "city": "Gwenborough",
//     "zipcode": "92998-3874",
//     "geo": {
//     "lat": "-37.3159",
//     "lng": "81.1496"
//     }
//     },
//     "phone": "1-770-736-8031 x56442",
//     "website": "hildegard.org",
//     "company": {
//     "name": "Romaguera-Crona",
//     "catchPhrase": "Multi-layered client-server neural-net",
//     "bs": "harness real-time e-markets"
//     }
//     },

const usersColumns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 50, valueGetter: (params: Params) => params.row.id },
    { field: 'username', headerName: 'Username', width: 150 },
    {
        field: 'name',
        headerName: 'Full Name',
        width: 130,
    },
    {
        field: 'email',
        headerName: 'Email',
        width: 230
    },
    {
        field: 'website',
        headerName: 'Website',
        width: 130
    },
    {
        field: 'phone',
        headerName: 'Phone',
        width: 200
    }
];
