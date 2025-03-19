import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginModuleFederation } from '@module-federation/rsbuild-plugin';

export default defineConfig({
  plugins: [
    pluginReact(),
    pluginModuleFederation({
      name: 'shell',
      remotes: {
        services:
          'services@http://localhost:3000/mf-manifest.json',
        navbar:
          'navbar@http://localhost:3001/mf-manifest.json',
        transactions:
          'transactions@http://localhost:3002/mf-manifest.json',
        account:
          'account@http://localhost:3003/mf-manifest.json',
        investments:
          'investments@http://localhost:3004/mf-manifest.json',
        login:
          'login@http://localhost:3005/mf-manifest.json'
      },
      shared: {'react': {singleton: true}, 'react-dom': { singleton: true}, 'react-router': {singleton: true}},
    }),
  ],
  server: {
    port: 2000,
  },
});