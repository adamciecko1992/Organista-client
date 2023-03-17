import { IJsonParser } from "../JsonParser";

export class SessionStorageAdapter {
  constructor(private parser: IJsonParser) {}

  public setJson<T extends {}>(key: string, val: T) {
    const parseResult = this.parser.tryStringifyJson(val);
    if (parseResult instanceof Error) {
      return false;
    }
    sessionStorage.setItem(key, parseResult);
    return true;
  }

  public removeItem(key: string) {
    const item = sessionStorage.getItem(key);
    if (!!item) {
      sessionStorage.removeItem(key);
      return true;
    }
    return false;
  }

  public getJson<T>(key: string, predicate: (v: unknown) => v is T) {
    const val = sessionStorage.getItem(key);
    if (val) {
      const parseResult = this.parser.tryParseJson<T>(val);
      return parseResult && predicate(parseResult) ? parseResult : null;
    }
  }
}
