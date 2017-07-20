import { login } from '../GithubService';
jest.mock('../GithubService');

describe('GithubService', () => {
  it('returns a token in form of Guid if there are credentials', () =>{
    login("test", "test").then(token => expect(token).toMatch(new RegExp('^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$')));
  })

  it('fails if some credential is missing', () =>{
    login("", "test").catch(e => expect(e).toEqual('Wrong Credentials'));
  })
})