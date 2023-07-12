export interface IBodyClassname {
  classes: Record<string, string[]>;
  registerClasses: (name: string, classNames: string[]) => void;
  deleteClasses: (name: string) => void;
}
