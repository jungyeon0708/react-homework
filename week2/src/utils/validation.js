// 이름 유효성 검사
export const validateName = (name) => {
  if (name.length > 0 && name.length < 2) {
    return '이름은 2글자 이상 입력해주세요.'
  }
  return ''
}

// 이메일 유효성 검사
export const validateEmail = (email) => {
  if (email.length === 0) {
    return ''
  }

  // 한글 문자 체크 (한글 자음, 모음, 완성형 한글)
  const koreanRegex = /[ㄱ-ㅎㅏ-ㅣ가-힣]/
  if (koreanRegex.test(email)) {
    return '이메일은 영문만 입력 가능합니다.'
  }

  if (!email.includes('@')) {
    return '올바른 이메일 형식을 입력해주세요.'
  }

  return ''
}

// 패스워드 유효성 검사
export const validatePassword = (password) => {
  if (password.length === 0) {
    return ''
  }

  if (password.length < 6) {
    return '패스워드는 6자리 이상 입력해주세요.'
  }

  // 영문 체크
  const hasLetter = /[a-zA-Z]/.test(password)
  // 숫자 체크
  const hasNumber = /[0-9]/.test(password)

  if (!hasLetter || !hasNumber) {
    return '숫자, 영문 조합으로 입력해주세요.'
  }

  return ''
}

// 패스워드 확인 유효성 검사
export const validatePasswordConfirm = (passwordConfirm, password) => {
  if (passwordConfirm.length === 0) {
    return ''
  }

  if (passwordConfirm !== password) {
    return '패스워드가 일치하지 않습니다.'
  }

  return ''
}

// 실시간 유효성 검사 헬퍼 함수 - 회원가입용
export const handleSignUpFieldValidation = (name, value, form, setErrors) => {
  switch (name) {
    case 'name': {
      const nameError = validateName(value)
      setErrors((prev) => ({ ...prev, name: nameError }))
      break
    }

    case 'email': {
      const emailError = validateEmail(value)
      setErrors((prev) => ({ ...prev, email: emailError }))
      break
    }

    case 'password': {
      const passwordError = validatePassword(value)
      setErrors((prev) => ({ ...prev, password: passwordError }))

      // 패스워드가 변경되면 패스워드 확인도 다시 검사
      if (form.passwordConfirm) {
        const confirmError = validatePasswordConfirm(
          form.passwordConfirm,
          value,
        )
        setErrors((prev) => ({ ...prev, passwordConfirm: confirmError }))
      }
      break
    }

    case 'passwordConfirm': {
      const confirmError = validatePasswordConfirm(value, form.password)
      setErrors((prev) => ({ ...prev, passwordConfirm: confirmError }))
      break
    }

    default:
      break
  }
}

// 실시간 유효성 검사 헬퍼 함수 - 로그인용
export const handleSignInFieldValidation = (name, value, setErrors) => {
  switch (name) {
    case 'email': {
      const emailError = validateEmail(value)
      setErrors((prev) => ({ ...prev, email: emailError }))
      break
    }

    case 'password': {
      const passwordError = validatePassword(value)
      setErrors((prev) => ({ ...prev, password: passwordError }))
      break
    }

    default:
      break
  }
}
