import React, { memo } from 'react'
import {useNavigate} from 'react-router-dom'
const Test: React.FC = (porps) => {
  const nav = useNavigate()
  return (
    <div>
      哈哈哈
      <button onClick={() => nav('/')}>返回</button>
      <button onClick={() => nav('/fa')}>去嵌套路由</button>
    </div>
  )
}

export default memo(Test)