import React from 'react'
import CSS from './index.scss'
export default function Hello() {
  return (
    <div>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />

      <div className="title">
        <div>测试Hello组件</div>
      </div>
    </div>
  )
}
