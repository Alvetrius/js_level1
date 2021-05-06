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

    let catalog = document.getElementById('catalog')

    let board = document.getElementById('board')

    let message = document.createElement('span')

    message.className = 'basket_title'
    message = 'Корзина пуста'
    board.innerHTML = message

    object_catalog.quantity = parseInt(prompt('Введите количество наименований в каталоге'))

    let x1 = 1
    let x2
    let x3

    while (x1 <= object_catalog.quantity) {
        x2 = prompt('Введите наименование товара')
        x3 = parseInt(prompt('Введите стоимость этого товара'))
        object_catalog.name.push (x2)
        object_catalog.price.push (x3)
        object_catalog.buy.push ('btn' + x1)
        x1++
    }

    function countBasketPrice(arr1) {
        let q = 0
        for (let c = 0; c < arr1.length; c++) {
            q += arr1[c]
        }
        return q
    }

    function basket_final () {
        if (basket.quantity !== 0) {
            message = `В корзине ${basket.quantity} товаров на сумму  ${basket.total} рублей`
            } else {
            message = `Корзина пуста`
        }
        board.innerHTML = message
    }

    function addBasket (h1) {

        basket.total = countBasketPrice(h1)
    
        basket_final ()

        for (let r = 0; r < basket.quantity; r++) {
            let f = document.createElement('span')
            f.className = 'basket_item'
            f.id = 'article' + r
            f.innerHTML = `${basket.name[r]} - ${basket.sum[r]}`
            f.addEventListener('click', function () {
                board.removeChild(f)
                basket.quantity -= 1
                basket.sum.splice(r, 1)
                basket.name.splice(r, 1)
                addBasket(basket.sum)
                console.log(basket)
            })
            board.appendChild(f)
        }
    }

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
            y.innerHTML = item_price + ' рублей'
            z = document.createElement('button')
            z.className = 'catalog_item_btn'
            z.innerText = 'купить'
            z.id = 'btn' + (n+1)
            z.addEventListener('click', function () {
                basket.sum.push(item_price)
                basket.name.push(item_name)
                basket.quantity += 1                
                addBasket(basket.sum)
                console.log(basket)
            })
            v.appendChild(u)
            v.appendChild(y)
            v.appendChild(z)
            w = catalog.appendChild(v)
        }
        return w
    }

    createCatalog(object_catalog.name, object_catalog.price, catalog)
}

window.onload = basket