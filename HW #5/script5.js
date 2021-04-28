function init() {
    let dz = parseInt(prompt('Введите число от 1 до 2 для выбора номера домашего задания'))

    switch (dz) {

        case 1:
            function chessboard() {
                let board = document.getElementById('board')
                // board.innerHTML = 'Шахматная доска'
                // let black_cell = document.createElement('div')
                // black_cell.className = 'black_cell'
                // board.appendChild(black_cell)
                for (let i = 1; i <= 8; i++) {
                    for (let j = 1; i <= 8; j++) {
                        let black_cell = document.createElement('div')
                        black_cell.className = 'black_cell'
                        board.appendChild(black_cell)
                        let white_cell = document.createElement('div')
                        white_cell.className = 'white_cell'
                        board.appendChild(white_cell)
                    }
                }
            }
            chessboard()
            break

        case 2:

            break

        default:
            alert('Введено некорректное значение для ДЗ. Обновите страницу и повторите ввод.')
            break
    }
}
window.onload = init
