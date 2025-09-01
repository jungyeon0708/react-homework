import React from 'react'
import ReactDOM from 'react-dom/client'
import SearchFormContainer from './components/SearchCardList/SearchForm/SearchFormContainer.jsx'
import './styles/main.css'

ReactDOM.createRoot(document.getElementById('container')).render(
  <React.StrictMode>
    <SearchFormContainer />
  </React.StrictMode>,
)
