# json-navigator๐งญ

json-navigator๋ฅผ ํตํด JSON ํ์ผ ๊ณ์ธต ๊ด๊ณ๋ฅผ ์๊ฐ์ ์ผ๋ก ํ์ธํ  ์ ์์ต๋๋ค.

## ์คํ ๋ฐฉ๋ฒ

**๋ฐ๋ก ํ์ธํ๊ธฐ**

https://ahnanne.github.io/json-navigator/

๋๋ **์ค์นํ๊ธฐ**

```
$ git clone https://github.com/ahnanne/json-navigator.git

$ cd json-navigator
$ npm install
$ npm start
```

ํ์คํธ ํ์ผ: [test-json.zip](https://github.com/ahnanne/json-navigator/files/8109244/test-json.zip)

## ๊ธฐ๋ฅ

1. JSON ํ์ผ์ ๊ณ์ธต ๊ด๊ณ๋ฅผ ์๊ฐ์ ์ผ๋ก ํ์

    - ์๋์ ๊ฐ์ด ๋ง์นจํ(`.`)๋ฅผ ๊ธฐ์ค์ผ๋ก ํ์ฌ ๊ณ์ธต ๊ด๊ณ๋ฅผ ํ์ํฉ๋๋ค.
    
      ```json
      {
        "isbn": "123-456-222",
        "author.lastname": "Doe",
        "author.firstname": "Jane",
        "editor.lastname": "Smith",
        "editor.firstname": "Jane",
        "title": "The Ultimate Database Study Guide"
      }
      ```

2. property ๊ฒ์

    - ๊ฒ์์ด๋ฅผ ํฌํจํ property๋ง ํ์ธํ  ์ ์์ต๋๋ค. (๊ฒ์์ด๋ฅผ ์ด๊ธฐํํ์ฌ ๋ค์ ์ ์ฒด ๊ณ์ธต ๊ด๊ณ๋ฅผ ํ์ธํ  ์ ์์ต๋๋ค.)

## ์ฌ์ฉ ๊ธฐ์  ์คํ

- TypeScript

- CRA

- styled-components
