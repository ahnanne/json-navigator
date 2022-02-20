import styled from "styled-components";
import { buttonReset } from "styles/common";

export const Wrap = styled.div<{ indent?: string }>`
  padding-left: ${({ indent }) => indent};
  width: 100%;
`;

export const Button = styled.div`
  ${buttonReset}
  width: 100%;
  height: 30px;
  line-height: 30px;
  font-size: 16px;
  border-radius: 5px;
  margin-bottom: 10px;
  padding-left: 8px;

  background-color: #999ccc90;
  transition: background-color 100ms linear;

  &:hover {
    background-color: #999ccc;
  }
`;

export const Value = styled.p<{ indent: string }>`
  width: 100%;
  height: 14px;
  line-height: 14px;
  font-size: 14px;
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
