// __tests__/fetch.test.js
import React from 'react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { render, fireEvent, waitFor, screen, act } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import App from './App';
import matrix_json from './__tests__/matrix_mock.json';
import genre_json from './__tests__/genre_mock.json';

const urlMovieGenre = 'https://api.themoviedb.org/3/genre/movie/list';
const urlMovieSarch = 'https://api.themoviedb.org/3/search/movie';

const server = setupServer(
  rest.get(urlMovieGenre, (req, res, ctx) => {
    return res(ctx.json(genre_json));
  }),
  rest.get(urlMovieSarch, (req, res, ctx) => {
    return res(ctx.json(matrix_json));
  })
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

test('loads search input from Home', async () => {
  render(<App url="/home" />);

  const inputSearch = 'input_search';

  await waitFor(() => screen.getByTestId(inputSearch));
  expect(screen.getByTestId(inputSearch)).toBeDefined();
})

test('handles server error after searching for matrix', async () => {
  server.use(
    rest.get(urlMovieSarch, (req, res, ctx) => {
      return res(ctx.status(500))
    })
  );

  render(<App url="/home" />);
  window.scrollTo = jest.fn();

  const inputSearch = 'input_search';
  const btnSubmit = 'submit_search';
  const queryText = 'matrix';
  const noMovies = 'no_movies';

  const inputNode = await waitFor(() => screen.getByTestId(inputSearch));

  fireEvent.change(inputNode, { target: { value: queryText } });
  expect(inputNode.value).toEqual(queryText);

  const btnNode = await waitFor(() => screen.getByTestId(btnSubmit));

  fireEvent.click(btnNode);

  await waitFor(() => screen.getByTestId(noMovies));
})

test('handles server result after searching for matrix', async () => {
  render(<App url="/home" />);
  window.scrollTo = jest.fn();

  const inputSearch = 'input_search';
  const btnSubmit = 'submit_search';
  const queryText = 'matrix';
  const resultList = 'result_list';

  expect(screen.getByTestId(inputSearch)).toBeDefined();
  const inputNode = await waitFor(() => screen.getByTestId(inputSearch));

  fireEvent.change(inputNode, { target: { value: queryText } });
  expect(inputNode.value).toEqual(queryText);

  const btnNode = await waitFor(() => screen.getByTestId(btnSubmit));
  expect(screen.getByTestId(btnSubmit)).toBeDefined();

  fireEvent.click(btnNode);

  await waitFor(() => screen.getByTestId(resultList));
})
