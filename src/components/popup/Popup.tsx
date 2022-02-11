import classNames from 'classnames'
import './Popup.css'
import React, { memo, useEffect, useRef} from 'react'
import {CSSTransition} from 'react-transition-group'
import useLockScroll from '../../utils/use-lock-scroll'

export type Position = 'bottom' | 'top' | 'right' | 'left' | 'center'
export interface IProps {
  children?: React.ReactNode,
  visiable: boolean,
  position?: Position,
  onClick?: () => {},
  lockScroll?: boolean
}

const Popup: React.FC<IProps> = (props) => {
  const {visiable, children, position} = props
  const [lockScroll, unlockScroll] = useLockScroll(() => props?.lockScroll)
  const innerLockRef = useRef(false);
  useEffect(() => {
    if (!props.lockScroll) return;
    if (visiable) {
      lockScroll()
      innerLockRef.current = true
    }
    if (!visiable && innerLockRef.current) {
      unlockScroll()
      innerLockRef.current = false
    }
  }, [lockScroll, props.lockScroll, unlockScroll, visiable])
  useEffect(() => {
    return () => {
      if (props.lockScroll) unlockScroll();
    };
  }, [props.lockScroll, unlockScroll]);
  return (
    <CSSTransition
      in={visiable}
      classNames={`rv-popup--${position}`}
      timeout={300}
      onEnter={() => console.log('in')}
      onExited={() => console.log('out')}
      unmountOnExit
    >
      <div
       className={classNames(`rv-popup--${position}`, `rv-popup`)}
      >
        {children}
      </div>
    </CSSTransition>)
}

Popup.defaultProps = {
  position: 'bottom',
  visiable: false,
  lockScroll: true
}

export default memo(Popup)