import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom';
import Body from './src/components/Body'

const App = () => {
    return (
        <>
            <Body/>
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>
)