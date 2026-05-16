import "./globals.css";

export const metadata = {
  title: "Ruins World Map — Every ruin on Earth",
  description: "An interactive world map of every ruin from OpenStreetMap. Wander the remains of lost civilisations — crumbling temples, abandoned forts and forgotten cities across the planet.",
  openGraph: {
    title: "Ruins World Map",
    description: "An interactive world map of every ruin from OpenStreetMap. Wander the remains of lost civilisations — crumbling temples, abandoned forts and forgotten cities across the planet.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
