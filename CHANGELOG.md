# Changelog

## Unreleased

### Changed

- Bumped `@simpleworkjs/backend` to `^0.2.5` and `@simpleworkjs/orm-identity` to
  `^0.2.2` so a fresh install pulls the DB-backed permission stack.
- Bumped `@simpleworkjs/backend` and `@simpleworkjs/orm-identity` to `^0.2.0`
  (dependency security updates: `bcrypt` 6, `sqlite3` 6, `uuid` 11) and added an
  `overrides` entry pinning `uuid` to `^11.1.1`. Clears the `npm install` audit
  warnings.

## 0.1.0

### Fixed

- **`npm test` was silently skipping root-level test files.** The script ran
  `node --test test/**/*.test.js`; without `bash` globstar enabled, that
  pattern dropped any `*.test.js` directly under `test/`. Changed to
  `node --test` so Node's test runner discovers all test files.

### Documentation

- README run instructions no longer hardcode an absolute local path; they use
  a `git clone` + relative `cd` so they work for anyone.
