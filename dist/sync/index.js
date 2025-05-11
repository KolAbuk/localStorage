"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocalStorage = void 0;
const fs_1 = require("fs");
//
//
class LocalStorage {
    constructor(args) {
        this.load = () => {
            try {
                if (!(0, fs_1.existsSync)(`${this.storageDirPath}/${this.storageFileName}.json`)) {
                    (0, fs_1.mkdirSync)(this.storageDirPath, {
                        recursive: true,
                    });
                    (0, fs_1.writeFileSync)(`${this.storageDirPath}/${this.storageFileName}.json`, JSON.stringify(this.initObj, null, this.prettyFormat), "utf8");
                }
                this.storage = JSON.parse((0, fs_1.readFileSync)(`${this.storageDirPath}/${this.storageFileName}.json`, "utf8"));
            }
            catch (e) {
                throw e;
            }
        };
        this.save = () => {
            try {
                if (!(0, fs_1.existsSync)(`${this.storageDirPath}/${this.storageFileName}.json`)) {
                    (0, fs_1.mkdirSync)(this.storageDirPath, {
                        recursive: true,
                    });
                }
                (0, fs_1.writeFileSync)(`${this.storageDirPath}/${this.storageFileName}.json`, JSON.stringify(this.storage, null, this.prettyFormat), "utf8");
            }
            catch (e) {
                throw e;
            }
        };
        this.backup = () => {
            try {
                if (this.storage == this.initObj) {
                    this.load();
                }
                if (!(0, fs_1.existsSync)(`${this.backupDirPath}/${this.storageFileName}.backup.json`)) {
                    (0, fs_1.mkdirSync)(this.backupDirPath, {
                        recursive: true,
                    });
                }
                (0, fs_1.writeFileSync)(`${this.backupDirPath}/${this.storageFileName}.backup.json`, JSON.stringify(this.storage, null, this.prettyFormat), "utf8");
            }
            catch (e) {
                throw e;
            }
        };
        this.clear = () => {
            try {
                this.storage = this.initObj;
            }
            catch (e) {
                throw e;
            }
        };
        this.storageDirPath = args.storageDirPath || "./localStorage";
        this.backupDirPath = args.backupDirPath || `${this.storageDirPath}/backups`;
        this.storageFileName = args.storageFileName || "./storage";
        this.storage = args.initObj;
        this.initObj = args.initObj;
        this.prettyFormat = args.prettyFormat || "";
    }
}
exports.LocalStorage = LocalStorage;
