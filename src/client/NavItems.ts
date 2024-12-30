export interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Customers",
    children: [
      {
        label: "Create Customers",
        subLabel: "Manage New Customers",
        href: "/createCustomer",
      },
      {
        label: "View Customers",
        subLabel: "View Existing Customers Information",
        href: "/viewCustomers",
      },
    ],
  },
  {
    label: "Asset Header",
    children: [
      {
        label: "New Asset Headers",
        subLabel: "Create New Asset Headers",
        href: "/createAssetHeaders",
      },
      {
        label: "View Asset Headers",
        subLabel: "View Existing Asset Headers",
        href: "/viewAssetHeaders",
      },
    ],
  },
  {
    label: "Asset Items",
    children: [
      {
        label: "New Asset Items",
        subLabel: "Create New Asset Items",
        href: "#",
      },
      {
        label: "View Asset Items",
        subLabel: "View Existing Asset Items",
        href: "#",
      },
    ],
  },
];

export default NAV_ITEMS;
