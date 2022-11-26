import { rest } from "msw";

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
];
