
// import { either } from 'fp-ts';
import { either } from 'fp-ts';
import { Either } from 'fp-ts/src/Either.js';
// import type { Either } from 'fp-ts/src/Either.js';
// import { Either } from 'fp-ts/dist/es6/Either.js';

import fpTs from 'fp-ts'
// const { either } = fp
const { left, right } = either

type Result<T, E> = Either<E, T>
const Ok = <T, E>(value: T): Result<T, never> => right(value);
const Err = <T, E>(error: E): Result<never, E> => left(error);

export { Result, Ok, Err, fpTs }
