import React from "react";
import useCustomers from "../hooks/useCustomers";
import {
  Box,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

const CustomerDetails = () => {
  const { customers, error } = useCustomers();
  return (
    <Box overflowX="auto">
      <TableContainer>
        <Table variant="striped" size={{ base: "sm", lg: "lg" }}>
          <TableCaption placement="top">Customer Details</TableCaption>
          <Thead>
            <Tr>
              <Th width="50px" textAlign="center">
                Customer ID
              </Th>
              <Th textAlign="center">Customer Name</Th>
              <Th textAlign="center">Customer Site</Th>
              <Th textAlign="center">Customer Contact</Th>
            </Tr>
          </Thead>
          <Tbody>
            {customers.map((customer) => (
              <Tr key={customer.id}>
                <Td width="50px" textAlign="center">
                  {customer.id}
                </Td>
                <Td textAlign="center">{customer.customerName}</Td>
                <Td textAlign="center">{customer.customerSite}</Td>
                <Td textAlign="center">{customer.customerContact}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default CustomerDetails;
