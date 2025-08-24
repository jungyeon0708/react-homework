import React, { useState } from 'react'
import './sign-up-form.css'
import { handleSignUpFieldValidation } from '../../utils/validation'

const SignUpForm = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    passwordConfirm: '',
  })
  const [showPassword, setShowPassword] = useState(false)
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false)
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    password: '',
    passwordConfirm: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))

    // 실시간 유효성 검사
    handleSignUpFieldValidation(name, value, form, setErrors)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // 회원가입 로직 처리
  }

  return (
    <div className="sign-container">
      <h2 className="sign-title">SignUp</h2>
      <div className="signup-form">
        <form onSubmit={handleSubmit}>
          <div className="form-field">
            <label htmlFor="signup-name">이름</label>
            <input
              id="signup-name"
              name="name"
              type="text"
              placeholder="2글자 이상 입력"
              value={form.name}
              onChange={handleChange}
              className={errors.name ? 'error' : ''}
            />
            {errors.name && (
              <span className="error-message">{errors.name}</span>
            )}
          </div>

          <div className="form-field">
            <label htmlFor="signup-email">이메일</label>
            <input
              id="signup-email"
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
            <label htmlFor="signup-password">패스워드</label>
            <div className="password-wrapper">
              <input
                id="signup-password"
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

          <div className="form-field">
            <label htmlFor="signup-password-confirm">패스워드 확인</label>
            <div className="password-wrapper">
              <input
                id="signup-password-confirm"
                name="passwordConfirm"
                type={showPasswordConfirm ? 'text' : 'password'}
                placeholder="입력한 패스워드 다시 입력"
                value={form.passwordConfirm}
                onChange={handleChange}
                className={errors.passwordConfirm ? 'error' : ''}
              />
              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowPasswordConfirm(!showPasswordConfirm)}
                aria-label="비밀번호 확인 보기/숨기기"
              >
                <img
                  src={
                    showPasswordConfirm
                      ? '/assets/eye-icon-open.svg'
                      : '/assets/eye-icon.svg'
                  }
                  alt="비밀번호 확인 보기/숨기기"
                  width="20"
                  height="20"
                />
              </button>
            </div>
            {errors.passwordConfirm && (
              <span className="error-message">{errors.passwordConfirm}</span>
            )}
          </div>
        </form>
      </div>
      <button type="submit" className="submit-btn">
        회원가입
      </button>
    </div>
  )
}

export default SignUpForm
