import React from "react";
import { Steps, Button } from "@chakra-ui/react";
import { useColorMode } from "@/components/ui/color-mode";
import { FaSun, FaMoon } from "react-icons/fa";

const ThemeToggle: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Button
      onClick={toggleColorMode}
      variant="ghost"
      size="sm"
      position="fixed"
      top="20px"
      right="20px"
      zIndex={1000}
      color="brand.text"
      _hover={{ bg: "brand.card" }}
    >
      {colorMode === "light" ? <FaMoon /> : <FaSun />}
    </Button>
  );
};

export default ThemeToggle;