let playerOne = ''
let playerTwo = ''
  

//Initial Start Button creation and event listener
  const start = (function(){
        const container = document.querySelector('.container')
        
        const startButton = document.createElement('button')
        startButton.classList.add('start')
        startButton.type = 'button'
        startButton.innerText = 'Start'
        container.append(startButton)

        startButton.addEventListener('click', (event) => {
            players()
            const grab = document.querySelector('.start')
            grab.remove()
        })
    })

start()

//PlayerName Selection/form creation
const players = (function () {
    const container = document.querySelector('.container')


    const formBox = document.createElement('div')
    formBox.classList.add('formcontainer')
    container.append(formBox)

    

    const form = document.createElement('form')
    form.classList.add('form')
    formBox.append(form)

    const box = document.createElement('div')
    box.classList.add('box')
    form.append(box)

    const boxOne = document.createElement('label')
    boxOne.htmlFor = 'PlayerOne'
    box.append(boxOne)
    const boxOneInput = document.createElement('input')
    boxOneInput.type = 'text'
    boxOneInput.classList.add('boxone')
    boxOneInput.id = ('PlayerOne')
    boxOneInput.placeholder = 'Player 1'
    boxOneInput.name = 'PlayerOne'
    box.append(boxOneInput)

    const boxTwo = document.createElement('label')
    boxTwo.htmlFor = 'PlayerTwo'
    box.append(boxTwo)
    const boxTwoInput = document.createElement('input')
    boxTwoInput.type = 'text'
    boxTwoInput.placeholder = 'Player 2'
    boxTwoInput.id = ('PlayerTwo')
    boxTwoInput.name = 'PlayerTwo'
    box.append(boxTwoInput)


    const boxFour = document.createElement('div')
    boxFour.classList.add('boxfour')
    form.append(boxFour)

    const boxThree = document.createElement('button')
    boxThree.classList.add('submit')
        boxThree.type = 'button'
        boxThree.innerText = 'Start'
        boxFour.append(boxThree)

boxThree.addEventListener('click', function() {
    grabOne = document.getElementById('PlayerOne').value
    playerOne = grabOne
    console.log(playerOne)

    grabTwo = document.getElementById('PlayerTwo').value
    playerTwo = grabTwo
    console.log(playerTwo)


    test()

    const grabThree = document.querySelector('.formcontainer')
    grabThree.remove()
})



})


//Game Function
const test =  function() {(function () {
    //html element creations
    const container = document.querySelector('.container')

    const header = document.createElement('div')
    header.classList.add('header')
    container.appendChild(header)
    header.innerText = 'Tic-Tac-Toe'

    const gameContainer = document.createElement('div')
    gameContainer.classList.add('gamecontainer')
    container.appendChild(gameContainer)

    const boardContainer = document.createElement('div')
    boardContainer.classList.add('boardcontainer')
    gameContainer.appendChild(boardContainer)


    

    let array = []
    //board creation
    for (i = 0; i < 9; i++) {
        let gridDiv = document.createElement('div')
        gridDiv.classList.add('grid')
        gridDiv.dataset.number = i
        boardContainer.appendChild(gridDiv)
        array.push(gridDiv)
    }

    let select = document.querySelectorAll('[data-status]')
  


    let dataArray = []
    let winConditions = [
        [0, 1, 2],
        [0, 3, 6],
        [0, 4, 8],
        [3, 4, 5],
        [6, 7, 8],
        [6, 4, 2],
        [1, 4, 7],
        [2, 5, 8]
    ]

    //board event alternating x and o based on counter odd and even
    let counter = 0
    boardContainer.onclick = function(event) {
        let target = event.target; 
        
        
        
        if(event.target.classList.contains('grid')){counter++}
        if((event.target.innerText === 'x' || event.target.innerText === 'o') && event.target.classList.contains('grid')) {
            counter--
        }
        else if((counter % 2 === 0) && event.target.classList.contains('grid')) {
            event.target.innerText = 'x'
            event.target.dataset.status = 0
            dataArray.push(event.target.dataset.status)
            console.log(dataArray)
            
            
            
        } else if((counter % 2 !== 0) && event.target.classList.contains('grid')){
            event.target.innerText = 'o'
            event.target.dataset.status = 1
            dataArray.push(event.target.dataset.status)
            console.log(dataArray)
            
        }

      
        

    
        if(array[0].innerText === 'o' && array[1].innerText === 'o' && array[2].innerText === 'o') {console.log('you win')}
        else if(array[0].innerText === 'o' && array[3].innerText === 'o' && array[6].innerText === 'o') {console.log('you win')}
        else if(array[0].innerText === 'o' && array[4].innerText === 'o' && array[8].innerText === 'o') {console.log('you win')}
        else if(array[3].innerText === 'o' && array[4].innerText === 'o' && array[5].innerText === 'o') {console.log('you win')}
        else if(array[6].innerText === 'o' && array[7].innerText === 'o' && array[8].innerText === 'o') {console.log('you win')}
        else if(array[6].innerText === 'o' && array[4].innerText === 'o' && array[2].innerText === 'o') {console.log('you win')}
        else if(array[1].innerText === 'o' && array[4].innerText === 'o' && array[7].innerText === 'o') {console.log('you win')}
        else if(array[2].innerText === 'o' && array[5].innerText === 'o' && array[8].innerText === 'o') {console.log('you win')}
        
        else if(array[0].innerText === 'x' && array[3].innerText === 'x' && array[6].innerText === 'x') {console.log('you win')}
        else if(array[0].innerText === 'x' && array[4].innerText === 'x' && array[8].innerText === 'x') {console.log('you win')}
        else if(array[3].innerText === 'x' && array[4].innerText === 'x' && array[5].innerText === 'x') {console.log('you win')}
        else if(array[6].innerText === 'x' && array[7].innerText === 'x' && array[8].innerText === 'x') {console.log('you win')}
        else if(array[6].innerText === 'x' && array[4].innerText === 'x' && array[2].innerText === 'x') {console.log('you win')}
        else if(array[1].innerText === 'x' && array[4].innerText === 'x' && array[7].innerText === 'x') {console.log('you win')}
        else if(array[2].innerText === 'x' && array[5].innerText === 'x' && array[8].innerText === 'x') {console.log('you win')}
        else if(counter > 8) {console.log("Tie!")} 
        } 


    })()}

    

    


    

    

