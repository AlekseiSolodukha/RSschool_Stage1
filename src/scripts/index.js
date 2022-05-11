import '../assets/styles/style.css';
import keyBoardObject from './keys';

const keyboardButtons = [
  'Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace',
  'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Delete',
  'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter',
  'ShiftLeft', 'Backslash', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight',
  'ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ControlRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight',
];

const wrapper = document.createElement('div');
wrapper.className = 'wrapper';
document.body.append(wrapper);

wrapper.insertAdjacentHTML('afterbegin', '<textarea class="output" name="output" cols="147" rows="10" placeholder="Tap to start tipping"></textarea>');

const keyboardContainer = document.createElement('div');
keyboardContainer.className = 'keyboardContainer';
wrapper.append(keyboardContainer);

wrapper.insertAdjacentHTML('beforeend', '<p>Клавиатура создна в операционной системе Windows</p>');

const createKeyBoard = () => {
  let result = '';
  for (let i = 0; i < keyboardButtons.length; i += 1) {
    if (
      keyboardButtons[i] === 'Backquote'
      || keyboardButtons[i] === 'Backspace'
      || keyboardButtons[i] === 'Tab'
      || keyboardButtons[i] === 'Delete'
      || keyboardButtons[i] === 'CapsLock'
      || keyboardButtons[i] === 'Enter'
      || keyboardButtons[i] === 'ShiftLeft'
      || keyboardButtons[i] === 'ArrowUp'
      || keyboardButtons[i] === 'ShiftRight'
      || keyboardButtons[i] === 'ControlLeft'
      || keyboardButtons[i] === 'MetaLeft'
      || keyboardButtons[i] === 'AltLeft'
      || keyboardButtons[i] === 'AltRight'
      || keyboardButtons[i] === 'ControlRight'
      || keyboardButtons[i] === 'ArrowLeft'
      || keyboardButtons[i] === 'ArrowDown'
      || keyboardButtons[i] === 'ArrowRight'
    ) {
      if (
        keyboardButtons[i] === 'Backspace'
        || keyboardButtons[i] === 'Enter'
      ) {
        result += `<div class='button functional_buttons functional_buttons_flexGrowDouble' data='${keyboardButtons[i]}'>${keyBoardObject[keyboardButtons[i]]}</div>`;
      } else if (
        keyboardButtons[i] === 'Tab'
        || keyboardButtons[i] === 'Delete'
        || keyboardButtons[i] === 'ControlLeft'
        || keyboardButtons[i] === 'ControlRight'
      ) {
        result += `<div class='button functional_buttons functional_buttons_flexGrowOneHalf' data='${keyboardButtons[i]}'>${keyBoardObject[keyboardButtons[i]]}</div>`;
      } else if (keyboardButtons[i] === 'CapsLock') {
        result += `<div class='button functional_buttons capsLock_button' data='${keyboardButtons[i]}'>${keyBoardObject[keyboardButtons[i]]}</div>`;
      } else if (keyboardButtons[i] === 'ShiftLeft') {
        result += `<div class='button functional_buttons shiftLeft_button' data='${keyboardButtons[i]}'>${keyBoardObject[keyboardButtons[i]]}</div>`;
      } else if (keyboardButtons[i] === 'ShiftRight') {
        result += `<div class='button functional_buttons' data='${keyboardButtons[i]}'>${keyBoardObject[keyboardButtons[i]]}</div>`;
      } else {
        result += `<div class='button functional_buttons' data='${keyboardButtons[i]}'>${keyBoardObject[keyboardButtons[i]]}</div>`;
      }
    } else if (keyboardButtons[i] === 'Space') {
      result += `<div class='button space_button' data='${keyboardButtons[i]}'>${keyBoardObject[keyboardButtons[i]]}</div>`;
    } else {
      result += `<div class='button' data='${keyboardButtons[i]}'>${keyBoardObject[keyboardButtons[i]]}</div>`;
    }
  }
  keyboardContainer.insertAdjacentHTML('beforeend', result);
};

createKeyBoard();

document.addEventListener('keydown', (event) => {
  document.querySelector(`.keyboardContainer .button[data='${event.code}']`).classList.add('active');
});

document.querySelectorAll('.keyboardContainer .button').forEach((el) => {
  el.addEventListener('mousedown', () => {
    el.classList.add('active');
  });
  el.addEventListener('mouseup', () => {
    el.classList.remove('active');
  });
});

document.addEventListener('keyup', (event) => {
  document.querySelector(`.keyboardContainer .button[data='${event.code}']`).classList.remove('active');
});
