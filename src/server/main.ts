import express from "express";
import ViteExpress from "vite-express";
import { PrismaClient } from "@prisma/client";
import cors from "cors";

const app = express();
const prisma = new PrismaClient();

//app.use(express.json());
app.use(express.json());
app.use(cors());

app.get("/api/customers", async (req, res) => {
  const { id } = req.query;
  const customers = await prisma.customers.findMany({
    where: id ? { id: Number(id) } : undefined,
  });
  res.json(customers);
});

app.post("/customers", async (req, res) => {
  const { customerName, customerSite, customerContact } = req.body;
  const newCustomer = await prisma.customers.create({
    data: { customerName, customerSite, customerContact },
  });
  res.json(newCustomer);
});

app.get("/assetHeaders", async (req, res) => {
  const users = await prisma.assetHeader.findMany();
  res.json(users);
});

app.post("/assetHeaders", async (req, res) => {
  const {
    customerId,
    assetNumber,
    assetDescription,
    assetSerialNo,
    siteSection,
  } = req.body;
  const newAssetHeader = await prisma.assetHeader.create({
    data: {
      customerId,
      assetNumber,
      assetDescription,
      assetSerialNo,
      siteSection,
    },
  });

  res.json(newAssetHeader);
});

ViteExpress.listen(app, 3000, () =>
  console.log("Server is listening on port 3000...")
);
