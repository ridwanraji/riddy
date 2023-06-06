import { Response } from "kwix";
import { Response as EResponse } from "express";

export default class ExpressResponse extends Response {
  private reply: EResponse;
  public constructor(reply: EResponse) {
    super();
    this.reply = reply;
  }
  public get fastifyReply(): EResponse {
    return this.reply;
  }

  public header(key: string, value: string): void {
    void this.reply.header(key, value);
  }

  public status(code: number): void {
    void this.reply.status(code);
  }

  public cookie(key: string, value: string): void {
    void this.reply.cookie(key, value);
  }
}
