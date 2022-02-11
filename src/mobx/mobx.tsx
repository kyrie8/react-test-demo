import React from 'react'
import {observer} from 'mobx-react'
import {useStore} from '../store/index'
interface IProps {

}

const Mobx: React.FC<IProps>= (props) => {
  const store = useStore()
  const {listStore: {name, changeName, list, resetName, changeList}} = store
  return (
    <div>
      <div>名字：{name}</div>
      <div>信息：{list[0].age}---{list[0].sex}</div>
      <button onClick={() => changeName('xiaohong')}>改变名字</button>
      <button onClick={() => resetName('restName')}>重置名字</button>
      <button onClick={() => changeList([{age: 23, sex: 'wemen'}])}>修改信息</button>
    </div>
  )
}

export default observer(Mobx)