import { CanceledError } from "axios";
import { useState, useEffect } from "react";
import assetHeaderService, {
  AssetHeader,
} from "../services/assetHeader-service";

const useCustomers = () => {
  const [isLoading, setLoading] = useState(false);
  const [assetHeaders, setAssetHeaders] = useState<AssetHeader[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    const { request, cancel } = assetHeaderService.getAll<AssetHeader>();
    request
      .then((res) => {
        setAssetHeaders(res.data);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

    return () => cancel();
  }, []);

  return { assetHeaders, error, isLoading, setAssetHeaders, setError };
};
export default useCustomers;
