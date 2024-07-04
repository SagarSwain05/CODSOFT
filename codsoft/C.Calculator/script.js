// script.js

const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const action = button.getAttribute('data-action');
        
        if (!isNaN(action) || action === '.') {
            if (display.innerText === '0') {
                display.innerText = action;
            } else {
                display.innerText += action;
            }
        } else if (action === 'clear') {
            display.innerText = '0';
        } else if (action === 'delete') {
            display.innerText = display.innerText.slice(0, -1) || '0';
        } else if (action === 'equals') {
            try {
                display.innerText = eval(display.innerText);
            } catch {
                display.innerText = 'Error';
            }
        } else {
            const operators = { add: '+', subtract: '-', multiply: '*', divide: '/',mod: '%', decimal: '.'};
            display.innerText += operators[action];
        }
    });
});