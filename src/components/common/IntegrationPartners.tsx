import Image from "next/image";
import CustomCard from "./CustomCard";

const IntegrationPartners = () => {
  const partners = [
    {
      name: "Discord",
      description: "Enhance your trading experience with real-time alerts, market insights, and community engagement through our powerful Discord bot. Get instant notifications for price movements, trending tokens, and market opportunities.",
      icon: "/discord.svg",
      features: [
        "Real-time price alerts",
        "Market trend notifications",
        "Community trading signals"
      ]
    },
    {
      name: "Telegram",
      description: "Coming Soon",
      icon: "/telegram.svg"
    }
  ];

  return (
    <section className="py-16 container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Integration Partners
          </span>
        </h2>
        <p className="text-white">Connect with your favorite platforms</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {partners.map((partner) => (
          <CustomCard 
            key={partner.name} 
            variant="transparent"
            className="p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow"
          >
            <div className="w-16 h-16 relative mb-4">
              <Image
                src={partner.icon}
                alt={`${partner.name} icon`}
                fill
                className="object-contain"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                {partner.name}
              </span>
            </h3>
            <p className="text-white mb-4">{partner.description}</p>
            {partner.features && (
              <ul className="list-disc text-left space-y-2 mt-2">
                {partner.features.map((feature, index) => (
                  <li key={index} className="text-white ml-4">{feature}</li>
                ))}
              </ul>
            )}
          </CustomCard>
        ))}
      </div>
    </section>
  );
};

export default IntegrationPartners; 