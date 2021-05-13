let dz = parseInt(prompt('Введите номер проверяемого задания от 0 до 2'))

switch (dz) {

    case 1:
        console.log('Смотри ДЗ №7. По-моему там всё сделано. https://github.com/Alvetrius/js_level1/pull/8 Ну или я не понял задание.')

        break

    case 2:
        console.log(`Представлены следующие задания: 
        if (!("a" in window)) {
            var a = 1;
        }
        alert(a);

        Ответ: undefined

        var b = function a(x) {
            x && a(--x);
        };
        alert(a);

        Ответ: Если надо 'a' вывести, то ничего не выдаст, ибо ошибка.

        function a(x) {
            return x * 2;
        }
        var a;
        alert(a);

        Ответ: По-моему, ничего не должен выдать. Проверил через консоль, выдал такую ошибку: Uncaught SyntaxError: Identifier 'a' has already been declared

        function b(x, y, a) {
            arguments[2] = 10;
            alert(a);
        }
        b(1, 2, 3);

        Ответ: 10, потому что применяется всевдо-массив.

        function a() {
            alert(this);
        }
        a.call(null);

        Ответ: object Window
        `)

        break

    default:
        alert('Введено некорректное значение для ДЗ. Обновите страницу и повторите ввод.')
        break
}