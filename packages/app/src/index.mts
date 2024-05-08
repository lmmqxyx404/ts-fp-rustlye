/* import { obj } from 'rustyle-ts'
console.log(obj); */
import { Err, Ok, Result } from 'rustyle-ts'
// import { fpTs } from 'rustyle-ts'


// import { add } from 'rustyle-ts'
// import type { Result } from 'rustyle-ts'

const err = Err('errored');
console.log(err);
// const ans = Ok(23);
const ans: Result<number, string> = Ok(5)
console.log(ans);
console.log(ans);
// console.log(a);
// console.log(add(1, 2));
