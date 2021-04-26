# RUN

- `yarn start`



# package.json

```
{
  "name": "gql-client",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "@apollo/client": "^3.3.13",
    "@testing-library/jest-dom": "^5.11.4",
    "@testing-library/react": "^11.1.0",
    "@testing-library/user-event": "^12.1.10",
    "@types/jest": "^26.0.15",
    "@types/node": "^12.0.0",
    "@types/react": "^17.0.0",
    "@types/react-dom": "^17.0.0",
    "@types/react-router-dom": "^5.1.7",
    "babel-jest": "^26.6.3",
    "graphql": "^15.5.0",
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "react-router-dom": "^5.2.0",
    "react-scripts": "4.0.3",
    "styled-component": "^2.8.0",
    "typescript": "^4.1.2",
    "web-vitals": "^1.0.1"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  }
}
```

- `@apollo/client`
  - GraphQL API 서버로 GQL을 요청하는 라이브러리를 제공하는 패키지
  - GQL-Apollo와 관련된 거의 모든 기능을 제공



# tsconfig.json

```
{
  "compilerOptions": {
    "target": "es5",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noFallthroughCasesInSwitch": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "baseUrl": "./src"
  },
  "include": ["src"]
}
```

- `baseUel`
  - `import` 로 불러올 때 절대경로로 설정



# 추가사항

- `public/reset.css`
  - 브라우저별 기본 스타일이 달라서 각 브라우저의 스타일 초기화를 위해 CSS 초기화 파일 적용