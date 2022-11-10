DROP TABLE IF EXISTS manufacture CASCADE;
DROP TABLE IF EXISTS cars CASCADE;

CREATE TABLE manufacture (
  id serial PRIMARY KEY,
  name varchar,
  hq varchar
);

CREATE TABLE cars (
  id serial PRIMARY KEY,
  manufacture integer REFERENCES manufacture (id),
  model varchar,
  color varchar,
  year integer,
  MSRP integer
);