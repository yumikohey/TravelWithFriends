import axios from 'axios';

const host = 'http://174.129.85.123/';

class Api {
  static headers() {
    return {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'dataType': 'json',
    }
  }

  static get(route) {
    return this.xhr(route, null, 'GET');
  }

  static put(route, params) {
    return this.xhr(route, params, 'PUT')
  }

  static post(route, params) {
    return this.xhr(route, params, 'POST')
  }

  static delete(route, params) {
    return this.xhr(route, params, 'DELETE')
  }

  static xhr(route, params, verb) {
    const url = `${host}${route}`
    let options = Object.assign({url}, { method: verb }, params ? { body: JSON.stringify(params) } : null );
    return axios(options)
      .then( res => {
        return res.data;
      }).catch(err => {
        console.log(err);
      });
  }
}
export default Api