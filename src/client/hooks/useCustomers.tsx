import { CanceledError } from "axios";
import { useState, useEffect } from "react";
import customerService, { Customer } from "../services/customer-service";

const useCustomers = (id?: number) => {
  const [isLoading, setLoading] = useState(false);
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    const { request, cancel } = customerService.getAll<Customer>(id);
    request
      .then((res) => {
        setCustomers(res.data);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

    return () => cancel();
  }, []);

  return { customers, error, isLoading, setCustomers, setError };
};
export default useCustomers;
