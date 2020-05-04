import request from '@/utils/request';

export function invokeTxn(url: string, params: any) {
  return request.post(url, {
    data: params,
  });
}
