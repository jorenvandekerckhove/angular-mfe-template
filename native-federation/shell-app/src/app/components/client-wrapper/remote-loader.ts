// remote-loader.ts
import { createInstance } from '@module-federation/enhanced/runtime';
import { getShared } from '../../shared/federation-helpers';

// Step 2: Get metadata about libs shared via Native Federation
const shared = getShared();

const mf = createInstance({
  name: 'shell-app',
  remotes: [
    {
      name: 'react-app',
      entry: 'http://localhost:4173/remoteEntry.js',
    },
  ],
  // Step 3a: Delegate shared libs from Native Federation
  shared,
});

export default mf;
