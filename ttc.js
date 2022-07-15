



   (function () {
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
        gridDiv.setAttribute('id',i)
        boardContainer.appendChild(gridDiv)
        array.push(i)
        
    }
   






    

    //board event alternating x and o based on counter odd and even
    let counter = 0
    boardContainer.onmousedown = function(event) {
        let target = event.target; 
        

        
        if(event.target.classList.contains('grid')){console.log(counter++)}
        if((event.target.innerText === 'x' || event.target.innerText === 'o') && event.target.classList.contains('grid')) {
            counter--
        }
        else if((counter % 2 === 0) && event.target.classList.contains('grid')) {
            event.target.innerText = 'x'
            event.target.dataset.number = 0
            
        } else if((counter % 2 !== 0) && event.target.classList.contains('grid')){
            event.target.innerText = 'o'
            event.target.dataset.number = 1
        }

    }


    //defining variables that queryselect
    let zero = document.getElementById('0')
    let one = document.getElementById('1')
    let two = document.getElementById('2')
    let three = document.getElementById('3')
    let four = document.getElementById('4')
    let five = document.getElementById('5')
    let six = document.getElementById('6')
    let seven = document.getElementById('7')
    let eight = document.getElementById('8')
    
    //attempting to calculate win for first row
    

   




   })();










