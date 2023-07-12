import { useContext, useEffect } from 'react';

import { BodyClassnameContext } from '@providers/BodyClassnameProvider/BodyClassnameProvider';
import { IBodyClassname } from '@providers/BodyClassnameProvider/body-classname.interface';

/**
 * Register classes to body.
 *
 * @example
 * const [registerClasses, deleteClasses] = useBodyClassnames();
 *
 * useEffect(() => {
 * 		// Clear classnames
 * 		deleteClasses(classGroupName);
 *
 * 		registerClasses(classGroupName, [
 * 			styles.themes,
 * 			currentTheme === 'light' ? styles.light : '',
 * 			currentTheme === 'dark' ? styles.dark : '',
 * 		]);
 * 	}, [currentTheme]);
 */
const useBodyClassnames = (): [
  registerClasses: IBodyClassname['registerClasses'],
  deleteClasses: IBodyClassname['deleteClasses'],
] => {
  const classContext = useContext(BodyClassnameContext);

  return [
    (name, classNames) => classContext.registerClasses(name, classNames),
    name => classContext.deleteClasses(name),
  ];
};

export default useBodyClassnames;
