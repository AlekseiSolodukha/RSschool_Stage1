//import '../assets/styles/style.css';
import keyBoardObject from './keys.js'

const keyboardButtons = [
  "Backquote", "Digit1", "Digit2", "Digit3", "Digit4", "Digit5", "Digit6", "Digit7", "Digit8", "Digit9", "Digit0", "Minus", "Equal", "Backslash", "Backspace",
  "Tab", "KeyQ", "KeyW", "KeyE", "KeyR", "KeyT", "KeyY", "KeyU", "KeyI", "KeyO", "KeyP", "BracketLeft", "BracketRight", "Delete",
  "CapsLock", "KeyA", "KeyS", "KeyD", "KeyF", "KeyG", "KeyH", "KeyJ", "KeyK", "KeyL", "Semicolon", "Quote", "Enter",
  "ShiftLeft", "KeyZ", "KeyX", "KeyC", "KeyV", "KeyB", "KeyN", "KeyM", "Comma", "Period", "Slash", "ArrowUp", "ShiftRight",
  "ControlLeft", "MetaLeft", "AltLeft", "Space", "AltRight", "ControlRight", "ArrowLeft", "ArrowDown", "ArrowRight"
];

const keyboardButtonsFunctional = [
  "Backquote", "Backspace", "Tab", "Delete", "CapsLock", "Enter", "ShiftLeft", "ArrowUp", "ShiftRight", "ControlLeft", "MetaLeft", "AltLeft", "AltRight", "ControlRight", "ArrowLeft", "ArrowDown", "ArrowRight"
]

/*document.addEventListener('keydown', function (event) {
  let key;
  let code;
  key = event.key;
  code = event.code;
  console.log(code);
  keyBoardObject[code] = key;
  console.log(keyBoardObject);
})*/

let wrapper = document.createElement('div');
wrapper.className = "wrapper";
document.body.append(wrapper);

wrapper.insertAdjacentHTML('afterbegin', '<textarea class="output" name="output" cols="147" rows="10" placeholder="Start tipping"></textarea>');

let keyboardContainer = document.createElement('div');
keyboardContainer.className = "keyboardContainer";
wrapper.append(keyboardContainer);

const createButtons = () => {
  let result;
  if(
    keyboardButtons[i] === "Backquote" ||
    keyboardButtons[i] === "Backspace" || 
    keyboardButtons[i] === "Tab" || 
    keyboardButtons[i] === "Delete" || 
    keyboardButtons[i] === "CapsLock" ||
    keyboardButtons[i] === "Enter" ||
    keyboardButtons[i] === "ShiftLeft" || 
    keyboardButtons[i] === "ArrowUp" || 
    keyboardButtons[i] === "ShiftRight" ||
    keyboardButtons[i] === "ControlLeft" || 
    keyboardButtons[i] === "MetaLeft" || 
    keyboardButtons[i] === "AltLeft" || 
    keyboardButtons[i] === "AltRight" || 
    keyboardButtons[i] === "ControlRight" || 
    keyboardButtons[i] === "ArrowLeft" || 
    keyboardButtons[i] === "ArrowDown" || 
    keyboardButtons[i] === "ArrowRight"
  ) {
    if (
      keyboardButtons[i] === "Backspace" || 
      keyboardButtons[i] === "CapsLock" ||
      keyboardButtons[i] === "Enter" ||
      keyboardButtons[i] === "ShiftLeft" 
    ) {
      result += `<div class='button functional_buttons functional_buttons_flexGrowDouble'>${keyBoardObject[keyboardButtons[i]]}</div>`
    } else if (
      keyboardButtons[i] === "Tab" || 
      keyboardButtons[i] === "Delete" || 
      keyboardButtons[i] === "ShiftRight" ||
      keyboardButtons[i] === "ControlLeft" || 
      keyboardButtons[i] === "ControlRight"
    ) {
      result += `<div class='button functional_buttons functional_buttons_flexGrowOneHalf'>${keyBoardObject[keyboardButtons[i]]}</div>`
    } else {
      result += `<div class='button functional_buttons'>${keyBoardObject[keyboardButtons[i]]}</div>`
    }   
  } else {
    result += `<div class='button'>${keyBoardObject[keyboardButtons[i]]}</div>`
  }
}

const createKeyBoard = () => {
  for (let i = 0; i < keyboardButtons.length; i++){
    createButtons();
  }
  keyboardContainer.insertAdjacentHTML('beforeend', result);
}

createKeyBoard();