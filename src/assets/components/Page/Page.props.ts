import { ReactChildrenProps } from '../../interfaces/ReactChildren.props';

export interface PageProps extends ReactChildrenProps {
  meta: {
    pageTitle: string,
    pageDescription?: string,
    keywords: string,
  };
}
