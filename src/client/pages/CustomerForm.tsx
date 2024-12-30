import { Box, Button, Input, Stack, Text } from "@chakra-ui/react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const schema = z.object({
  customerName: z
    .string()
    .min(3, { message: "Name must be at least 3 characters" })
    .max(50),
  customerSite: z
    .string()
    .min(3, { message: "Site must be at least 3 characters" })
    .max(50),
  customerContact: z.string(),
});

type CustomerFormData = z.infer<typeof schema>;

interface Props {
  onSubmit: (data: CustomerFormData) => void;
}

const CustomerForm = ({ onSubmit }: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CustomerFormData>({ resolver: zodResolver(schema) });
  return (
    <form
      onSubmit={handleSubmit((data) => {
        onSubmit(data);
        reset();
      })}
    >
      <Box padding={3}>
        <Stack spacing={3}>
          <Input
            {...register("customerName")}
            placeholder="Customer Name"
          ></Input>
          {errors.customerName && (
            <Text fontSize="xs" color="red.500">
              {errors.customerName.message}
            </Text>
          )}
          <Input
            {...register("customerSite")}
            placeholder="Customer Site"
          ></Input>
          {errors.customerSite && (
            <Text fontSize="xs" color="red.500">
              {errors.customerSite.message}
            </Text>
          )}
          <Input
            {...register("customerContact")}
            placeholder="Customer Contact"
          ></Input>
          {errors.customerContact && (
            <Text fontSize="xs" color="red.500">
              {errors.customerContact.message}
            </Text>
          )}
        </Stack>
        <Button colorScheme="teal" size="md" marginTop={3} type="submit">
          Submit
        </Button>
      </Box>
    </form>
  );
};

export default CustomerForm;
