# GraphQL-Apollo-express

## RUN

- `cd server` 이후 아래 명령어 실행
  - `yarn json:server`
    - `data.json`에 있는 임의의 데이터를 기반으로 json 서버 동작
  - `yarn dev:server`
    - `express` 서버 실행
    - `nodemon --exec babel-node index.js` 로 실행하면 ES6+ 문법 ( import 등 ) 사용 가능하지만 속도가 느려지는 듯한 느낌
  - `yarn react:server`
    - `react` 실행

## code reference

- https://hwasurr.io/api/graphql-example/
