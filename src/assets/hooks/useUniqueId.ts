import { v4 as uuid } from 'uuid';

import { isUndefined } from '@utils/type-checks';

/**
 * Use this hook to generate UUID.
 *
 * @example
 * const id = useUniqueId(generatedId => {
 *   // Dont add callback if you want to
 *   // get only UUID.
 *
 *   return `gallery-${generatedId}`;
 * });
 *
 * @param transformer     function that transforms generated
 *                        ID and returns string.
 *
 * @return {string}
 */
export const useUniqueId = (
  transformer?: (generatedId: string) => string
): string => {
  const id = uuid();

  if (!isUndefined(transformer)) {
    return transformer(id);
  }

  return id;
};
