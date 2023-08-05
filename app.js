const output = document.querySelector('.input-area')
output.value = 0


for (let i=0; i<10; i++) {
  let btn = document.getElementById(`${i}`)
  btn.addEventListener('click', add_number)
}


const operations = ['+', '-', '*', '/']

for (let i of operations) {
  let btn = document.getElementById(`${i}`)
  btn.addEventListener('click', add_operation)
}


const del = document.getElementById('delete')
const solve = document.getElementById('solve')
const cancel = document.getElementById('cancel')

solve.addEventListener('click', calculate)

del.addEventListener('click', default_output)

cancel.addEventListener('click', cancel_input)



