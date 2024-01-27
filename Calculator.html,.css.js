#index.html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Calculator</title>
</head>
<body>
    <div class="calculator">
        <input type="text" id="display" readonly>
        <div class="buttons">
            <button onclick="clearDisplay()">C</button>
            <button onclick="appendToDisplay('7')">7</button>
            <button onclick="appendToDisplay('8')">8</button>
            <button onclick="appendToDisplay('9')">9</button>
            <button onclick="appendToDisplay('+')">+</button>
            <button onclick="appendToDisplay('4')">4</button>
            <button onclick="appendToDisplay('5')">5</button>
            <button onclick="appendToDisplay('6')">6</button>
            <button onclick="appendToDisplay('-')">-</button>
            <button onclick="appendToDisplay('1')">1</button>
            <button onclick="appendToDisplay('2')">2</button>
            <button onclick="appendToDisplay('3')">3</button>
            <button onclick="appendToDisplay('*')">*</button>
            <button onclick="appendToDisplay('0')">0</button>
            <button onclick="appendToDisplay('.')">.</button>
            <button onclick="calculateResult()">=</button>
            <button onclick="appendToDisplay('/')">/</button>
        </div>
    </div>
    <script src="script.js"></script>
</body>
</html>


#style.css
body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
    background-color: #f0f0f0;
}

.calculator {
    background-color: #fff;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    text-align: center;
}

#display {
    width: 100%;
    font-size: 24px;
    padding: 10px;
    margin-bottom: 10px;
}

.buttons {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
}

button {
    font-size: 20px;
    padding: 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}


#script.js
let display = document.getElementById('display');
let currentInput = '';
let currentOperator = '';

function appendToDisplay(value) {
    currentInput += value;
    display.value = currentInput;
}

function clearDisplay() {
    currentInput = '';
    display.value = '';
}

function calculateResult() {
    try {
        currentInput = eval(currentInput);
        display.value = currentInput;
    } catch (error) {
        display.value = 'Error';
    }
}
