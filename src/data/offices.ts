export type Office = {
  region: string;
  city: string;
  address: string[];
  postalCode?: string;
  phone: string;
  fax?: string;
  email?: string;
  mapUrl?: string;
};

export const offices: Office[] = [
  {
    region: "United States",
    city: "Houston",
    address: ["6051 North Course Drive, Suite 300,", "Houston, TX 77072, USA"],
    phone: "+1.281.495.5657",
    fax: "+1.281.568.7315",
    mapUrl: "https://maps.app.goo.gl/nrGaZzjxQf7w2urf6",
  },
  {
    region: "United Arab Emirates",
    city: "Dubai",
    address: [
      "Office No 512, 5th floor, CNPC Building 1,",
      "Emaar Business Park, Sheikh Zayed Road,",
      "Dubai, UAE.",
    ],
    phone: "+971 4 3209565",
    fax: "+971 4 2394099",
    email: "office@lmkr.com",
    mapUrl: "https://maps.app.goo.gl/A1Zgp6kVU1hmEX5D8",
  },
  {
    region: "Canada",
    city: "Calgary",
    address: ["Calgary, Canada"],
    phone: "+1.587.225.5658",
    email: "rphillips@gverse.com",
    mapUrl: "https://maps.google.com/?q=Calgary,Canada",
  },
  {
    region: "Pakistan",
    city: "Islamabad",
    address: [
      "9th Floor, No 55-C, PTET/Ufone Tower,",
      "Jinnah Avenue, Islamabad, Pakistan",
    ],
    postalCode: "44000",
    phone: "+92.51.111.101.101",
    email: "office@lmkr.com",
    mapUrl: "https://maps.google.com/?q=PTET+Ufone+Tower+Jinnah+Avenue+Islamabad",
  },
];

const regionShortLabel: Record<string, string> = {
  "United States": "USA",
  "United Arab Emirates": "UAE",
  Canada: "Canada",
  Pakistan: "Pakistan",
};

export const officeFooterLabels = offices.map((office) => ({
  label: `${office.city}, ${regionShortLabel[office.region] ?? office.region}`,
  href: "/contact",
}));
