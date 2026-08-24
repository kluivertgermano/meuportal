import React from "react";
import { Box, Flex, Grid, Heading, Text, VStack, Icon, Button, useBreakpointValue } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { ScrollReveal } from "./Effects";
import { 
  FaUniversity, 
  FaBuilding, 
  FaLaptopCode, 
  FaIndustry,
  FaArrowRight,
  FaCheckCircle
} from "react-icons/fa";

const clients = [
  { 
    icon: FaLaptopCode, 
    title: "Startups", 
    description: "MVP rápido para validar ideias e conquistar mercado.",
    features: ["MVP em semanas", "Escalabilidade", "Mentoria técnica"]
  },
  { 
    icon: FaUniversity, 
    title: "Escolas & Faculdades", 
    description: "Plataformas de ensino, sistemas de gestão e redes seguras.",
    features: ["Plataformas LMS", "Gestão académica", "Redes seguras"]
  },
  { 
    icon: FaBuilding, 
    title: "PMEs", 
    description: "Modernização de sistemas legados e automação de processos.",
    features: ["Modernização", "Automação", "Otimização"]
  },
  { 
    icon: FaIndustry, 
    title: "Grandes Corporações", 
    description: "Auditoria técnica, otimização de custos e segurança de dados.",
    features: ["Auditoria", "Otimização", "Segurança"]
  }
];

const Clients: React.FC = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Box py={32} bg="brand.bg">
      <VStack gap={20} maxW="1200px" mx="auto" px={4}>
        {/* Header Section */}
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
                Clientes
              </Text>
              <Box w="40px" h="2px" bg="brand.orange" />
            </Flex>
            <Heading color="brand.text" fontSize={isMobile ? "3xl" : "5xl"} fontFamily="heading">
              Para quem <Text as="span" color="brand.orange">Trabalho</Text>
            </Heading>
            <Text color="brand.subtle" fontSize="lg" maxW="600px" lineHeight="1.8">
              Atendo empresas de todos os tamanhos, adaptando minha abordagem às necessidades específicas de cada segmento.
            </Text>
          </VStack>
        </ScrollReveal>

        {/* Grid de Clientes */}
        <Grid templateColumns={isMobile ? "1fr" : "repeat(4, 1fr)"} gap={8} width="100%">
          {clients.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Box
                p={8}
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
              >
                <VStack gap={6} align="start">
                  {/* Ícone com background decorativo */}
                  <Box
                    w="60px"
                    h="60px"
                    borderRadius="2xl"
                    bg="brand.orange"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    boxShadow="0 8px 20px rgba(255,140,66,0.2)"
                  >
                    <Icon as={client.icon} boxSize={6} color="white" />
                  </Box>

                  <VStack gap={3} align="start">
                    <Heading as="h3" size="lg" color="brand.text" fontFamily="heading">
                      {client.title}
                    </Heading>
                    <Text color="brand.subtle" fontSize="sm" lineHeight="1.8">
                      {client.description}
                    </Text>
                  </VStack>

                  {/* Features */}
                  <VStack gap={2} align="start" width="100%">
                    {client.features.map((feature, i) => (
                      <Flex key={i} align="center" gap={2} width="100%">
                        <FaCheckCircle color="brand.orange" size={14} />
                        <Text color="brand.subtle" fontSize="sm">
                          {feature}
                        </Text>
                      </Flex>
                    ))}
                  </VStack>

                  {/* Link */}
                  <Button
                    variant="ghost"
                    color="brand.orange"
                    fontSize="sm"
                    fontWeight="bold"
                    p={0}
                    _hover={{ color: "brand.orangeHover" }}
                    rightIcon={<FaArrowRight size={12} />}
                  >
                    Saiba mais
                  </Button>
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
              Não encontrou o que procura?
            </Text>
            <Text color="brand.text" fontSize="2xl" fontWeight="bold" fontFamily="heading" mt={2}>
              Vamos criar uma solução personalizada para o seu caso.
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

export default Clients;