import React from "react";
import { Box, Flex, Grid, Heading, Text, VStack, Button, Badge, useBreakpointValue } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { ScrollReveal } from "./Effects";
import { FaArrowRight, FaClock } from "react-icons/fa";

const articles = [
  {
    title: "5 erros comuns na arquitectura de APIs que custam caro",
    date: "15 de Agosto, 2026",
    excerpt: "Descubra como evitar problemas de performance e segurança em suas APIs antes que se tornem prejuízos financeiros.",
    category: "Arquitectura",
    readTime: "8 min",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=250&fit=crop"
  },
  {
    title: "Por que sua empresa precisa de firewall bem configurado",
    date: "10 de Agosto, 2026",
    excerpt: "A segurança da informação não é opcional. Aprenda como proteger seus dados e sistemas contra ameaças cibernéticas.",
    category: "Segurança",
    readTime: "6 min",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=250&fit=crop"
  },
  {
    title: "DevOps: como automatizar deploy sem medo",
    date: "5 de Agosto, 2026",
    excerpt: "Automação é a chave para produtividade. Veja como implementar CI/CD de forma eficiente e segura.",
    category: "DevOps",
    readTime: "10 min",
    image: "https://images.unsplash.com/photo-1667372393119-3d4c48d6fc9b?w=400&h=250&fit=crop"
  }
];

const Blog: React.FC = () => {
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
                Blog
              </Text>
              <Box w="40px" h="2px" bg="brand.orange" />
            </Flex>
            <Heading color="brand.text" fontSize={isMobile ? "3xl" : "5xl"} fontFamily="heading">
              Insights <Text as="span" color="brand.orange">Técnicos</Text>
            </Heading>
            <Text color="brand.subtle" fontSize="lg" maxW="600px" lineHeight="1.8">
              Compartilho conhecimento para ajudar empresas a tomar decisões tecnológicas inteligentes.
            </Text>
          </VStack>
        </ScrollReveal>

        {/* Grid de Artigos */}
        <Grid templateColumns={isMobile ? "1fr" : "repeat(3, 1fr)"} gap={10} width="100%">
          {articles.map((article, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Box
                bg="brand.card"
                borderRadius="3xl"
                overflow="hidden"
                boxShadow="0 4px 20px rgba(0,0,0,0.04)"
                _hover={{
                  transform: "translateY(-8px)",
                  boxShadow: "0 20px 60px rgba(0,0,0,0.1)"
                }}
                transition="all 0.3s ease"
                height="100%"
                display="flex"
                flexDirection="column"
              >
                {/* Imagem do artigo - SEM overlay escuro */}
                <Box
                  h="200px"
                  bgImage={article.image}
                  bgSize="cover"
                  bgPosition="center"
                  position="relative"
                >
                  <Badge
                    position="absolute"
                    top={4}
                    left={4}
                    bg="brand.orange"
                    color="white"
                    px={3}
                    py={1}
                    borderRadius="full"
                    fontSize="xs"
                    fontWeight="bold"
                  >
                    {article.category}
                  </Badge>
                </Box>

                {/* Conteúdo do artigo */}
                <VStack gap={5} align="start" p={8} flex="1">
                  <Flex align="center" gap={4} fontSize="xs" color="brand.subtle">
                    <Flex align="center" gap={1}>
                      <FaClock size={12} />
                      <Text>{article.readTime}</Text>
                    </Flex>
                    <Text>•</Text>
                    <Text>{article.date}</Text>
                  </Flex>

                  <Heading as="h3" size="md" color="brand.text" fontFamily="heading" lineHeight="1.4">
                    {article.title}
                  </Heading>

                  <Text color="brand.subtle" fontSize="sm" lineHeight="1.8" flex="1">
                    {article.excerpt}
                  </Text>

                  <Button
                    variant="ghost"
                    color="brand.orange"
                    fontSize="sm"
                    fontWeight="bold"
                    p={0}
                    _hover={{ color: "brand.orangeHover" }}
                    transition="all 0.3s"
                    rightIcon={<FaArrowRight size={12} />}
                  >
                    Ler mais
                  </Button>
                </VStack>
              </Box>
            </motion.div>
          ))}
        </Grid>

        {/* Botão Ver Todos */}
        <ScrollReveal delay={0.2}>
          <Button
            variant="outline"
            border="2px"
            borderColor="brand.orange"
            color="brand.orange"
            size="lg"
            px={10}
            py={6}
            borderRadius="full"
            _hover={{
              bg: "brand.orange",
              color: "white",
              transform: "translateY(-3px)",
              boxShadow: "0 10px 30px rgba(255,140,66,0.2)"
            }}
            transition="all 0.3s ease"
          >
            Ver Todos os Artigos
            <Box ml={2}>
              <FaArrowRight />
            </Box>
          </Button>
        </ScrollReveal>
      </VStack>
    </Box>
  );
};

export default Blog;