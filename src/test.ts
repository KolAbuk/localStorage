import { LocalStorage } from ".";

(async () => {
  try {
    type Storage = {
      account?: {
        email: string;
        password: string;
      };
      info?: string;
    };
    const localStorage = new LocalStorage<Storage>();
    let storage = localStorage.load();
    console.log(storage);
    localStorage.clear();
    storage = localStorage.load();
    console.log(storage);
    storage.account = { email: "email", password: "password" };
    console.log(storage);
    localStorage.save(storage);
  } catch (e: any) {
    console.error(e.message);
  }
})();
