-- Booking store schema (Postgres / Neon).
--
-- Times are stored as `timestamp` WITHOUT time zone on purpose: the app works in
-- one fixed studio wall-clock ("YYYY-MM-DDTHH:mm"), so a naive timestamp is the
-- correct, unambiguous representation. Do not switch to timestamptz without also
-- changing how the app parses/formats times.

CREATE TABLE IF NOT EXISTS bookings (
  id           uuid PRIMARY KEY,
  service_id   text        NOT NULL,
  start_ts     timestamp   NOT NULL,
  end_ts       timestamp   NOT NULL,
  name         text        NOT NULL,
  email        text        NOT NULL,
  phone        text        NOT NULL,
  status       text        NOT NULL DEFAULT 'confirmed',
  cancel_token text        NOT NULL,
  created_at   text        NOT NULL,
  -- Half-open [start, end) range derived from the columns above. Half-open means
  -- a booking that ends at 10:30 does NOT clash with one that starts at 10:30.
  during       tsrange GENERATED ALWAYS AS (tsrange(start_ts, end_ts, '[)')) STORED,

  -- The database itself guarantees no two CONFIRMED bookings overlap. This is the
  -- real concurrency guard — it replaces the old in-process mutex and holds even
  -- across multiple serverless instances. A conflicting INSERT fails with
  -- SQLSTATE 23P01 (exclusion_violation), which the store maps to a friendly 409.
  CONSTRAINT bookings_no_overlap
    EXCLUDE USING gist (during WITH &&) WHERE (status = 'confirmed')
);

CREATE INDEX IF NOT EXISTS bookings_cancel_token_idx ON bookings (cancel_token);
CREATE INDEX IF NOT EXISTS bookings_status_idx       ON bookings (status);
