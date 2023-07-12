import { NavigateOptions } from 'react-router-dom';

export interface RedirectProps {
  /** If true, redirect will happen. */
  triggered?: boolean;

  /** Redirect destination. */
  to: string;

  /** React-router-dom options. */
  options?: NavigateOptions;
}
