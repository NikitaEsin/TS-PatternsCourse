function toString<T>(value: T): string | undefined {
    try {
        return String(value);
    } catch (error) {
        return undefined;
    }
}

console.log(toString(42)); 
console.log(toString("Hello")); 
console.log(toString(true)); 
console.log(toString({ key: "value" })); 
console.log(toString(null)); 
