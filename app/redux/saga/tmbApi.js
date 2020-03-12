import api from '../../services/api'

export default class TmbApi {
  _doGet =  endpoint => {
    return  api.get(endpoint)
  }

  getRepos = (page) => {
    return this._doGet('/users/reactjs/repos?per_page=10&page=' + page);
  };

  getReadMe = (repo) => {
    return this._doGet('/repos/reactjs/' + repo + '/readme');
  }

  getPRs = (query) => {
    return this._doGet('/repos/reactjs/' + query.repo + '/pulls?state=all&per_page=10&page=' + query.page)
  }

  getIssues = (query) => {
    return this._doGet('/repos/reactjs/' + query.repo + '/issues?state=all&per_page=10&page=' + query.page)
  }
}