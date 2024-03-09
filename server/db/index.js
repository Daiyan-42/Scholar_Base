
const { Client } = require('pg');

// PostgreSQL database connection configuration
const client = new Client({
  user: 'postgres',
  host: '127.0.0.1',
  database: 'scholarbase',
  password: 'pornstack',
  port: 5433,
});

// Function to connect to the database
async function connectToDatabase() {
  try {
    await client.connect();
    console.log('Connected to PostgreSQL database');
  } catch (error) {
    console.error('Error connecting to PostgreSQL database', error);
    throw error;
  }
}

// Function to close the database connection
async function closeDatabaseConnection() {
  try {
    await client.end();
    console.log('Disconnected from PostgreSQL database');
  } catch (error) {
    console.error('Error disconnecting from PostgreSQL database', error);
    throw error;
  }
}

module.exports = {
  connectToDatabase,
  closeDatabaseConnection,
  client, // Export the client for use in other modules
};
