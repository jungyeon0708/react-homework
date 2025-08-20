// SvgIcon 컴포넌트 - Stateless 컴포넌트
// SVG 아이콘을 렌더링하는 재사용 가능한 컴포넌트
import './svg-icon.css'

/**
 * SVG 아이콘을 렌더링하는 컴포넌트
 * @param {Object} props - 컴포넌트 props
 * @param {string} props.icon - 아이콘 파일명 (확장자 제외, 예: 'check-mark', 'spinner-animate')
 * @param {number} [props.size=12] - 아이콘 크기 (픽셀 단위)
 * @param {string} [props.className=''] - 추가 CSS 클래스명
 * @param {string} [props.alt] - 접근성을 위한 대체 텍스트
 * @param {boolean} [props.decorative=false] - 장식용 아이콘인지 여부
 * @returns {React.ReactElement} 렌더링된 img 엘리먼트
 */
const SvgIcon = ({
  icon,
  size = 12,
  className = '',
  alt,
  decorative = false,
  ...props
}) => {
  const iconPath = `/assets/svg-icons/${icon}.svg`

  // 접근성을 위한 아이콘 이름 매핑
  const iconDescriptions = {
    'check-mark': '성공',
    'cross': '실패',
    'up-arrow': '업로드',
    'spinner-animate': '진행 중',
    'not-allowed': '비활성화',
  }

  const defaultAlt = decorative ? '' : iconDescriptions[icon] || icon
  const finalAlt = alt !== undefined ? alt : defaultAlt

  return (
    <img
      src={iconPath}
      alt={finalAlt}
      width={size}
      height={size}
      className={`svg-icon ${className}`}
      role={decorative ? 'presentation' : 'img'}
      aria-hidden={decorative}
      {...props}
    />
  )
}

export default SvgIcon
