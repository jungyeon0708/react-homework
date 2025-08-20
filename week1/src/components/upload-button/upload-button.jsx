import SvgIcon from '../svg-icon/svg-icon'
import './upload-button.css'

/**
 * 업로드 버튼의 가능한 상태들
 * @readonly
 * @enum {string}
 */
const BUTTON_STATES = {
  IDLE: 'idle',
  UPLOADING: 'uploading',
  SUCCESS: 'success',
  ERROR: 'error',
  DISABLED: 'disabled',
}

const BUTTON_CONFIG = {
  [BUTTON_STATES.IDLE]: {
    text: '업로드',
    icon: 'up-arrow',
    className: 'upload-btn--idle',
  },
  [BUTTON_STATES.UPLOADING]: {
    text: '업로드 중',
    icon: 'spinner-animate',
    className: 'upload-btn--uploading',
  },
  [BUTTON_STATES.SUCCESS]: {
    text: '완료',
    icon: 'check-mark',
    className: 'upload-btn--success',
  },
  [BUTTON_STATES.ERROR]: {
    text: '실패',
    icon: 'cross',
    className: 'upload-btn--error',
  },
  [BUTTON_STATES.DISABLED]: {
    text: '업로드',
    icon: 'not-allowed',
    className: 'upload-btn--disabled',
  },
}

/**
 * UploadButton 컴포넌트
 * @param {Object} props
 * @param {string} props.state - 버튼 상태 ('idle'|'uploading'|'success'|'error'|'disabled')
 * @param {string} [props.className] - 추가 CSS 클래스
 * @param {import('react').MouseEventHandler<HTMLButtonElement>} [props.onClick] - 클릭 이벤트 핸들러
 */
const UploadButton = ({
  state = 'idle',
  className = '',
  onClick,
  ...props
}) => {
  const config = BUTTON_CONFIG[state]

  // 각 상태별 aria-label 설정
  const ariaLabels = {
    idle: '파일 업로드',
    uploading: '파일 업로드 중입니다',
    success: '파일 업로드가 성공했습니다',
    error: '파일 업로드에 실패했습니다. 다시 시도해주세요',
    disabled: '파일 업로드 버튼이 비활성화되었습니다',
  }

  return (
    <button
      className={`upload-btn upload-btn--${state} ${className}`}
      disabled={state === 'disabled' || state === 'uploading'}
      onClick={onClick}
      aria-label={ariaLabels[state]}
      aria-describedby={state === 'uploading' ? 'upload-status' : undefined}
      {...props}
    >
      <span className="upload-btn__text">{config.text}</span>
      {config.icon && (
        <SvgIcon
          icon={config.icon}
          decorative={true}
          aria-hidden="true"
          className="upload-btn__icon"
        />
      )}
      {state === 'uploading' && (
        <span id="upload-status" className="sr-only">
          업로드 진행률을 확인하세요
        </span>
      )}
    </button>
  )
}

// Named exports for button states
export { BUTTON_STATES }
export default UploadButton
