import React, { useState, useEffect } from 'react'
import { cardData } from '../SearchedCard/data.js'
import { CardBox } from '../SearchedCard/Card.jsx'
import SearchForm from './SearchForm.jsx'
import './SearchFormContainer.css'

function getQuery() {
  const params = new URLSearchParams(window.location.search)
  return params.get('q') || ''
}

// 중복된 필터링 로직을 함수로 분리
function filterCards(query) {
  if (!query) return cardData

  const normalizedQuery = query.toLocaleLowerCase('ko-KR')

  return cardData.filter((card) => {
    const name = card.name?.toLocaleLowerCase('ko-KR') || ''
    const hanName = card.hanName?.toLocaleLowerCase('ko-KR') || ''
    return name.includes(normalizedQuery) || hanName.includes(normalizedQuery)
  })
}

export default function SearchFormContainer() {
  const [filtered, setFiltered] = useState(() => {
    const q = getQuery()
    return filterCards(q)
  })

  // 쿼리스트링 변경/브라우저 탐색 동기화
  useEffect(() => {
    const onPopState = () => {
      const q = getQuery()
      setFiltered(filterCards(q))
    }
    window.addEventListener('popstate', onPopState)
    return () => window.removeEventListener('popstate', onPopState)
  }, [])

  // 검색 폼 제출 시 쿼리스트링 pushState
  const handleSearch = (q) => {
    const url = q ? `?q=${encodeURIComponent(q)}` : location.pathname
    window.history.pushState({}, '', url)
    setFiltered(filterCards(q))
  }

  return (
    <div className="mainpage">
      <img
        src="/public/assets/logo.avif"
        alt="island"
        className="mainpage-image"
      />
      <div className="card-page">
        <div className="search-container">
          <SearchForm onSearch={handleSearch} />
          <div className="card-list-container">
            {filtered.length === 0 ? (
              <div className="no-result">검색 결과가 없습니다.</div>
            ) : (
              filtered.map((card) => <CardBox key={card.id} card={card} />)
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
