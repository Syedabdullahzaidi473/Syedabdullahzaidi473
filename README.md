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