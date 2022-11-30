import { rest } from "msw";
import {
  eightRecipes,
  recipeTomatoSoup,
} from "../factories/recipeFactory/recipeFactory";

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
  rest.post(`${apiUrl}recipes/search`, (req, res) =>
    res.networkError("Network Error")
  ),
];
