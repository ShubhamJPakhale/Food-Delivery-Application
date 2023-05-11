import { useEffect, useState } from "react";

function getStorageData (key,defaultvalue)
{
    const savedItem = localStorage.getItem(key);
    const parsedItem = JSON.parse(savedItem);
    return parsedItem || defaultvalue
}

  

const useLocalstorage = (key, value)=>
{
    const [valuefromLS, setValuefromLS] =useState(()=>{
        return getStorageData(key,value)
      });

    useEffect(()=>{
        localStorage.setItem(key,JSON.stringify(valuefromLS));
    
      },[key, valuefromLS])

    return [valuefromLS, setValuefromLS]
}

export default useLocalstorage;