// src/App.tsx
import {
  Alert,
  AlertIcon,
  Flex,
  Grid,
  GridItem,
  useColorModeValue,
  Text,
} from "@chakra-ui/react";
import DesktopNav from "./components/DesktopNav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CustomerForm from "./pages/CustomerForm";
import { useState } from "react";
import customerService, { Customer } from "./services/customer-service";
import CustomerDetails from "./pages/CustomerDetails";
import AssetHeadersForm from "./pages/AssetHeadersForm";
import assetHeaderService, {
  AssetHeader,
} from "./services/assetHeader-service";
import AssetHeadersDetails from "./pages/AssetHeadersDetails";

function App() {
  const [customers, setCustomer] = useState<Customer[]>([]);
  const [assetHeaders, setAssetHeaders] = useState<AssetHeader[]>([]);
  const [alertMessage, setAlertMessage] = useState<string | null>(null); // State for alert message

  const handleCustomer = (customer: Customer) => {
    customerService.create(customer).then(({ data: savedCustomer }) => {
      setCustomer([savedCustomer, ...customers]);
      setAlertMessage(
        `Customer "${savedCustomer.customerName}" has been created successfully!`
      );

      // Clear alert after 3 seconds
      setTimeout(() => setAlertMessage(null), 3000);
    });
  };

  const hadleAssetHeaders = (assetHeader: AssetHeader) => {
    assetHeaderService
      .create(assetHeader)
      .then(({ data: savedAssetHeader }) => {
        setAssetHeaders([savedAssetHeader, ...assetHeaders]);
        setAlertMessage(
          `Asset "${savedAssetHeader.assetNumber}" has been created successfully!`
        );

        // Clear alert after 3 seconds
        setTimeout(() => setAlertMessage(null), 3000);
      });
  };

  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "main main"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "200px 1fr",
        }}
      >
        <GridItem area="nav">
          <Flex
            bg={useColorModeValue("white", "gray.800")}
            color={useColorModeValue("gray.600", "white")}
            minH={"60px"}
            py={{ base: 2 }}
            px={{ base: 4 }}
            borderBottom={1}
            borderStyle={"solid"}
            borderColor={useColorModeValue("gray.200", "gray.900")}
            align={"center"}
          >
            <Flex
              flex={{ base: 1, md: "auto" }}
              ml={{ base: -2 }}
              display={{ base: "flex", md: "auto" }}
            >
              <DesktopNav />
            </Flex>
          </Flex>
        </GridItem>
        <GridItem area="main">
          {alertMessage && (
            <Alert status="success" marginBottom={4}>
              <AlertIcon />
              {alertMessage}
            </Alert>
          )}
          <Router>
            <Routes>
              <Route
                path="/createCustomer"
                element={
                  <CustomerForm
                    onSubmit={(customer) => handleCustomer(customer)}
                  />
                }
              />
              <Route
                path="/viewCustomers"
                element={<CustomerDetails />}
              ></Route>
              <Route
                path="/createAssetHeaders"
                element={
                  <AssetHeadersForm
                    onSubmit={(assetHeader) => hadleAssetHeaders(assetHeader)}
                  />
                }
              ></Route>
              <Route
                path="/viewAssetHeaders"
                element={<AssetHeadersDetails />}
              ></Route>
            </Routes>
          </Router>
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
