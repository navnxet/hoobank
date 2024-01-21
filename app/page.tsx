import {
  Billing,
  Business,
  CardDeal,
  Clients,
  CTA,
  Footer,
  Hero,
  Navbar,
  Stats,
  Testimonials,
} from '@/components/index';

export default function Home() {
  return (
    <main className="w-full overflow-hidden bg-primaryy text-white">
      <div className="paddingX flexCenter">
        <div className="boxWidth">
          <Navbar />
        </div>
      </div>
      <div className="flexStart">
        <div className="boxWidth">
          <Hero />
        </div>
      </div>
      <div className="flexStart paddingX">
        <div className="boxWidth">
          <Stats />
          <Business />
          <Billing />
          <CardDeal />
          <Testimonials />
          <Clients />
          <CTA />
          <Footer />
        </div>
      </div>
    </main>
  );
}
