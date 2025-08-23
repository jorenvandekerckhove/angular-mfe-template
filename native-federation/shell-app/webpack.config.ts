import { ModuleFederationPlugin } from '@module-federation/enhanced/webpack';

export default withModuleFederation({
  name: 'angularHost',
  remotes: {
    reactMFE: 'reactMFE@http://localhost:5000/remoteEntry.js',
  },
  shared: {
    // Angular shared dependencies
    '@angular/core': { singleton: true, strictVersion: true },
    '@angular/common': { singleton: true, strictVersion: true },
    '@angular/router': { singleton: true, strictVersion: true },
  },
});
