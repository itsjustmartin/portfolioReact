import { ChakraProvider } from "@chakra-ui/react";
import Header from "./components/Header";
import LandingSection from "./components/LandingSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactMeSection from "./components/ContactMeSection";
import Footer from "./components/Footer";
import { AlertProvider } from "./context/alertContext";
import Alert from "./components/Alert";
import React, { useEffect } from 'react';

import { Helmet } from 'react-helmet';

const TITLE = 'Martin Yacoub';

function App() {

  // useEffect(() => {
  //   document.title = 'Martin Yacoub';
  // }, []);

  return (
    <ChakraProvider>
      <AlertProvider>
        <main>
        <Helmet>
          <title>{ TITLE }</title>
        </Helmet>
          <Header />
          <LandingSection />
          <ProjectsSection />
          <ContactMeSection />
          <Footer />
          <Alert />
        </main>
      </AlertProvider>
    </ChakraProvider>
  );
}

export default App;
