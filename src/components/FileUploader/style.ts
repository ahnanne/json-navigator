import styled from "styled-components";
import { ellipsis } from "styles/common";

const HEIGHT = 40;

export const Container = styled.div`
  display: flex;
  flex-flow: row nowrap;
`;

export const Wrap = styled.div``;

export const Label = styled.label`
  cursor: pointer;
  display: inline-block;
  padding: 0 20px;
  vertical-align: middle;
  background-color: #999ccc90;
  height: ${HEIGHT}px;
  line-height: ${HEIGHT}px;
  border-radius: 5px;
  transition: background-color 100ms linear;

  &:hover {
    background-color: #999ccc;
  }
`;

export const Input = styled.input`
  position: absolute;
  width: 0;
  height: 0;
  padding: 0;
  overflow: hidden;
  border: 0;

  background-color: yellow;
`;

export const FileName = styled.div`
  height: ${HEIGHT}px;
  border-bottom: 1px solid #ffffff60;
  width: 400px;
  margin-right: 20px;

  > p {
    ${ellipsis}
    width: 100%;
    font-size: 14px;
    line-height: ${HEIGHT}px;
    color: #ffffff;
  }
`;
