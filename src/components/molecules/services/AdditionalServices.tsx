import React from "react";
import { Rocket, Shield, Zap } from "lucide-react";

const additionalServices = [
  {
    icon: <Zap className="h-6 w-6 text-green-600" />,
    iconBg: "bg-orange-100",
    title: "Performance Optimization",
    description:
      "Enhance the speed, efficiency, and scalability of your existing systems and applications.",
  },
  {
    icon: <Shield className="h-6 w-6 text-red-600" />,
    iconBg: "bg-red-100",
    title: "Security Audits",
    description:
      "Comprehensive security assessments to identify vulnerabilities and implement robust protection measures.",
  },
  {
    icon: <Rocket className="h-6 w-6 text-indigo-600" />,
    iconBg: "bg-indigo-100",
    title: "Deployment & DevOps",
    description:
      "Streamlined deployment processes and DevOps practices for reliable, scalable infrastructure.",
  },
];

const AdditionalServices = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Additional Services
          </h2>
          <p className="text-xl opacity-70 max-w-3xl mx-auto">
            Supporting services to ensure your technology investments deliver
            maximum value.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {additionalServices.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md transition-shadow hover:shadow-lg"
            >
              <div
                className={`w-12 h-12 ${service.iconBg} rounded-lg flex items-center justify-center mb-4`}
              >
                {service.icon}
              </div>
              <h4 className="text-lg font-semibold mb-3">{service.title}</h4>
              <p className="opacity-70">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdditionalServices;
