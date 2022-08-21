import React, { useEffect, useState } from 'react'
import './Datatable.scss'
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid'
import { Table } from '../Table/Table'
import { Link } from 'react-router-dom'

interface IUser {
    id: {
        value: string
    }
    name: {
        first: string
        last: string
    }
    dob: {
        age: number
    },
    login: {
        uuid: string
        username: string
    },
    picture: {
        medium: string
    }
    gender: 'male' | 'female'
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
                fetch('https://randomuser.me/api/?results=50')
                    .then(response => response.json()).then(data => setRows(data.results))
            } else {
                fetch('https://shoppingcontent.googleapis.com/content/v2.1/aksjfdkfklafjk/products')
                    .then(response => response.json()).then(data => console.log(data))
            }
        }

        fetchFunc()
    }, [dataType])


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
                    rows={rows}
                    columns={usersColumns.concat(actionColumn)}
                    pageSize={9}
                    rowsPerPageOptions={[5]}
                    checkboxSelection
                    getRowId={(row) => row.login.uuid}
                /> : <Table />}
        </div>
    )
})

const usersColumns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 145, valueGetter: (params: Params) => params.row.id.value },
    {
        field: 'user', headerName: 'User', width: 230, renderCell: (params: Params) => (
            <div className="cellWithImg">
                <img src={params.row.picture.medium} alt="avatar" className="cellImg" />
                {params.row.login.username}
            </div>
        )
    },
    {
        field: 'fullName',
        headerName: 'Full Name',
        width: 130,
        valueGetter: (params: Params) => params.row.name.first + ' ' + params.row.name.last
    },
    {
        field: 'age',
        headerName: 'Age',
        width: 130,
        valueGetter: (params: Params) => params.row.dob.age
    },
    {
        field: 'gender',
        headerName: 'Gender',
        width: 130,
        renderCell: (params: Params) => params.row.gender.charAt(0).toUpperCase() + params.row.gender.slice(1)
    }
];
