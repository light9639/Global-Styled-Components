# ๐ Styled-Components์ Global ์คํ์ผ์ ์ฌ์ฉํ ์์ ์๋๋ค.

:octocat: ๋ฐ๋ก ๊ฐ๊ธฐ : https://light9639.github.io/Global-Styled-Components/

![light9639 github io_Global-Styled-Components_](https://user-images.githubusercontent.com/95972251/217988231-ff86dad1-4889-4b52-beef-5e2af2230e44.png)

:sparkles: ๐ Styled-Components์ Global ์คํ์ผ์ ์ฌ์ฉํ ์์ ์๋๋ค. :sparkles:
## :tada: React ํ๋ก์ ํธ ์์ฑ
- React ์์ฑ
```bash
npm create-react-app my-app
# or
yarn create react-app my-app
```

- vite๋ฅผ ์ด์ฉํ์ฌ ํ๋ก์ ํธ๋ฅผ ์์ฑํ๋ ค๋ฉด
```bash
npm create vite@latest
# or
yarn create vite
```
- ํฐ๋ฏธ๋์์ ์คํ ํ ํ๋ก์ ํธ ์ด๋ฆ ๋ง๋  ํ React ์ ํ, Typescirpt-SWC ์ ํํ๋ฉด ์์ฑ ์๋ฃ.

## ๐ช styled-components ์ค์น
- styled-components ์ค์นํ๊ธฐ
```bash
$ npm install styled-components
# or
$ yarn add styled-components
```
## โ๏ธ App.tsx ์์  ๋ฐ ์์ฑ
### โก App.tsx
- `styled-components`์ ์ ์ญ ์คํ์ผ๋ง์ ์ํด์๋ ์ฐ์  `GlobalStyle`๋ฅผ `import` ํ ํ ๋ฐ์ ๋์ฌ `Data.ts`๋ฅผ import ํ์ฌ ๋ฐ๋ณต๋ฌธ์ ์์ฑํด์ค๋ค.
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
                Styled Components๋ฅผ ์ฌ์ฉํ์ฌ ์ ์ญ ์คํ์ผ์ ์ฌ์ฉํ๋ ๋ฐฉ๋ฒ์ ์ด ๋ฌธ์๋ฅผ ์ฐธ๊ณ ํ์๋ฉด ๋ฉ๋๋ค.
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

## ๐ components ํ์ผ ์ Global.tsx, Post.tsx ์์  ๋ฐ ์์ฑ
### โก Global.tsx
- `createGlobalStyle`์ import ํ ํ, `GlobalStyle` ๋ณ์์ ๊ฐ์ ๋ฃ์ผ๋ฉด ์ ์ญ ์คํ์ผ๋ง์ด ์ฌ์ฉ ๊ฐ๋ฅํ๋ค.
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
### โก Post.tsx
- `Props`๋ฅผ ํตํด ์ ๋ฌํ ๋ฐ์ดํฐ๋ฅผ ๋ฐ์์ ์ฌ์ฉํ  ์ปดํฌ๋ํธ ์์ฑ.
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
## โ๏ธ data ํ์ผ ์ Data.ts ์์  ๋ฐ ์์ฑ
### โก Data.ts
- `Post.tsx`์ ๋ค์ด๊ฐ ์๋ฃ๋ค ์ ๋ฆฌ.
```typescript
export default [
    {
        index: 0,
        title: "Styled Components๋ฅผ ์ด์ฉํ #dc2626 ๋ฐ์ค1",
        color: "#dc2626",
    },
    {
        index: 1,
        title: "Styled Components๋ฅผ ์ด์ฉํ #6366f1 ๋ฐ์ค2",
        color: "#6366f1"
    },
    {
        index: 2,
        title: "Styled Components๋ฅผ ์ด์ฉํ #06b6d4 ๋ฐ์ค3",
        color: "#06b6d4"
    },
    {
        index: 3,
        title: "Styled Components๋ฅผ ์ด์ฉํ #22d3ee ๋ฐ์ค4",
        color: "#22d3ee"
    },
    {
        index: 4,
        title: "Styled Components๋ฅผ ์ด์ฉํ #9333ea ๋ฐ์ค5",
        color: "#9333ea"
    },
    {
        index: 5,
        title: "Styled Components๋ฅผ ์ด์ฉํ #64748b ๋ฐ์ค6",
        color: "#64748b"
    },
    {
        index: 6,
        title: "Styled Components๋ฅผ ์ด์ฉํ #059669 ๋ฐ์ค7",
        color: "#059669"
    },
    {
        index: 7,
        title: "Styled Components๋ฅผ ์ด์ฉํ #22c55e ๋ฐ์ค8",
        color: "#22c55e"
    },
    {
        index: 8,
        title: "Styled Components๋ฅผ ์ด์ฉํ #c026d3 ๋ฐ์ค9",
        color: "#c026d3"
    },
    {
        index: 9,
        title: "Styled Components๋ฅผ ์ด์ฉํ #2563eb ๋ฐ์ค10",
        color: "#2563eb"
    }
];
```
## ๐ ์ถ์ฒ
- <a href="https://www.daleseo.com/styled-components-global-style/">Styled Components ์ ์ญ ์คํ์ผ๋ง (Global Style)</a>
- <a href="https://velog.io/@neity16/React-styled-components">React - ์คํ์ผ๋ ์ปดํฌ๋ํธ(styled-components)</a>
