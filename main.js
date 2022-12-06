// numeros generados

const lotteryNumbers = []
const arrNumbers = []

// inputs
const input1 = document.querySelector('.input-lottery-1')
const input2 = document.querySelector('.input-lottery-2')
const input3 = document.querySelector('.input-lottery-3')
const input4 = document.querySelector('.input-lottery-4')
const inputQuantity = document.querySelector('#input-quantity')

const listNumber = document.getElementById('list-numbers')
const randomNumbers = document.getElementById('number-list-random')

const randomNumberButton = document.getElementById('button-random-number')

input1.addEventListener('keyup', ()=> {
     if(input1.value.split('').length > 1) input1.value = input1.value.split('')[0]
})
input2.addEventListener('keyup', ()=> {
     if(input2.value.split('').length > 1) input2.value = input2.value.split('')[0]
})
input3.addEventListener('keyup', ()=> {
     if(input3.value.split('').length > 1) input3.value = input3.value.split('')[0]
})
input4.addEventListener('keyup', ()=> {
     if(input4.value.split('').length > 1) input4.value = input4.value.split('')[0]
})


// falta funcion para generar las combinaciones de los numeros
const combinateNumbers = (pos1, pos2, pos3, pos4) => {
     const combination0 = [Number(pos1), Number(pos2), Number(pos3), Number(pos4)]
     const combination1 = [Number(pos2), Number(pos1), Number(pos3), Number(pos4)]
     const combination2 = [Number(pos2), Number(pos3), Number(pos1), Number(pos4)]
     const combination3 = [Number(pos2), Number(pos3), Number(pos4), Number(pos1)]
     const combination4 = [Number(pos3), Number(pos2), Number(pos1), Number(pos4)]
     const combination5 = [Number(pos3), Number(pos1), Number(pos2), Number(pos4)]
     const combination6 = [Number(pos3), Number(pos1), Number(pos4), Number(pos2)]
     const combination7 = [Number(pos4), Number(pos3), Number(pos1), Number(pos2)]
     const combination8 = [Number(pos4), Number(pos1), Number(pos3), Number(pos2)]
     const combination9 = [Number(pos4), Number(pos1), Number(pos2), Number(pos3)]
     const combination10 = [Number(pos1), Number(pos4), Number(pos2), Number(pos3)]
     const combination11 = [Number(pos1), Number(pos2), Number(pos4), Number(pos3)]
     const combinations = [combination0, combination1, combination2, combination3, combination4, combination5, combination6, combination7, combination8, combination9, combination10, combination11]
     combinations.forEach((combination) => {
          lotteryNumbers.push(combination)
          combination.forEach((number, index) => {
               let newNumber = number
               if(number < 5){
                    while (newNumber > 0) {
                         newNumber--
                         const newCombination = [...combination]
                         newCombination[index] = newNumber
                         lotteryNumbers.push(newCombination)
                    }
                    if(newNumber === 0){
                         newNumber = number
                         while(newNumber < 9){
                              newNumber++
                              const newCombination = [...combination]
                              newCombination[index] = newNumber
                              lotteryNumbers.push(newCombination)
                         }
                    }
               }
               if(number > 5){
                    while (newNumber < 9) {
                         newNumber++
                         const newCombination = [...combination]
                         newCombination[index] = newNumber
                         lotteryNumbers.push(newCombination)
                    }
                    if(newNumber === 9){
                         newNumber = number
                         while (newNumber > 0){
                              newNumber--
                              const newCombination = [...combination]
                              newCombination[index] = newNumber
                              lotteryNumbers.push(newCombination)
                         }
                    }
               }              
          })
     })
}

const generate = () => {
    if(input1.value === '' || input2.value === '' || input3.value === '' || input4.value === '') return console.log('completa todos los campos')
    combinateNumbers(input1.value, input2.value, input3.value, input4.value)
    lotteryNumbers.forEach((combination, index) => {
          if(Number(index < inputQuantity.value)){
               const row = document.createElement('div')
               const rowContent = document.createElement('span')
               let numbers = ''
               combination.forEach(number => {
                    numbers += number.toString()
               })
               rowContent.innerText = numbers
               arrNumbers.push(numbers)
               row.appendChild(rowContent)
               listNumber.appendChild(row)               
          }
    })
    randomNumberButton.removeAttribute('disabled')
}

const randomNumber = () => {
     const limit = 10000
     for (let i = 0; i < limit; i++) {
          const row = document.createElement('div')
          const rowContent = document.createElement('span')
          const numberFromZeroToTen = `000${i}`
          const numberFromTenToOneHoundred = `00${i}`
          const numberFromOneHoundredToOneThousand = `0${i}`
          const numberBeforeTenThousand = `${i}`
          if(!arrNumbers.includes(numberFromZeroToTen)){
               if(i >= 0) rowContent.innerText = numberFromZeroToTen
          }
          if(!arrNumbers.includes(numberFromTenToOneHoundred)){
               if(i >= 10) rowContent.innerText = numberFromTenToOneHoundred
          }
          if(!arrNumbers.includes(numberFromOneHoundredToOneThousand)){
               if(i >= 100) rowContent.innerText = numberFromOneHoundredToOneThousand
          }
          if(!arrNumbers.includes(numberBeforeTenThousand)){
               if(i >= 1000) rowContent.innerText = numberBeforeTenThousand
          }
          row.appendChild(rowContent)
          randomNumbers.appendChild(row)
     }
}