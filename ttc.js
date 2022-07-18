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

    const firstDisplay = document.createElement('div')
    firstDisplay.classList.add('firstdisplay')
    gameContainer.append(firstDisplay)

    const boardContainer = document.createElement('div')
    boardContainer.classList.add('boardcontainer')
    gameContainer.appendChild(boardContainer)

    const secondDisplay = document.createElement('div')
    secondDisplay.classList.add('firstdisplay')
    gameContainer.append(secondDisplay)

    const innerHolder = document.createElement ('div')
    innerHolder.classList.add('innerholder')
    firstDisplay.append(innerHolder)

    const nameTitle = document.createElement('div')
    nameTitle.classList.add('nametitle')
    innerHolder.append(nameTitle)
    nameTitle.innerText = playerOne

    const picOne = document.createElement('img')
    picOne.src = 'background1.png'
    picOne.classList.add('picone')
    innerHolder.append(picOne)

    const innerHolderTwo = document.createElement ('div')
    innerHolderTwo.classList.add('innerholder')
    secondDisplay.append(innerHolderTwo)

    const nameTitleTwo = document.createElement('div')
    nameTitleTwo.classList.add('nametitle')
    innerHolderTwo.append(nameTitleTwo)
    nameTitleTwo.innerText = playerTwo

    const picTwo = document.createElement('img')
    picTwo.src = 'background2.png'
    picTwo.classList.add('picone')
    innerHolderTwo.append(picTwo)

   
    const restart = document.createElement('button')
    restart.classList.add('restart')
    restart.innerText = 'Restart'
    container.append(restart)



    restart.onclick = function(event) {
        grabGame = document.querySelector('.gamecontainer')
        grabButton = document.querySelector('.restart')
        grabHeader = document.querySelector('.header')
        grabGame.remove()
        grabButton.remove()
        grabHeader.remove()

        test()
    }


    let array = []
    //board creation
    for (i = 0; i < 9; i++) {
        let gridDiv = document.createElement('div')
        gridDiv.classList.add('grid')
        gridDiv.dataset.number = i
        boardContainer.appendChild(gridDiv)
        array.push(gridDiv)
    }

  


    let dataArray = []
  

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
            
            
            
            
        } else if((counter % 2 !== 0) && event.target.classList.contains('grid')){
            event.target.innerText = 'o'
            event.target.dataset.status = 1
            dataArray.push(event.target.dataset.status)
            
            
        }

      
        


        let winConditions = [
            [0, 1, 2],
            [0, 3, 6],
            [0, 4, 8],
            [3, 4, 5],
            [6, 7, 8],
            [6, 4, 2],
            [1, 4, 7],
            [2, 5, 8],
          ];
          //    circle means 1 and cross means 0
          //    wincondion[0].
          //    dataset.number = winCondition array
          
    
          for (let index = 0; index < winConditions.length; index++) {
            const element = winConditions[index];
            
            // Possible winner combitions divs in array form
            // Map returns array
            // Every returns boolean (true, false)
            const check = element.map((x) => array[x]);
            
    
            const checkCircle = check.every((x) => x.dataset.status === "1");
            const checkCross = check.every((x) => x.dataset.status === "0");
            if (checkCircle) {
                alert('O Wins!')
            }
            else if(checkCross) {
                alert('X Wins!')
            }
    
            
          }
        } 
            




    })()}

    

    








    

    

    /*
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
*/