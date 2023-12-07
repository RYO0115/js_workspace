// ES5まではstring型は改行して記述できなかった。

let multiLine = "Using ES5, cannot right in multi-line";
//let multiLine = "Using ES5, 
//                    cannot right 
//                    in multi-line";

// ES6からは`を使えば改行しての記述が可能になった。

let multiLineES6 = `Using ES6,
you can right
in multi-lines.
`

let first = `He said something`;
let second = `She said something too`;

console.log(`${first} and ${second}`);