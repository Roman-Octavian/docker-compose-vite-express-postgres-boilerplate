import * as React from 'react';

let memory: any[] = [];

function keyPressToButton(key: string) {
  document.getElementById(key)!.click();
}

function handleKeyPress(event: any) {
  switch (event.keyCode) {
    case 13:
      event.preventDefault();
      keyPressToButton('equals');
      break;

    case 48:
      event.preventDefault();
      keyPressToButton('zero');
      break;

    case 96:
      event.preventDefault();
      keyPressToButton('zero');
      break;

    case 49:
      event.preventDefault();
      keyPressToButton('one');
      break;

    case 97:
      event.preventDefault();
      keyPressToButton('one');
      break;

    case 50:
      event.preventDefault();
      keyPressToButton('two');
      break;

    case 98:
      event.preventDefault();
      keyPressToButton('two');
      break;

    case 51:
      event.preventDefault();
      keyPressToButton('three');
      break;

    case 99:
      event.preventDefault();
      keyPressToButton('three');
      break;

    case 52:
      event.preventDefault();
      keyPressToButton('four');
      break;

    case 100:
      event.preventDefault();
      keyPressToButton('four');
      break;

    case 53:
      event.preventDefault();
      keyPressToButton('five');
      break;

    case 101:
      event.preventDefault();
      keyPressToButton('five');
      break;

    case 54:
      event.preventDefault();
      keyPressToButton('six');
      break;

    case 102:
      event.preventDefault();
      keyPressToButton('six');
      break;

    case 55:
      event.preventDefault();
      keyPressToButton('seven');
      break;

    case 103:
      event.preventDefault();
      keyPressToButton('seven');
      break;

    case 56:
      event.preventDefault();
      keyPressToButton('eight');
      break;

    case 104:
      event.preventDefault();
      keyPressToButton('eight');
      break;

    case 57:
      event.preventDefault();
      keyPressToButton('nine');
      break;

    case 105:
      event.preventDefault();
      keyPressToButton('nine');
      break;

    case 107:
      event.preventDefault();
      keyPressToButton('add');
      break;

    case 171:
      event.preventDefault();
      keyPressToButton('add');
      break;

    case 173:
      event.preventDefault();
      keyPressToButton('subtract');
      break;

    case 109:
      event.preventDefault();
      keyPressToButton('subtract');
      break;

    case 106:
      event.preventDefault();
      keyPressToButton('multiply');
      break;

    case 222:
      event.preventDefault();
      keyPressToButton('multiply');
      break;

    case 111:
      event.preventDefault();
      keyPressToButton('divide');
      break;

    case 110:
      event.preventDefault();
      keyPressToButton('decimal');
      break;

    case 190:
      event.preventDefault();
      keyPressToButton('decimal');
      break;

    case 8:
      event.preventDefault();
      keyPressToButton('clear');
      break;

    case 46:
      event.preventDefault();
      keyPressToButton('clear');
      break;

    default:
      break;
  }
}

function clear(
  setInput: (val: number | string) => void,
  setAns: (val: number | string | null) => void,
) {
  memory = [];
  setInput(0);
  setAns(null);
}

function updateDisplay(setInput: (val: number | string) => void) {
  setInput(memory.join(''));
}

function updateAns(setAns: (val: number | string | null) => void) {
  setAns(memory.join(''));
}

function input(i: any, setInput: (val: number | string) => void) {
  if (!isNaN(i) && memory.length !== 0 && !isNaN(memory[memory.length - 1])) {
    const j = memory.pop();
    if (j + i != '00') {
      memory.push('' + j + i);
    }
  } else if (i == '.') {
    let repeated = false;
    if (memory.length === 0) {
      memory.push(0);
    }
    for (let j = 0; j < memory[memory.length - 1].length; j++) {
      if (memory[memory.length - 1].toString().charAt(j) === i) {
        repeated = true;
      }
    }
    if (!repeated && !isNaN(memory[memory.length - 1])) {
      const j = memory.pop();
      memory.push('' + j + i);
    }
  } else {
    if (i != '.') {
      if (!(memory[memory.length - 1] == 0 && i == 0)) {
        memory.push(i);
      }
    }
  }
  updateDisplay(setInput);
}

