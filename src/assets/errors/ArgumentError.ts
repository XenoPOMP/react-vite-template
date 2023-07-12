import { CustomError } from 'ts-custom-error';

/**
 * This error has to be thrown when wrong argument
 * has been passed to the function.
 *
 * @extends {@link CustomError}
 */
class ArgumentError extends CustomError {
  public constructor(msg?: string) {
    super(msg);
  }
}

export default ArgumentError;
