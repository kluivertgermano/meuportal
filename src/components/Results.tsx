import React from "react";
import { Box, Flex, Grid, Heading, Text, VStack, Icon, useBreakpointValue } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { ScrollReveal, AnimatedCounter } from "./Effects";
import { 
  FaRocket, 
  FaTachometerAlt, 
  FaShieldAlt, 
  FaMoneyBillWave,
  FaArrowRight
} from "react-icons/fa";
import { Button } from "@chakra-ui/react";

const results = [
  { 
    icon: FaRocket,
    number: "40%", 
    label: "Redução no tempo de deploy", 
    description: "Automação DevOps implementada para uma startup de SaaS.",
    counter: 40,
    suffix: "%"
  },
  { 
    icon: FaTachometerAlt,
    number: "3x", 
    label: "Aumento na velocidade do sistema", 
    description: "Otimização de banco de dados e arquitetura de APIs.",
    counter: 3,
    suffix: "x"
  },
  { 
    icon: FaShieldAlt,
    number: "100%", 
    label: "Proteção contra ataques", 
    description: "Firewall enterprise implementado para grande corporação.",
    counter: 100,
    suffix: "%"
  },
  { 
    icon: FaMoneyBillWave,
    number: "35%", 
    label: "Redução de custos de infraestrutura", 
    description: "Auditoria e otimização de recursos na nuvem.",
    counter: 35,
    suffix: "%"
  }
];

const Results: React.FC = () => {
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
                Resultados
              </Text>
              <Box w="40px" h="2px" bg="brand.orange" />
            </Flex>
            <Heading color="brand.text" fontSize={isMobile ? "3xl" : "5xl"} fontFamily="heading">
              Resultados <Text as="span" color="brand.orange">Mensuráveis</Text>
            </Heading>
            <Text color="brand.subtle" fontSize="lg" maxW="600px" lineHeight="1.8">
              Números que falam por si. Cada projeto é uma oportunidade de gerar valor real para o seu negócio.
            </Text>
          </VStack>
        </ScrollReveal>

        {/* Grid de Resultados */}
        <Grid templateColumns={isMobile ? "1fr" : "repeat(4, 1fr)"} gap={8} width="100%">
          {results.map((result, index) => (
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
                textAlign="center"
              >
                <VStack spacing={6} align="center">
                  {/* Ícone com background */}
                  <Box
                    w="60px"
                    h="60px"
                    borderRadius="2xl"
                    bg="brand.orange"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    boxShadow="0 8px 20px rgba(255,140,66,0.2)"
                    mx="auto"
                  >
                    <Icon as={result.icon} boxSize={6} color="white" />
                  </Box>

                  {/* Número com contador animado */}
                  <Text fontSize="5xl" fontWeight="bold" color="brand.orange" fontFamily="heading">
                    <AnimatedCounter end={result.counter} suffix={result.suffix} />
                  </Text>

                  {/* Label */}
                  <Heading as="h3" size="md" color="brand.text" fontFamily="heading">
                    {result.label}
                  </Heading>

                  {/* Descrição */}
                  <Text color="brand.subtle" fontSize="sm" lineHeight="1.8">
                    {result.description}
                  </Text>
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
              Quer alcançar resultados como esses?
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

export default Results;