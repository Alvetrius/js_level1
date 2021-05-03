function basket() {

    let basket = {
        sum: [],
        quantity: 0,
        name: [],
        total: 0
    }

    let object_catalog = {
        name: [],
        price: [],
        buy: [],
        quantity: 0
    }

    object_catalog.quantity = parseInt(prompt('Введите количество наименований в каталоге'))

    let x1 = 1
    let x2
    let x3

    while (x1 <= object_catalog.quantity) {
        x2 = prompt('Введите наименование товара')
        x3 = parseInt(prompt('Введите стоимость этого товара'))
        object_catalog.name.push (x2)
        object_catalog.price.push (x3)
        object_catalog.buy.push ('buy' + x1)
        console.log(object_catalog)
        x1++
    }

    let catalog = document.getElementById('catalog')

    function createCatalog(arr1, arr2, catalog) {
        let v
        let u
        let y
        let z
        for (let n = 0; n < arr1.length; n++) {
            let item_name = arr1[n]
            let item_price = arr2[n]
            v = document.createElement('div')
            v.className = 'catalog_item'
            u = document.createElement('span')
            u.className = 'catalog_item_name'
            u.innerHTML = item_name
            y = document.createElement('span')
            y.className = 'catalog_item_price'
            y.innerHTML = item_price
            z = document.createElement('button')
            z.className = 'catalog_item_btn'
            z.innerText = 'купить'
            z.id = 'btn' + (n+1)
            v.appendChild(u)
            v.appendChild(y)
            v.appendChild(z)
            w = catalog.appendChild(v)
        }
        return v
    }

    createCatalog(object_catalog.name, object_catalog.price, catalog)

    let btn1 = document.getElementById('btn1')
    if (btn1.addEventListener('click')) {
        basket.sum.push(object_catalog.price[0])
        basket.quantity += 1
    }

    function countBasketPrice(arr) {
        let q = 0
        for (let c = 0; c < arr.length; c++) {
            q += arr[c]
        }
        return q
    }

    basket.total = countBasketPrice(basket.sum)

    let message

    if (basket.quantity !== 0) {
        message = 'В корзине ' + basket.quantity + ' товаров на сумму ' + basket.total + ' рублей'
    } else {
        message = 'Корзина пуста'
    }

    board.innerHTML = message
}

basket()