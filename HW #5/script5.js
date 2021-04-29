function chessboard() {
    let board = document.getElementById('board')
    let flag = true
    let cell
    // let cell_left
    // let letters = [A, B, C, D, E, F, G, I]
    // let numbers = [1, 2, 3, 4, 5, 6, 7, 8]
    // for (let l = 1; l <= 8; l++) {
    //     cell_left = document.createElement('div')
    //     cell_left.className = 'cell_left'
    //     cell_left.innerHTML = numbers[l]
    //     board.appendChild(cell_left)
    // }
    for (let i = 1; i <= 8; i++) {
        for (let j = 1; j <= 8; j++) {
            if (j === 1) {
                flag = !flag
            }
            cell = document.createElement('div')
            if (flag) {
                cell.className = 'cell black'
            } else {
                cell.className = 'cell white'
            }
            board.appendChild(cell)
            flag = !flag
        }
    }
}
chessboard()
