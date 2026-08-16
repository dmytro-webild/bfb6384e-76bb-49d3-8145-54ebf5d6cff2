import FooterMinimal from '@/components/sections/footer/FooterMinimal';
import NavbarCentered from '@/components/ui/NavbarCentered';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";
import SiteBackgroundSlot from "@/components/ui/SiteBackgroundSlot";
import { Facebook, Instagram, Twitter } from "lucide-react";
import { Outlet } from 'react-router-dom';
import { StyleProvider } from "@/components/ui/StyleProvider";

export default function Layout() {
  const navItems = [
  {
    "name": "Story",
    "href": "#about"
  },
  {
    "name": "Rooftop",
    "href": "#rooftop"
  },
  {
    "name": "Menu",
    "href": "#menu"
  },
  {
    "name": "Reserve",
    "href": "#contact"
  },
  {
    "name": "Hero",
    "href": "#hero"
  },
  {
    "name": "Comparison",
    "href": "#comparison"
  },
  {
    "name": "Metrics",
    "href": "#metrics"
  }
];

  return (
    <StyleProvider buttonVariant="expand" siteBackground="floatingGradient" heroBackground="gradientBars">
      <SiteBackgroundSlot />
      <SectionErrorBoundary name="navbar">
        <NavbarCentered
      logo="Grand Gossip"
      ctaButton={{
        text: "Book Now",
        href: "#contact",
      }}
     navItems={navItems} />
      </SectionErrorBoundary>
      <main className="flex-grow">
        <Outlet />
      </main>
      <SectionErrorBoundary name="footer">
        <FooterMinimal
      brand="Grand Gossip"
      copyright="© 2024 Grand Gossip. All rights reserved."
      socialLinks={[
        {
          icon: Instagram,
          href: "#",
        },
        {
          icon: Facebook,
          href: "#",
        },
        {
          icon: Twitter,
          href: "#",
        },
      ]}
    />
      </SectionErrorBoundary>
    </StyleProvider>
  );
}
