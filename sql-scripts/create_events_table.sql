CREATE TABLE IF NOT EXISTS events (
  eventid TEXT NOT NULL,
  title TEXT NOT NULL,
  event_date DATE NOT NULL,
  city TEXT NOT NULL,
  state TEXT NOT NULL,
  description TEXT NOT NULL,
  organization TEXT,
  link TEXT
);
