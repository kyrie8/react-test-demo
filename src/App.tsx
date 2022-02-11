
import React, {useState} from 'react';
import './App.css';
import { contextThem } from './utils/context';

import { useNavigate } from 'react-router-dom';

import Popup from './components/popup/Popup';

import GrandFather from './ref/GrandFather';
import Mobx from './mobx/mobx'
function App() {
  const [bottom, setBottom] = useState(false)
  const [top, setTop] = useState(false)
  const [right, setRight] = useState(false)
  const [left, setLeft] = useState(false)
  const [center, setCenter] = useState(false)

  const [single, setSingle] = useState('')

  const [list, setList] = useState<Array<string>>([])
  
  const [them, setThem] = useState({color: 'red'})

  const nav = useNavigate()

  const getText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSingle(e.target.value)
  }
  const sentDanMu = () => {
    console.log('我要发送弹幕了')
    setList([...list, single])
  }
  return (
    <contextThem.Provider value={them}>
    <div className="App">    
      <div className='btn'>
        <button onClick={() => setBottom(!bottom)}>底部</button>
        <button onClick={() => setTop(!top)}>顶部</button>
        <button onClick={() => setLeft(!left)}>左部</button>
        <button onClick={() => setRight(!right)}>右部</button>
        <button onClick={() => setCenter(!center)}>中间</button>
        <button onClick={() => setThem({color: 'black'})}>them</button>
        <button onClick={() => nav('/test')}>跳转</button>
      </div>
      <div className='sent_danmu'>
        <input type="text" onChange={getText}/>
        <button onClick={sentDanMu}>发送</button>
      </div>
      <Popup visiable={bottom}>
        <h1>底部</h1>
      </Popup>
      <Popup visiable={top} position={'top'}>
        <h1>顶部</h1>
      </Popup>
      <Popup visiable={right} position={'right'}>
        <h1>右部</h1>
      </Popup>
      <Popup visiable={left} position={'left'}>
        <h1>左部</h1>
      </Popup>
      <Popup visiable={center} position={'center'}>
        <h1>中间</h1>
      </Popup>

      <GrandFather></GrandFather>

      <Mobx></Mobx>
   
      
      
    </div>
    </contextThem.Provider>
  );
}

export default App;
