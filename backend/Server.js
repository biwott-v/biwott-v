const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

let skills = [
  { id: 1, title: 'Electrical', description: 'Provides electrical services.', reviewsCount: 12 },
  { id: 2, title: 'Plumbing', description: 'Plumbing services for home and office.', reviewsCount: 8 }
];

let reviews = [
  { id: 1, skillId: 1, userName: 'John Doe', rating: 5, content: 'Excellent work!' },
  { id: 2, skillId: 2, userName: 'Jane Smith', rating: 4, content: 'Very good plumbing services.' }
];

app.get('/skills', (req, res) => {
  res.json(skills);
});

app.get('/skills/:id/reviews', (req, res) => {
  const skillId = parseInt(req.params.id);
  const skillReviews = reviews.filter(review => review.skillId === skillId);
  res.json(skillReviews);
});

app.post('/skills', (req, res) => {
  const { title, description } = req.body;
  const newSkill = {
    id: skills.length + 1,
    title,
    description,
    reviewsCount: 0
  };
  skills.push(newSkill);
  res.status(201).json(newSkill);
});

app.post('/skills/:id/reviews', (req, res) => {
  const skillId = parseInt(req.params.id);
  const { userName, rating, content } = req.body;
  const newReview = {
    id: reviews.length + 1,
    skillId,
    userName,
    rating,
    content
  };
  reviews.push(newReview);
  res.status(201).json(newReview);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});