import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginModuleFederation } from '@module-federation/rsbuild-plugin';

export default defineConfig({
  plugins: [
    pluginReact(),
    pluginModuleFederation({
      name: 'services',
      exposes: {
        './services-menu':
          './src/presentation/components/ServicesMenu/ServicesMenu.tsx',
      },
      shared: ['react', 'react-dom', 'react-router'],
    }),
  ],
  server: {
    port: 3000,
  },
});
