const PORT = process.env.PORT || 8080;
const path = require("path");
const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, "db.json"));
const middlewares = jsonServer.defaults();
server.use(middlewares);
server.use(jsonServer.bodyParser);


// Endpoint to get today's quiz
server.get('/api/quizzes/today', (req, res) => {
  const today = new Date().toISOString().split('T')[0];
  const quiz = router.db.get('Quizzes').find({ date: today }).value();
  if (quiz) {
      res.json(quiz);
  } else {
      res.status(404).json({ message: 'No quiz for today' });
  }
});

// Endpoint to save completed quiz result
server.post('/api/quizzes/complete', (req, res) => {
  const { email, score } = req.body;
  // Here you can handle saving the user's score, e.g., to a "Results" collection in db.json
  res.json({ message: 'Result saved', email, score });
});

server.use("", router);
server.listen(PORT, () =>
  console.log(`JSON Server is running on port ${PORT}`)
);

//https://vastra.onrender.com/MensData
//https://vastra.onrender.com/WomensData
//https://vastra.onrender.com/ChildrensData
//https://vastra.onrender.com/WishList
//https://vastra.onrender.com/Cart
//https://vastra.onrender.com/UsersList
//https://vastra.onrender.com/AdminData
//https://vastra.onrender.com/Checkout
//https://vastra.onrender.com/CurrentUser