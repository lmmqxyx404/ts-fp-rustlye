import { either, eitherT } from 'fp-ts';
import { Either } from 'fp-ts/src/Either.js';
import fpTs from 'fp-ts'
const { left, right } = either

type Result<T, E> = Either<E, T>
/**just an alias of right in fp-ts*/
const Ok = <T, E>(value: T): Result<T, never> => right(value);
/**just an alias of left in fp-ts*/
const Err = <T, E>(error: E): Result<never, E> => left(error);

export { Result, Ok, Err, fpTs }
