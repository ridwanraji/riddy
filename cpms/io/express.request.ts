import { Request } from "kwix";
import { Request as ERequest } from "express";

export default class ExpressRequest extends Request {
  public request: ERequest;

  public constructor(request: ERequest) {
    super();
    this.request = request;
  }

  public body<T>(): T {
    return (this.request.body || {}) as unknown as T;
  }

  public query<
    T extends Record<string, string | string[]> = Record<
      string,
      string | string[]
    >
  >(): T {
    return this.request.query as T;
  }

  public headers<T = unknown>(): T {
    return Object.keys(this.request.headers).reduce(
      (acc, cur) => ({
        ...acc,
        [cur.toLowerCase()]: this.request.headers[cur],
      }),
      {}
    ) as T;
  }

  public params<
    T extends Record<string, string> = Record<string, string>
  >(): T {
    return this.request.params as T;
  }

  public cookies<
    T extends Record<string, string> = Record<string, string>
  >(): T {
    return this.request.cookies as T;
  }
}
