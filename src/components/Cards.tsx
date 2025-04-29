import React from "react";

interface CardProps {
  title: string;
  description: string;
  ctaText: string;
}

const Card: React.FC<CardProps> = ({ title, description, ctaText }) => {
  return (
    <div className="flex flex-col p-6 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <a href="#" className="text-primary font-medium hover:underline self-start">
        {ctaText} →
      </a>
    </div>
  );
};

interface CardGridProps {
  cards: CardProps[];
}

const CardGrid: React.FC<CardGridProps> = ({ cards }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4 py-12">
      {cards.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </div>
  );
};


const ServicesSection = () => {
  const servicesData: CardProps[] = [
    {
      title: "Professional Services",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
      ctaText: "Read more"
    },
    {
      title: "Health and Beauty",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
      ctaText: "Read more"
    },
    {
      title: "Nonprofit & Education",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
      ctaText: "Read more"
    }
  ];

  return <CardGrid cards={servicesData} />;
};

export default ServicesSection;