const swap = (a, b) => {
    let c = a;
    a = b;
    b = c;
    
    return {a, b}
}

console.log(swap(5, 10))