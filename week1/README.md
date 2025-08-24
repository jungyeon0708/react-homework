# 리액트 빌드 환경

Bun 올인원 런타임을 사용해 리액트를 빌드할 수 있는 환경을 구성합니다.

## 프로젝트 사용법

### 프로젝트 클론 및 설정

```bash
# 프로젝트 클론
git clone https://github.com/jungyeon0708/react-homework.git

# week1 디렉토리로 이동
cd react-homework/week1

# 의존성 설치
bun install

# 개발 서버 실행
bun dev
```

## 컴포넌트 사용법

이 프로젝트는 상태가 없는(Stateless) 함수형 컴포넌트들로 구성되어 있으며, 재사용성과 접근성을 고려하여 설계되었습니다.

### SvgIcon 컴포넌트

SVG 아이콘을 렌더링하는 컴포넌트입니다.

#### Props

| 속성         | 타입      | 기본값  | 설명                      |
| ------------ | --------- | ------- | ------------------------- |
| `icon`       | `string`  | -       | 아이콘 이름 (필수)        |
| `size`       | `number`  | `12`    | 아이콘 크기 (px)          |
| `className`  | `string`  | `''`    | 추가 CSS 클래스           |
| `alt`        | `string`  | -       | 접근성을 위한 대체 텍스트 |
| `decorative` | `boolean` | `false` | 장식용 아이콘 여부        |

#### 사용 예시

```jsx
// 기본 사용법
<SvgIcon icon="check-mark" />

// 크기 조정
<SvgIcon icon="up-arrow" size={16} />

// 접근성 고려
<SvgIcon icon="spinner-animate" alt="로딩 중" />

// 장식용 아이콘 (스크린 리더에서 무시)
<SvgIcon icon="cross" decorative={true} />
```

#### 사용 가능한 아이콘

- `check-mark` - 성공 체크 표시
- `cross` - 에러/실패 표시
- `up-arrow` - 업로드 화살표
- `spinner-animate` - 로딩 스피너 (애니메이션)
- `not-allowed` - 비활성화 표시

### UploadButton 컴포넌트

다양한 상태를 가진 업로드 버튼 컴포넌트입니다.

#### Props

| 속성        | 타입       | 기본값   | 설명               |
| ----------- | ---------- | -------- | ------------------ |
| `state`     | `string`   | `'idle'` | 버튼 상태          |
| `className` | `string`   | `''`     | 추가 CSS 클래스    |
| `onClick`   | `function` | -        | 클릭 이벤트 핸들러 |

#### 버튼 상태

| 상태        | 설명        | 표시 텍스트 | 아이콘          |
| ----------- | ----------- | ----------- | --------------- |
| `idle`      | 기본 상태   | "업로드"    | up-arrow        |
| `uploading` | 업로드 중   | "업로드 중" | spinner-animate |
| `success`   | 업로드 성공 | "완료"      | check-mark      |
| `error`     | 업로드 실패 | "실패"      | cross           |
| `disabled`  | 비활성화    | "업로드"    | not-allowed     |

#### 사용 예시

```jsx
import UploadButton, { BUTTON_STATES } from './upload-button/upload-button'

// 기본 사용법
<UploadButton />

// 상태별 사용법
<UploadButton state={BUTTON_STATES.IDLE} />
<UploadButton state={BUTTON_STATES.UPLOADING} />
<UploadButton state={BUTTON_STATES.SUCCESS} />
<UploadButton state={BUTTON_STATES.ERROR} />
<UploadButton state={BUTTON_STATES.DISABLED} />

// 클릭 이벤트 처리
<UploadButton
  state={BUTTON_STATES.IDLE}
  onClick={(event) => {
    console.log('업로드 버튼 클릭됨')
  }}
/>
```

#### 접근성 기능

- 각 상태별로 적절한 `aria-label` 제공
- 스크린 리더 사용자를 위한 상태 정보 제공
- 키보드 네비게이션 지원
- 업로드 중 상태에서 진행 정보 제공

### 스타일링

각 컴포넌트는 독립적인 CSS 파일을 가지며, CSS 클래스를 통해 스타일을 커스터마이징할 수 있습니다.

- `src/components/svg-icon/svg-icon.css`
- `src/components/upload-button/upload-button.css`
