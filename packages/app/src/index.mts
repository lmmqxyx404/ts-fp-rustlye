/* import { obj } from 'rustyle-ts'
console.log(obj); */
import { Err, Ok, Result, fpTs } from 'fp-ts-rustyle'
// import { fpTs } from 'rustyle-ts'
const { alternative, option } = fpTs
const { some, none, isNone, isSome } = option

// console.log(alternative);

// import { add } from 'rustyle-ts'
// import type { Result } from 'rustyle-ts'

const err = Err('errored');
console.log(err);
// const ans = Ok(23);
const ans: Result<number, string> = Ok(5)
console.log(ans);
console.log(ans);
let p = none;
let asd = some(2);
console.log(p, asd);


// console.log(a);
// console.log(add(1, 2));
