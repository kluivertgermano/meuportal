import React from "react";
import { Box, Flex, Grid, Heading, Text, VStack, Button, useBreakpointValue } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { ScrollReveal } from "./Effects";
import { FaQuoteLeft, FaStar, FaArrowRight } from "react-icons/fa";

const testimonials = [
  {
    name: "João Manuel",
    role: "Diretor de Tecnologia",
    company: "Faculdade de Luanda",
    text: "O Kluivert transformou nossa plataforma de ensino. Rápida, segura e bonita. Os alunos adoraram a nova experiência!",
    rating: 5
  },
  {
    name: "Maria Fernandes",
    role: "CEO",
    company: "Startup de Logística",
    text: "Reduzimos custos de infraestrutura em 35% após a auditoria dele. Profissional técnico e extremamente competente.",
    rating: 5
  },
  {
    name: "Pedro Santos",
    role: "Gerente de TI",
    company: "Empresa de Energia",
    text: "Implementou um sistema de segurança que nos deu tranquilidade total. Recomendo sem hesitar!",
    rating: 5
  }
];

const Testimonials: React.FC = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Box py={32} bg="brand.bg">
      <VStack spacing={20} maxW="1200px" mx="auto" px={4}>
        {/* Header Section */}
        <ScrollReveal>
          <VStack spacing={6} textAlign="center">
            <Flex align="center" gap={2}>
              <Box w="40px" h="2px" bg="brand.orange" />
              <Text
                color="brand.orange"
                fontSize="sm"
                fontWeight="bold"
                letterSpacing="3px"
                textTransform="uppercase"
              >
                Depoimentos
              </Text>
              <Box w="40px" h="2px" bg="brand.orange" />
            </Flex>
            <Heading color="brand.text" fontSize={isMobile ? "3xl" : "5xl"} fontFamily="heading">
              O que os <Text as="span" color="brand.orange">Clientes</Text> Dizem
            </Heading>
            <Text color="brand.subtle" fontSize="lg" maxW="600px" lineHeight="1.8">
              Histórias reais de quem confiou no meu trabalho e viu resultados concretos.
            </Text>
          </VStack>
        </ScrollReveal>

        {/* Grid de Depoimentos */}
        <Grid templateColumns={isMobile ? "1fr" : "repeat(3, 1fr)"} gap={10} width="100%">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Box
                p={10}
                bg="brand.card"
                borderRadius="3xl"
                border="1px solid"
                borderColor="brand.border"
                boxShadow="0 4px 20px rgba(0,0,0,0.04)"
                _hover={{
                  transform: "translateY(-8px)",
                  boxShadow: "0 20px 60px rgba(0,0,0,0.1)",
                  borderColor: "brand.orange"
                }}
                transition="all 0.3s ease"
                height="100%"
                position="relative"
              >
                {/* Ícone de aspas decorativo */}
                <Box
                  position="absolute"
                  top={6}
                  right={6}
                  fontSize="5xl"
                  color="brand.orange"
                  opacity={0.2}
                >
                  <FaQuoteLeft size={40} />
                </Box>

                <VStack spacing={6} align="start">
                  {/* Rating */}
                  <Flex gap={1}>
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <FaStar key={i} color="brand.orange" size={16} />
                    ))}
                  </Flex>

                  {/* Texto do depoimento */}
                  <Text color="brand.subtle" fontSize="lg" lineHeight="1.8" fontStyle="italic">
                    "{testimonial.text}"
                  </Text>

                  {/* Autor - SEM Avatar, usando círculo simples */}
                  <Flex align="center" gap={4} mt={4}>
                    <Box
                      w="50px"
                      h="50px"
                      borderRadius="full"
                      bg="brand.orange"
                      color="white"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      fontWeight="bold"
                      fontSize="xl"
                      boxShadow="0 4px 12px rgba(255,140,66,0.3)"
                    >
                      {testimonial.name.charAt(0)}
                    </Box>
                    <Box>
                      <Text fontWeight="bold" color="brand.text" fontFamily="heading">
                        {testimonial.name}
                      </Text>
                      <Text fontSize="sm" color="brand.subtle">
                        {testimonial.role} • {testimonial.company}
                      </Text>
                    </Box>
                  </Flex>
                </VStack>
              </Box>
            </motion.div>
          ))}
        </Grid>

        {/* CTA Final */}
        <ScrollReveal delay={0.2}>
          <Box
            width="100%"
            bg="brand.card"
            borderRadius="3xl"
            border="1px solid"
            borderColor="brand.border"
            p={10}
            textAlign="center"
          >
            <Text color="brand.subtle" fontSize="lg">
              Quer ser o próximo cliente satisfeito?
            </Text>
            <Text color="brand.text" fontSize="2xl" fontWeight="bold" fontFamily="heading" mt={2}>
              Vamos transformar sua tecnologia hoje.
            </Text>
            <Button
              bg="brand.orange"
              color="white"
              size="lg"
              px={8}
              mt={6}
              borderRadius="full"
              _hover={{
                bg: "brand.orangeHover",
                transform: "translateY(-3px)",
                boxShadow: "0 10px 30px rgba(255,140,66,0.3)"
              }}
              transition="all 0.3s ease"
            >
              Fale comigo
              <Box ml={2}>
                <FaArrowRight />
              </Box>
            </Button>
          </Box>
        </ScrollReveal>
      </VStack>
    </Box>
  );
};

export default Testimonials;