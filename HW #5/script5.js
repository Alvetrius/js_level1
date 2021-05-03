function init() {
    let dz = parseInt(prompt('Введите число от 1 до 2 для выбора номера домашего задания. Задание №2 и №3 совмещены'))

    switch (dz) {

        case 1:

            function chessboard() {
                let board = document.getElementById('board')
                board.classList.add('board')
                let flag = true
                let cell
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

            break

        case 2:

            function basket() {
                board.classList.add('basket')


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

                let object_catalog = {
                    name: [],
                    price: []
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
                    object_catalog.name.push(object_basket.name)
                    object_catalog.price.push(object_basket.price)
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
                // alert('Итоговая цена корзины равняется ' + basket.total)

                let message

                if (basket.total_quantity !== 0) {
                    message = 'В корзине ' + basket.total_quantity + ' товаров на сумму ' + basket.total + ' рублей'
                } else {
                    message = 'Корзина пуста'
                }

                board.innerHTML = message

                let catalog = document.getElementById('catalog')
                catalog.classList.remove('catalog_invis')
                catalog.classList.add('catalog')

                function createCatalog(arr1, arr2) {
                    let v
                    let u
                    let y
                    for (let n = 0; n < arr1.length; n++) {
                        let item_name = arr1[n]
                        let item_price = arr2[n]
                        v = document.createElement('div')
                        v.className = 'catalog_item'
                        u = document.createElement('span')
                        u.className = 'catalog_item_el'
                        u.innerHTML = item_name
                        y = document.createElement('span')
                        y.className = 'catalog_item_el'
                        y.innerHTML = item_price
                        v.appendChild(u)
                        v.appendChild(y)
                        w = catalog.appendChild(v)
                    }
                    return w
                }

                let e = createCatalog(object_catalog.name, object_catalog.price)

                console.log(e)
            }

            basket()

            break

        default:
            alert('Введено некорректное значение для ДЗ. Обновите страницу и повторите ввод.')
            break
    }
}

window.onload = init