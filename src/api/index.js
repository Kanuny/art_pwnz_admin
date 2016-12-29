// @flow
import axios from 'axios';

import type { RequestFunctionType } from './types';
import articles from './modules/articles';
import images from './modules/images';

type RequestAsPromisedResponseType = { data: Object | Array<*> };

function getRequest(baseURL: string, token?: string) {
  const requester = axios.create({
    headers: {
      'content-type': 'application/json',
      ...(token ? { 'x-auth-token': token } : null),
    },
    baseURL,
  });
  return config => requester(config)
    .then(({ data }: RequestAsPromisedResponseType) => data)
  ;
}


type CallableApiMethodType = (r: RequestFunctionType) => (c: any) => Promise<*>;

export default function genApi({ baseUrl, token }: { baseUrl: string, token?: string }) {
  const req = getRequest(baseUrl, token);
  // eslint-disable-next-line max-len
  function bind<C: {[key: string]: CallableApiMethodType}>(obj: C): $ObjMap<C, <I, O>(v: (r: I) => O) => O> {
    const result = {};
    Object.keys(obj).forEach((k: string) => {
      result[k] = (config: ?{}): any => obj[k](req)(config);
    });
    return result;
  }

  // See http://repository.cmu.edu/cgi/viewcontent.cgi?article=3059&context=compsci why we need that
  // Need to research better way later
  const api = {
    articles: (() => bind(articles))(),
    images: (() => bind(images))(),
  };

  return api;
}
