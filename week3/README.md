# 리액트 빌드 환경

Bun 올인원 런타임을 사용해 리액트를 빌드할 수 있는 환경을 구성합니다.

## 템플릿 사용법 (간단 요약)

1. 새 프로젝트 폴더에서 아래 명령어 실행:

   ```sh
   bun create jungyeon0708/react-js
   ```

2. 생성된 폴더에서 개발 서버 실행:

   ```sh
   bun dev
   ```

3. 브라우저에서 http://localhost:3000 접속

---

## 컴포넌트 사용법

- 주요 컴포넌트는 `src/components` 폴더에 있습니다.
- 예시: 카드 리스트 UI 사용

  ```jsx
  import { CardBox } from './components/SearchCardList/SearchedCard/Card.jsx'
  // ...
  ;<CardBox card={cardData[0]} />
  ```

- 검색/필터 UI는 `SearchFormContainer`를 import해서 사용

  ```jsx
  import SearchFormContainer from './components/SearchCardList/SearchForm/SearchFormContainer.jsx'
  // ...
  ;<SearchFormContainer />
  ```

---

## 템플릿 특징

- Bun 런타임 기반의 빠른 리액트 개발 환경
- 기본적인 폴더 구조와 예제 컴포넌트 포함
- ESLint, CSS 구조 등 개발에 필요한 설정 포함
