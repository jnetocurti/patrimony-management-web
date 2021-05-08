import { act } from 'react-dom/test-utils';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

global.waitFor = (callback, { interval = 50, timeout = 1000 } = {}) => {
  return act(() => {
    return new Promise((resolve, reject) => {
      const startTime = Date.now();
      const nextInterval = () => {
        setTimeout(() => {
          try {
            callback();
            resolve();
          } catch (err) {
            if (Date.now() - startTime > timeout) {
              reject(new Error('Timed out.'));
            } else {
              nextInterval();
            }
          }
        }, interval);
      };
      nextInterval();
    });
  });
};

global.mockRandomMuiid = () => {
  // workaround for random mui-id material-ui
  jest.spyOn(global.Math, 'random').mockReturnValue(1);
};
