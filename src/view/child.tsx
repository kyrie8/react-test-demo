import React, { memo } from 'react'
import {useNavigate} from 'react-router-dom'
const Child: React.FC = (porps) => {
  const nav = useNavigate()
  return (
    <div>
      我是子组件
      <button onClick={() => nav('/')}>返回首页</button>
    </div>
  )
}

export default memo(Child)