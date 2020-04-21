# Nightwatch E2E test coverage

This repository exists just to demonstrate how to collect code coverage while running tests with nightwatch.

It makes use of `babel-plugin-istanbul` to instrument the code and [nightwatch-coverage](https://github.com/aberonni/nightwatch-coverage) to collect coverage.

To run tests & coverage:

```
yarn
yarn test:e2e
yarn test:coverage
```

The relevant changes that enabled the coverage checking are in [this commit](https://github.com/aberonni/nightwatch-test-coverage-example/commit/dcbf3cc55aa1e6aebf7ef00ee9679f10ae48e167)
