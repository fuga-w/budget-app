import React from 'react'
import TableTitles from './TableTitles'
import TableData from './TableData'

const titles = {
    No: "No",
    pay: "支払い方法",
    date: "購入日",
    category: "項目",
    name: "品名",
    price: "金額",
    arrive: "受領",
    mome: "備考"
}

const contents = [
    {
        No: 1,
        pay: "現金",
        date: "2020/10/15",
        category: "電子機器",
        name: "Raspberry Pi 4",
        price: 6000,
        arrive: false,
        mome: "SDカードも買うこと"
    },
    {
        No: 2,
        pay: "クレジットカード",
        date: "2020/10/22",
        category: "書籍",
        name: "深層学習",
        price: 5800,
        arrive: false,
        mome: ""
    }
]

const ContentTable = () => {
    return (
        <table>
            <TableTitles titles={titles}/>
            {contents.map(content => {
                return <TableData content={content} />
            })}
        </table>
    )
}

export default ContentTable