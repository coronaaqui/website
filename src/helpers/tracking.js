import ga from 'react-ga';

const GA_ID = 'UA-162087851-1';

export function initTracking() {
  ga.initialize(GA_ID);
}
