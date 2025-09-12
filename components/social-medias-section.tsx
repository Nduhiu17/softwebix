import Image from 'next/image';

const socialMedias = [
  {
    name: 'Facebook',
    icon: '/images/social-media/facebook.svg',
    points: [
      'FACEBOOK IS THE WORLD\'S LEADING SOCIAL NETWORKING SITE',
      'YOU CAN SET TARGET CUSTOMERS BASED ON AGE, GENDER, OCCUPATION, INTERESTS, ETC.',
      'ADS CAN BE PLACED ON DESKTOP AND MOBILE VERSIONS',
      'AD FORMATS INCLUDE: DYNAMIC MESSAGE PROMOTION, PROMOTED POST ADS, DYNAMIC SPONSORED ADS...ETC.',
    ],
  },
  {
    name: 'Instagram',
    icon: '/images/social-media/instagram.svg',
    points: [
      'OVER 2 BILLION ACTIVE USERS WORLDWIDE',
      'REACH MORE YOUNG AGE GROUPS',
      'WE WILL HELP DESIGN ADS IN DIFFERENT FORMAT, STORIES, REELS, PHOTO AND VIDEO ADS, EACH SUITED TO DIFFERENT MARKETING GOALS AND STORYTELLING STYLES, MAKING THEM VERSATILE FOR VARIOUS BUSINESS NEEDS',
    ],
  },
  {
    name: 'LinkedIn',
    icon: '/images/social-media/linkedin.svg',
    points: [
      'LINKEDIN IS A PROFESSIONAL NETWORKING PLATFORM DESIGNED SPECIFICALLY FOR BUSINESS AND CAREER DEVELOPMENT',
      'EASIEST WAY TO REACH COMPANIES AND PROFESSIONALS IN DIFFERENT INDUSTRIES',
      'ADS ON LINKEDIN BOOST BRAND AWARENESS IN A PROFESSIONAL SETTING',
    ],
  },
];

export function SocialMediasSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h3 className="text-2xl font-bold text-left mb-12 text-[#4A2F6A]">SOCIAL MEDIAS</h3>
        <div className="space-y-16">
          {socialMedias.map((social) => (
            <div key={social.name} className="grid md:grid-cols-3 gap-8 items-center">
              <div className="relative flex justify-center md:col-span-1">
                <Image
                  src={social.icon}
                  alt={`${social.name} icon`}
                  width={150}
                  height={150}
                />
              </div>
              <div className="md:col-span-2">
                <ul className="list-disc list-inside space-y-2">
                  {social.points.map((point) => (
                    <li key={point} className="text-lg text-gray-700">{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
