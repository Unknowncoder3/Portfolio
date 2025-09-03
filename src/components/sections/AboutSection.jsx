
import React from "react";
import { motion } from "framer-motion";
import { Brain, BarChart3, Code, Database, TrendingUp, Users } from "lucide-react";
import { Card, CardContent } from "../ui/card";


const experience = [

  {
    title: "Data Mining Analyst",
    company: "Ck and Sons Textiles",
    period: "Aug 2023 - Oct 2023",
    description: "Analyzed customer behavior patterns and created dashboards that drove strategic business decisions.",
    achievements: ["Created 20+ executive dashboards", "Identified $500k cost savings", "Improved data accuracy by 40%"]
  }
];

const certifications = [
  "AWS Certified Machine Learning Specialist",
  "Google Cloud Professional Data Engineer", 
  "TensorFlow Developer Certificate",
  "Microsoft Azure Data Scientist Associate"
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden transition-all duration-700">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-purple-50/20 to-indigo-50/30 dark:from-blue-950/20 dark:via-purple-950/10 dark:to-indigo-950/20 transition-all duration-700"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-700">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mx-auto mb-8 transition-all duration-700"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed transition-colors duration-700">
            I'm a passionate data analyst and machine learning Engineer with 2+ years of experience turning raw data into strategic insights. 
            I specialize in machine learning, statistical analysis, and creating data-driven solutions that drive business growth.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Experience Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 transition-colors duration-700">Professional Journey</h3>
            <div className="space-y-6">
              {experience.map((job, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <motion.div 
                          className="w-3 h-3 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 rounded-full mt-2"
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
                        />
                        <div className="flex-1">
                          <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-1 transition-colors duration-700">
                            {job.title}
                          </h4>
                          <p className="text-blue-600 dark:text-blue-400 font-medium mb-3 transition-colors duration-700">
                            {job.company} • {job.period}
                          </p>
                          <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-3 transition-colors duration-700">
                            {job.description}
                          </p>
                          <div className="space-y-1">
                            {job.achievements.map((achievement, i) => (
                              <p key={i} className="text-sm text-gray-500 dark:text-gray-400 flex items-center">
                                <span className="w-1 h-1 bg-blue-500 dark:bg-blue-400 rounded-full mr-2"></span>
                                {achievement}
                              </p>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certifications & Education */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 transition-colors duration-700">Certifications</h3>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3 p-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30 rounded-lg border border-blue-100 dark:border-blue-800 transition-all duration-700"
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                    <span className="font-medium text-gray-800 dark:text-gray-200 transition-colors duration-700">{cert}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-700">Education</h3>
              <Card className="border-none shadow-lg bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700">
                <CardContent className="p-6">
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white transition-colors duration-700">
                    B.tech in Computer Science and Business Systems
                  </h4>
                  <p className="text-blue-600 dark:text-blue-400 font-medium transition-colors duration-700">
                    Asansol Engineering College • 2026
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 mt-2 transition-colors duration-700">
                    Specialized in Machine Learning and Statistical Modeling
                  </p>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
