import { login } from '../GithubService';
import { Response } from "../__mocks__/Response";

describe('GithubService', () => {
  it('is successful and returns a token', () => {
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve(Response(200, null)));
    login("test", "test").then(token => expect(token).toBeDefined());
  })

  it('fails if some credential is missing', () => {
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve(Response(401, null)));
    login("", "test").catch(e => expect(e).toEqual(new Error("Wrong Credentials")));
  })
})