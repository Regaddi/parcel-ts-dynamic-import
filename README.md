## Steps to reproduce

- Run `yarn && yarn build:production`
- Open `dist/index.js`
  - File contains `console.log("this is a mock")` which shouldn't be part of the bundle
