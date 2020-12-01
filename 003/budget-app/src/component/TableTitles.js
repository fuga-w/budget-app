import React from 'react'

const TableTitles = ({ titles }) => {
    return (
        <tr>
            <th>{titles.No}</th>
            <th>{titles.pay}</th>
            <th>{titles.date}</th>
            <th>{titles.category}</th>
            <th>{titles.name}</th>
            <th>{titles.price}</th>
            <th>{titles.arrive}</th>
            <th>{titles.mome}</th>
        </tr>
    )
}

export default TableTitles