import {Route} from 'react-router-dom'
import React, {lazy, Suspense} from 'react'
import { Spin } from '@arco-design/web-react'
export const Router = [
  {
    path: '/',
    element: lazy(() => import('../App'))
  },
  {
    path: 'test',
    element: lazy(() => import('../view/test'))
  },
  {
    path: 'fa',
    element: lazy(() => import('../view/father')),
    children: [
      {
        path: '/fa/child',
        element: lazy(() => import('../view/child')),
      }
    ]
  }
]

export interface router {
  path: string,
  element: React.FC,
  children: Array<child>
}

export interface child {
  path: string,
  element: React.FC,
  children?: Array<child>
}

export function renderFather(item: any) {
  return (
    <Route key={item.path} path={item.path} element={
      <Suspense fallback={
        <Spin></Spin>
      }>
        <item.element/>
      </Suspense>
    }>
    </Route>
  )
}
//嵌套路由
export function renderSon(item : router) {
  return (
    <Route key={item.path} path={item.path} element={
    <Suspense fallback={
      <Spin></Spin>
    }>
      <item.element/>
    </Suspense>}>
      {item.children.map(i => {
        return (
          <Route key={i.path} path={i.path} element={
            <Suspense fallback={
              <Spin></Spin>
            }>
              <i.element/>
            </Suspense>
          }></Route>
        )
      })}
    </Route>
  )
}