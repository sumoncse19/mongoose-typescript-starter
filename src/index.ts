import express, { Application } from 'express';
import cors from 'cors'
import 'dotenv/config'
import mongoose from 'mongoose';

const app: Application = express();

// using cors
app.use(cors());

// parse data
app.use(express.json());
app.use(express.urlencoded({ extended: false })); // false --> express app sudho matro string and object k receive korbe  // true --> express app any type receive korbe

const { URI } = process.env
const port = process.env.PORT || 5000;

const dbConnect = async (): Promise<void> => {
  if (!URI) {
    throw new Error('URL is not specified')
  }
  await mongoose.connect(URI).then(() => console.log('Database Connected!'));

  // connect the database
  const database = mongoose.connection

  // collect collection name
  const personsCollection = database.collection("persons")

  app.get('/persons', async (req, res) => {
    const result = await personsCollection.find({}).limit(10).toArray();
    res.send(result);
  })

}

dbConnect()

app.get('/', (req, res) => {
  res.send({
    message: 'Our server is running',
    status: 200,
  })
})

app.listen(port, () => console.log(`Server is running at http://localhost:${port}`))
