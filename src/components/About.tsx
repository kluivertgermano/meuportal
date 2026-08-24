import React from "react";
import { Box, Flex, Heading, Text, VStack, Image, Badge, useBreakpointValue } from "@chakra-ui/react";
import { ScrollReveal } from "./Effects";

const About: React.FC = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  const skills = [
    "Arquitectura de Software",
    "Back-end & APIs",
    "DevOps & Cloud",
    "Segurança de Redes",
    "Especialista EMIS",
    "Pagamentos por Referência",
    "GPO",
    "SDD"
  ];

  return (
    <Box py={32} bg="brand.bg">
      <VStack gap={20} maxW="1200px" mx="auto" px={4}>
        <ScrollReveal>
          <VStack gap={6} textAlign="center">
            <Flex align="center" gap={2}>
              <Box w="40px" h="2px" bg="brand.orange" />
              <Text
                color="brand.orange"
                fontSize="sm"
                fontWeight="bold"
                lettergap="3px"
                textTransform="uppercase"
              >
                Sobre Mim
              </Text>
              <Box w="40px" h="2px" bg="brand.orange" />
            </Flex>
            <Heading color="brand.text" fontSize={isMobile ? "3xl" : "5xl"} fontFamily="heading">
              Quem <Text as="span" color="brand.orange">Sou</Text>
            </Heading>
          </VStack>
        </ScrollReveal>

        <Flex direction={isMobile ? "column" : "row"} gap={20} align="center" width="100%">
          <ScrollReveal direction="left">
            <Box
              position="relative"
              width={isMobile ? "280px" : "420px"}
              height={isMobile ? "350px" : "520px"}
              borderRadius="3xl"
              overflow="hidden"
              boxShadow="0 30px 60px rgba(0,0,0,0.15)"
              flexShrink={0}
            >
              <Image
                src="/images/kluivert.jpeg"
                alt="Kluivert Germano"
                objectFit="cover"
                width="100%"
                height="100%"
              />
              {/* Overlay decorativo */}
              <Box
                position="absolute"
                bottom="0"
                left="0"
                right="0"
                bg="linear-gradient(to top, rgba(0,0,0,0.8), transparent)"
                p={8}
              >
                <Text color="white" fontWeight="bold" fontSize="xl" fontFamily="heading">
                  Kluivert Germano
                </Text>
                <Text color="brand.orange" fontSize="sm" fontWeight="medium">
                  Consultor de Tecnologia
                </Text>
              </Box>
            </Box>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <VStack gap={8} align="start" maxW="600px">
              <Text fontSize="lg" color="brand.subtle" lineHeight="2" fontWeight="light">
                Sou <Text as="span" fontWeight="bold" color="brand.text">Kluivert Germano</Text>, consultor de tecnologia com mais de 10 anos de experiência em desenvolvimento de software, arquitectura de sistemas e segurança da informação.
              </Text>

              <Text fontSize="lg" color="brand.subtle" lineHeight="2" fontWeight="light">
                Especializado em <Text as="span" fontWeight="bold" color="brand.orange">serviços EMIS</Text>, integro sistemas de pagamento por referência, GPO e SDD para empresas em Angola e além.
              </Text>

              <Flex wrap="wrap" gap={4}>
                {skills.map((skill, index) => (
                  <Badge
                    key={index}
                    px={5}
                    py={3}
                    borderRadius="full"
                    bg="brand.card"
                    color="brand.text"
                    fontSize="sm"
                    fontWeight="medium"
                    border="1px solid"
                    borderColor="brand.border"
                  >
                    {skill}
                  </Badge>
                ))}
              </Flex>
            </VStack>
          </ScrollReveal>
        </Flex>
      </VStack>
    </Box>
  );
};

export default About;