--
-- PostgreSQL database dump
--

-- Dumped from database version 11.3 (Ubuntu 11.3-1.pgdg18.04+1)
-- Dumped by pg_dump version 11.5

-- Started on 2019-09-11 16:56:10 PDT

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

CREATE TABLE public.users (
	"_id" serial NOT NULL,
	"username" varchar NOT NULL,
	"password" varchar NOT NULL,
	CONSTRAINT "people_pk" PRIMARY KEY ("_id"),
	CONSTRAINT unique_username UNIQUE ("username")
) WITH (
  OIDS=FALSE
);



CREATE TABLE public.ads (
	"_id" serial NOT NULL,
	"title" varchar NOT NULL,
	"description" varchar,
	"width" integer DEFAULT 320,
	"height" integer DEFAULT 180,
	"BG-type" varchar DEFAULT 'Solid',
	"BG-color" varchar DEFAULT '#fff',
	"BG-image" varchar,
	"HL-font-family" varchar DEFAULT 'Arial',
	"headline" varchar,
	"SHL-font-family" varchar DEFAULT 'Arial',
	"sub-headline" varchar,
	"CTA" varchar,
	"CTA-font-family" varchar DEFAULT 'Arial',
	"CTA-BG-color" varchar DEFAULT '#3CB043',
	"CTA-FONT-color" varchar DEFAULT '#fff',
	"CTA-link" varchar,
	"author_id" bigint NOT NULL,
	CONSTRAINT "films_pk" PRIMARY KEY ("_id")
) WITH (
  OIDS=FALSE
);







ALTER TABLE public.ads ADD CONSTRAINT "ads_fk0" FOREIGN KEY ("author_id") REFERENCES public.users("_id");

 INSERT INTO public.users VALUES (2, 'John', 'Doe');

 INSERT INTO public.ads VALUES (2, 'First Ad', 'Most definitely the best ad you have ever seen', 320, 180, 'Solid', "#0492c2", NULL, NULL, 'My Headline', NULL, 'Sub-healine 1', 'Click Here', NULL, NULL, NULL, NULL, 1);



select setval('public.users__id_seq', 1, false);
select setval('public.ads__id_seq', 1, false);


-- Completed on 2019-09-11 17:02:50 PDT

--
-- PostgreSQL database dump complete
--

