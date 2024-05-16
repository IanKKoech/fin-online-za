import { HttpError } from './error';

type ResponseType = 'json' | 'blob';

async function http<T>(
  path: string,
  config: RequestInit,
  responseType?: ResponseType
): Promise<T> {
  const request = new Request(path, config);
  const response: Response = await fetch(request);

  if (!response.ok) {
    const errJson = await response.json();
    const err = HttpError.fromRequest(request, {
      ...response,
      statusText: errJson.message || response.statusText,
    });
    throw err;
  }
  // may error if there is no body, return empty array
  if (responseType === 'blob') return (await response.blob()) as any;
  return await response.json();
}

export async function get<T>(
  path: string,
  config?: RequestInit,
  responseType?: ResponseType
): Promise<T> {
  const init = { method: 'GET', ...config };
  return await http<T>(path, init, responseType);
}

type Options = {
  raw: boolean;
};
export async function post<T, U>(
  path: string,
  body: T,
  config?: RequestInit,
  options: Options = { raw: false }
): Promise<U> {
  const init = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: options.raw ? (body as any) : JSON.stringify(body),
    ...config,
  };
  return await http<U>(path, init);
}

export async function put<T, U>(
  path: string,
  body: T,
  config?: RequestInit
): Promise<U> {
  const init = {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
    ...config,
  };
  return await http<U>(path, init);
}

export async function patch<T, U>(
  path: string,
  body: T,
  config?: RequestInit
): Promise<U> {
  const init = {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
    ...config,
  };
  return await http<U>(path, init);
}

export async function remove<T, U>(
  path: string,
  body: T,
  config?: RequestInit
): Promise<U> {
  const init = {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
    ...config,
  };
  return await http<U>(path, init);
}