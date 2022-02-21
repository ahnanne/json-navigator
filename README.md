# json-navigator🧭

json-navigator를 통해 JSON 파일 계층 관계를 시각적으로 확인할 수 있습니다.

## 실행 방법

**바로 확인하기**

https://ahnanne.github.io/json-navigator/

또는 **설치하기**

```
$ git clone https://github.com/ahnanne/json-navigator.git

$ cd json-navigator
$ npm install
$ npm start
```

테스트 파일: [test-json.zip](https://github.com/ahnanne/json-navigator/files/8109244/test-json.zip)

## 기능

1. JSON 파일의 계층 관계를 시각적으로 표시

    - 아래와 같이 마침표(`.`)를 기준으로 하여 계층 관계를 파악합니다.
    
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

2. property 검색

    - 검색어를 포함한 property만 확인할 수 있습니다. (검색어를 초기화하여 다시 전체 계층 관계를 확인할 수 있습니다.)

## 사용 기술 스택

- TypeScript

- CRA

- styled-components
