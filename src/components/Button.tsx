"use client";
import styled from "styled-components";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  active?: boolean;
  className?: string;
  style?: Record<string, string>;
}

const Button = ({
  children,
  onClick,
  active = false,
  className,
  style,
}: ButtonProps) => {
  return (
    <Wrapper
      onClick={() => {
        console.log("버튼 클릭");
      }}
    >
      {children}
    </Wrapper>
  );
};
export default Button;

const Wrapper = styled.button`
  background-color: #1e90ff;

  display: flex;
  justify-content: center;
  align-items: center;

  color: #ffffff;

  width: 100%;
  height: 44px;
  border: none;
  border-radius: 4px;
  box-sizing: border-box;
`;
