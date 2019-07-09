class ApiService {
  _baseUrl = 'https://jsonplaceholder.typicode.com/';

  _getData = url => {
    return fetch(`${this._baseUrl}${url}`).then(res => res.json());
  };

  getPosts = () => this._getData('posts');
  getUsers = () => this._getData('users');
  getComments = () => this._getData('comments');
}

export default new ApiService();
