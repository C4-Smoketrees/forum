#!/usr/bin/env bash

npm install


NODE_ENV=production webpack -p

mkdir build

./node_modules/.bin/babel --out-dir ./build src
node clean-css.config.js

# Copy views
cp -r ./src/static/views ./build/static/views
# Copy svg
cp -r ./src/static/public/svg/ ./build/static/public/svg
# Copy css
cp -r ./src/static/public/css ./build/static/public/css
# Copy package.json
cp ./package* ./build/
