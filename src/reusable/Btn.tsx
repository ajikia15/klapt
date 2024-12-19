import React from "react";
import styled from "styled-components";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  className?: string;
}

const StyledButton = styled.button`
  padding: 0px;
  padding-inline: 10px;
  gap: 4px;
  justify-content: space-between;
  display: flex;
  border: 1px solid #ccc;
  cursor: pointer;
  outline: none;
  border-radius: 0; /* No rounding */
  align-items: center;
  font-size: 18px;
`;

const IconWrapper = styled.span`
  display: flex;
  align-items: center;
`;

const Btn: React.FC<ButtonProps> = ({
  children,
  onClick,
  startIcon,
  endIcon,
  className,
}) => {
  return (
    <StyledButton className={className} onClick={onClick}>
      {startIcon && <IconWrapper>{startIcon}</IconWrapper>}
      {children}
      {endIcon && <IconWrapper>{endIcon}</IconWrapper>}
    </StyledButton>
  );
};

export default Btn;
