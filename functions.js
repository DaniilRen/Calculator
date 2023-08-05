const label = document.getElementById('input-area-label')


let last_operation = null

function calculate() {
  if (last_operation === 'calculation') {
    default_output()
  } else {
    console.log(last_operation)
    const calculated_result = eval(old_number_with_operation+output.value)
    output.value = calculated_result
    last_operation = 'calculation' 
  }
  label.innerHTML = ''
}


function add_number(btn) {
  let number = btn.target.id

  if (output.value == '0') {
    delete_output()
  } 
  if (['+', '-', '/', '*'].includes(output.value)){
    operation_ = output.value
    delete_output()
  }
  output.value += number
  last_operation = 'number'
  label.innerHTML += number
}


let old_number_with_operation = null

function add_operation(btn) {
  let oper = btn.target.id
  old_number_with_operation = output.value + oper

  output.value = btn.target.id
  last_operation = 'operation'
  label.innerHTML = old_number_with_operation
}


function default_output() {
  output.value = '0'
  last_operation = null
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
  last_operation = 'cancel' 
  label.innerHTML = label.innerHTML.slice(0, label.innerHTML.length-1)
}

