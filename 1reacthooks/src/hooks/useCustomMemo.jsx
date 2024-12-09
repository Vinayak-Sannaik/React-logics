import { useRef } from "react";

const useCustomMemo = (cb, dependence) => {
  // maintain storage to compare dependence and cache
  const staticRef = useRef({value: null, dependencies: []})
  const memo = staticRef.current

  function changeInDependence(oldDep, newDep) {
    if(oldDep.length !== newDep.length) return true
    for(let i = 0; i < newDep.length ; i++){
      if(oldDep[i] !== newDep[i]) return true
    }
    return false
  }

  // compare arrays
  if(changeInDependence(memo.dependencies , dependence)){
    memo.value = cb() // Recompute the memoized value
    memo.dependencies = dependence
  }
  // return memo value
  return memo.value
};

export default useCustomMemo;
