import { FC, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import type { RedirectProps } from './Redirect.props';

/**
 * Redirect component. Redirects to certain route.
 *
 * @param triggered
 * @param to
 * @param options
 * @constructor
 */
const Redirect: FC<RedirectProps> = ({ triggered, to, options }) => {
  /** Navigation hook. */
  const navigate = useNavigate();

  /** Default navigate options. */
  const defaultOptions: typeof options = {
    replace: true,
    preventScrollReset: false,
    ...options,
  };

  /** Navigate to link if trigger is triggered. */
  useEffect(() => {
    if (!triggered) return;

    navigate(to, defaultOptions);
  }, [triggered, to]);

  return <></>;
};

export default Redirect;
