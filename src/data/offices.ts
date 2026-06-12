export type Office = {
  region: string;
  city: string;
  address: string[];
  postalCode?: string;
  phone: string;
  email?: string;
  mapUrl?: string;
};

export const offices: Office[] = [
  {
    region: "United States",
    city: "Houston",
    address: ["6051 North Course Drive, Suite 300,", "Houston, TX 77072, USA"],
    phone: "+1.281.495.5657",
    email: "office@lmkr.com",
    mapUrl: "https://maps.app.goo.gl/nrGaZzjxQf7w2urf6",
  },
  {
    region: "Canada",
    city: "Calgary",
    address: ["421, 7th Avenue SW, Calgary", "AB T2P 4K9, Canada"],
    phone: "+1.587.225.5658",
    email: "office@lmkr.com",
    mapUrl: "https://maps.google.com/?q=421+7th+Avenue+SW+Calgary+AB+T2P+4K9",
  },
  {
    region: "United Arab Emirates",
    city: "Dubai",
    address: [
      "512 CNPC Building 1, Emaar Business Park,",
      "Sheikh Zayed Road, Dubai, UAE",
    ],
    phone: "+971 4 3209565",
    email: "office@lmkr.com",
    mapUrl: "https://maps.app.goo.gl/A1Zgp6kVU1hmEX5D8",
  },
  {
    region: "Pakistan",
    city: "Islamabad",
    address: ["9th Floor, Ufone Tower, Jinnah Ave,", "Islamabad 44000, Pakistan"],
    phone: "+92.51.111.101.101",
    email: "office@lmkr.com",
    mapUrl: "https://maps.google.com/?q=Ufone+Tower+Jinnah+Ave+Islamabad+44000",
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
