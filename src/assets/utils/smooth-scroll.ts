import { EasingDefinition } from 'framer-motion';
import { scroller } from 'react-scroll';

import ArgumentError from '@errors/ArgumentError';

export const smoothScroll = (
	id: string,
	props?: {
		duration?: number;
		delay?: number;
		ease?: EasingDefinition;
		offset?: number;
	}
) => {
	if (/^.+#/i.test(id)) {
		throw new ArgumentError(`wrong format of id (expected #... or ...`);
	}

	scroller.scrollTo(id.replace(/^#/i, ''), {
		duration: props?.duration ? props?.duration : 1000,
		delay: props?.delay ? props?.delay : 0,
		smooth: props?.ease ? props?.ease : 'easeOut',
		offset: props?.offset ? props?.offset : -50,
	});
};
