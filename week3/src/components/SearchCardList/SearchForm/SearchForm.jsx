import React, { useState } from 'react'
import './SearchForm.css'

export default function SearchForm({ onSearch }) {
  const [input, setInput] = useState('')

  // 중복된 검색 로직을 하나의 함수로 통합
  const performSearch = (value) => {
    onSearch(value.trim())
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    performSearch(input)
  }

  // 입력값이 바뀔 때마다 자동 검색
  const handleChange = (e) => {
    const value = e.target.value
    setInput(value)
    performSearch(value)
  }

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        onChange={handleChange}
        placeholder="캐릭터 이름을 입력하세요"
        className="search-input"
        aria-label="캐릭터 이름 검색"
      />
      <button type="submit" className="search-btn" aria-label="검색">
        검색
      </button>
    </form>
  )
}
