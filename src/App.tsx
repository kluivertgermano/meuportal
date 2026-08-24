import React from "react";
import { Steps, Box } from "@chakra-ui/react";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Process from "./components/Process";
import Results from "./components/Results";
import Clients from "./components/Clients";
import Testimonials from "./components/Testimonials";
import Blog from "./components/Blog";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import ThemeToggle from "./components/ThemeToggle";

function App() {
  return (
    <Box minH="100vh">
      <ThemeToggle />
      <Hero />
      <About />
      <Services />
      <Process />
      <Results />
      <Clients />
      <Testimonials />
      <Blog />
      <Footer />
      <WhatsAppButton />
    </Box>
  );
}

export default App;