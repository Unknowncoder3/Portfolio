const projects = [
  {
    id: 1,
    title: "Customer Churn Prediction",
    description: "ML model to predict customer churn using logistic regression and random forests.",
    category: "ML",
    image: "/projects/churn.jpg",  // put this inside /public/projects/
    github: "https://github.com/yourusername/churn-prediction",
    demo: "https://churn-demo.vercel.app",
  },
  {
    id: 2,
    title: "Sales Dashboard",
    description: "An interactive Power BI dashboard for analyzing regional sales performance.",
    category: "Visualization",
    image: "/projects/sales.jpeg",
    github: "https://github.com/yourusername/sales-dashboard",
    demo: "https://sales-dashboard-demo.vercel.app",
  },
  {
    id: 3,
    title: "Market Basket Analysis",
    description: "Implemented association rule mining (Apriori) for product recommendations.",
    category: "Analysis",
    image: "/projects/market.jpg",
    github: "https://github.com/yourusername/market-basket",
    demo: "",
  },
];

export default projects;
