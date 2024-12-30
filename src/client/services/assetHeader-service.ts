import { Customer } from "./customer-service.js";
import create from "./http-service.js";

export interface AssetHeader {
  id?: number;
  customerId: number;
  assetNumber: string;
  assetDescription: string;
  assetSerialNo: string;
  siteSection: string;
}

export default create("/assetHeaders");
