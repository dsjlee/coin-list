# CoinList
Progressive Web Application built with Angular 7 Material Design components. <br>
Displays Cryptocurrency data from Coinmarketcap's pro API v1

Demo of running application: https://dsjlee.github.io <br>
Can be installed on mobile devices or on desktop as Windows 10 app from browsers that support it.

Using CMC's pro-API requires your own server-side application acting as proxy service due to following limitation:

>Making HTTP requests on the client side with Javascript is currently prohibited through CORS configuration. This is to protect your API Key which should not be visible to users of your application so your API Key is not stolen. Secure your API Key by routing calls through your own backend service.

Example of such proxy service app can be found at https://github.com/dsjlee/CoreApi


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
