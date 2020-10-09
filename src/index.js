import mongoose from 'mongoose';
import express from 'express';
import bodyParser from "body-parser";

import PostController from './controllers/PostController'
const Post = new PostController();

const app = express();
mongoose.connect('mongodb://localhost:27017/blog');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/posts', Post.get);
app.get('/posts/:id', Post.read);
app.put('/posts', Post.update);
app.post('/posts', Post.create);
app.delete('/posts/:id', Post.delete);


app.listen(3333, () => {
   console.log('server started');
});
