import styled, { css } from "styled-components";
import { buttonCommon } from "styles/common";

export const Wrap = styled.div<{ indent?: string }>`
  padding-left: ${({ indent }) => indent};
  width: 100%;
`;

type TextProp = {
  isSmall?: boolean;
  isHighlighted?: boolean;
};
export const Text = styled.span<TextProp>`
  display: inline-block;

  line-height: 30px;
  font-size: 16px;

  ${(props) =>
    props.isSmall &&
    css`
      line-height: 14px;
      font-size: 14px;
    `}

  ${(props) =>
    props.isHighlighted &&
    css`
      color: #61e584;
      font-weight: 700;
    `}
`;

export const Button = styled.button`
  ${buttonCommon}
  width: 100%;
  height: 30px;
  margin-bottom: 10px;
  padding-left: 8px;
  text-align: left;
`;

export const Value = styled.div<{ indent: string }>`
  width: 100%;
  margin-bottom: 10px;
  padding-left: ${({ indent }) => indent};
`;

export const Icon = styled.em<{ showNestedObject: boolean }>`
  display: inline-block;
  font-style: normal;
  font-size: 14px;
  transform: ${({ showNestedObject }) =>
    showNestedObject ? "rotate(90deg)" : ""};
  transform-origin: 50%;
  transition: all 100ms linear;
  margin-right: 7px;
`;
