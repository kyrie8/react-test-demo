import React, { useEffect } from 'react'
import {observer} from 'mobx-react'
import {useStore} from '../store/index'
interface IProps {
  grandRef: any
}
const Son: React.FC<IProps> = (props) => {
  const store = useStore()
  const {typeStore: {type, changeType}} = store
  useEffect(() => {
    console.log('son')
  })
  return <div>
    <span ref={props.grandRef}>我是你要获取的ref</span>
    <hr />
    <span>{type[0].name}--{type[0].type}</span>
    <button onClick={() => changeType([{name: '6666', type: '热气哦'}])}>改变type</button>
  </div>
}

export default observer(Son)