const output = document.querySelector('.input-area')
output.value = 0


for (let i=0; i<10; i++) {
  let btn = document.getElementById(`${i}`)
  btn.addEventListener('click', add_number)

  addEventListener('keydown', (e) => {
    if (e.key == i) {
      add_number_from_keyboard(i)
    }
  })
}


const operations = ['+', '-', '*', '/']

for (let i of operations) {
  let btn = document.getElementById(`${i}`)
  btn.addEventListener('click', add_operation)

  addEventListener('keydown', (e) => {
    if (e.key == i) {
      add_operation_from_keyboard(i)
    }
  })
}




const solve = document.getElementById('solve')

solve.addEventListener('click', calculate)
addEventListener('keydown', (e) => {
  if (e.key == 'Enter' || e.key == '=') {
    calculate()
  }
})


const del = document.getElementById('delete')

del.addEventListener('click', default_output)
addEventListener('keydown', (e) => {
  if (e.key == 'Delete') {
    default_output()
  }
})


const cancel = document.getElementById('cancel')

cancel.addEventListener('click', cancel_input)
addEventListener('keydown', (e) => {
  if (e.key == 'Backspace') {
    cancel_input()
  }
})


const history_btn = document.querySelector('.history-btn')

history_btn.addEventListener('click', delete_history)
