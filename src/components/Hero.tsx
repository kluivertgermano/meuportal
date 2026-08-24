import React from "react";
import { Box, Button, Flex, Heading, Text, VStack, useBreakpointValue } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FloatingParticles, ScrollReveal, AnimatedCounter } from "./Effects";

const Hero: React.FC = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Box
      position="relative"
      minH="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      bg="brand.bg"
      overflow="hidden"
    >
      {/* Overlay com gradiente mais sofisticado */}
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        bg="linear-gradient(180deg, rgba(255,140,66,0.06) 0%, transparent 50%, rgba(0,0,0,0.02) 100%)"
      />

      {/* Grid pattern sutil */}
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        bgImage="radial-gradient(circle at 1px 1px, rgba(0,0,0,0.05) 1px, transparent 0)"
        bgSize="40px 40px"
        opacity={0.5}
      />

      <FloatingParticles />

      <VStack spacing={10} zIndex="2" textAlign="center" px={4} py={20} maxW="900px">
        <ScrollReveal>
          <Flex align="center" gap={2}>
            <Box w="40px" h="2px" bg="brand.orange" />
            <Text
              color="brand.orange"
              fontSize="sm"
              fontWeight="bold"
              letterSpacing="3px"
              textTransform="uppercase"
            >
              Consultoria Tecnológica
            </Text>
            <Box w="40px" h="2px" bg="brand.orange" />
          </Flex>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <Heading
            as="h1"
            fontSize={isMobile ? "3xl" : "7xl"}
            fontWeight="bold"
            color="brand.text"
            lineHeight="1.1"
            fontFamily="heading"
          >
            Transformamos{" "}
            <Text as="span" color="brand.orange" position="relative">
              Tecnologia
              <Box
                position="absolute"
                bottom="2px"
                left="0"
                right="0"
                h="4px"
                bg="brand.orange"
                opacity="0.3"
                borderRadius="full"
              />
            </Text>{" "}
            em Resultados
          </Heading>
        </ScrollReveal>

        <ScrollReveal delay={0.4}>
          <Text fontSize="xl" color="brand.subtle" maxW="650px" lineHeight="1.8" fontWeight="light">
            Sou Kluivert Germano, consultor especializado em arquitetura de software, segurança da informação e integração de sistemas EMIS.
          </Text>
        </ScrollReveal>

        <ScrollReveal delay={0.6}>
          <Flex gap={6} direction={isMobile ? "column" : "row"} width={isMobile ? "100%" : "auto"}>
            <Button
              bg="brand.orange"
              color="white"
              size="lg"
              px={10}
              py={7}
              borderRadius="full"
              _hover={{
                bg: "brand.orangeHover",
                transform: "translateY(-3px)",
                boxShadow: "0 10px 30px rgba(255,140,66,0.3)"
              }}
              transition="all 0.3s ease"
              flex={isMobile ? "1" : "auto"}
            >
              Agendar Reunião
            </Button>
            <Button
              variant="outline"
              border="2px"
              borderColor="brand.orange"
              color="brand.orange"
              size="lg"
              px={10}
              py={7}
              borderRadius="full"
              _hover={{
                bg: "brand.orange",
                color: "white",
                transform: "translateY(-3px)",
                boxShadow: "0 10px 30px rgba(255,140,66,0.2)"
              }}
              transition="all 0.3s ease"
              flex={isMobile ? "1" : "auto"}
            >
              Conhecer Serviços
            </Button>
          </Flex>
        </ScrollReveal>

        <ScrollReveal delay={0.8}>
          <Flex gap={16} mt={16} flexWrap="wrap" justifyContent="center">
            <Box textAlign="center">
              <Text fontSize="4xl" fontWeight="bold" color="brand.orange" fontFamily="heading">
                <AnimatedCounter end={10} suffix="+" />
              </Text>
              <Text fontSize="sm" color="brand.subtle" mt={2} textTransform="uppercase" letterSpacing="1px">
                Anos de Experiência
              </Text>
            </Box>
            <Box textAlign="center">
              <Text fontSize="4xl" fontWeight="bold" color="brand.orange" fontFamily="heading">
                <AnimatedCounter end={50} suffix="+" />
              </Text>
              <Text fontSize="sm" color="brand.subtle" mt={2} textTransform="uppercase" letterSpacing="1px">
                Projetos Entregues
              </Text>
            </Box>
            <Box textAlign="center">
              <Text fontSize="4xl" fontWeight="bold" color="brand.orange" fontFamily="heading">
                <AnimatedCounter end={98} suffix="%" />
              </Text>
              <Text fontSize="sm" color="brand.subtle" mt={2} textTransform="uppercase" letterSpacing="1px">
                Clientes Satisfeitos
              </Text>
            </Box>
          </Flex>
        </ScrollReveal>
      </VStack>
    </Box>
  );
};

export default Hero;