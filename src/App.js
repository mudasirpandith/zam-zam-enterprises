import React from 'react';
import {
  ChakraProvider,
  Box,
  theme,
} from '@chakra-ui/react';
import WithSubnavigation from '../src/Components/NavBar/NavBar'
import { Home } from './Screens/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Contact } from './Screens/Contact';
import About from './Screens/About';
import FooterSection from './Components/NavBar/Footer';
import Products from './Screens/Services_Tour';
import ServiceCCTV from './Screens/Services_CCTV';
import ServiceLaptopRepair from './Screens/Services_Laptop_Repair';
import ServiceMobileRepair from './Screens/Services_Mobile_Repair';
import Printers from './Screens/Services_Printers';
import Accessories from './Screens/Services_Accessories';
import AOS from 'aos'
function App() {
  AOS.init({ duration: 2000, once: "true" })
  return (
    <ChakraProvider theme={theme}>
      <Box >
        <WithSubnavigation />


        <BrowserRouter>
          <Routes>
            <Route path="/">
              <Route path="/" element={<Home />} />
              <Route path="products" element={<Products />} />
              <Route path="contact-us" element={<Contact />} />
              <Route path="about-us" element={<About />} />
              <Route path="services/cctv" element={<ServiceCCTV />} />
              <Route path="services/laptop-repair" element={<ServiceLaptopRepair />} />
              <Route path="services/mobile-repair" element={<ServiceMobileRepair />} />
              <Route path="services/printer-repair" element={<Printers />} />
              <Route path="services/accessories" element={<Accessories />} />
              <Route path="*" element={<Home />} />
            </Route>
          </Routes>
        </BrowserRouter>

        <FooterSection />
      </Box>
    </ChakraProvider >
  );
}

export default App;
