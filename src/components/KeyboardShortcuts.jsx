import React from 'react'

export default function KeyboardShortcuts({combo,cb = function (f) {
    return f;
  },className,style,children}) {
    var listener = new window.keypress.Listener();
    listener.simple_combo(combo, function() {
      cb()
  });
  return (
    <div style={style} className={className}>{children}</div>
  )
}
