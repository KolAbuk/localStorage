import { existsSync, mkdirSync, readFileSync, writeFileSync } from "fs";

//

export class LocalStorage<Storage> {
  public storage: Storage = {} as Storage;
  private storageDirPath: string;
  private storageFileName: string;
  constructor(args?: { storageDirPath?: string; storageFileName?: string }) {
    this.storageDirPath = args?.storageDirPath || "./localStorage";
    this.storageFileName = args?.storageFileName || "./storage";
  }
  load = (): void => {
    try {
      if (!existsSync(`${this.storageDirPath}/${this.storageFileName}.json`)) {
        mkdirSync(this.storageDirPath, {
          recursive: true,
        });
        writeFileSync(
          `${this.storageDirPath}/${this.storageFileName}.json`,
          `{}`,
          "utf8"
        );
      }
      this.storage = JSON.parse(
        readFileSync(
          `${this.storageDirPath}/${this.storageFileName}.json`,
          "utf8"
        )
      ) as Storage;
    } catch (e) {
      throw e;
    }
  };
  save = (): void => {
    try {
      if (!existsSync(`${this.storageDirPath}/${this.storageFileName}.json`)) {
        mkdirSync(this.storageDirPath, {
          recursive: true,
        });
      }
      writeFileSync(
        `${this.storageDirPath}/${this.storageFileName}.json`,
        JSON.stringify(this.storage),
        "utf8"
      );
    } catch (e) {
      throw e;
    }
  };
  clear = (): void => {
    try {
      this.storage = {} as Storage;
    } catch (e) {
      throw e;
    }
  };
}
