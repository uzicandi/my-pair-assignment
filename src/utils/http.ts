import ky from 'ky';
import kyUniversal from 'ky-universal';

const targetKy = typeof window === 'undefined' ? kyUniversal : ky;

const instance = targetKy.create({
  prefixUrl: 'http://localhost:8080',
});

const http = {
  get: instance.get,
  post: instance.post,
  put: instance.put,
  delete: instance.delete,
};

export default http;
