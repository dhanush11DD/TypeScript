const concateString = (a:string,b:string,c:string = "c") => {
    return a+b+c;
}

console.log(concateString("a","b","c"))

console.log(concateString("a","b"))