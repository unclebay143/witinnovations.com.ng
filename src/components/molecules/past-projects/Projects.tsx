import FloatingElements from "@/components/atom/FloatingElements";
import { Button } from "@/components/ui/button";
import { projects } from "@/const";
import { Calendar, Code, ExternalLink, Users } from "lucide-react";
import React from "react";

export const Projects = () => {
  return (
    <section className="py-20 relative">
      <FloatingElements />
      <div className="max-w-6xl mx-auto px-4 relative">
        <div className="space-y-16">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="p-8 lg:p-12">
                <div className="grid lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <div className="mb-4">
                      <span className="inline-block bg-blue-100 text-[#024FF0]text-sm font-medium px-3 py-1 rounded-md">
                        {project.category}
                      </span>
                    </div>
                    <h2 className="text-3xl font-bold mb-4">{project.title}</h2>
                    <p className="opacity-70 text-lg mb-6">
                      {project.description}
                    </p>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold mb-3">
                        Key Features:
                      </h4>
                      <ul className="grid md:grid-cols-2 gap-2">
                        {project.features.map((feature, featureIndex) => (
                          <li
                            key={featureIndex}
                            className="flex items-start gap-2"
                          >
                            <div className="w-2 h-2 bg-[#024FF0] rounded-full mt-2 flex-shrink-0"></div>
                            <span className="opacity-70">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* <div className="mb-6">
                      <h4 className="text-lg font-semibold mb-3">
                        Technologies Used:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div> */}
                  </div>

                  <div className="lg:col-span-1">
                    <div className="bg-blue-50 p-6 rounded-lg">
                      <h4 className="text-lg font-semibold mb-4">
                        Project Details
                      </h4>

                      <div className="space-y-4">
                        <div className="flex items-center gap-3">
                          <Calendar className="h-5 w-5 " />
                          <div>
                            <p className="text-sm ">Timeline</p>
                            <p className="font-medium">{project.timeline}</p>
                          </div>
                        </div>

                        <div className="flex items-center gap-3">
                          <Users className="h-5 w-5 " />
                          <div>
                            <p className="text-sm ">Team Size</p>
                            <p className="font-medium">{project.teamSize}</p>
                          </div>
                        </div>

                        <div className="flex items-center gap-3">
                          <Code className="h-5 w-5 " />
                          <div>
                            <p className="text-sm ">Status</p>
                            <p className="font-medium text-green-600">
                              {project.status}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="mt-6">
                        <Button
                          title="view project"
                          asChild
                          className="w-full bg-[#024FF0] text-white hover:bg-[#0285f0] "
                        >
                          <a href={project.link}>
                            <ExternalLink className="ml-2 h-4 w-4" />
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
