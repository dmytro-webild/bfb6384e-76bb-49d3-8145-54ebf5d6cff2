import AboutText from '@/components/sections/about/AboutText';
import ContactCta from '@/components/sections/contact/ContactCta';
import FeaturesComparison from '@/components/sections/features/FeaturesComparison';
import FeaturesImageBento from '@/components/sections/features/FeaturesImageBento';
import HeroOverlayMarquee from '@/components/sections/hero/HeroOverlayMarquee';
import MetricsSimpleCards from '@/components/sections/metrics/MetricsSimpleCards';
import TeamListCards from '@/components/sections/team/TeamListCards';
import TestimonialTrustCard from '@/components/sections/testimonial/TestimonialTrustCard';
import { Flame, Sparkles, Star } from "lucide-react";
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";

export default function HomePage() {
  return (
    <>
  <div id="hero" data-section="hero">
    <SectionErrorBoundary name="hero">
          <HeroOverlayMarquee
      tag="Grand Gossip"
      title="Berhampores Finest Rooftop Dining"
      description="Immerse yourself in golden-hour warmth, curated multicuisine flavors, and the aroma of freshly prepared spices. Experience premium dining where every moment feels like a sunlit celebration."
      primaryButton={{
        text: "Reserve Your Table Now",
        href: "#contact",
      }}
      secondaryButton={{
        text: "View Menu",
        href: "#menu",
      }}
      items={[
        {
          text: "Handcrafted Flavors",
          icon: Sparkles,
        },
        {
          text: "Rooftop Ambiance",
          icon: Star,
        },
        {
          text: "Curated Spices",
          icon: Flame,
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/two-young-beautiful-girls-smiling-speaking-resting-cafe-shot-from-outside_176420-6932.jpg?_wi=1"
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="about" data-section="about">
    <SectionErrorBoundary name="about">
          <AboutText
      title="Where Every Meal Becomes a Memory. Born from a love of food and community, Grand Gossip has been Berhampore's favourite gathering spot since day one."
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>

  <div id="comparison" data-section="comparison">
    <SectionErrorBoundary name="comparison">
          <FeaturesComparison
      tag="Why Us"
      title="The Rooftop Difference"
      description="Experience dining elevated above the ordinary bustle of the city."
      negativeItems={[
        "Crowded street restaurants",
        "Basic menu options",
        "Standard city noise",
      ]}
      positiveItems={[
        "Exclusive rooftop escape",
        "Curated multicuisine fusion",
        "Handcrafted signature mocktails",
      ]}
      textAnimation="fade"
    />
    </SectionErrorBoundary>
  </div>

  <div id="menu" data-section="menu">
    <SectionErrorBoundary name="menu">
          <FeaturesImageBento
      tag="Curated Flavors"
      title="Chef's Signature Selections"
      description="A sensory journey through spices and tradition."
      items={[
        {
          title: "Butter Chicken",
          description: "Classic creamy gravy",
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-indian-food-frame-with-copy-space_23-2148747713.jpg",
        },
        {
          title: "Tandoori Naan",
          description: "Freshly baked crispiness",
          imageSrc: "http://img.b2bpic.net/free-photo/spicy-chikcen-tikka-pizza-wood-table_505751-5228.jpg",
        },
        {
          title: "Lamb Rogan Josh",
          description: "Slow cooked perfection",
          imageSrc: "http://img.b2bpic.net/free-photo/delicious-goulash-stew-table_23-2149371734.jpg",
        },
        {
          title: "Appetizer Platter",
          description: "A mix of everything",
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-tasty-mushrooms-meal-with-fresh-tomatoes-seasonings-dark-surface-dish-dinner-meal-cooking-mushroom_140725-118362.jpg",
        },
        {
          title: "Royal Biryani",
          description: "Aromatic saffron rice",
          imageSrc: "http://img.b2bpic.net/free-photo/high-angle-arrangement-different-pakistan-goodies_23-2148821570.jpg",
        },
        {
          title: "Signature Mojito",
          description: "Poured fresh and cool",
          imageSrc: "http://img.b2bpic.net/free-photo/side-view-green-lemons-with-slices-water-glass-black-textured-background-horizontal_176474-3561.jpg",
        },
        {
          title: "Royal Dessert",
          description: "Sweet end to gossip",
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-delicious-coconut-balls_140725-59334.jpg",
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="metrics" data-section="metrics">
    <SectionErrorBoundary name="metrics">
          <MetricsSimpleCards
      tag="Our Growth"
      title="Milestones Shared"
      metrics={[
        {
          value: "10k+",
          description: "Gossip moments shared",
        },
        {
          value: "50+",
          description: "Signature spice recipes",
        },
        {
          value: "5*",
          description: "Top rated ambiance",
        },
      ]}
      textAnimation="fade-blur"
      description="Description"
    />
    </SectionErrorBoundary>
  </div>

  <div id="team" data-section="team">
    <SectionErrorBoundary name="team">
          <TeamListCards
      tag="The Culinary Team"
      title="Masters of the Tandoor"
      groups={[
        {
          title: "Leadership",
          members: [
            {
              name: "Chef Rahul",
              role: "Head Chef",
              detail: "The spice master behind every dish.",
              imageSrc: "http://img.b2bpic.net/free-photo/close-up-shot-friendly-looking-elegant-young-african-american-female-with-straight-dark-straight-hair-having-happy-joyful-look-posing_344912-1016.jpg",
            },
            {
              name: "Priya Singh",
              role: "Founder",
              detail: "Curating the rooftop dream.",
              imageSrc: "http://img.b2bpic.net/free-photo/attractive-young-woman-with-charming-smile-feeling-happy-free-after-graduating-university-relaxing-cafe-waiting-food-making-plans-future-ginger-woman-having-rest-indoors_273609-481.jpg",
            },
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/two-young-beautiful-girls-smiling-speaking-resting-cafe-shot-from-outside_176420-6932.jpg?_wi=2",
          imageAlt: "smiling indian woman portrait",
        },
      ]}
      textAnimation="fade"
      description="Description"
    />
    </SectionErrorBoundary>
  </div>

  <div id="testimonial" data-section="testimonial">
    <SectionErrorBoundary name="testimonial">
          <TestimonialTrustCard
      quote="Simply the best rooftop experience in Berhampore. The ambiance during golden hour is unmatched, and the food? Absolutely gossip-worthy!"
      rating={5}
      author="Anjali & Rohan"
      avatars={[
        {
          name: "Anjali",
          imageSrc: "http://img.b2bpic.net/free-photo/smiling-young-brunette-caucasian-girl-looks-camera-olive-green_141793-93004.jpg",
        },
        {
          name: "Rohan",
          imageSrc: "http://img.b2bpic.net/free-photo/smiling-man-summer-wear-making-pointing-gesture_23-2147639825.jpg",
        },
        {
          name: "Vikram",
          imageSrc: "http://img.b2bpic.net/free-photo/casual-young-indian-man-black-shirt-sunglasses-posed-against-wooden-background_627829-1558.jpg",
        },
        {
          name: "Sonia",
          imageSrc: "http://img.b2bpic.net/free-photo/smiling-businessman-face-portrait-wearing-suit_53876-148135.jpg",
        },
        {
          name: "Rahul",
          imageSrc: "http://img.b2bpic.net/free-photo/man-with-his-hand-his-girlfriend-s-shoulder_1098-1916.jpg",
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="contact" data-section="contact">
    <SectionErrorBoundary name="contact">
          <ContactCta
      tag="Book Your Spot"
      text="Ready to gossip over great food? Reserve your table for our signature sunset dining experience today."
      primaryButton={{
        text: "Reserve Now",
        href: "tel:+919876543210",
      }}
      secondaryButton={{
        text: "View Menu",
        href: "#menu",
      }}
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>
    </>
  );
}
