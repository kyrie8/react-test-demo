//https://github.com/3lang3/react-vant/blob/main/packages/react-vant/src/hooks/use-lock-scroll.ts#L4
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
let count = 0;

const CLASSNAME = 'rv-overflow-hidden';

export interface Action {
  lock: () => void;
  unlock: () => void;
}

function useLockScroll(shouldLock: () => boolean | undefined) {
  const lock = () => {
    if (shouldLock()) {
      if (!count) {
        document.body.classList.add(CLASSNAME);
      }
      count += 1;
    }
  };

  const unlock = () => {
    if (shouldLock() && count) {
      count -= 1;
      if (!count) {
        document.body.classList.remove(CLASSNAME);
      }
    }
  };

  return [lock, unlock];
}

export default useLockScroll;