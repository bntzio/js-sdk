import { EITHER_TYPE } from '../enums';
import { IEither } from '../interfaces/i-errors';

/**
 *
 * This method should be used when there's an expected error
 *
 * @param { any } result
 * @returns { IEither }
 */
export const ELeft = (result: any): IEither => {
  return {
    type: EITHER_TYPE.ERROR,
    result: result,
  };
};

/**
 *
 * This method should be used when there's an expected success outcome
 *
 * @param result
 * @returns
 */
export const ERight = (result: any): IEither => {
  return {
    type: EITHER_TYPE.SUCCESS,
    result: result,
  };
};
