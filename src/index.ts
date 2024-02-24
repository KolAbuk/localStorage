import { existsSync, mkdirSync, readFileSync, writeFileSync } from "fs";

//

export class LocalStorage<T> {
  private storageDirPath: string;
  constructor(storageDirPath?: string) {
    this.storageDirPath = storageDirPath || "./localStorage";
  }
  load = (): T => {
    try {
      if (!existsSync(`${this.storageDirPath}/storage.json`)) {
        mkdirSync(this.storageDirPath, {
          recursive: true,
        });
        writeFileSync(`${this.storageDirPath}/storage.json`, `{}`, "utf8");
      }
      const storage = JSON.parse(
        readFileSync(`${this.storageDirPath}/storage.json`, "utf8")
      ) as T;
      return storage;
    } catch (e) {
      throw e;
    }
  };
  save = (storage: T): void => {
    try {
      writeFileSync(
        `${this.storageDirPath}/storage.json`,
        JSON.stringify(storage),
        "utf8"
      );
    } catch (e) {
      throw e;
    }
  };
  clear = (): void => {
    try {
      writeFileSync(`${this.storageDirPath}/storage.json`, `{}`, "utf8");
    } catch (e) {
      throw e;
    }
  };
}
