module.exports = {
  PORT: process.env.PORT || 8000,
  NODE_ENV: process.env.NODE_ENV || "development",
  REACT_APP_API_BASE_URL:
    process.env.REACT_APP_API_BASE_URL || "http://localhost:8000",
  DB_URL:
    process.env.DB_URL || "postgresql://TrevorOsterman@localhost/getInvolved",
  CLIENT_ORIGIN: process.env.CLIENT_ORIGIN || "http://localhost:3000"
};
