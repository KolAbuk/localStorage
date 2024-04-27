import { existsSync, mkdirSync, readFileSync, writeFileSync } from "fs";

//

export class LocalStorage<Storage> {
  public storage: Storage;
  private storageDirPath: string;
  private storageFileName: string;
  private initObj: Storage;
  constructor(args: {
    storageDirPath?: string;
    storageFileName?: string;
    initObj: Storage;
  }) {
    this.storageDirPath = args.storageDirPath || "./localStorage";
    this.storageFileName = args.storageFileName || "./storage";
    this.storage = args.initObj;
    this.initObj = args.initObj;
  }
  load = (): void => {
    try {
      if (!existsSync(`${this.storageDirPath}/${this.storageFileName}.json`)) {
        mkdirSync(this.storageDirPath, {
          recursive: true,
        });
        writeFileSync(
          `${this.storageDirPath}/${this.storageFileName}.json`,
          JSON.stringify(this.initObj),
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
      this.storage = this.initObj;
    } catch (e) {
      throw e;
    }
  };
}
