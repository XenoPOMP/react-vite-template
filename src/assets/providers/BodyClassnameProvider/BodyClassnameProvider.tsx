import cn from 'classnames';
import {
  FC,
  PropsWithChildren,
  createContext,
  useEffect,
  useState,
} from 'react';

import { IBodyClassname } from '@providers/BodyClassnameProvider/body-classname.interface';

import type { BodyClassnameProviderProps } from './BodyClassnameProvider.props';

export const BodyClassnameContext = createContext<IBodyClassname>({
  classes: {},
  registerClasses: (name, classNames) => {},
  deleteClasses: name => {},
});

const BodyClassnameProvider: FC<
  PropsWithChildren<BodyClassnameProviderProps>
> = ({ children }) => {
  const [classList, setClassList] = useState<IBodyClassname['classes']>({});

  useEffect(() => {
    let outputString = '';

    Object.keys(classList).forEach(key => {
      outputString = `${outputString} ${cn(...classList[key])}`;
    });

    document.body.className = cn(outputString);
  }, [classList]);

  return (
    <BodyClassnameContext.Provider
      value={{
        classes: classList,
        registerClasses: (name, classNames) => {
          setClassList({ ...classList, [name]: classNames });
        },
        deleteClasses: name => {
          setClassList({ ...classList, [name]: [] });
        },
      }}
    >
      {children}
    </BodyClassnameContext.Provider>
  );
};

export default BodyClassnameProvider;
