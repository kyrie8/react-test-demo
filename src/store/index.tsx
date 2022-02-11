import React, {} from 'react'
import  {makeAutoObservable} from 'mobx'
export interface IInfo {
  name?: string,
  mes?: string
}
export interface IList {
  age: number,
  sex: string
}
class Store {
  constructor() {
    makeAutoObservable(this)
  }
  name = JSON.parse(localStorage.getItem('name') as string)
  list = [
    {
      sex: 'man',
      age: 18
    }
  ]
  changeName = (val:string) => {
    localStorage.setItem('name', JSON.stringify(val))
    this.name = val
  }
  resetName = (val: string) => {
    localStorage.setItem('name', JSON.stringify(val))
    this.name = val
  }
  changeList = (val: Array<IList>) => {
    this.list = val
  }
}

export interface type{
  name: string,
  type: string
}

class Store2 {
  constructor() {
    makeAutoObservable(this)
  }
  type = [
    {
      name: 'hhh',
      type: '水果'
    }
  ]
  changeType = (val: Array<type>) => {
    this.type = val
  }
}

export const storeContext = React.createContext({
  listStore: new Store(),
  typeStore: new Store2()
})

export const useStore = () => React.useContext(storeContext)
