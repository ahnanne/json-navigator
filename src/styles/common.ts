import { css } from "styled-components";

export const hStack = css`
  display: flex;
  flex-flow: row nowrap;
`;

export const a11yHidden = css`
  overflow: hidden;
  position: absolute;
  clip: rect(0 0 0 0);
  clip-path: polygon(0 0, 0 0, 0 0);
  width: 1px;
  height: 1px;
  margin: -1px;
  white-space: nowrap;
`;

export const buttonReset = css`
  background-color: transparent;
  border: none;
  box-shadow: none;
  border-radius: 0;
  padding: 0;
  overflow: visible;
  cursor: pointer;
`;

export const ellipsis = css`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const buttonCommon = css`
  ${buttonReset}
  border-radius: 5px;
  color: #fafafa;
  background-color: #999ccc90;
  transition: background-color 100ms linear;

  &:hover {
    background-color: #999ccc;
  }
`;
