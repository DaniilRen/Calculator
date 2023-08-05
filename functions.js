const label = document.getElementById('input-area-label')


let last_action = null
let history_element_trigger = false

function calculate() {
  if (last_action === 'calculation') {
    default_output()
  } else {
    const result = eval(old_number_with_operation+output.value)

    history_element_trigger = true
    add_history_element(old_number, output.value, operation, result)

    output.value = result
    last_action = 'calculation'
  }
  label.innerHTML = ''
}


function add_number(btn) {
  let number = btn.target.id

  output_zero_check()
  output_operation_check()
  output.value += number
  last_action = 'number'
  label.innerHTML += number
}


let old_number_with_operation = null
let old_number = null
let operation = null 

function add_operation(btn) {
  operation = btn.target.id
  old_number = output.value
  old_number_with_operation = old_number + operation

  output.value = btn.target.id
  last_action = 'operation'
  label.innerHTML = old_number_with_operation
}


function default_output() {
  output.value = '0'
  last_action = null
  old_number_with_operation = null
  label.innerHTML = ''
}


function delete_output() {
  output.value = ''
}


function cancel_input() {
  output.value = output.value.slice(0, output.value.length-1)
  if (output.value == '') {
    output.value = 0
  }
  old_number_with_operation = null
  last_action = 'cancel' 
  label.innerHTML = label.innerHTML.slice(0, label.innerHTML.length-1)
}


function add_number_from_keyboard(number) {
  output_zero_check()
  output_operation_check()
  output.value += number
  label.innerHTML += number
  last_action = 'number'
}


function add_operation_from_keyboard(keyboard_operation) {
  operation = keyboard_operation
  old_number = output.value
  old_number_with_operation = old_number + operation

  output.value = operation
  last_action = 'operation'
  label.innerHTML = old_number_with_operation
}


function output_zero_check() {
  if (output.value == '0') {
    delete_output()
  }
}


function output_operation_check() {
  if (['+', '-', '/', '*'].includes(output.value)){
    delete_output()
  }
}


const history_data = document.querySelector('.history-data')

function add_history_element(a, b, operation, result) {
  if (history_element_trigger) {
    expression = `${a} ${operation} ${b} = ${result}`
    element = `<div class="history-element">${expression}</div>`
    history_data.insertAdjacentHTML("beforeend" ,element)
    history_element_trigger = false
  }
}

function delete_history() {
  history_data.innerHTML = ''
}