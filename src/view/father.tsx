import React, { memo } from 'react'
import {Outlet, useNavigate} from 'react-router-dom'
const Father: React.FC = (porps) => {
  const nav = useNavigate()
  return (
    <div>
      我是父组件
      <button onClick={() => nav('/fa/child')}>字组件</button>
      <Outlet/>
    </div>
  )
}

export default memo(Father)