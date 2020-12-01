import React from 'react'

const TableData = ({ content }) => {
    return (
        <tr>
        <td>{content.No}</td>
        <td>{content.pay}</td>
        <td>{content.date}</td>
        <td>{content.category}</td>
        <td>{content.name}</td>
        <td>{content.price}</td>
        <td>{content.arrive}</td>
        <td>{content.mome}</td>
    </tr>
    )
}

export default TableData