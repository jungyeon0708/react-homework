import React from 'react'
import SearchFormContainer from './SearchForm/SearchFormContainer'
import './index.css'

export default function MainPage() {
  return (
    <div className="mainpage">
      <img
        src="/public/assets/logo.avif"
        alt="island"
        className="mainpage-image"
      />
      <div className="card-page">
        <SearchFormContainer />
      </div>
    </div>
  )
}
