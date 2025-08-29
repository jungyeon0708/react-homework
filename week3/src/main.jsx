import React from 'react'
import ReactDOM from 'react-dom/client'
import MainPage from './components/SearchCardList/index'
import './styles/main.css'

ReactDOM.createRoot(document.getElementById('container')).render(
  <React.StrictMode>
    <MainPage />
  </React.StrictMode>,
)
