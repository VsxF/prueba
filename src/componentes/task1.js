function Task1() {
    let numbers = findNumbers()
    
    return (
        <div>
            <h2 align="center">Los numeros rectangulares, tal que a + b + c = 100 son :</h2>
            <h2 align="center">a: {numbers[0]}</h2>
            <h2 align="center">b: {numbers[1]}</h2>
            <h2 align="center">c: {numbers[2]}</h2>
            <br></br>
            <br></br>
            <br></br>
        </div>
    )
}

//Encuentra los numeros solicitados
function findNumbers() {
    let numbers = []
    //console.log(squares)
    for (let i = 0; i < 1000; i++) {

        for (let j = 0; j < 1000; j++) {

            for (let k = 0; k < 1000; k++) {

                if (getSum(i, j, k) && getRectangle(i, j, k) && getZeros(i, j, k)) {
                    console.log(i, j, k)
                    numbers.push(i)
                    numbers.push(j)
                    numbers.push(k)
                }

            }
        }

    }
    return numbers;
}

//Determina si los numeros suman 1000
function getSum(a, b, c) {
    return ((a + b + c) === 1000) ? true : false;
}

//Determina si son numeros rectangulares
function getRectangle(a, b, c) {
    return (Math.pow(a, 2)+Math.pow(b, 2) === Math.pow(c, 2)) ? true : false
    //return ((a ^ 2 + b ^ 2) === (c ^ 2)) ? true : false
}

//Encuentra todas las raices posibles < sqrt (1000)
function getSquares() {
    let squares = [1, 2]

    //max square < 1000 = 31
    for (let i = 1; i < 31; i++) {
        squares.push(i*i)
    }
    return squares
}

//Determina si hay ceros
function getZeros(a, b, c) {
    if (a === 0 || b === 0 || c === 0) {
        return false
    } else {
        return true
    }
}

export default Task1;
