module.exports = {
  PORT: process.env.PORT || 8000,
  NODE_ENV: process.env.NODE_ENV || "development",
  REACT_APP_API_BASE_URL:
    process.env.REACT_APP_API_BASE_URL || "http://localhost:8000",
  DATABASE_URL:
    process.env.DATABASE_URL ||
    "postgres://hdphclavnckfrs:44ebd98adc254aac7fe39f18b4a8fa2998bb97f9a88ea66030f22ab48b702aa3@ec2-184-73-169-163.compute-1.amazonaws.com:5432/d46isq1b39p75a?ssl=true",
  CLIENT_ORIGIN: process.env.CLIENT_ORIGIN || "http://localhost:3000"
};
