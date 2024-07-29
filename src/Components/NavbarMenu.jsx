// @ts-nocheck
import React from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  Avatar,
} from "@chakra-ui/react";
import { FaAngleDown } from "react-icons/fa";
import LoginModal from "./LoginModal";
import SignUpModal from "./SignUpModal";

export default function NavbarMenu() {
  return (
    <Menu>
      <MenuButton
        px={2}
        py={1}
        transition="all 0.2s"
        borderRadius="full"
        borderWidth="1px"
        bgColor="gray.200"
      >
        <div className="flex items-center gap-3">
          <Avatar src="https://bit.ly/broken-link" size="sm" />
          <FaAngleDown />
        </div>
      </MenuButton>
      <MenuList>
        <MenuItem>
          <LoginModal />
        </MenuItem>
        <MenuItem>
          <SignUpModal />
        </MenuItem>
        <MenuDivider />
        <MenuItem>Language</MenuItem>
        <MenuItem>Support</MenuItem>
      </MenuList>
    </Menu>
  );
}
