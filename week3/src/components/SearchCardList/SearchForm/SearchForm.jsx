import React, { useState } from 'react'
import './SearchForm.css'

export default function SearchForm({ onSearch }) {
  const [input, setInput] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    onSearch(input.trim())
  }

  // 입력값이 바뀔 때마다 자동 검색
  const handleChange = (e) => {
    const value = e.target.value
    setInput(value)
    onSearch(value.trim())
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
