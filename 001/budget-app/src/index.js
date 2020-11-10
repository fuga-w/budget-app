import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

const App = () => {
    return (
        <div>
            <h1>
                予算管理表
            </h1>

            <h1>
                30期予算使用状況
            </h1>
        </div>
    )
}

ReactDOM.render(<App />,document.getElementById('root'))