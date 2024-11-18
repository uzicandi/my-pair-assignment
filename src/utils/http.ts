import ky from 'ky';

const instance = ky.create({
  prefixUrl: 'http://localhost:8080',
});

const http = {
  get: instance.get,
  post: instance.post,
  put: instance.put,
  delete: instance.delete,
};

export default http;
