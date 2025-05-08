import { mkdir, readFile, writeFile, access } from "fs/promises";
import path from "path";

//

//

export class LocalStorageAsync<Storage> {
  public storage: Storage;
  private storageDirPath: string;
  private backupDirPath: string;
  private storageFileName: string;
  private initObj: Storage;
  constructor(args: {
    storageDirPath?: string;
    backupDirPath?: string;
    storageFileName?: string;
    initObj: Storage;
  }) {
    this.storageDirPath = path.resolve(args.storageDirPath || "./localStorage");
    this.backupDirPath = path.resolve(
      args.backupDirPath || `${this.storageDirPath}/backups`
    );
    this.storageFileName = args.storageFileName || "storage";
    this.storage = args.initObj;
    this.initObj = args.initObj;
  }
  load = async (): Promise<void> => {
    try {
      try {
        await access(
          path.join(this.storageDirPath, `${this.storageFileName}.json`)
        );
      } catch {
        await mkdir(this.storageDirPath, {
          recursive: true,
        });
        await writeFile(
          path.join(this.storageDirPath, `${this.storageFileName}.json`),
          JSON.stringify(this.initObj),
          "utf8"
        );
      }
      this.storage = JSON.parse(
        await readFile(
          path.join(this.storageDirPath, `${this.storageFileName}.json`),
          "utf8"
        )
      ) as Storage;
    } catch (e) {
      throw e;
    }
  };
  save = async (): Promise<void> => {
    try {
      try {
        await access(
          path.join(this.storageDirPath, `${this.storageFileName}.json`)
        );
      } catch {
        await mkdir(this.storageDirPath, {
          recursive: true,
        });
      }
      await writeFile(
        path.join(this.storageDirPath, `${this.storageFileName}.json`),
        JSON.stringify(this.storage),
        "utf8"
      );
    } catch (e) {
      throw e;
    }
  };
  backup = async (): Promise<void> => {
    try {
      try {
        await access(
          path.join(this.backupDirPath, `${this.storageFileName}.backup.json`)
        );
      } catch {
        await mkdir(this.backupDirPath, {
          recursive: true,
        });
      }
      await writeFile(
        path.join(this.backupDirPath, `${this.storageFileName}.backup.json`),
        JSON.stringify(this.storage),
        "utf8"
      );
    } catch (e) {
      throw e;
    }
  };
  clear = async (): Promise<void> => {
    try {
      this.storage = this.initObj;
    } catch (e) {
      throw e;
    }
  };
}
