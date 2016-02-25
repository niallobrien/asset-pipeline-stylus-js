# Asset Pipeline

A Stylus, Javascript & Webpack based asset pipeline.

## Installation

```
// clone the repo
git clone https://github.com/niallobrien/stylus-boilerplate.git

// change into the repo directory
cd stylus-boilerplate

// install dependencies
npm install
```

## Usage
```
// production
npm start

// development
npm run dev
```
Production will minify your assets.
Development outputs sourcemaps, will run Browsersync and assumes you have a server running on port 3000. See `webpack.config.js`, lines 33-43 to configure or remove if Browsersync support is not required.