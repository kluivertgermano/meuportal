import React from "react";
import { Box, Flex, Grid, Heading, Text, VStack, Link, Button, useBreakpointValue } from "@chakra-ui/react";
import { ScrollReveal } from "./Effects";
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaMapMarkerAlt, FaArrowRight, FaWhatsapp } from "react-icons/fa";

const Footer: React.FC = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Box bg="brand.black" color="white" position="relative" overflow="hidden">
      {/* Elemento decorativo de fundo */}
      <Box
        position="absolute"
        top="-20%"
        right="-10%"
        w="400px"
        h="400px"
        bg="brand.orange"
        borderRadius="full"
        opacity="0.03"
      />
      
      <Box position="relative" maxW="1200px" mx="auto" px={4}>
        
        {/* CTA Section - Premium */}
        <Box py={20} borderBottom="1px solid" borderColor="rgba(255,255,255,0.08)">
          <ScrollReveal>
            <VStack spacing={8} textAlign="center" maxW="700px" mx="auto">
              <Flex align="center" gap={2}>
                <Box w="40px" h="2px" bg="brand.orange" />
                <Text
                  color="brand.orange"
                  fontSize="sm"
                  fontWeight="bold"
                  letterSpacing="3px"
                  textTransform="uppercase"
                >
                  Vamos Conversar
                </Text>
                <Box w="40px" h="2px" bg="brand.orange" />
              </Flex>
              
              <Heading as="h2" fontSize={isMobile ? "3xl" : "5xl"} fontFamily="heading" lineHeight="1.2">
                Vamos trabalhar{" "}
                <Text as="span" color="brand.orange">
                  juntos?
                </Text>
              </Heading>
              
              <Text fontSize="lg" color="gray.400" maxW="600px" lineHeight="1.8">
                Estou pronto para ajudar sua empresa a alcançar novos patamares tecnológicos. Agende uma reunião e vamos começar.
              </Text>
              
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
                  as="a"
                  href="https://wa.me/244934489103"
                  target="_blank"
                >
                  Falar no WhatsApp
                  <Box ml={2}>
                    <FaWhatsapp />
                  </Box>
                </Button>
                <Button
                  variant="outline"
                  border="2px"
                  borderColor="gray.500"
                  color="gray.300"
                  size="lg"
                  px={10}
                  py={7}
                  borderRadius="full"
                  _hover={{
                    borderColor: "brand.orange",
                    color: "brand.orange",
                    transform: "translateY(-3px)"
                  }}
                  transition="all 0.3s ease"
                  flex={isMobile ? "1" : "auto"}
                  as="a"
                  href="mailto:projectos@kluivertgermano.com"
                >
                  Enviar Email
                </Button>
              </Flex>
            </VStack>
          </ScrollReveal>
        </Box>

        {/* Links Section */}
        <Box py={16}>
          <Grid templateColumns={isMobile ? "1fr" : "repeat(4, 1fr)"} gap={12}>
            {/* Brand Section */}
            <VStack align="start" spacing={4}>
              <Box
                bg="brand.orange"
                p={3}
                borderRadius="lg"
                boxShadow="0 8px 20px rgba(255,140,66,0.2)"
              >
                <Text fontSize="2xl" fontWeight="bold" color="white" fontFamily="heading">
                  KG
                </Text>
              </Box>
              <Text color="gray.400" fontSize="sm" lineHeight="1.8">
                Consultor de tecnologia especializado em arquitetura de software, segurança da informação e integração EMIS.
              </Text>
            </VStack>

            {/* Navigation */}
            <VStack align="start" spacing={4}>
              <Heading as="h4" size="sm" color="white" fontFamily="heading" textTransform="uppercase" letterSpacing="2px">
                Navegação
              </Heading>
              <VStack align="start" spacing={3}>
                <Link href="#" color="gray.400" _hover={{ color: "brand.orange" }} fontSize="sm">
                  Início
                </Link>
                <Link href="#" color="gray.400" _hover={{ color: "brand.orange" }} fontSize="sm">
                  Serviços
                </Link>
                <Link href="#" color="gray.400" _hover={{ color: "brand.orange" }} fontSize="sm">
                  Sobre
                </Link>
                <Link href="#" color="gray.400" _hover={{ color: "brand.orange" }} fontSize="sm">
                  Blog
                </Link>
              </VStack>
            </VStack>

            {/* Contact */}
            <VStack align="start" spacing={4}>
              <Heading as="h4" size="sm" color="white" fontFamily="heading" textTransform="uppercase" letterSpacing="2px">
                Contato
              </Heading>
              <VStack align="start" spacing={3}>
                <Flex align="center" gap={3}>
                  <Box bg="rgba(255,140,66,0.1)" p={2} borderRadius="md">
                    <FaEnvelope color="brand.orange" size={14} />
                  </Box>
                  <Link href="mailto:projectos@kluivertgermano.com" color="gray.400" _hover={{ color: "brand.orange" }} fontSize="sm">
                    projectos@kluivertgermano.com
                  </Link>
                </Flex>
                <Flex align="center" gap={3}>
                  <Box bg="rgba(255,140,66,0.1)" p={2} borderRadius="md">
                    <FaPhone color="brand.orange" size={14} />
                  </Box>
                  <Text color="gray.400" fontSize="sm">934 489 103 / 955 775 564</Text>
                </Flex>
                <Flex align="center" gap={3}>
                  <Box bg="rgba(255,140,66,0.1)" p={2} borderRadius="md">
                    <FaMapMarkerAlt color="brand.orange" size={14} />
                  </Box>
                  <Text color="gray.400" fontSize="sm">Luanda, Angola</Text>
                </Flex>
              </VStack>
            </VStack>

            {/* Social */}
            <VStack align="start" spacing={4}>
              <Heading as="h4" size="sm" color="white" fontFamily="heading" textTransform="uppercase" letterSpacing="2px">
                Redes Sociais
              </Heading>
              <VStack align="start" spacing={3}>
                <Link
                  href="https://www.linkedin.com/in/kluivertgaspargermano/"
                  target="_blank"
                  display="flex"
                  alignItems="center"
                  gap={3}
                  color="gray.400"
                  _hover={{ color: "brand.orange" }}
                  fontSize="sm"
                >
                  <Box bg="rgba(255,140,66,0.1)" p={2} borderRadius="md">
                    <FaLinkedin color="brand.orange" size={14} />
                  </Box>
                  LinkedIn
                </Link>
                <Link
                  href="https://github.com/kluivertgermano"
                  target="_blank"
                  display="flex"
                  alignItems="center"
                  gap={3}
                  color="gray.400"
                  _hover={{ color: "brand.orange" }}
                  fontSize="sm"
                >
                  <Box bg="rgba(255,140,66,0.1)" p={2} borderRadius="md">
                    <FaGithub color="brand.orange" size={14} />
                  </Box>
                  GitHub
                </Link>
              </VStack>
            </VStack>
          </Grid>
        </Box>

        {/* Social & Copyright */}
        <Box py={8} borderTop="1px solid" borderColor="rgba(255,255,255,0.08)">
          <Flex
            direction={isMobile ? "column" : "row"}
            justify="space-between"
            align="center"
            gap={6}
          >
            <Text color="gray.500" fontSize="sm">
              © 2026 Kluivert Germano. Todos os direitos reservados.
            </Text>
            
            <Flex gap={4}>
              <Link
                href="https://www.linkedin.com/in/kluivertgaspargermano/"
                target="_blank"
                display="flex"
                alignItems="center"
                justifyContent="center"
                w="40px"
                h="40px"
                borderRadius="full"
                bg="rgba(255,255,255,0.05)"
                _hover={{ bg: "brand.orange", transform: "translateY(-3px)" }}
                transition="all 0.3s"
              >
                <FaLinkedin size={18} color="white" />
              </Link>
              <Link
                href="https://github.com/kluivertgermano"
                target="_blank"
                display="flex"
                alignItems="center"
                justifyContent="center"
                w="40px"
                h="40px"
                borderRadius="full"
                bg="rgba(255,255,255,0.05)"
                _hover={{ bg: "brand.orange", transform: "translateY(-3px)" }}
                transition="all 0.3s"
              >
                <FaGithub size={18} color="white" />
              </Link>
              <Link
                href="https://wa.me/244934489103"
                target="_blank"
                display="flex"
                alignItems="center"
                justifyContent="center"
                w="40px"
                h="40px"
                borderRadius="full"
                bg="rgba(255,255,255,0.05)"
                _hover={{ bg: "brand.orange", transform: "translateY(-3px)" }}
                transition="all 0.3s"
              >
                <FaWhatsapp size={18} color="white" />
              </Link>
            </Flex>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;