const card = new Array(9)

const randomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)

const generateCol = (i) => {
    const col = new Array(3)

    if (i === 0) col[randomNumber(0, 2)] = randomNumber(1 + i * 10, 9 + i * 10)
    else if (i === 8) col[randomNumber(0, 2)] = randomNumber(0 + i * 10, 10 + i * 10)
    else col[randomNumber(0, 2)] = randomNumber(0 + i * 10, 9 + i * 10)

    return col
}

const displayCard = () => {
    console.log("----------------------------------------")
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 9; j++) {
            if (!card[j][i]) process.stdout.write('|  ')
            else {
                let number = String(card[j][i]).padStart(2, '0')
                process.stdout.write('|' + number)
            }
            j === 8 && process.stdout.write('|')
        }
        console.log('\n')
    }
    console.log("----------------------------------------")
}

const getFirstAndLast = (col) => {
    const firstElement = card[col].find(e => e)
    const lastElement = [...card[col]].reverse().find(e => e)

    return [firstElement, lastElement]
}


for (let i = 0; i < card.length; i++) card[i] = generateCol(i)

let extraNumbers = 6

while (extraNumbers) {
    const col = randomNumber(0, 8)
    const [element, lastElement] = getFirstAndLast(col)
    const index = card[col].indexOf(element)
    const number = randomNumber(0 + col * 10, 9 + col * 10)

    if (element !== lastElement || number === element) continue

    if (index === 0)
        card[col][randomNumber(1, 2)] = number
    else if (index === 1)
        card[col][randomNumber(0, 1) ? 0 : 2] = number
    else
        card[col][randomNumber(0, 1)] = number

    extraNumbers--
}

for (let i = 0; i < card.length; i++) {
    const [first, last] = getFirstAndLast(i)
    if (first > last) card[i].reverse()
}


displayCard()