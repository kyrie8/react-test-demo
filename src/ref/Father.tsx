import React, { memo, forwardRef } from 'react'
import Son from './son'
const Father = forwardRef((props, ref) => {
  return <Son grandRef={ref}></Son>
})

export default memo(Father)