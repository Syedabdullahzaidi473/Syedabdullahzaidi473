
import tkinter as tk

def button_click(number):
    current = entry.get()
    entry.delete(0, tk.END)
    entry.insert(0, current + str(number))

def clear():
    entry.delete(0, tk.END)

def add():
    first_number = entry.get()
    global f_num
    global math
    math = "addition"
    f_num = float(first_number)
    entry.delete(0, tk.END)

def subtract():
    first_number = entry.get()
    global f_num
    global math
    math = "subtraction"
    f_num = float(first_number)
    entry.delete(0, tk.END)

def multiply():
    first_number = entry.get()
    global f_num
    global math
    math = "multiplication"
    f_num = float(first_number)
    entry.delete(0, tk.END)

def divide():
    first_number = entry.get()
    global f_num
    global math
    math = "division"
    f_num = float(first_number)
    entry.delete(0, tk.END)

def equal():
    second_number = entry.get()
    entry.delete(0, tk.END)
    if math == "addition":
        entry.insert(0, f_num + float(second_number))
    if math == "subtraction":
        entry.insert(0, f_num - float(second_number))
    if math == "multiplication":
        entry.insert(0, f_num * float(second_number))
    if math == "division":
        if float(second_number) == 0:
            entry.insert(0, "Error")
        else:
            entry.insert(0, f_num / float(second_number))

# Create the main window
root = tk.Tk()
root.title("Calculator")

# Entry widget for input/output
entry = tk.Entry(root, width=30)
entry.grid(row=0, column=0, columnspan=4)

# Define calculator buttons
buttons = [
    '7', '8', '9', '/',
    '4', '5', '6', '*',
    '1', '2', '3', '-',
    '0', 'C', '=', '+'
]

# Create and place buttons on the grid
row_val = 1
col_val = 0

for button in buttons:
    if button == '=':
        tk.Button(root, text=button, padx=20, pady=20, command=equal).grid(row=row_val, column=col_val)
    elif button == 'C':
        tk.Button(root, text=button, padx=20, pady=20, command=clear).grid(row=row_val, column=col_val)
    else:
        tk.Button(root, text=button, padx=20, pady=20, command=lambda num=button: button_click(num)).grid(row=row_val, column=col_val)
    col_val += 1
    if col_val > 3:
        col_val = 0
        row_val += 1

# Run the GUI
root.mainloop() 





```python
# Calculator program

# Function to add two numbers
def add(x, y):
    return x + y

# Function to subtract two numbers
def subtract(x, y):
    return x - y

# Function to multiply two numbers
def multiply(x, y):
    return x * y

# Function to divide two numbers
def divide(x, y):
    if y == 0:
        return "Cannot divide by zero"
    return x / y

# Main program loop
while True:
    print("Options:")
    print("Enter 'add' for addition")
    print("Enter 'subtract' for subtraction")
    print("Enter 'multiply' for multiplication")
    print("Enter 'divide' for division")
    print("Enter 'quit' to end the program")
    
    user_input = input(": ")
    
    if user_input == "quit":
        break
    elif user_input in ("add", "subtract", "multiply", "divide"):
        num1 = float(input("Enter first number: "))
        num2 = float(input("Enter second number: "))
        
        if user_input == "add":
            print("Result: ", add(num1, num2))
        elif user_input == "subtract":
            print("Result: ", subtract(num1, num2))
        elif user_input == "multiply":
            print("Result: ", multiply(num1, num2))
        elif user_input == "divide":
            print("Result: ", divide(num1, num2))
    else:
        print("Invalid input")
```
tik tak toe game 
HTML (index.html):<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>
    <h1>Tic Tac Toe</h1>
    <div class="board">
        <div class="cell" onclick="makeMove(this)"></div>
        <div class="cell" onclick="makeMove(this)"></div>
        <div class="cell" onclick="makeMove(this)"></div>
        <div class="cell" onclick="makeMove(this)"></div>
        <div class="cell" onclick="makeMove(this)"></div>
        <div class="cell" onclick="makeMove(this)"></div>
        <div class="cell" onclick="makeMove(this)"></div>
        <div class="cell" onclick="makeMove(this)"></div>
        <div class="cell" onclick="makeMove(this)"></div>
    </div>
    <p id="message"></p>
    <button id="resetButton" onclick="resetBoard()">Reset</button>
    <script src="script.js"></script>
</body>
</html>CSS (style.css):.board {
    display: grid;
    grid-template-columns: repeat(3, 100px);
    gap: 5px;
    width: 320px;
    margin: 0 auto;
}

.cell {
    width: 100px;
    height: 100px;
    font-size: 24px;
    text-align: center;
    line-height: 100px;
    border: 1px solid #ccc;
    cursor: pointer;
}

h1, p {
    text-align: center;
}

button {
    display: block;
    margin: 20px auto;
}JavaScript (script.js):let currentPlayer = 'X';
let cells = document.querySelectorAll('.cell');
let message = document.getElementById('message');

function makeMove(cell) {
    if (!cell.textContent) {
        cell.textContent = currentPlayer;
        checkWinner();
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
}

function checkWinner() {
    const winningCombos = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    for (let combo of winningCombos) {
        const [a, b, c] = combo;
        if (cells[a].textContent && cells[a].textContent === cells[b].textContent && cells[a].textContent === cells[c].textContent) {
            message.textContent = `${currentPlayer} wins!`;
            disableCells();
            return;
        }
    }

    if ([...cells].every(cell => cell.textContent)) {
        message.textContent = "It's a draw!";
    }
}

function disableCells() {
    cells.forEach(cell => cell.style.pointerEvents = 'none');
}

function resetBoard() {
    cells.forEach(cell => {
        cell.textContent = '';
        cell.style.pointerEvents = 'auto';
    });
    message.textContent = '';
    currentPlayer = 'X';
}

resetBoard();