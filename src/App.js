import logo from './logo.svg';
import './App.css';
import KeyboardShortcuts from './components/KeyboardShortcuts';
import React,{useState} from 'react';
import DisplayShortcut from './components/DisplayShortcut';
import { boxData } from './static/staticData';

export const ShortCutContext= React.createContext()
function App() {
  const [color, setColor] = React.useState(['','','']);

const onChangeBox = (index) => {
  if(color[index]===''){
     var col = 'Coral'
  } else {
    col = ''
  }
  setColor(color => color.map((color, i) => i === index ? col : color))
  console.log("color[0]=",color[0])
  }
  const onChangeBox2 = () => {
    if(color[1]===''){
       var col = 'BlueViolet'
    } else {
      col = ''
    }
    setColor(color => color.map((color, i) => i === 1 ? col : color))
    console.log("color[1]=",color[1])
    }
    const onChangeBox3 = () => {
      if(color[2]===''){
         var col = 'Aqua'
      } else {
        col = ''
      }
      setColor(color => color.map((color, i) => i === 2 ? col : color))
      console.log("color[2]=",color[2])
      }
  

const stylesBOX =(index)=> {
    return color[index]==''? boxData[index].backgroundColor:color[index]
 }
//  const stylesBOX2 = {
//   backgroundColor: color[1],
// }
// const stylesBOX3 = {
//   backgroundColor: color[2],
// }
  return (
  <ShortCutContext.Provider value={boxData}>
    <div className="container">
      {
        boxData.map((el,i)=>(
          <div key={i} className={i%2==0? "row noMargin":""}>
            <KeyboardShortcuts
        combo={el.combo}
        cb={onChangeBox(i)}
        description={el.description}
        className="box"
        style={{backgroundColor:stylesBOX(i)}}
        
        >
          </KeyboardShortcuts>
          </div>

        ))
      }
      {/* <div className="row noMargin">
        <KeyboardShortcuts
        combo={shortCut[0].combo}
        cb={onChangeBox1}
        description={shortCut[0].description}
        className="col one"
        style={stylesBOX1}>
          
        </KeyboardShortcuts>
        <KeyboardShortcuts
        combo={shortCut[1].combo}
        cb={onChangeBox2}
        description={shortCut[1].description}
        className="col two"
        style={stylesBOX2}>
          
        </KeyboardShortcuts>
      </div> */}
      {/* <div className="row noMargin">
      <KeyboardShortcuts
        combo={shortCut[2].combo}
        cb={onChangeBox3}
        description={shortCut[2].description}
        className="col three"
        style={stylesBOX3}>
          </KeyboardShortcuts>

        <DisplayShortcut className="col four">
          
        </DisplayShortcut>
      </div> */}
    </div>
    </ShortCutContext.Provider>
  );
}

export default App;
