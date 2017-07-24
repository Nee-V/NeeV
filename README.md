# NeeV

> From the Hindi word, meaning Foundation.

A collection of VueJS components based off the Zurb Foundation for Sites framework. Each component shall be completely configurable using props.

The component collection is still in the early stages of development and what may work one day, may not work the next. Please don't use in production for the time being as we'd hate for any breaking changes to affect you.

## Requirements & Installation

The basic requirements for installing NeeV are NodeJS & NPM (or Yarn).

All of the package dependencies are managed by NPM (or Yarn), so to install these just run:
``` bash
# install dependencies
npm install

# or
yarn install
```

## Development

To start a development server, with hot reload, run:

``` bash
# serve with hot reload at localhost:8080
npm run dev
```

## Building for Production

When building for production, you can produce a fully minified build using:

``` bash
# build for production with minification
npm run build
```

Additionaly, if you would also like to view the analyzer report when building, simply append the `--report` flag to the command, like so:

``` bash
# build for production and view the bundle analyzer report
npm run build --report
```

## Testing

To run the basic unit tests, use:

``` bash
# run unit tests
npm run unit
```

For end to end testing, run:

``` bash
# run unit tests
npm run e2e
```

To run all tests, then it's:

``` bash
# run unit tests
npm run test
```
