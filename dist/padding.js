function padLeft(value, padding) {
    if (typeof padding === 'number') {
        return Array(padding + 1).join(' ').concat(value);
    }
    if (typeof padding === 'string') {
        return padding.concat(value);
    }
}
console.log(padLeft('Hello, world', 4));
console.log(padLeft('Hello, world', 'John says '));
//# sourceMappingURL=padding.js.map