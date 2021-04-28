let dz = parseInt(prompt('Введите число от 1 до 2 для выбора номера домашего задания'))

switch (dz) {

    case 1:
        let a = parseInt(prompt('Введите целое число от 0 до 999'))

        function transformation(b) {
            let object_num = {
            }
            if (b < 1000) {
                object_num.hundred = Math.floor(b / 100)
                object_num.tenner = Math.floor((b - object_num.hundred * 100) / 10)
                object_num.ones = Math.floor((b - object_num.hundred * 100 - object_num.tenner * 10))
            } else {
                alert('Введённое число не соответствует условиям задания')
            }
            return (object_num)
        }

        c = transformation(a)
        console.log(c)
        break

    case 2:

        let object_basket = {
            name: '',
            quantity: 0,
            price: 0,
            subtotal: 0
        }

        let basket = {
            sum: [],
            quantity: [],
            name_quantity: 0,
            name: [],
            total_quantity: 0,
            total: 0
        }

        basket.name_quantity = parseInt(prompt('Введите количество наименований приобретаемого товара'))

        let x1 = 1

        while (x1 <= basket.name_quantity) {
            object_basket.name = prompt('Введите наименование товара')
            object_basket.quantity = parseInt(prompt('Введите количество единиц приобретаемого товара'))
            object_basket.price = parseInt(prompt('Введите стоимость этого товара'))
            object_basket.subtotal = object_basket.quantity * object_basket.price
            basket.sum.push(object_basket.subtotal)
            basket.quantity.push(object_basket.quantity)
            basket.name.push(object_basket.name)
            console.log(object_basket)
            x1++
        }

        function countBasketPrice(arr) {
            let q = 0
            for (let c = 0; c < arr.length; c++) {
                q += arr[c]
            }
            return q
        }

        basket.total_quantity = countBasketPrice(basket.quantity)
        basket.total = countBasketPrice(basket.sum)
        console.log(basket)
        alert('Итоговая цена корзины равняется ' + basket.total)

        break

    default:
        alert('Введено некорректное значение для ДЗ. Обновите страницу и повторите ввод.')
        break
}