import React from 'react'

export default function KeyboardShortcuts({combo,cb,description,className,style}) {
    var listener = new window.keypress.Listener();
    listener.simple_combo(combo, function() {
    //   console.log("You pressed shift and s",description);
    console.log(style)
      cb()
  });
  return (
    <div style={style} className={className}>{description}</div>
  )
}
