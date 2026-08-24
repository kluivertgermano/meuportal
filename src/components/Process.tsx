import React from "react";
import { Box, Flex, Grid, Heading, Text, VStack, Icon, useBreakpointValue, Button } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { ScrollReveal } from "./Effects";
import { 
  FaSearch, 
  FaNetworkWired, 
  FaCode, 
  FaShieldAlt,
  FaArrowRight
} from "react-icons/fa";

const steps = [
  { 
    icon: FaSearch, 
    number: "01", 
    title: "Diagnóstico", 
    description: "Entendo o contexto da sua empresa, os sistemas atuais e os objetivos de negócio.",
    details: ["Análise de infraestrutura", "Identificação de gargalos", "Levantamento de requisitos"]
  },
  { 
    icon: FaNetworkWired, 
    number: "02", 
    title: "Estratégia", 
    description: "Desenho a arquitetura ideal, definindo as melhores tecnologias e o cronograma.",
    details: ["Definição de arquitetura", "Escolha de tecnologias", "Planejamento de cronograma"]
  },
  { 
    icon: FaCode, 
    number: "03", 
    title: "Execução", 
    description: "Implemento com código limpo, testes automatizados e documentação completa.",
    details: ["Desenvolvimento", "Testes automatizados", "Documentação técnica"]
  },
  { 
    icon: FaShieldAlt, 
    number: "04", 
    title: "Proteção & Acompanhamento", 
    description: "Configuro segurança avançada, monitoro o sistema e ofereço manutenção preventiva.",
    details: ["Segurança avançada", "Monitoramento contínuo", "Manutenção preventiva"]
  }
];

const Process: React.FC = () => {
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
                Processo
              </Text>
              <Box w="40px" h="2px" bg="brand.orange" />
            </Flex>
            <Heading color="brand.text" fontSize={isMobile ? "3xl" : "5xl"} fontFamily="heading">
              Um <Text as="span" color="brand.orange">Método</Text> Claro
            </Heading>
            <Text color="brand.subtle" fontSize="lg" maxW="600px" lineHeight="1.8">
              Do diagnóstico à entrega, cada etapa é pensada para maximizar resultados e minimizar riscos.
            </Text>
          </VStack>
        </ScrollReveal>

        {/* Grid de Passos */}
        <Grid templateColumns={isMobile ? "1fr" : "repeat(4, 1fr)"} gap={10} width="100%">
          {steps.map((step, index) => (
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
                {/* Número decorativo */}
                <Text
                  position="absolute"
                  top={4}
                  right={6}
                  fontSize="6xl"
                  fontWeight="bold"
                  color="brand.orange"
                  opacity={0.1}
                  fontFamily="heading"
                >
                  {step.number}
                </Text>

                <VStack spacing={6} align="start">
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
                  >
                    <Icon as={step.icon} boxSize={6} color="white" />
                  </Box>

                  {/* Título */}
                  <Heading as="h3" size="lg" color="brand.text" fontFamily="heading">
                    {step.title}
                  </Heading>

                  {/* Descrição */}
                  <Text color="brand.subtle" fontSize="sm" lineHeight="1.8">
                    {step.description}
                  </Text>

                  {/* Detalhes */}
                  <VStack spacing={2} align="start" width="100%" mt={2}>
                    {step.details.map((detail, i) => (
                      <Flex key={i} align="center" gap={2} width="100%">
                        <Box w="6px" h="6px" borderRadius="full" bg="brand.orange" />
                        <Text color="brand.subtle" fontSize="xs">
                          {detail}
                        </Text>
                      </Flex>
                    ))}
                  </VStack>
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
              Pronto para começar?
            </Text>
            <Text color="brand.text" fontSize="2xl" fontWeight="bold" fontFamily="heading" mt={2}>
              Vamos iniciar seu projeto hoje.
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
              Agendar Diagnóstico
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

export default Process;