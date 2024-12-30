-- CreateTable
CREATE TABLE "AssetHeader" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "customerId" INTEGER NOT NULL,
    "assetNumber" TEXT,
    "assetDescription" TEXT,
    "assetSerialNo" TEXT,
    "siteSection" TEXT,
    CONSTRAINT "AssetHeader_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "Customers" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
