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