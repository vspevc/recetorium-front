import { rest } from "msw";
import { eightRecipes } from "../factories/recipeFactory/recipeFactory";

const { REACT_APP_API_URL: apiUrl } = process.env;

export const handlers = [
  rest.post(`${apiUrl}users/register`, (req, res, ctx) =>
    res.once(ctx.status(201))
  ),
  rest.post(`${apiUrl}users/register`, (req, res, ctx) =>
    res.once(
      ctx.status(400),
      ctx.json({ error: '"password" validation error' })
    )
  ),
  rest.post(`${apiUrl}users/register`, (req, res) =>
    res.networkError("Network Error")
  ),

  rest.get(`${apiUrl}recipes/search`, (req, res, ctx) =>
    res.once(
      ctx.status(200),
      ctx.json({
        previousPage: null,
        nextPage: null,
        totalPages: 1,
        recipes: eightRecipes,
      })
    )
  ),
  rest.get(`${apiUrl}recipes/search`, (req, res) =>
    res.networkError("404 page not found")
  ),

  rest.post(`${apiUrl}recipes/create`, (req, res, ctx) =>
    res.once(ctx.status(201))
  ),
  rest.post(`${apiUrl}recipes/create`, (req, res, ctx) =>
    res.once(ctx.status(201))
  ),
  rest.post(`${apiUrl}recipes/create`, (req, res, ctx) =>
    res.once(
      ctx.status(400),
      ctx.json({ error: '"name" is not allowed to be empty' })
    )
  ),
  rest.post(`${apiUrl}recipes/create`, (req, res) =>
    res.networkError("Network Error")
  ),

  rest.delete(`${apiUrl}recipes/delete/:recipeId`, (req, res, ctx) =>
    res.once(
      ctx.status(200),
      ctx.json({
        message: 'Recipe "Tomato soup" has been deleted successfully',
      })
    )
  ),
  rest.delete(`${apiUrl}recipes/delete/:recipeId`, (req, res, ctx) =>
    res.once(
      ctx.status(500),
      ctx.json({
        error: "Internal server error",
      })
    )
  ),
  rest.delete(`${apiUrl}recipes/delete/:recipeId`, (req, res) =>
    res.networkError("Network Error")
  ),
];
