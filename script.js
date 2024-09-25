let x = 1

const parent =() =>{
    let myValue = 2;
    console.log(x)
    console.log(myValue)

    const child = () => {
        console.log(x += 5)
        console.log(myValue += 1)

    }

    return child;
}

const result = parent()