import React, { useState } from 'react'
import './New.sass'
import { Navbar } from '../../components/Navbar/Navbar'
import { Sidebar } from '../../components/Sidebar/Sidebar'
import { DriveFolderUploadOutlined } from '@mui/icons-material'

interface INew {
    dataType: 'users' | 'products',
    title: string
}

export const New: React.FC<INew> = ({ dataType, title }) => {
    const data: IInput[] = dataType === 'users' ? userInputs : productInputs
    const [file, setFile] = useState<any>("")
    const noImgURL = 'https://media.istockphoto.com/vectors/default-image-icon-vector-missing-picture-page-for-website-design-or-vector-id1357365823?k=20&m=1357365823&s=612x612&w=0&h=ZH0MQpeUoSHM3G2AWzc8KkGYRg4uP_kuu0Za8GFxdFc='

    return (
        <div className='new'>
            <Sidebar />
            <div className="newContainer">
                <Navbar />
                <div className="top">
                    <h1>{title}</h1>
                </div>
                <div className="bottom">
                    <div className="left">
                        <img
                            src={file ? URL.createObjectURL(file) : noImgURL}
                            alt=''
                        />
                    </div>
                    <div className="right">
                        <form onSubmit={(e) => e.preventDefault()}>
                            <div className="formInput">
                                <label htmlFor="file">
                                    Image: <DriveFolderUploadOutlined className='icon' />
                                </label>
                                <input type="file" id='file' style={{ display: 'none' }} onChange={(e) => setFile(e.target.files ? e.target.files[0] : '')} />
                            </div>
                            {data.map(item => (
                                <div className="formInput" key={item.label}>
                                    <label htmlFor="">{item.label}</label>
                                    <input type={item.type} />
                                </div>
                            ))}
                            <button type='submit'>Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

interface IInput {
    label: string
    type: string
}

const userInputs: IInput[] = [
    { label: 'ID', type: 'text' },
    { label: 'Username', type: 'text' },
    { label: 'Full Name', type: 'text' },
    { label: 'Password', type: 'password' },
    { label: 'Email', type: 'email' },
    { label: 'Country', type: 'text' },
    { label: 'Address', type: 'text' },
    { label: 'Age', type: 'number' },
    { label: 'Gender', type: 'text' },
]

const productInputs: IInput[] = [
    { label: 'ID', type: 'text' },
    { label: 'Product Name', type: 'text' },
    { label: 'Short Description', type: 'text' },
    { label: 'Discount', type: 'number' },
    { label: 'Amount', type: 'number' },
]
