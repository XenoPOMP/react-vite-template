const name = process.env.npm_config_name;
import { config } from './config.js';

const names = {
  component: `${name}.tsx`,
  interface: `${name}.props.ts`,
  styles: `${name}.module.scss`,
};

if (config.interface.generate) {
  console.log('Interface has to be generated');
}

if (config.styles.generate) {
  console.log('Styles have to be generated');
}
