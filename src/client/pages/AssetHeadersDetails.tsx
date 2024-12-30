import useAssetHeaders from "../hooks/useAssetHeaders";
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

const AssetHeadersDetails = () => {
  const { assetHeaders, error } = useAssetHeaders();

  const { customers } = useCustomers();

  const customerMap = new Map(
    customers.map((customer) => [customer.id, customer])
  );

  return (
    <Box overflowX="auto">
      <TableContainer>
        <Table variant="striped" size={{ base: "sm", lg: "lg" }}>
          <TableCaption placement="top">Asset Headers</TableCaption>
          <Thead>
            <Tr>
              <Th textAlign="center">Customer</Th>
              <Th textAlign="center">Customer Site</Th>
              <Th width="50px" textAlign="center">
                Asset Number
              </Th>
              <Th textAlign="center">Asset Serial Number</Th>
              <Th textAlign="center">Asset Description</Th>
              <Th textAlign="center">Site Section</Th>
            </Tr>
          </Thead>
          <Tbody>
            {assetHeaders.map((assetHeader) => (
              <Tr key={assetHeader.id}>
                <Td textAlign="center">
                  {customerMap.get(assetHeader.customerId)?.customerName}
                </Td>
                <Td textAlign="center">
                  {customerMap.get(assetHeader.customerId)?.customerSite}
                </Td>
                <Td width="50px" textAlign="center">
                  {assetHeader.assetNumber}
                </Td>
                <Td textAlign="center">{assetHeader.assetSerialNo}</Td>
                <Td textAlign="center">{assetHeader.assetDescription}</Td>
                <Td textAlign="center">{assetHeader.siteSection}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default AssetHeadersDetails;
