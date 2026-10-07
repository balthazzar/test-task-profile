# Digital Profile Backend

## Environment variables (for local runs)

Create a `.env` file in the project root:

```env
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/test_task?schema=public"
```

## Running with Docker

The easiest way to run the complete application is Docker Compose.

### Start

```bash
docker compose up --build
```

Docker Compose will:

1. Start PostgreSQL
2. Wait until PostgreSQL is ready
3. Apply Prisma migrations
4. Seed the database
5. Start the NestJS application

The GraphQL API will be available at:

```text
http://localhost:3000/graphql
```

Apollo Sandbox is available at the same URL.

### Stop

```bash
docker compose down
```

### Remove containers and database data

```bash
docker compose down -v
```

The `-v` option removes the PostgreSQL volume and therefore deletes all database data.

## Running locally

The local setup uses Docker only for PostgreSQL.

### 1. Install dependencies

```bash
npm install
```

### 2. Start PostgreSQL

```bash
docker compose up -d db
```

### 3. Generate Prisma Client

```bash
npx prisma generate
```

### 4. Apply database migrations

```bash
npx prisma migrate deploy
```

### 5. Seed the database

```bash
npx prisma db seed
```

### 6. Start the application

```bash
npm run start:dev
```

The API will be available at:

```text
http://localhost:3000/graphql
```

## GraphQL API

### Get profiles

The `profiles` query supports offset pagination.

```graphql
query {
  profiles(page: 1, limit: 10) {
    items {
      id
      name
    }
    page
    limit
    total
    totalPages
  }
}
```

### Get a profile by ID

```graphql
query {
  profile(id: 1) {
    id
    name
    description

    socialLinks {
      id
      name
      displayName
      url
      iconUrl
    }

    skills {
      id
      name
    }

    experience {
      id
      company
      position
      startDate
      endDate
      achievements
    }

    projects {
      id
      name
      url
    }
  }
}
```

### Get the first profile

The `id` argument is optional. When it is omitted, the first profile is returned.

```graphql
query {
  profile {
    id
    name
    description
  }
}
```

## Project structure

The seed creates:

- Profile
- Social links
- Skills
- Work experience
- Achievements
- Projects
