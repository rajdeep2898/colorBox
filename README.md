# React shortcut Operation

    This project contains a component that will help us to capture shortcuts witn the help of https://github.com/dmauro/Keypress

# using KeyboardShortcuts
```
const styles = {
    background-color: blue
}
const onPressFunction = () => {
    ...
}
return(
 <KeyboardShortcuts
    combo="shift a"
    cb={onPressFunction}
    className="col-6 box"
    style={styles}
>
<div>
..//children
<div>
</KeyboardShortcuts>
)
```
