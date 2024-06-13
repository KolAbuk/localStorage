"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocalStorage = void 0;
const fs_1 = require("fs");
//
class LocalStorage {
    constructor(args) {
        this.load = () => {
            try {
                if (!(0, fs_1.existsSync)(`${this.storageDirPath}/${this.storageFileName}.json`)) {
                    (0, fs_1.mkdirSync)(this.storageDirPath, {
                        recursive: true,
                    });
                    (0, fs_1.writeFileSync)(`${this.storageDirPath}/${this.storageFileName}.json`, JSON.stringify(this.initObj), "utf8");
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
                (0, fs_1.writeFileSync)(`${this.storageDirPath}/${this.storageFileName}.json`, JSON.stringify(this.storage), "utf8");
            }
            catch (e) {
                throw e;
            }
        };
        this.backup = () => {
            try {
                if (!(0, fs_1.existsSync)(`${this.storageDirPath}/${this.storageFileName}.backup.json`)) {
                    (0, fs_1.mkdirSync)(this.storageDirPath, {
                        recursive: true,
                    });
                }
                (0, fs_1.writeFileSync)(`${this.storageDirPath}/${this.storageFileName}.backup.json`, JSON.stringify(this.storage), "utf8");
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
        this.storageFileName = args.storageFileName || "./storage";
        this.storage = args.initObj;
        this.initObj = args.initObj;
    }
}
exports.LocalStorage = LocalStorage;
