# RUN

- `yarn start`



# package.json

```
{
  "name": "GQL-server",
  "version": "1.0.0",
  "main": "index.js",
  "license": "MIT",
  "dependencies": {
    "apollo-server": "^2.22.2",
    "bcrypt": "^5.0.1",
    "crypto-js": "^4.0.0",
    "csprng": "^0.1.2",
    "graphql": "^15.5.0"
  },
  "devDependencies": {
    "@babel/core": "^7.13.14",
    "@babel/node": "^7.13.13",
    "@babel/preset-env": "^7.13.12",
    "nodemon": "^2.0.7"
  },
  "scripts": {
    "start": "nodemon --exec babel-node src/index.js"
  }
}
```

- `apollo-server`
  - GraphQL이 적용된 서버를 생성할 수 있는 클래스 제공
  - `create-react-app`패키지와 비슷한 역할
- `bcrypt`, `cryptro-js`, `csprng`
  - 패스워드 암호화와 관련된 패키지
- `nodemon`
  - 실행 중인 JS 파일 변경을 감지하고, 파일이 변경되면 Node를 재실행해 변경 사항이 자동으로 반영되게 도와줌
- `babel`
  - 최신 JS 문법을 각 브라우저가 지원하는 JS 버전에 맞게 맞춰줌
- `srcipts/start`
  - `script` 항목을 추가해서 `start` 명령어 명시