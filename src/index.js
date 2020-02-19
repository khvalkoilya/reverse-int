module.exports = function reverse (n) {
    return n<0? Number(String(n).split("").slice(1).reverse().join("").replace(/^0+/,'')) //делаем строкой-в массив-забираем с первого все-поворачиваем-в строку-если будут нули в начале уберем----в номер
    : Number(String(n).split("").reverse().join("").replace(/^0+/,''));
}
