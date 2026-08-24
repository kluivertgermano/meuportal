import React from "react";
import { Box, Grid, Heading, Icon, Text, VStack, Flex, Badge, useBreakpointValue } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { ScrollReveal } from "./Effects";
import { 
  FaCode, 
  FaServer, 
  FaCloud, 
  FaShieldAlt, 
  FaDatabase, 
  FaNetworkWired,
  FaCreditCard,
  FaMoneyBillWave,
  FaUniversity,
  FaExchangeAlt,
  FaBriefcase
} from "react-icons/fa";

const services = [
  { icon: FaCode, title: "Desenvolvimento de Software", description: "Sistemas web e mobile sob medida para o seu negócio.", tags: ["React", "Node.js", "APIs"] },
  { icon: FaServer, title: "Arquitectura de Sistemas", description: "Desenho de soluções escaláveis e de alta performance.", tags: ["Microservices", "Escalabilidade"] },
  { icon: FaCloud, title: "DevOps & Cloud", description: "Infraestrutura moderna, automação e monitoramento.", tags: ["Docker", "Kubernetes"] },
  { icon: FaShieldAlt, title: "Segurança da Informação", description: "Proteção de dados, firewalls e auditoria de segurança.", tags: ["Firewall", "Hardening"] },
  { icon: FaDatabase, title: "Bancos de Dados", description: "Modelagem, otimização e gestão de dados críticos.", tags: ["SQL", "NoSQL"] },
  { icon: FaNetworkWired, title: "Infraestrutura de TI", description: "Redes corporativas, servidores e conectividade.", tags: ["VPN", "Servidores"] },
];

const emisServices = [
  { icon: FaCreditCard, title: "Pagamentos por Referência", description: "Integração completa com o sistema de referências da EMIS.", tags: ["EMIS", "Referências"] },
  { icon: FaMoneyBillWave, title: "GPO", description: "Gestão de Pagamentos Online para e-commerce e serviços.", tags: ["EMIS", "GPO"] },
  { icon: FaUniversity, title: "SDD", description: "Serviço de Débito Direto para cobranças automáticas.", tags: ["EMIS", "SDD"] },
];

const Services: React.FC = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Box py={32} bg="brand.bg">
      <VStack spacing={20} maxW="1200px" mx="auto" px={4}>
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
                Nossos Serviços
              </Text>
              <Box w="40px" h="2px" bg="brand.orange" />
            </Flex>
            <Heading color="brand.text" fontSize={isMobile ? "3xl" : "5xl"} fontFamily="heading">
              Soluções <Text as="span" color="brand.orange">Completas</Text>
            </Heading>
            <Text color="brand.subtle" fontSize="lg" maxW="600px" lineHeight="1.8">
              Da arquitetura à implementação, oferecemos tudo o que sua empresa precisa para crescer com tecnologia.
            </Text>
          </VStack>
        </ScrollReveal>

        {/* Seção EMIS - Destaque Premium */}
        <ScrollReveal delay={0.2}>
          <Box
            width="100%"
            bg="brand.card"
            borderRadius="3xl"
            boxShadow="0 20px 60px rgba(0,0,0,0.08)"
            p={12}
            position="relative"
            overflow="hidden"
          >
            {/* Elemento decorativo */}
            <Box
              position="absolute"
              top="-50%"
              right="-20%"
              w="300px"
              h="300px"
              bg="brand.orange"
              borderRadius="full"
              opacity="0.05"
            />
            
            <VStack spacing={10} align="start" position="relative">
              <Flex align="center" gap={6}>
                <Box
                  bg="brand.orange"
                  p={5}
                  borderRadius="2xl"
                  boxShadow="0 10px 30px rgba(255,140,66,0.3)"
                >
                  <Icon as={FaExchangeAlt} boxSize={8} color="white" />
                </Box>
                <VStack align="start" spacing={2}>
                  <Heading as="h3" size="xl" color="brand.text" fontFamily="heading">
                    Especialista em Serviços EMIS
                  </Heading>
                  <Text color="brand.subtle" fontSize="md">
                    Integração completa com o sistema bancário de Angola
                  </Text>
                </VStack>
              </Flex>

              <Grid templateColumns={isMobile ? "1fr" : "repeat(3, 1fr)"} gap={8} width="100%">
                {emisServices.map((service, index) => (
                  <Box
                    key={index}
                    p={8}
                    bg="brand.bg"
                    borderRadius="2xl"
                    border="1px solid"
                    borderColor="brand.border"
                    _hover={{
                      borderColor: "brand.orange",
                      boxShadow: "0 10px 40px rgba(255,140,66,0.1)"
                    }}
                    transition="all 0.3s"
                  >
                    <VStack spacing={5} align="start">
                      <Box bg="brand.orange" p={3} borderRadius="lg">
                        <Icon as={service.icon} boxSize={6} color="white" />
                      </Box>
                      <Heading as="h4" size="md" color="brand.text">{service.title}</Heading>
                      <Text color="brand.subtle" fontSize="sm" lineHeight="1.7">{service.description}</Text>
                      <Flex wrap="wrap" gap={2}>
                        {service.tags.map((tag, i) => (
                          <Badge key={i} bg="brand.bg" color="brand.orange" fontSize="xs" px={3} py={1} borderRadius="full" border="1px solid" borderColor="brand.border">
                            {tag}
                          </Badge>
                        ))}
                      </Flex>
                    </VStack>
                  </Box>
                ))}
              </Grid>
            </VStack>
          </Box>
        </ScrollReveal>

        {/* Grid de Serviços */}
        <Grid templateColumns={isMobile ? "1fr" : "repeat(3, 1fr)"} gap={10} width="100%">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Box
                group="card"
                p={10}
                bg="brand.card"
                borderRadius="3xl"
                boxShadow="0 4px 20px rgba(0,0,0,0.04)"
                _hover={{
                  transform: "translateY(-8px)",
                  boxShadow: "0 20px 60px rgba(0,0,0,0.1)",
                  borderColor: "brand.orange"
                }}
                transition="all 0.3s ease"
                height="100%"
                border="1px solid"
                borderColor="brand.border"
              >
                <VStack spacing={6} align="start">
                  <Box
                    bg="brand.orange"
                    p={4}
                    borderRadius="2xl"
                    boxShadow="0 8px 20px rgba(255,140,66,0.2)"
                  >
                    <Icon as={service.icon} boxSize={7} color="white" />
                  </Box>
                  <Heading as="h3" size="lg" color="brand.text" fontFamily="heading">
                    {service.title}
                  </Heading>
                  <Text color="brand.subtle" fontSize="md" lineHeight="1.8">
                    {service.description}
                  </Text>
                  <Flex wrap="wrap" gap={2} mt={2}>
                    {service.tags.map((tag, i) => (
                      <Badge key={i} bg="brand.bg" color="brand.orange" fontSize="xs" px={3} py={1} borderRadius="full" border="1px solid" borderColor="brand.border">
                        {tag}
                      </Badge>
                    ))}
                  </Flex>
                </VStack>
              </Box>
            </motion.div>
          ))}
        </Grid>
      </VStack>
    </Box>
  );
};

export default Services;