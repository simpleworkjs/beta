# Changelog

## 0.1.0

### Fixed

- **`npm test` was silently skipping root-level test files.** The script ran
  `node --test test/**/*.test.js`; without `bash` globstar enabled, that
  pattern dropped any `*.test.js` directly under `test/`. Changed to
  `node --test` so Node's test runner discovers all test files.

### Documentation

- README run instructions no longer hardcode an absolute local path; they use
  a `git clone` + relative `cd` so they work for anyone.
