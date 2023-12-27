-- Table: public.steam-200k

-- DROP TABLE IF EXISTS public."steam-200k";

CREATE TABLE IF NOT EXISTS public."steam-200k"
(
    user_id bigint,
    game character varying COLLATE pg_catalog."default",
    played character varying COLLATE pg_catalog."default",
    hours_played double precision,
    "0" bigint
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public."steam-200k"
    OWNER to postgres;


-- Table: public.games

-- DROP TABLE IF EXISTS public.games;

CREATE TABLE IF NOT EXISTS public.games
(
    title character varying COLLATE pg_catalog."default"
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.games
    OWNER to postgres;