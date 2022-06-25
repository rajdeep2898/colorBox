import logo from './logo.svg';
import './App.css';
import KeyboardShortcuts from './components/KeyboardShortcuts';
import React,{useState} from 'react';
import DisplayShortcut from './components/DisplayShortcut';
import { boxData } from './static/staticData';

export const ShortCutContext= React.createContext()
function App() {
  const [color1, setColor1] = React.useState('');
  const [color2, setColor2] = React.useState('');
  const [color3, setColor3] = React.useState('');


const onChangeBox1 = () => {
  let col
  if(color1===''){
    col = 'Coral'
  } else {
    col = ''
  }
  setColor1(col)
  console.log("col=",col)
  }
  const onChangeBox2 = () => {
    let col
    if(color2===''){
        col = 'BlueViolet'
    } else {
      col = ''
    }
    setColor2(col)
  console.log("col=",col)
    }
    const onChangeBox3 = () => {
      let col
      if(color3===''){
        col = 'Aqua'
      } else {
        col = ''
      }
      setColor3(col)
      console.log("col=",col)
    }
  

const stylesBOX =(index)=> {
  // let col = index==0 ? color1:index==1?color2:color3
  if(index==0){
    return color1==''? boxData[index].backgroundColor:color1
  }else if(index==1){
    return color2==''? boxData[index].backgroundColor:color2
  }else if(index==2){
    return color3==''? boxData[index].backgroundColor:color3
  }
  return ""
 }

  return (
  <ShortCutContext.Provider value={boxData}>
    <div className="container">
          <div  className = "row noMargin">
            {
        boxData.map((el,i)=>(
          
            <KeyboardShortcuts key={i}
        combo={el.combo}
        cb={i===0?onChangeBox1:i===1?onChangeBox2:i==2?onChangeBox3:undefined}
        description={el.description}
        className="col-6 box"
        style={{backgroundColor:stylesBOX(i)}}
        
        >
          </KeyboardShortcuts>
        ))}
         <DisplayShortcut className="col four">
          
          </DisplayShortcut>
          </div>
         

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
          </KeyboardShortcuts>}

        <DisplayShortcut className="col four">
          
        </DisplayShortcut>
      </div> */}
    </div>
    </ShortCutContext.Provider>
  );
}

export default App;
