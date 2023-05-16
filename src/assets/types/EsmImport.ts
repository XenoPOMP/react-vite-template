import { ComponentType } from 'react';

/**
 * This type is ES Module import alias.
 */
export type EsmImport = () => Promise<{ default: ComponentType<any> }>;