function compute(
  setInput: (val: number | string) => void,
  setAns: (val: number | string | null) => void,
) {
  updateAns(setAns);
  let k = 0;
  while (memory.length > 1) {
    for (let i = 0; i < memory.length; i++) {
      if (!isNaN(memory[i + 1])) {
        switch (memory[i]) {
          case '+':
            while (true) {
              if (memory[i - 1] !== undefined) {
                k = parseFloat(memory[i - 1]) + parseFloat(memory[i + 1]);
                break;
              } else {
                memory.unshift(0);
                i += 1;
              }
            }
            memory.splice(i - 1, 3, k);
            k = 0;
            updateDisplay(setInput);
            i = 0;
            break;
          case '-':
            while (true) {
              if (memory[i - 1] !== undefined) {
                k = parseFloat(memory[i - 1]) - parseFloat(memory[i + 1]);
                break;
              } else {
                memory.unshift(0);
                i += 1;
              }
            }
            memory.splice(i - 1, 3, k);
            k = 0;
            updateDisplay(setInput);
            i = 0;
            break;
          case '*':
            while (true) {
              if (memory[i - 1] !== undefined) {
                k = (parseFloat(memory[i - 1]) * 10 * (parseFloat(memory[i + 1]) * 10)) / 100;
                break;
              } else {
                memory.unshift(0);
                i += 1;
              }
            }
            memory.splice(i - 1, 3, k);
            k = 0;
            updateDisplay(setInput);
            i = 0;
            break;
          case '/':
            while (true) {
              if (memory[i - 1] !== undefined) {
                k = parseFloat(memory[i - 1]) / parseFloat(memory[i + 1]);
                break;
              } else {
                memory.unshift(0);
                i += 1;
              }
            }
            memory.splice(i - 1, 3, k);
            k = 0;
            updateDisplay(setInput);
            i = 0;
            break;
          default:
            clear(setInput, setAns);
            updateDisplay(setInput);
            break;
        }
      } else if (isNaN(memory[i]) && isNaN(memory[i + 1])) {
        if (!isNaN(memory[i + 2]) && memory[i + 1] == '-') {
          memory[i + 2] = -Math.abs(memory[i + 2]);
          memory.splice(i + 1, 1);
        } else {
          memory.splice(i, 1);
        }
        i = 0;
      }
    }
  }
}

function Key({
  id,
  inp,
  label,
  setInput,
}: {
  id: string;
  inp: number | string;
  label?: string;
  setInput: (val: number | string) => void;
}) {
  return (
    <button
      id={id}
      onClick={() => {
        input(inp, setInput);
      }}
    >
      {label ?? inp}
    </button>
  );
}

export function Calculator() {
  const [inputState, setInput] = React.useState<number | string>(0);
  const [ans, setAns] = React.useState<number | string | null>(null);

  React.useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
  }, []);

  return (
    <div id="calculator">
      <div id="ans">
        <p>{ans}</p>
      </div>
      <div id="display">
        <p>{inputState}</p>
      </div>
      <button
        id="equals"
        onClick={() => {
          compute(setInput, setAns);
          fetch('http://localhost:8080/api/v1/post', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              input: inputState,
              result: memory.join(''),
            }),
          });
        }}
      >
        =
      </button>
      <Key id="zero" inp={0} setInput={setInput} />
      <Key id="one" inp={1} setInput={setInput} />
      <Key id="two" inp={2} setInput={setInput} />
      <Key id="three" inp={3} setInput={setInput} />
      <Key id="four" inp={4} setInput={setInput} />
      <Key id="five" inp={5} setInput={setInput} />
      <Key id="six" inp={6} setInput={setInput} />
      <Key id="seven" inp={7} setInput={setInput} />
      <Key id="eight" inp={8} setInput={setInput} />
      <Key id="nine" inp={9} setInput={setInput} />
      <Key id="add" inp="+" setInput={setInput} />
      <Key id="subtract" inp="-" setInput={setInput} />
      <Key id="multiply" inp="*" label="x" setInput={setInput} />
      <Key id="divide" inp="/" label="&#247;" setInput={setInput} />
      <Key id="decimal" inp="." setInput={setInput} />
      <button
        id="clear"
        onClick={() => {
          clear(setInput, setAns);
        }}
      >
        AC
      </button>
    </div>
  );
}
