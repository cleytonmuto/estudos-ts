function padLeft(value: string, padding: string | number): string {
  if (typeof padding === 'number') {
    return Array( padding + 1 ).join(' ').concat(value);
  }
  if (typeof padding === 'string') {
    return padding.concat(value);
  }
}

console.log( padLeft('Hello, world', 4) );

console.log( padLeft('Hello, world', 'John says ') );
