<p align="center">
  <img src="assets/logo.svg" alt="CodePharos" width="120" />
</p>

<h1 align="center">CodePharos</h1>

<p align="center">
  A full-stack learning platform for sharing coding posts, built with Express, PostgreSQL, React Router, Vite, and pnpm workspaces.
</p>

---

## Tech Stack

- **Workspace:** pnpm
- **Backend:** Node.js, Express 5
- **Database:** PostgreSQL, pg-promise
- **Auth:** JWT access tokens
- **Frontend:** React 19, React Router 7, Vite, TypeScript, Tailwind CSS
- **Local services:** Docker Compose, Adminer

## Project Structure

```txt
apps/
  server/    Express API, auth middleware, database access
  web/       React Router frontend
assets/      Project logo and icon
```

## Getting Started

### Prerequisites

- Node.js 20+
- pnpm 10+
- Docker and Docker Compose

### 1. Clone the repo

```bash
git clone git@github.com:FK78/CodePharos.git
cd CodePharos
```

### 2. Install dependencies

```bash
pnpm install
```

### 3. Configure environment variables

Create the server env file:

```bash
cp apps/server/.env.example apps/server/.env
```

Create the web env file:

```bash
cp apps/web/.env.example apps/web/.env
```

Server variables:

| Variable | Description |
| --- | --- |
| `POSTGRES_USER` | Database username |
| `POSTGRES_PASSWORD` | Database password |
| `POSTGRES_PORT` | Local Postgres port, usually `5432` |
| `POSTGRES_HOST` | Database host, usually `localhost` |
| `POSTGRES_NAME` | Database name |
| `ACCESS_TOKEN_SECRET` | Secret used to sign access tokens |
| `REFRESH_TOKEN_SECRET` | Reserved for refresh-token support |
| `FRONTEND_URL` | Allowed frontend origin, usually `http://localhost:5173` |
| `PORT` | Express API port, usually `3000` |

Web variables:

| Variable | Description |
| --- | --- |
| `VITE_API_BASE_URL` | Express API base URL, usually `http://localhost:3000` |

### 4. Start Postgres

```bash
pnpm db:up
```

Adminer is available at [http://localhost:8080](http://localhost:8080).

### 5. Run the app

Run the backend and frontend together:

```bash
pnpm dev
```

Or run them separately:

```bash
pnpm dev:server
pnpm dev:web
```

Default local URLs:

- Web: [http://localhost:5173](http://localhost:5173)
- API: [http://localhost:3000](http://localhost:3000)

## Scripts

| Command | Description |
| --- | --- |
| `pnpm db:up` | Start the Postgres container |
| `pnpm db:down` | Stop the Postgres container |
| `pnpm dev` | Run the server and web app in parallel |
| `pnpm dev:server` | Run only the Express API |
| `pnpm dev:web` | Run only the React frontend |
| `pnpm build:web` | Build the web app |
| `pnpm typecheck:web` | Typecheck the web app |

## Web Routes

| Route | Description |
| --- | --- |
| `/` | Basic homepage |
| `/posts` | Public posts page |
| `/register` | Registration form placeholder |

## API Endpoints

### Users

| Method | Endpoint | Auth | Description |
| --- | --- | --- | --- |
| `POST` | `/users/register` | Public | Register a user |
| `POST` | `/users/login` | Public | Log in and receive a signed JWT |
| `DELETE` | `/users/:id` | Public currently | Delete a user |

Registering a user requires `username`, `email`, and `password`. New users default to the `mentee` role.

### Posts

| Method | Endpoint | Auth | Description |
| --- | --- | --- | --- |
| `GET` | `/posts` | Public | Get all posts |
| `GET` | `/posts/:id` | Public | Get post by ID |
| `POST` | `/posts` | JWT required | Create a post |
| `DELETE` | `/posts/:id` | JWT required | Delete a post |

### Comments

| Method | Endpoint | Auth | Description |
| --- | --- | --- | --- |
| `GET` | `/comments` | Public | Get all comments |
| `GET` | `/comments/:id` | Public | Get comment by ID |
| `POST` | `/comments` | JWT required | Create a comment |
| `DELETE` | `/comments/:id` | JWT required | Delete a comment |

Protected endpoints expect an `Authorization` header:

```txt
Authorization: Bearer <token>
```

## License

MIT
