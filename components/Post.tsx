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
