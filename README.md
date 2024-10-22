# Docker Compose Full-Stack Boilerplate

## Tech Stack

This template will create a basic setup with the following stack:

```bash
client
├── typescript
├── nginx
└── vite
    └── react

server
├── typescript
├── express
└── drizzle

database
└── postgres
```

The template relies on `.env.template` and `.env.local.template` to populate environment variables
by default. In spite of this, the resulting containers are actually optimized for production.

## Requirements

You need:

- NodeJS/NPM
- Running instance of Docker/Docker Compose
- Ports `80`, `8080`, and `8081` must be available

## Installing

Clone, move into the repository and install dependencies:

```bash
git clone https://github.com/Roman-Octavian/docker-compose-vite-express-postgres-boilerplate
```

```bash
cd docker-compose-vite-express-postgres-boilerplate
```

```bash
npm i
```

## Running

Run `compose.yaml`:

```bash
npm run compose:up
```

Wait for Docker compose to finish, and then setup Drizzle in another terminal instance:

```bash
npm run drizzle:init
```

The above will push the default schema to the newly created database and run Drizzle studio so that
you can manage the database via a GUI.

Everything should be ready to go, now just launch a web browser and open these two tabs:

1. http://localhost
2. https://local.drizzle.studio

On localhost you will be presented with a simple calculator SPA. Performing any calculations with it
will POST to the express server and consequently populate the postgres database, which you should be
able to see in the local drizzle studio.

## Additional commands

To stop docker compose:

```bash
npm run compose:down
```

To stop and delete all containers and volumes:

```bash
npm run compose:purge
```

To make schema changes, first update `server/db/schema.ts` with your desired changes, then:

Autogenerate schema changes with Drizzle:

```bash
npm run drizzle:generate -w server
```

Push schema changes to database (while compose is running):

```bash
npm run drizzle:push -w server
```
