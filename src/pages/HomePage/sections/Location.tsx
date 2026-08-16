import React from 'react';
import { MapPin, Clock, Phone, Navigation, Car } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function LocationSection(): React.JSX.Element {
  return (
    <section id="location" data-webild-section="location" className="py-20 bg-background relative overflow-hidden">
      <div className="w-content-width mx-auto">
        <ScrollReveal variant="slide-up">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-block px-3.5 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#e6d5b8] text-[#2b180a] mb-4">
              Location & Access
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-tight">
              Find Us in Berhampore
            </h2>
            <p className="text-base md:text-lg text-[#6b584a]">
              Perched atop the city center with panoramic views. Join us for lunch, golden-hour mocktails, or dinner under the stars.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <ScrollReveal variant="fade-blur" delay={100}>
              <div className="card p-6 md:p-8 rounded-2xl bg-[#fbf7ef] border border-[#e6d5b8]/50 shadow-sm space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-[#a0522d] text-white shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-1">Rooftop Venue Address</h3>
                    <p className="text-sm text-[#6b584a] leading-relaxed">
                      3rd Floor, Grand Plaza, Panchanantala Road,<br />
                      Opposite District Library, Berhampore,<br />
                      West Bengal 742101
                    </p>
                  </div>
                </div>

                <div className="border-t border-[#e6d5b8]/40 pt-6 flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-[#a0522d] text-white shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-1">Opening Hours</h3>
                    <p className="text-sm text-[#6b584a]">Monday – Sunday: 12:00 PM – 11:00 PM</p>
                    <p className="text-xs text-[#a0522d] font-semibold mt-1">
                      Golden Hour Rooftop Vibe: 5:00 PM – 7:30 PM
                    </p>
                  </div>
                </div>

                <div className="border-t border-[#e6d5b8]/40 pt-6 flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-[#a0522d] text-white shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-1">Reservations & Inquiries</h3>
                    <p className="text-sm text-[#6b584a]">+91 98765 43210 / +91 3482 255100</p>
                  </div>
                </div>

                <div className="border-t border-[#e6d5b8]/40 pt-6 flex items-center justify-between text-xs text-[#6b584a]">
                  <span className="flex items-center gap-1.5 font-medium">
                    <Car className="w-4 h-4 text-[#a0522d]" /> Valet Parking Available
                  </span>
                  <span className="flex items-center gap-1.5 font-medium">
                    <Navigation className="w-4 h-4 text-[#a0522d]" /> Elevator Access to 3rd Floor
                  </span>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal variant="fade" delay={200}>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://maps.google.com/?q=Berhampore+West+Bengal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="primary-button flex-1 text-center py-3.5 px-6 rounded-xl font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
                >
                  <Navigation className="w-4 h-4" /> Get Live Directions
                </a>
                <a
                  href="tel:+919876543210"
                  className="secondary-button text-center py-3.5 px-6 rounded-xl font-semibold transition-colors"
                >
                  Call Restaurant
                </a>
              </div>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-7">
            <ScrollReveal variant="slide-up" delay={150} className="h-full">
              <div className="card h-full min-h-[400px] rounded-2xl overflow-hidden border border-[#e6d5b8] relative shadow-md group">
                <iframe
                  title="Grand Gossip Rooftop Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.786529328225!2d88.2465!3d24.1012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f97d2e8b234567%3A0x123456789abcdef!2sBerhampore%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: '420px' }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full filter saturate-[0.85] contrast-[1.05]"
                />
                <div className="absolute top-4 left-4 bg-[#FFFDF5]/90 backdrop-blur-md px-4 py-2.5 rounded-xl border border-[#e6d5b8] shadow-sm flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#a0522d] animate-ping" />
                  <span className="text-xs font-bold text-[#2b180a]">Grand Gossip Rooftop Lounge</span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}