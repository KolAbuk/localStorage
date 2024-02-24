# @kolabuk/localstorage

Simple local storage

## Installation

```bash
npm i @kolabuk/localstorage
```

## Importing

```javascript
import { LocalStorage } from "@kolabuk/localstorage";
```

## Usage

```javascript
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
```
