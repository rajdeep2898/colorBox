import React from 'react'

export default function KeyboardShortcuts({combo,cb = function (f) {
    return f;
  },description,className,style}) {
    var listener = new window.keypress.Listener();
    listener.simple_combo(combo, function() {
    console.log("key press ",combo)
      cb()
  });
  return (
    <div style={style} className={className}>{description}</div>
  )
}
