//import '../assets/styles/style.css';
import keyBoardObject from './keys.js'

const keyboardButtons = [
  "Backquote", "Digit1", "Digit2", "Digit3", "Digit4", "Digit5", "Digit6", "Digit7", "Digit8", "Digit9", "Digit0", "Minus", "Equal", "Backslash", "Backspace",
  "Tab", "KeyQ", "KeyW", "KeyE", "KeyR", "KeyT", "KeyY", "KeyU", "KeyI", "KeyO", "KeyP", "BracketLeft", "BracketRight", "Delete",
  "CapsLock", "KeyA", "KeyS", "KeyD", "KeyF", "KeyG", "KeyH", "KeyJ", "KeyK", "KeyL", "Semicolon", "Quote", "Enter",
  "ShiftLeft", "KeyZ", "KeyX", "KeyC", "KeyV", "KeyB", "KeyN", "KeyM", "Comma", "Period", "Slash", "ArrowUp", "ShiftRight",
  "ControlLeft", "MetaLeft", "AltLeft", "Space", "AltRight", "ControlRight", "ArrowLeft", "ArrowDown", "ArrowRight"
];

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

const createKeyBoard = () => {
  let result = '';
  for (let i = 0; i < keyboardButtons.length; i++){
    result += `<div class='key'>${keyBoardObject[keyboardButtons[i]]}</div>`
  }
  keyboardContainer.insertAdjacentHTML('beforeend', result);
}

createKeyBoard();