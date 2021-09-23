import {useState,useEffect} from 'react';
const PREFIX='codepen-clone-';
function useLocalStorage(key,prevValue){
  const prefixKey=PREFIX+key;
  const [value,setValue]=useState(()=>{
    const jsonValue=localStorage.getItem(prefixKey)
    if(jsonValue!=null){
      return JSON.parse(jsonValue);
    }
    if(typeof prevValue==="function"){
      return prevValue();
    }else{
      return prevValue;
    }
  })
  useEffect(()=>{
    localStorage.setItem(prefixKey,JSON.stringify(value))
  },[prefixKey,value])
  return [value,setValue];
}
export default useLocalStorage;
