# SimpleWorkJS Beta Demo App

This is the integration demo for the new SimpleWorkJS package architecture.

It consumes:

- [`@simpleworkjs/orm-identity`](https://github.com/simpleworkjs/orm-identity) — the model-first ORM with built-in identity/RBAC.
- [`@simpleworkjs/backend`](https://github.com/simpleworkjs/backend) — the Express/Socket.IO framework and page router.
- [`@simpleworkjs/conf`](https://github.com/simpleworkjs/conf) — configuration loader.
- [`demo-todo`](https://github.com/simpleworkjs/demo-todo) — the new canonical golden-path starter.

## Run

```bash
cd /home/william/dev/simpleworkjs/beta
npm install
npm start
# open http://localhost:3000
```

Demo login:

- Username: `admin`
- Password: `Changeme1!`

## What it demonstrates

- App-specific models (`Project`, `Task`) extending the shared `Model` base.
- Built-in identity models (`User`, `Group`, `Role`, `Permission`, `AuthToken`) managed by the ORM.
- Auto-generated REST API with RBAC checks.
- Server-rendered Bootstrap pages from templates bundled in `@simpleworkjs/backend`.
- Live WebSocket sync when models change.

## Package architecture

```
simpleworkjs/
  orm-identity/   # ORM, fields, adapters, identity models, auth
  backend/        # framework, REST routes, views, CLI generator
  conf/           # configuration loader
  demo-todo/      # canonical golden-path starter (recommended for new apps)
  beta/           # this integration test app
```

## Tests

```bash
npm test
```

## Status

The packages are functional and tested locally. Publication to npm is in progress; see the `simpleworkjs` organization repos for the latest published versions.
