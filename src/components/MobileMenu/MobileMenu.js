/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components/macro";
import { DialogOverlay, DialogContent } from "@reach/dialog";

import { COLORS, WEIGHTS } from "../../constants";

import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const MobileMenu = ({ isOpen, onDismiss }) => {
  return (
    <StyledDialogOverlay isOpen={isOpen} onDismiss={onDismiss}>
      <StyledDialogContent>
        <CloseBtn onClick={onDismiss}>X</CloseBtn>
        <Nav>
          <PrimaryLink
            href="/sale"
            style={{ "--color": "var(--color-secondary)" }}
          >
            Sale
          </PrimaryLink>
          <PrimaryLink href="/new">New&nbsp;Releases</PrimaryLink>
          <PrimaryLink href="/men">Men</PrimaryLink>
          <PrimaryLink href="/women">Women</PrimaryLink>
          <PrimaryLink href="/kids">Kids</PrimaryLink>
          <PrimaryLink href="/collections">Collections</PrimaryLink>
        </Nav>
        <Footer>
          <SecondaryLink href="/terms">Terms and Conditions</SecondaryLink>
          <SecondaryLink href="/privacy">Privacy Policy</SecondaryLink>
          <SecondaryLink href="/contact">Contact Us</SecondaryLink>
        </Footer>
      </StyledDialogContent>
    </StyledDialogOverlay>
  );
};

const StyledDialogOverlay = styled(DialogOverlay)`
  position: fixed;
  inset: 0;
  background-color: var(--gray-700-0_8);
`;

const StyledDialogContent = styled(DialogContent)`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 300px;
  padding-left: 32px;
  background-color: white;
  display: flex;
  flex-direction: column;
`;

const CloseBtn = styled(UnstyledButton)`
  padding: 8px 16px;
  position: absolute;
  right: 0;
  top: 0;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  margin-block: auto;
  gap: 22px;
`;

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  margin-bottom: 32px;
  gap: 14px;
`;

const BaseLink = styled.a`
  text-decoration: none;
`;

const PrimaryLink = styled(BaseLink)`
  color: var(--color, var(--gray-900));
  font-size: calc(18rem / 16);
  font-weight: ${WEIGHTS.medium};
`;

const SecondaryLink = styled(BaseLink)`
  color: var(--gray-700);
  font-size: calc(14rem / 16);
  font-weight: ${WEIGHTS.normal};
`;

export default MobileMenu;
