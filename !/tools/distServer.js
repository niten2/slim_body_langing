// This file configures a web server for testing the production build
// on your local machine.

import browserSync from 'browser-sync'
import historyApiFallback from 'connect-history-api-fallback'
import { chalkProcessing } from './chalkConfig'

console.log(chalkProcessing('Opening production build...'))

// Run Browsersync
browserSync({
  port: 5000,

  ui: {
    port: 5001
  },

  open: false,

  server: {
    baseDir: 'docs'
  },

  files: [
    // 'src/*.html'
    "index.html",
  ],

  middleware: [ historyApiFallback() ]

})
