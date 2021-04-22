let dz = parseInt(prompt('Введите число от 1 до 4 для выбора номера домашего задания'))

switch (dz) {

    case 1:

        let meth = parseInt(prompt('Выберите 1 - для while, 2 - для for'))
        switch (meth) {

            case 1:
                alert('С помощью while у меня не получается сделать, не знаю, как исправить')
                let m = 2
                let numbers = [2]

                nextPrime:
                while (m++ <= 100) {
                    if (m % 2 === 0) {
                        continue nextPrime
                    } else {
                        let i = 3
                        while (i < m) {
                            if (m % i === 0) {
                                break
                                // continue nextPrime
                            } else {
                                console.log(i)
                                i++
                            }
                        }
                    }
                    numbers.push(m)
                    // m++
                }
                alert(numbers)
                break

            case 2:

                let n = 100
                let num = []
                nextPrime: for (let i = 2; i <= n; i++) {
                    for (let j = 2; j < i; j++) {
                        if (i % j == 0) continue nextPrime
                    }
                    num.push(i)
                }
                alert(num)
                break
        }

        break

    case 2:
        alert('Задание №2 и №3 объединены здесь')
        let basket = []
        let a = parseInt(prompt('Введите количество приобретаемого товара'))
        let a1 = 1
        while (a1 <= a) {
            let b = parseInt(prompt('Введите стоимость каждого товара'))
            basket.push(b)
            a1++
        }
        alert('Корзина = ' + basket)
        function countBasketPrice(arr) {
            let q = 0
            console.log(arr.length)
            for (let c = 0; c < arr.length; c++) {
                q += arr[c]
            }
            return alert('Стоимость корзины равна ' + q)
        }
        countBasketPrice(basket)
        break

    case 3:
        alert('Вывод чисел от 0 до 9 без использования тела цикла')
        for (let v = 0; v <= 9; alert(v++)) {

        } //Вывод чисел от 0 до 9 без использования тела цикла
        break

    case 4:
        let arr = ['x']
        for (let k = 0; k < 20; k++) {
            console.log(arr[k])
            arr.push(arr[k] + arr[0])
        }
        break

    default:
        alert('Введено некорректное значение для ДЗ. Обновите страницу и повторите ввод.')
        break
}