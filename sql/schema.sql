-- Seeing as we will be testing out this script alot we can destroy the db before creating everything again
DROP DATABASE IF EXISTS courses;

-- Create the db
CREATE DATABASE courses;

-- Move into the db
\c courses

-- Create our table if it doesn't already exist
CREATE TABLE IF NOT EXISTS Oregon
(
    url_slug text,
    name text,
    city text,
    state text,
    zip_code text,
    website text,
    architext text,
    public_private text,
    year_build text
);

-- Changes the owner of the table to postgres which is the default when installing postgres
ALTER TABLE Oregon
    OWNER to postgres;