"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocalStorageAsync = void 0;
const promises_1 = require("fs/promises");
const path_1 = __importDefault(require("path"));
//
//
class LocalStorageAsync {
    constructor(args) {
        this.load = () => __awaiter(this, void 0, void 0, function* () {
            try {
                try {
                    yield (0, promises_1.access)(path_1.default.join(this.storageDirPath, `${this.storageFileName}.json`));
                }
                catch (_a) {
                    yield (0, promises_1.mkdir)(this.storageDirPath, {
                        recursive: true,
                    });
                    yield (0, promises_1.writeFile)(path_1.default.join(this.storageDirPath, `${this.storageFileName}.json`), JSON.stringify(this.initObj, null, this.prettyFormat), "utf8");
                }
                this.storage = JSON.parse(yield (0, promises_1.readFile)(path_1.default.join(this.storageDirPath, `${this.storageFileName}.json`), "utf8"));
            }
            catch (e) {
                throw e;
            }
        });
        this.save = () => __awaiter(this, void 0, void 0, function* () {
            try {
                try {
                    yield (0, promises_1.access)(path_1.default.join(this.storageDirPath, `${this.storageFileName}.json`));
                }
                catch (_a) {
                    yield (0, promises_1.mkdir)(this.storageDirPath, {
                        recursive: true,
                    });
                }
                yield (0, promises_1.writeFile)(path_1.default.join(this.storageDirPath, `${this.storageFileName}.json`), JSON.stringify(this.storage, null, this.prettyFormat), "utf8");
            }
            catch (e) {
                throw e;
            }
        });
        this.backup = () => __awaiter(this, void 0, void 0, function* () {
            try {
                if (this.storage == this.initObj) {
                    yield this.load();
                }
                try {
                    yield (0, promises_1.access)(path_1.default.join(this.backupDirPath, `${this.storageFileName}.backup.json`));
                }
                catch (_a) {
                    yield (0, promises_1.mkdir)(this.backupDirPath, {
                        recursive: true,
                    });
                }
                yield (0, promises_1.writeFile)(path_1.default.join(this.backupDirPath, `${this.storageFileName}.backup.json`), JSON.stringify(this.storage, null, this.prettyFormat), "utf8");
            }
            catch (e) {
                throw e;
            }
        });
        this.clear = () => __awaiter(this, void 0, void 0, function* () {
            try {
                this.storage = this.initObj;
            }
            catch (e) {
                throw e;
            }
        });
        this.storageDirPath = path_1.default.resolve(args.storageDirPath || "./localStorage");
        this.backupDirPath = path_1.default.resolve(args.backupDirPath || `${this.storageDirPath}/backups`);
        this.storageFileName = args.storageFileName || "storage";
        this.storage = args.initObj;
        this.initObj = args.initObj;
        this.prettyFormat = args.prettyFormat || "";
    }
}
exports.LocalStorageAsync = LocalStorageAsync;
