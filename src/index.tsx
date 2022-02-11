import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {HashRouter, Routes} from 'react-router-dom'
import {Router, renderFather, renderSon, router} from './router/index'

function Index() {
  console.log('刷新')
  return (
    <HashRouter>
      <Routes>
        {
          Router.map((item)=> {
            return item && item.children ? renderSon(item as unknown as router) : renderFather(item)
          })
        }
      </Routes>
    </HashRouter>
  )
}

ReactDOM.render(
  <Index/>
  ,
  document.getElementById('root')
);
