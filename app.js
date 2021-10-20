const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');



const app = express();

app.use(express.json());
app.use(cors());



const PORT = 5500;

const URI = 'mongodb://localhost:27017/todoList';

mongoose
.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
  .then(() => console.log("connected to MongoDb..."))
  .catch((err) => console.log(err));
  


app.get('/', (req, res) => {
   res.send('Hello World');
});



const TodoRoute = require('./routes/Todo.js');
const noteRoute = require('./routes/Note.js');
app.use('/todo', TodoRoute);
app.use('/note', noteRoute);



app.listen(PORT, () => console.log(`server starting on http://localhost:${PORT}`));