export interface IJsonParser {
  tryStringifyJson<T>(val: T): string | Error;
  tryParseJson<T>(val: string): T | Error;
}

export class JSONParser implements IJsonParser {
  public tryStringifyJson<T>(val: T) {
    try {
      return JSON.stringify(val);
    } catch (err) {
      return new Error(`Could not parse value ${val}\n to json string.`);
    }
  }

  public tryParseJson<T>(val: string): T | Error {
    try {
      return JSON.parse(val);
    } catch (err) {
      return new Error(`Could not parse string to JSON ${val}`);
    }
  }
}
