import { existsSync, mkdirSync, readFileSync, writeFileSync } from "fs";

//

//

export class LocalStorage<Storage> {
  public storage: Storage;
  private storageDirPath: string;
  private backupDirPath: string;
  private storageFileName: string;
  private initObj: Storage;
  private prettyFormat?: string | number;
  constructor(args: {
    storageDirPath?: string;
    backupDirPath?: string;
    storageFileName?: string;
    initObj: Storage;
    prettyFormat?: string | number;
  }) {
    this.storageDirPath = args.storageDirPath || "./localStorage";
    this.backupDirPath = args.backupDirPath || `${this.storageDirPath}/backups`;
    this.storageFileName = args.storageFileName || "./storage";
    this.storage = args.initObj;
    this.initObj = args.initObj;
    this.prettyFormat = args.prettyFormat;
  }
  load = (): void => {
    try {
      if (!existsSync(`${this.storageDirPath}/${this.storageFileName}.json`)) {
        mkdirSync(this.storageDirPath, {
          recursive: true,
        });
        writeFileSync(
          `${this.storageDirPath}/${this.storageFileName}.json`,
          JSON.stringify(this.initObj, null, this.prettyFormat),
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
        JSON.stringify(this.storage, null, this.prettyFormat),
        "utf8"
      );
    } catch (e) {
      throw e;
    }
  };
  backup = (): void => {
    try {
      if (this.storage == this.initObj) {
        this.load();
      }
      if (
        !existsSync(`${this.backupDirPath}/${this.storageFileName}.backup.json`)
      ) {
        mkdirSync(this.backupDirPath, {
          recursive: true,
        });
      }
      writeFileSync(
        `${this.backupDirPath}/${this.storageFileName}.backup.json`,
        JSON.stringify(this.storage, null, this.prettyFormat),
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
