let dz = parseInt (prompt ('Введите номер проверяемого задания от 0 до 6'))

switch (dz) {

    case 1 :
        var a = 1, b = 1, c, d
        c = ++a
        alert('2 - префиксная форма, сначала инкрементирование, а потом вывод обновлённого значения, результат ' +c)
        d = b++
        alert('1 - постфиксная форма, сначала вывод значения, потом инкрементирование, результат ' +d)
        c = (2+ ++a)
        alert('5 - значение a уже равно 2, после строки №2, снова префиксная форма, значение увеличивается до 3 и складывается с 2, результат ' +c)
        d = (2+ b++)
        alert('4 - значение b уже равно 2, после строки №3, снова постфиксная форма, значение увеличится после вывода суммы с 2, результат ' +d)
        alert('3 - результат инкрементирования сначала в строке №2, потом инкрементирование в строке №4, результат ' +a)
        alert('3 - результат инкрементирования сначала в строке №3, потом инкрементирование в строке №, результат ' +b)
    break

    case 2 :
        var q = 2
        var w = 1 + (q *= 2)
        alert ('должно получится 5, т.к. в скобочках операция присваивания, которая раскрывается как "q = q * 2", сейчас проверим')
        alert ('Так и есть, получается ' +w)
    break

    case 3 :
        function compare () {
            var x = parseInt (prompt ('Введите первое число'))
            var y = parseInt (prompt ('Введите второе число'))

            if ((x > 0) && (y > 0)) {
                alert (x - y)
            }

            else if ((x < 0) && (y < 0)) {
                alert (x * y)
            }

            else if ((x > 0) && (y < 0)) {
                alert (x + y)
            }

            else if ((x < 0) && (y > 0)) {
                alert (x + y)
            }

            else {
                alert ('Введите значения отличные от нуля')
                compare ()
            }
        }
        compare ()
    break

    case 4 :
        function output () {
            let p = parseInt (prompt ('Введите числовое значение от 0 до 15'))

            if ((p > 0) && (p < 15)) {
                while (p <= 15) {
                    alert (p)
                    p++
                }
            }

            else {
                alert ('Вы ввели некорректное значение')
                output ()
            }
        }
        output ()
    break

    case 5 :
        alert ('А тут только функции, показывать нечего! =)')
        function plus (l, m) {
            return (l + m)
        }

        function minus (l, m) {
            return (l - m)
        }

        function multiply (l, m) {
            return (l * m)
        }

        function division (l, m) {
            return (l / m)
        }
    break

    case 6 :
        let arg1 = parseInt (prompt ('Введите первое числовое значение'))
        let arg2 = parseInt (prompt ('Введите второе числовое значение'))
        let operation = parseInt (prompt('Введите 1 - для сложения, 2 - для вычитания, 3 для умножения, 4 - для деления'))
        function mathOperation (r, t, u) {
            switch (u) {
                case 1 :
                    result = plus (r, t)
                break
    
                case 2 :
                    result = minus (r, t)
                break
    
                case 3 :
                    result = multiply (r, t)
                break
    
                case 4 :
                    result = division (r, t)
                break
            }
            return result
        }
        mathOperation (arg1, arg2, operation)
        alert (result)
    break

    default:
        alert ('Введено некорректное значение для ДЗ. Обновите страницу и повторите ввод.')
    break
}