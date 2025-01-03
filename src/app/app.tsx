/// <reference path="../../adonisrc.ts" />
/// <reference path="../../config/inertia.ts" />

import '../css/app.css';
import { hydrateRoot } from 'react-dom/client'
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from '@adonisjs/inertia/helpers'
import { Toaster } from '@/components/ui/sonner';

const appName = import.meta.env.VITE_APP_NAME || 'AI Solutions';

createInertiaApp({
  progress: { color: '#5468FF' },

  title: (title) => `${title ? title + " - " : ""}${appName}`,

  resolve: (name) => {
    return resolvePageComponent(
      `../pages/${name}.tsx`,
      import.meta.glob('../pages/**/*.tsx'),
    )
  },

  setup({ el, App, props }) {
    
    hydrateRoot(el,  <>
      <App {...props}></App>
      <Toaster position="top-center" richColors duration={5000} />
    </>)
    
  },
});