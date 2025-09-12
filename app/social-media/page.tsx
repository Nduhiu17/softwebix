import Image from 'next/image';
import Link from 'next/link';

const offers = [
  {
    name: 'SOCIAL MEDIA PLATFORM SETUP & OPTIMIZATION',
    subtext: '(LINKEDIN, TWITTER, INSTAGRAM & FACEBOOK)',
    icon: '/images/social-media/social-media-platform-setup.svg',
  },
  {
    name: 'CONTENT STRATEGY & CALENDAR PLANNING',
    subtext: '',
    icon: '/images/social-media/content-strategy.svg',
  },
  {
    name: 'LINKEDIN, FACEBOOK, INSTAGRAM ADS DESIGN',
    subtext: '',
    icon: '/images/social-media/facebook-linkedin-ads.svg',
  },
  {
    name: 'PAID AD CAMPAIGNS & PERFORMANCE ANALYTICS',
    subtext: '',
    icon: '/images/social-media/paid-ads-campaign.svg',
  },
];

export default function SocialMediaPage() {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="bg-[#4A2F6A] text-white pt-20 pb-10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-left">
              <h1 className="text-2xl md:text-3xl font-bold text-yellow-400">Social Media Engagement</h1>
              <h2 className="text-4xl md:text-5xl font-bold mt-2">CONNECT, ENGAGE, <br /> GROW — <br /> YOUR SOCIAL MEDIA, <br /> AMPLIFIED.</h2>
            </div>
            <div className="relative">
              <Image
                src="/images/social-media/heroes-section.svg"
                alt="Social Media Engagement"
                width={600}
                height={400}
                className="mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Offers Section */}
      <section className="py-20 bg-[#F5F3EF]">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold text-left mb-12 text-[#4A2F6A]">OFFERS</h3>
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
            {offers.map((offer) => (
              <div key={offer.name} className="flex items-center">
                <div className="flex-shrink-0">
                  <Image
                    src={offer.icon}
                    alt={`${offer.name} icon`}
                    width={80}
                    height={80}
                  />
                </div>
                <div className="ml-6">
                  <h4 className="text-lg font-bold text-[#4A2F6A]">{offer.name}</h4>
                  {offer.subtext && <p className="text-sm text-gray-600">{offer.subtext}</p>}
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-16">
            <p className="text-3xl font-bold text-[#4A2F6A] mb-8">ONLINE PLATFORM PROMOTION IS ALWAYS EASY, FAST & EFFECTIVE</p>
            <Link href="/contact" className="bg-[#4A2F6A] text-white font-bold py-4 px-8 rounded-full hover:bg-[#3c2557] transition-colors duration-300">
              BOOST YOUR SOCIAL MEDIA ACCOUNT
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
