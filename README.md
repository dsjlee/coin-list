# CoinList
Progressive Web Application built with Angular 6 Material Design components. <br>
Displays Cryptocurrency data from Coinmarketcap.

Demo of running application: https://dsjlee.bitbucket.io/ <br>
For mobile devices, click "Add to home screen" in browser to install as app. 

This app is currently configured for Coinmarketcap's public API v2 and will need to be refactored to use CMC's new pro API (This code change is planned).

Quote from CMC: "The Public API will be migrating to the new, more powerful Professional API on December 4th, 2018. Please update your application to use the free tier of the Professional API before then."

Using CMC's pro-API requires your own server-side application acting as proxy service due to following limitation.

Quote: "Making HTTP requests on the client side with Javascript is currently prohibited through CORS configuration. This is to protect your API Key which should not be visible to users of your application so your API Key is not stolen. Secure your API Key by routing calls through your own backend service."

Example of such proxy service app can be found at https://github.com/dsjlee/CoreApi


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.1.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
