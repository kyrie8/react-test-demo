import React, { memo, useRef, useEffect, useContext} from 'react'
import { contextThem } from 'src/utils/context'
import Father from './Father'
const GrandFather = () => {
  const them = useContext(contextThem)
  const node = useRef(null)
  useEffect(() => {
    console.log("node", node, them.color)
  }, [node, them])
  return <Father ref={node}></Father>
}

export default memo(GrandFather)