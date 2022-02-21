import styled from "styled-components";
import { buttonCommon, a11yHidden } from "styles/common";

export const Container = styled.div`
  flex-flow: row nowrap;
  display: flex;
  width: 600px;
  margin-top: 40px;
`;

export const HiddenLabel = styled.label`
  ${a11yHidden}
`;

export const Input = styled.input`
  width: 400px;
  height: 40px;
  border-radius: 5px;
  border: 0;
`;

export const Button = styled.button`
  ${buttonCommon}
  width: 90px;
  height: 40px;
  padding: 0 10px;
  margin-left: 10px;
  word-break: keep-all;

  &:disabled {
    cursor: not-allowed;
    background-color: #999;
    &:hover {
      background-color: #999;
    }
  }
`;
