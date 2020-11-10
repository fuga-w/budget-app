import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

const App = () => {


    const title = {
        No: "No",
        pay: "支払い方法",
        date: "購入日",
        category: "項目",
        name: "品名",
        price: "金額",
        arrive: "受領",
        mome: "備考"
    }

    const content = [
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

    return (
        <div>
            <h1>
                予算管理表
            </h1>

            <h1>
                30期予算使用状況
            </h1>
            <table>
                <tr>
                    <th>{title.No}</th>
                    <th>{title.pay}</th>
                    <th>{title.date}</th>
                    <th>{title.category}</th>
                    <th>{title.name}</th>
                    <th>{title.price}</th>
                    <th>{title.arrive}</th>
                    <th>{title.mome}</th>
                </tr>
                <tr>
                    <td>{content[0].No}</td>
                    <td>{content[0].pay}</td>
                    <td>{content[0].date}</td>
                    <td>{content[0].category}</td>
                    <td>{content[0].name}</td>
                    <td>{content[0].price}</td>
                    <td>{content[0].arrive}</td>
                    <td>{content[0].mome}</td>
                </tr>
                <tr>
                    <td>{content[1].No}</td>
                    <td>{content[1].pay}</td>
                    <td>{content[1].date}</td>
                    <td>{content[1].category}</td>
                    <td>{content[1].name}</td>
                    <td>{content[1].price}</td>
                    <td>{content[1].arrive}</td>
                    <td>{content[1].mome}</td>
                </tr>
            </table>
        </div>
    )
}

ReactDOM.render(<App />,document.getElementById('root'))