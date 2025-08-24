# 리액트 빌드 환경

Bun 올인원 런타임을 사용해 리액트를 빌드할 수 있는 환경을 구성합니다.

## 컴포넌트 사용법

이 프로젝트에는 상태를 가진 회원가입 및 로그인 폼 컴포넌트가 포함되어 있습니다.

### 🚀 개발 서버 실행

```sh
bun run dev
```

브라우저에서 `http://localhost:3000`으로 접속하여 컴포넌트를 확인할 수 있습니다.

### 📁 프로젝트 구조

```
src/
├── components/
│   ├── index.jsx              # 메인 App 컴포넌트
│   ├── sign-up-form/         # 회원가입 폼 컴포넌트
│   │   ├── sign-up-form.jsx
│   │   └── sign-up-form.css
│   └── sign-in-form/         # 로그인 폼 컴포넌트
│       ├── sign-in-form.jsx
│       └── sign-in-form.css
├── utils/
│   └── validation.js         # 유효성 검사 함수들
└── main.jsx                  # 앱 진입점
```

### 🎯 컴포넌트 기능

#### SignUpForm 컴포넌트

- **이름 입력**: 2글자 이상 입력 필수
- **이메일 입력**: 영문만 입력 가능, @ 포함 필수
- **패스워드 입력**: 6자리 이상, 영문+숫자 조합 필수
- **패스워드 확인**: 패스워드와 일치 확인
- **실시간 유효성 검사**: 입력 시 즉시 오류 메시지 표시
- **패스워드 토글**: 눈 아이콘으로 패스워드 표시/숨김 기능

#### SignInForm 컴포넌트

- **이메일 입력**: 영문만 입력 가능, @ 포함 필수
- **패스워드 입력**: 6자리 이상, 영문+숫자 조합 필수
- **실시간 유효성 검사**: 입력 시 즉시 오류 메시지 표시
- **패스워드 토글**: 눈 아이콘으로 패스워드 표시/숨김 기능

### 🔧 유효성 검사 시스템

`src/utils/validation.js`에서 모든 유효성 검사 로직을 관리합니다:

```javascript
import {
  validateName,
  validateEmail,
  validatePassword,
  validatePasswordConfirm,
  handleSignUpFieldValidation,
  handleSignInFieldValidation,
} from './utils/validation'
```

#### 사용 가능한 검사 함수들

- `validateName(name)` - 이름 유효성 검사
- `validateEmail(email)` - 이메일 유효성 검사
- `validatePassword(password)` - 패스워드 유효성 검사
- `validatePasswordConfirm(confirm, password)` - 패스워드 확인 검사
- `handleSignUpFieldValidation(name, value, form, setErrors)` - 회원가입 실시간 검사
- `handleSignInFieldValidation(name, value, setErrors)` - 로그인 실시간 검사

### 🎨 스타일링

- **반응형 디자인**: 모바일부터 데스크톱까지 지원
- **정확한 디자인 구현**: 픽셀 퍼펙트 레이아웃
- **에러 색상**: #F71F1B (빨간색)
- **메인 색상**: #3578FF (파란색)
- **폰트**: Spoqa Han Sans (기본 시스템 폰트 상속)

### 📱 반응형 지원

- **최소 너비**: 332px
- **최대 너비**: 500px
- **자동 크기 조절**: 화면 크기에 따라 폼과 버튼이 함께 스케일링

## 프로젝트 사용법

이 프로젝트를 로컬에서 실행하려면:

```sh
# 저장소 클론
git clone https://github.com/jungyeon0708/react-homework.git
cd react-homework/week2

# 의존성 설치 및 개발 서버 실행
bun install
bun run dev
```

위 명령어를 실행하면 `http://localhost:3000`에서 프로젝트를 확인할 수 있습니다.

---

### 프로젝트 특징

- Bun 런타임 기반의 빠른 리액트 개발 환경
- 상태를 가진 폼 컴포넌트와 유효성 검사 시스템
- 재사용 가능한 유틸리티 함수 구조
- 반응형 디자인과 픽셀 퍼펙트 스타일링
- ESLint, CSS 구조 등 개발에 필요한 설정 포함
