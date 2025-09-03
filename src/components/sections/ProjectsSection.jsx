import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Filter } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../ui/card"; 
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/badge"; 
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Example project data (replace with backend/API later)
const projectData = [
  {
    id: 1,
    title: "Ai Based Travel Planner",
    description: "A predictive ML model for planning your next travel.",
    category: "machine_learning",
    technologies: ["Python", "TensorFlow", "Pandas","Flas"],
    image_url: "https://22675444.fs1.hubspotusercontent-na1.net/hubfs/22675444/AI-Powered%20Apps%20for%20Travel%20Planning%20%281%29.png",
    demo_url: "",
    github_url: "https://github.com/Unknowncoder3/travelPlanner",
  },
  {
    id: 2,
    title: "Data Analysis Dashboard",
    description: "Interactive dashboard for business insights.",
    category: "data_analysis",
    technologies: ["Python", "SQL", "Machine Learning"],
    image_url: "https://cdnwebsite.databox.com/wp-content/uploads/2024/08/02082632/customer-support-dashboard-example-1000x534.png",
    demo_url: "",
    github_url: "https://github.com/Unknowncoder3/MADHAV-STORE-DASHBOARD",
  },
  {
    id: 2,
    title: "ONLINE STORE DASHBOARD",
    description: "An interactive Power BI dashboard for analyzing regional sales performance.",
    category: "visualization",
    technologies: ["Power Bi", "MS Excel", "SQL"],
    image_url: "https://github.com/Unknowncoder3/MADHAV-STORE-DASHBOARD/blob/main/madhav%20store%20dashboard%202.png?raw=true",
    demo_url: "",
    github_url: "https://github.com/Unknowncoder3/MADHAV-STORE-DASHBOARD",
  },
];

const categoryLabels = {
  machine_learning: "Machine Learning",
  data_analysis: "Data Analysis",
  visualization: "Data Visualization",
  automation: "Automation",
  research: "Research",
};

export default function ProjectsSection() {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [activeFilter, setActiveFilter] = useState("all");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadProjects();
  }, []);

  useEffect(() => {
    if (activeFilter === "all") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(
        projects.filter((project) => project.category === activeFilter)
      );
    }
  }, [projects, activeFilter]);

  // ✅ Updated to use static data instead of Project.list()
  const loadProjects = async () => {
    try {
      setProjects(projectData);
    } catch (error) {
      console.error("Error loading projects:", error);
    }
    setIsLoading(false);
  };

  return (
    <section
      id="projects"
      className="py-20 bg-gray-50 dark:bg-gray-800 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-blue-50/50 dark:from-purple-900/10 dark:to-blue-900/10"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A showcase of my work in machine learning, data analysis, and
            visualization
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <Tabs
            value={activeFilter}
            onValueChange={setActiveFilter}
            className="bg-white dark:bg-gray-900 rounded-full p-1 shadow-lg"
          >
            <TabsList className="bg-transparent">
              <TabsTrigger value="all" className="px-6 py-2 rounded-full">
                All Projects
              </TabsTrigger>
              <TabsTrigger value="machine_learning" className="px-6 py-2 rounded-full">
                ML
              </TabsTrigger>
              <TabsTrigger value="data_analysis" className="px-6 py-2 rounded-full">
                Analysis
              </TabsTrigger>
              <TabsTrigger value="visualization" className="px-6 py-2 rounded-full">
                Visualization
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </motion.div>

        {/* Projects Grid */}
        {isLoading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array(6)
              .fill(0)
              .map((_, i) => (
                <div
                  key={i}
                  className="bg-white dark:bg-gray-900 rounded-xl p-6 animate-pulse"
                >
                  <div className="h-48 bg-gray-200 dark:bg-gray-700 rounded-lg mb-4"></div>
                  <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
                  <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded mb-4"></div>
                  <div className="flex gap-2 mb-4">
                    <div className="h-6 w-16 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
                    <div className="h-6 w-20 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
                  </div>
                </div>
              ))}
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-none shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02] bg-white dark:bg-gray-900 overflow-hidden group">
                  {/* Image */}
                  {project.image_url && (
                    <div className="relative overflow-hidden">
                      <img
                        src={project.image_url}
                        alt={project.title}
                        className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    </div>
                  )}

                  {/* Content */}
                  <CardHeader className="pb-3">
                    <div className="flex justify-between items-start mb-2">
                      <CardTitle className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {project.title}
                      </CardTitle>
                      <Badge variant="outline" className="text-xs">
                        {categoryLabels[project.category] || "General"}
                      </Badge>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </CardHeader>

                  <CardContent className="pt-0">
                    {/* Technologies */}
                    {project.technologies && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.slice(0, 3).map((tech, techIndex) => (
                          <Badge key={techIndex} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                        {project.technologies.length > 3 && (
                          <Badge variant="secondary" className="text-xs">
                            +{project.technologies.length - 3} more
                          </Badge>
                        )}
                      </div>
                    )}

                    {/* Buttons */}
                    <div className="flex gap-2">
                      {project.demo_url && (
                        <Button
                          size="sm"
                          variant="outline"
                          className="flex-1"
                          asChild
                        >
                          <a href={project.demo_url} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Demo
                          </a>
                        </Button>
                      )}
                      {project.github_url && (
                        <Button
                          size="sm"
                          variant="outline"
                          className="flex-1"
                          asChild
                        >
                          <a href={project.github_url} target="_blank" rel="noopener noreferrer">
                            <Github className="w-4 h-4 mr-2" />
                            Code
                          </a>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        )}

        {/* Empty State */}
        {filteredProjects.length === 0 && !isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <Filter className="w-16 h-16 mx-auto text-gray-400 dark:text-gray-500 mb-4" />
            <p className="text-xl text-gray-500 dark:text-gray-400">
              No projects found in this category
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
