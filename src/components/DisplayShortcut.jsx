import React,{useContext} from 'react'
import { ShortCutContext } from '../App'

export default function DisplayShortcut({className}) {
    const shortCutList = useContext(ShortCutContext)
  return (
    <div className={className}>
        {shortCutList.map((el,i)=>{
            return(
            <div key={i}>
            <div>{el.name}</div>
            <div>
                <span>{el.combo}</span> : 
                <span>{el.description}</span>
            </div>
            </div>
            )
        })}
    </div>
  )
}
