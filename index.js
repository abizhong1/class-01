const express = require('express');
const app = express();
exports.app = app;
const mongoose = require('mongoose');
const User = require('./models/User');

app.get('/', [], async (req, res) => {
  const user = new User({
    firstname: 'Max',
    userName: 'Wang',
  });

  await user.save();

  res.send('<h2>Hello from Express.js server!!!</h2>');
});

mongoose
  .connect(
    'mongodb+srv://abigailzhong:admin@cluster0.131ai.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
    {
      //  useNewUrlParser: true,
      //  useUnifiedTopology: true,
      dbName: 'class1-test',
    },
  )
  .then(() => {
    console.log('Database Connection is ready...');
    app.listen(3000);
    console.log('server listening on port 3000');
  })
  .catch((err) => {
    console.log(err);
  });
