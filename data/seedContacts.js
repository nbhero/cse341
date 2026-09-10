const dotenv = require('dotenv');
dotenv.config();
const MongoClient = require('mongodb').MongoClient;
const contacts = require('./contacts.json');

const seed = async () => {
  const client = await MongoClient.connect(process.env.CONNECTION_STRING);
  const db = client.db(process.env.DB_NAME || 'cse341');

  await db.collection('contacts').deleteMany({});
  const result = await db.collection('contacts').insertMany(contacts);

  console.log(`Inserted ${result.insertedCount} contacts.`);
  await client.close();
};

seed().catch((err) => {
  console.error(err);
  process.exit(1);
});
