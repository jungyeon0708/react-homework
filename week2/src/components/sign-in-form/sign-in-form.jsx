import React, { useState } from 'react'
import './sign-in-form.css'
import { handleSignInFieldValidation } from '../../utils/validation'

const SignInForm = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
  })
  const [showPassword, setShowPassword] = useState(false)
  const [errors, setErrors] = useState({ email: '', password: '' })

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))

    // 실시간 유효성 검사
    handleSignInFieldValidation(name, value, setErrors)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // 로그인 로직 처리
  }

  return (
    <div className="sign-container">
      <h2 className="sign-title">SignIn</h2>
      <div className="signin-form">
        <form onSubmit={handleSubmit}>
          <div className="form-field">
            <label htmlFor="signin-email">이메일</label>
            <input
              id="signin-email"
              name="email"
              type="email"
              placeholder="user@company.io"
              value={form.email}
              onChange={handleChange}
              className={errors.email ? 'error' : ''}
            />
            {errors.email && (
              <span className="error-message">{errors.email}</span>
            )}
          </div>

          <div className="form-field">
            <label htmlFor="signin-password">패스워드</label>
            <div className="password-wrapper">
              <input
                id="signin-password"
                name="password"
                type={showPassword ? 'text' : 'password'}
                placeholder="숫자, 영문 조합 6자리 이상 입력"
                value={form.password}
                onChange={handleChange}
                className={errors.password ? 'error' : ''}
              />
              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
                aria-label="비밀번호 보기/숨기기"
              >
                <img
                  src={
                    showPassword
                      ? '/assets/eye-icon-open.svg'
                      : '/assets/eye-icon.svg'
                  }
                  alt="비밀번호 보기/숨기기"
                  width="20"
                  height="20"
                />
              </button>
            </div>
            {errors.password && (
              <span className="error-message">{errors.password}</span>
            )}
          </div>
        </form>
      </div>
      <button type="submit" className="submit-btn">
        로그인
      </button>
    </div>
  )
}

export default SignInForm
