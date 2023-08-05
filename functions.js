let last_operation = null

function calculate() {
  if (last_operation === 'calculation') {
    default_output()
    last_operation = null
    old_number_with_operation = null
  } else {
    console.log(last_operation)
    const calculated_result = eval(old_number_with_operation+output.value)
    output.value = calculated_result
    last_operation = 'calculation' 

    change_label()
  }
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

  change_label()
}


let old_number_with_operation = null

function add_operation(btn) {
  let oper = btn.target.id
  old_number_with_operation = output.value + oper

  output.value = btn.target.id
  last_operation = 'operation'

  change_label()
}


function default_output() {
  output.value = '0'
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
}


const label = document.getElementById('input-area-label')

function change_label() {
  switch (last_operation) {
    case 'number':
      label.innerHTML = 'number'
    case 'operation':
      label.innerHTML = old_number_with_operation
    case 'calculation':
      label.innerHTML = ''
  }
}