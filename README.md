# 💄 Styled-Components의 Global 스타일을 사용한 예제입니다.

:octocat: 바로 가기 : https://light9639.github.io/Global-Styled-Components/

![light9639 github io_Global-Styled-Components_](https://user-images.githubusercontent.com/95972251/217988231-ff86dad1-4889-4b52-beef-5e2af2230e44.png)

:sparkles: 💄 Styled-Components의 Global 스타일을 사용한 예제입니다. :sparkles:
## :tada: React 프로젝트 생성
- React 생성
```bash
npm create-react-app my-app
# or
yarn create react-app my-app
```

- vite를 이용하여 프로젝트를 생성하려면
```bash
npm create vite@latest
# or
yarn create vite
```
- 터미널에서 실행 후 프로젝트 이름 만든 후 React 선택, Typescirpt-SWC 선택하면 생성 완료.

## 🪂 styled-components 설치
- styled-components 설치하기
```bash
$ npm install styled-components
# or
$ yarn add styled-components
```
## ✒️ App.tsx 수정 및 작성
### ⚡ App.tsx
- `styled-components`의 전역 스타일링을 위해서는 우선 `GlobalStyle`를 `import` 한 후 밑에 나올 `Data.ts`를 import 하여 반복문을 작성해준다.
```typescript
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import GlobalStyle from '@components/Global'
import BlogPost from '@components/Post'
import Data from '@data/Data'
import styled from "styled-components";

interface DataType {
  index: number;
  title: string;
  color: string;
}

export default function App(): JSX.Element {
  return (
    <div className="App">
      <h1>React Styled-Components</h1>
      <GlobalStyle />
      <MainWrapper>
        {
          Data.map((item: DataType, idx: number) => {
            return (
              <BlogPost key={item.index} title={item.title} bgColor={item.color}>
                Styled Components를 사용하여 전역 스타일을 사용하는 방법은 이 문서를 참고하시면 됩니다.
              </BlogPost>
            )
          })
        }
      </MainWrapper>
    </div>
  )
}

const MainWrapper = styled.div`
  max-width: 850px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`
```

## 📝 components 파일 속 Global.tsx, Post.tsx 수정 및 작성
### ⚡ Global.tsx
- `createGlobalStyle`을 import 한 후, `GlobalStyle` 변수에 값을 넣으면 전역 스타일링이 사용 가능하다.
const GlobalStyle = createGlobalStyle`
```typescript
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *, *::before, *::after {
        box-sizing: border-box;
    }

    body {
        font-family: "Helvetica", "Arial", sans-serif;
        line-height: 1.5;
    }

    h1 {
        text-align: center;
    }

    h2, p {
        margin: 0;
    }

    h2 {
        font-size: 1.5rem;
    }

    p {
        font-size: 1rem;
    }
`;

export default GlobalStyle;
```
### ⚡ Post.tsx
- `Props`를 통해 전달한 데이터를 받아서 사용할 컴포넌트 작성.
```typescript
import React from "react";
import styled from "styled-components";

interface Type {
    title: string;
    children: string;
    bgColor: string;
}

const Title = styled.h2`
    margin-bottom: 8px;
`;

const Wrapper = styled.article`
    border: 1px solid;
    border-radius: 8px;
    padding: 16px;
    margin: 16px auto;
    max-width: 400px;
    color: #fff;
    background-color: ${(props: { bgColor: string }) => props.bgColor};
`;

const BlogPost: React.FC<Type> = ({ title, bgColor, children }) => {
    return (
        <Wrapper bgColor={bgColor}>
            <Title>{title}</Title>
            <p>{children}</p>
        </Wrapper>
    );
}

export default BlogPost;
```
## ✏️ data 파일 속 Data.ts 수정 및 작성
### ⚡ Data.ts
- `Post.tsx`에 들어갈 자료들 정리.
```typescript
export default [
    {
        index: 0,
        title: "Styled Components를 이용한 #dc2626 박스1",
        color: "#dc2626",
    },
    {
        index: 1,
        title: "Styled Components를 이용한 #6366f1 박스2",
        color: "#6366f1"
    },
    {
        index: 2,
        title: "Styled Components를 이용한 #06b6d4 박스3",
        color: "#06b6d4"
    },
    {
        index: 3,
        title: "Styled Components를 이용한 #22d3ee 박스4",
        color: "#22d3ee"
    },
    {
        index: 4,
        title: "Styled Components를 이용한 #9333ea 박스5",
        color: "#9333ea"
    },
    {
        index: 5,
        title: "Styled Components를 이용한 #64748b 박스6",
        color: "#64748b"
    },
    {
        index: 6,
        title: "Styled Components를 이용한 #059669 박스7",
        color: "#059669"
    },
    {
        index: 7,
        title: "Styled Components를 이용한 #22c55e 박스8",
        color: "#22c55e"
    },
    {
        index: 8,
        title: "Styled Components를 이용한 #c026d3 박스9",
        color: "#c026d3"
    },
    {
        index: 9,
        title: "Styled Components를 이용한 #2563eb 박스10",
        color: "#2563eb"
    }
];
```
