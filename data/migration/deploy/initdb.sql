-- Deploy AUD:initdb to pg

BEGIN;

CREATE TABLE IF NOT EXISTS public.role (
  id SERIAL PRIMARY KEY,
  label VARCHAR(15) NOT NULL
);

CREATE TABLE IF NOT EXISTS public.ent (
    id SERIAL PRIMARY KEY,
    name VARCHAR(42) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    token INT NOT NULL,
    siret VARCHAR(14) UNIQUE
);

CREATE TABLE IF NOT EXISTS public.offer (
    id SERIAL PRIMARY KEY,
    title VARCHAR(42) NOT NULL,
    description TEXT NOT NULL,
    wage INT NOT NULL,
    type VARCHAR(10) NOT NULL,
    id_ent INT,
    FOREIGN KEY (id_ent) REFERENCES public.ent(id)
);

CREATE TABLE IF NOT EXISTS public.user (
    id SERIAL PRIMARY KEY,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    last_name VARCHAR(30),
    first_name VARCHAR(15),
    username VARCHAR(15),
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP,
    deleted_at TIMESTAMP,
    status BOOLEAN NOT NULL DEFAULT false,
    id_role INT NOT NULL,
    id_ent INT,
    FOREIGN KEY (id_role) REFERENCES public.role(id),
    FOREIGN KEY (id_ent) REFERENCES public.ent(id)
);

CREATE TABLE IF NOT EXISTS public.article (
    id SERIAL PRIMARY KEY,
    title VARCHAR(42) NOT NULL,
    description TEXT,
    link VARCHAR(255),
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP,
    id_user INT NOT NULL,
    FOREIGN KEY (id_user) REFERENCES public.user(id)
);

CREATE TABLE IF NOT EXISTS public.project (
    id SERIAL PRIMARY KEY,
    title VARCHAR(42) NOT NULL,
    description TEXT,
    link VARCHAR(255),
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP,
    id_user INT NOT NULL,
    FOREIGN KEY (id_user) REFERENCES public.user(id)
);

CREATE TABLE IF NOT EXISTS public.forgot (
    id SERIAL PRIMARY KEY,
    token INT NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    id_user INT NOT NULL,
    FOREIGN KEY (id_user) REFERENCES public.user(id)
);

CREATE TABLE IF NOT EXISTS public.info (
  github VARCHAR(255),
  linkedin VARCHAR(255),
  website VARCHAR(255),
  description TEXT,
  id_user INT NOT NULL,
  FOREIGN KEY (id_user) REFERENCES public.user(id)
);

CREATE TABLE IF NOT EXISTS public.degree (
  label VARCHAR(42) NOT NULL,
  level INT NOT NULL,
  priority INT NOT NULL
);

CREATE TABLE IF NOT EXISTS public.task (
  id SERIAL PRIMARY KEY,
  title VARCHAR(15) NOT NULL,
  rule TEXT,
  context TEXT,
  result TEXT,
  difficulty INT NOT NULL,
  timer_limit TIME
);

CREATE TABLE IF NOT EXISTS public.tree (
  id SERIAL PRIMARY KEY,
  title VARCHAR(30) NOT NULL,
  description TEXT,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP
);
COMMIT;
