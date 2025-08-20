// 상태가 없는(Stateless) 컴포넌트들
import React from 'react'
import SvgIcon from './svg-icon/svg-icon'
import UploadButton, { BUTTON_STATES } from './upload-button/upload-button'
import './index.css'
import './svg-icon/svg-icon.css'
import './upload-button/upload-button.css'

const App = () => (
  <div className="app-container">
    <h1>상태가 없는(Stateless) 컴포넌트</h1>

    <section className="component-section">
      <h2>SvgIcon 컴포넌트</h2>
      <div className="icon-showcase">
        <div className="icon-item">
          <SvgIcon icon="spinner-animate" />
          <span>spinner-animate</span>
        </div>
        <div className="icon-item">
          <SvgIcon icon="up-arrow" />
          <span>up-arrow</span>
        </div>
        <div className="icon-item">
          <SvgIcon icon="check-mark" />
          <span>check-mark</span>
        </div>
        <div className="icon-item">
          <SvgIcon icon="cross" />
          <span>cross</span>
        </div>
        <div className="icon-item">
          <SvgIcon icon="not-allowed" />
          <span>not-allowed</span>
        </div>
      </div>
    </section>

    <section className="component-section">
      <h2>UploadButton 컴포넌트</h2>
      <div className="button-showcase">
        <UploadButton state={BUTTON_STATES.IDLE} />
        <UploadButton state={BUTTON_STATES.UPLOADING} />
        <UploadButton state={BUTTON_STATES.SUCCESS} />
        <UploadButton state={BUTTON_STATES.ERROR} />
        <UploadButton state={BUTTON_STATES.DISABLED} />
      </div>
    </section>
  </div>
)

export default App
