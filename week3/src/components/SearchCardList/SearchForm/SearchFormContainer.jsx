import React, { useState, useEffect } from 'react'
import { cardData } from '../SearchedCard/data.js'
import { CardBox } from '../SearchedCard/Card.jsx'
import SearchForm from './SearchForm.jsx'
import './SearchFormContainer.css'

function getQuery() {
  const params = new URLSearchParams(window.location.search)
  return params.get('q') || ''
}

export default function SearchFormContainer() {
  const [filtered, setFiltered] = useState(() => {
    const q = getQuery()
    return q
      ? cardData.filter((card) => {
          const name = card.name?.toLocaleLowerCase('ko-KR') || ''
          const hanName = card.hanName?.toLocaleLowerCase('ko-KR') || ''
          const query = q.toLocaleLowerCase('ko-KR')
          return name.includes(query) || hanName.includes(query)
        })
      : cardData
  })

  // 쿼리스트링 변경/브라우저 탐색 동기화
  useEffect(() => {
    const onPopState = () => {
      const q = getQuery()
      setFiltered(
        q
          ? cardData.filter((card) => {
              const name = card.name?.toLocaleLowerCase('ko-KR') || ''
              const hanName = card.hanName?.toLocaleLowerCase('ko-KR') || ''
              const query = q.toLocaleLowerCase('ko-KR')
              return name.includes(query) || hanName.includes(query)
            })
          : cardData,
      )
    }
    window.addEventListener('popstate', onPopState)
    return () => window.removeEventListener('popstate', onPopState)
  }, [])

  // 검색 폼 제출 시 쿼리스트링 pushState
  const handleSearch = (q) => {
    const url = q ? `?q=${encodeURIComponent(q)}` : location.pathname
    window.history.pushState({}, '', url)
    setFiltered(
      q
        ? cardData.filter((card) => {
            const name = card.name?.toLocaleLowerCase('ko-KR') || ''
            const hanName = card.hanName?.toLocaleLowerCase('ko-KR') || ''
            const query = q.toLocaleLowerCase('ko-KR')
            return name.includes(query) || hanName.includes(query)
          })
        : cardData,
    )
  }

  return (
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
  )
}
