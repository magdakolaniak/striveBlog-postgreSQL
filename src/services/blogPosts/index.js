import { Router } from 'express';
import Model from '../../utils/model/index.js';

const route = Router();

const blogPosts = new Model('blogposts', 'blogpost_id');

route.get('/', async (req, res, next) => {
  try {
    const dbResponse = await blogPosts.find(req.query);
    res.send(dbResponse);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});
route.get('/:id', async (req, res, next) => {
  try {
    const dbResponse = await blogPosts.findById(req.params.id);
    res.send(dbResponse);
  } catch (error) {
    res.status(error.code || 500).send({ error: error.message });
  }
});
route.put('/:id', async (req, res, next) => {
  try {
    const dbResponse = await blogPosts.update(req.params.id, req.body);
    res.send(dbResponse);
  } catch (error) {
    res.status(500).send({ error });
  }
});
route.post('/', async (req, res, next) => {
  try {
    const dbResponse = await blogPosts.create(req.body);
    res.send(dbResponse);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});
route.delete('/:id', async (req, res, next) => {
  try {
    const dbResponse = await blogPosts.deleteById(req.params.id);
    res.send(dbResponse);
  } catch (error) {
    res.status(500).send({ error });
  }
});

export default route;
