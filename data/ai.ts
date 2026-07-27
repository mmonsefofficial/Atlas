import { RoadmapTopic } from "@/types/roadmap";

export const aiRoadmapTopic: RoadmapTopic[] = [
  /*===============================================
                Python Fundamentals
   =============================================*/
  {
    id: "python-fundamentals",
    logo: "/logos/python.svg",
    title: "Python Fundamentals",
    description: "Build a solid foundation in python programming, the primary language used for Artificial Intelligence, Machine Learning, Data Science, and Automation.",
    difficulty: "Beginner",
    duration: "2 Weeks",
    learningPath: [
      "Installing Python",
      "Variables",
      "Data Types",
      "Operators",
      "Input & Output",
      "Conditional Statements",
      "Loops",
      "Functions",
      "Lists",
      "Tuples",
      "Sets",
      "Dictionaries",
      "Modules & Packages",
      "File Handling",
      "Exception Handling",
      "Object-Orianted Programming",
      "Virtual Environments",
      "Python Best Practices",
    ],
    documentation: [
      {
      id:"python-docs",
      title: "Python Official Documentation",
      url:"https://docs.python.org/3/",
      recommended:true,
      },
      {
        id:"python-tutorial",
        title:"The Python Tutorial",
        url:"https://docs.python.org/3/tutorial/",
      },
      {
        id:"real-python",
        title:"Real Python",
        url:"https://realpython.com/",
      },
      {
        id:"w3schools-python",
        title:"W3Schools Python Tutorial",
        url:"https://www.w3schools.com/python/",
      },
    ],
    videos:[
      {
        id:"fcc-python",
        title:"Python for Beginners - freeCodeCamp",
        duration:"8h 36m",
        url:"https://youtu.be/oDOw5tB3Udw?si=gFnI2hDpPztf7PCM",
      },
      {
        id:"bro-code-python",
        title:"Python Full Course for Beginners - Bro Code",
        duration:"12h",
        url:"https://youtu.be/ix9cRaBkVe0?si=YlymRRt__T-wJacT",
      },
    ],

    practice: [
  {
    id:"leetcode",
    title: "LeetCode",
    description: "Practice Python through algorithmic coding challenges.",
    url: "https://leetcode.com/",
  },
  {
    id:"exercism",
    title: "Exercism",
    description: "Interactive Python exercises with mentor feedback.",
    url: "https://exercism.org/tracks/python",
  },
  {
    id:"hackerrank",
    title: "Hacker Rank",
    description: "Improve Python programming through structured challenges.",
    url: "https://www.hackerrank.com/domains/python",
  },
],
    
    projects: [
      {
        title:"Build a Command-Line Calculator",
        difficulty:"Beginner",
      },
      {
        title:"Student Management System",
        difficulty:"Intermediate",
      },
      {
        title:"Personal Expense Tracker Using OOP",
        difficulty:"Advanced",
      },
    ],

    tools:[
      {
        title:"Visual Studio Code",
        url:"https://code.visualstudio.com/",
      },
      {
        title:"Python",
        url:"https://www.python.org/",
      },
      {
        title:"Pycharm Community Edition",
        url:"https://www.jetbrains.com/pycharm/",
      },
    ],

  },
  /*===============================================
            Mathematics for AI
   =============================================*/
  {
    id: "mathematics-for-ai",
    logo: "/logos/math.svg",
    title: "Mathematics for AI",
    description: "Build the mathematical foundation required for Machine Learning and Deep Learning, including linear algebra, calculus, probability, and statistics.",
    difficulty: "Beginner",
    duration: "3 Weeks",
    learningPath: [
      "Why Mathematics Matter in AI",
      "Scalars, Vectors & Matrices",
      "Matrix Operations",
      "Matrix Multiplication",
      "Identity & Inverse Matrices",
      "Linear Transformations",
      "Eigenvalues & Eigenvectors",
      "Derivatives",
      "Partial Derivatives",
      "Gradient & Gradient Descent",
      "Limits",
      "Probability Basics",
      "Conditional Probability",
      "Bayes' Theorem",
      "Random Variables",
    "Probalitiy Distributions",
    "Mean, Median & Mode",
    "Variance & Standard Deviation",
    "Correlation",
    "Optimization Basics",
    ],
    documentation: [
      {
      id:"3blue1brown",
      title: "Essence of Linear Algebra",
      url:"https://www.3blue1brown.com/topics/linear-algebra",
      recommended:true,
      },
      {
        id:"khan-math",
        title:"Khan Academy Mathematics",
        url:"https://www.khanacademy.org/math",
      },
      {
        id:"deeplearning-math",
        title:"Mathematics for Machine Learning",
        url:"https://mml-book.github.io/",
      },
    ],
    videos:[
      {
        id:"linear-algebra-course",
        title:"Linear Algebra Full Course",
        duration:"11h 40m",
        url:"https://youtu.be/JnTa9XtvmfI?si=ihBCX5fUCiMB-ZRg",
      },
      {
        id:"probability-statistics",
        title:"Probability & Statistics for Machine Learning",
        duration:"8h 15m",
        url:"https://youtu.be/xxpc-HPKN28?si=zg9UAODN84vDEEwK",
      },
    ],

    practice: [
  {
    id:"khanacademy",
    title: "Khan Academy",
    description: "Practice calculus, linear algebra, statistics and probability.",
    url: "https://www.khanacademy.org/",
  },
  {
    id:"briliant",
    title: "Brilliant",
    description: "Interactive mathematics and probability courses.",
    url: "https://brilliant.org/",
  },
  {
    id:"mathisfun",
    title: "Math is Fun",
    description: "Easy-to-understand explenations for mathematical concepts.",
    url: "https://www.mathsisfun.com/",
  },
],
    
    projects: [
      {
        title:"Build a Matrix Calculator in Python",
        difficulty:"Beginner",
      },
      {
        title:"Implement Gradient Descent from Scratch",
        difficulty:"Intermediate",
      },
      {
        title:"Visualize Probability Distributions with Python",
        difficulty:"Advanced",
      },
    ],

    tools:[
      {
        title:"NumPy",
        url:"https://numpy.org/",
      },
      {
        title:"Desmos Graphing Calculator",
        url:"https://www.desmos.com/calculator",
      },
      {
        title:"GeoGebra",
        url:"https://www.geogebra.org/",
      },
    ],

  },
  /*===============================================
                    Numpy
   =============================================*/
  {
    id: "numpy",
    logo: "/logos/numpy.svg",
    title: "NumPy",
    description: "Learn Numpy, the fundamental library for numerical computing in Python, used extensively in Machine Learning, Data Science, and Artificial Intelligence.",
    difficulty: "Beginner",
    duration: "2 Weeks",
    learningPath: [
      "Introduction to NumPy",
      "Installing NumPy",
      "Creating Arrays",
      "Array Attributes",
      "Indexing & Slicing",
      "Reshaping Arrays",
      "Broadcasting",
      "Vectorized Operations",
      "Mathematical Functions",
      "Statistical Functions",
      "Sorting & Searching",
      "Stacking & Splitting Arrays",
      "Random Number Generation",
      "Linear Algebra with NumPy",
      "Performance Optimization",
    ],
    documentation: [
      {
      id:"numpy-docs",
      title: "NumPy Documentation",
      url:"https://numpy.org/doc/",
      recommended:true,
      },
      {
      id:"numpy-user-guide",
      title: "NumPy User Guide",
      url:"https://numpy.org/doc/stable/user/",
      
      },
      {
        id:"numpy-quickstart",
        title:"NumPy Quickstart",
        url:"https://numpy.org/doc/stable/user/quickstart.html",
      },
    ],
    videos:[
      {
        id:"numpy-course",
        title:"NumPy Tutorial for Beginners",
        duration:"1h",
        url:"http://www.youtube.com/watch?v=VXU4LSAQDSc",
      },
      {
        id:"nmpy-freecodecamp",
        title:"NumPy Full Course",
        duration:"1h",
        url:"http://www.youtube.com/watch?v=QUT1VHiLmmI",
      },
    ],

    practice: [
  {
    id:"kaggle-python",
    title: "Kaggle Learn - Python",
    description: "Practice NumPy through interactive notebooks.",
    url: "https://www.kaggle.com/learn",
  },
  {
    id:"exercism",
    title: "Exercism Python",
    description: "Strengthen your Python and NumPy skills.",
    url: "https://exercism.org/tracks/python",
  },
  {
    id:"leetcode",
    title: "LeetCode",
    description: "Apply NumPy concepts while solving programming problems.",
    url: "https://leetcode.com/",
  },
],
    
    projects: [
      {
        title:"Build a Matrix Calculator",
        difficulty:"Beginner",
      },
      {
        title:"Implement Image Filters Using NumPy",
        difficulty:"Intermediate",
      },
      {
        title:"Create a Mini Linear Algebra Library",
        difficulty:"Advanced",
      },
    ],

    tools:[
      {
        title:"NumPy",
        url:"https://numpy.org/",
      },
      {
        title:"Google Colab",
        url:"https://colab.research.google.com/",
      },
      {
        title:"Jupyter Notebook",
        url:"https://jupyter.org/",
      },
    ],

  },
  /*===============================================
            Pandas
   =============================================*/
  {
  id: "pandas",
  logo: "/logos/pandas.svg",
  title: "Pandas",
  description: "Learn how to analyze, clean, manipulate, and prepare real-world datasets using Pandas, the most popular data analysis library in Python.",
  difficulty: "Beginner",
  duration: "2 Weeks",

  learningPath: [
    "Introduction to Pandas",
    "Installing Pandas",
    "Series",
    "DataFrames",
    "Reading CSV Files",
    "Reading Excel Files",
    "Writing Data",
    "Selecting Rows & Columns",
    "Filtering Data",
    "Sorting Values",
    "Handling Missing Values",
    "Removing Duplicates",
    "Grouping Data",
    "Aggregations",
    "Merging DataFrames",
    "Joining DataFrames",
    "Concatenation",
    "Data & Time Operations",
    "Feature Engineering Basics",
    "Best Practices",
  ],

  documentation: [
    {
      id: "pandas-docs",
      title: "Pandas Documentation",
      url: "https://pandas.pydata.org/docs/",
      recommended: true,
    },
    {
      id: "pandas-user-guide",
      title: "Pandas User Guide",
      url: "https://pandas.pydata.org/docs/user_guide/index.html",
    },
    {
      id: "10-minutes",
      title: "10 Minutes to Pandas",
      url: "https://pandas.pydata.org/docs/user_guide/10min.html",
    },
  ],

  videos: [
    {
      id: "pandas-course",
      title: "Pandas Tutorial for Beginners",
      duration: "30m",
      url: "https://youtu.be/EXIgjIBu4EU?si=2drNF6kUCADOVK70",
    },
    {
      id: "fcc-pandas",
      title: "Pandas Full Course",
      duration: "5h",
      url: "https://youtu.be/gtjxAH8uaP0?si=vvq3v5-ZziPOj13Y",
    },
  ],

  practice: [
    {
      id: "kaggle",
      title: "Kaggle Learn - Pandas",
      description: "Interactive Pandas exersices using real datasets.",
      url: "https://www.kaggle.com/learn/pandas",
    },
    {
      id: "dataquest",
      title: "Dataquest",
      description: "Practice data analysis using pandas.",
      url: "https://www.dataquest.io/",
    },
    {
      id: "uci",
      title: "UCI Machine Learning Repository",
      description: "Download datasets to practice data manipulation.",
      url: "https://archive.ics.uci.edu/ml/",
    },
  ],

  projects: [
    {
      title: "Analyze a COVID-19 Dataset",
      difficulty: "Beginner",
    },
    {
      title: "Sales Data Dashboard Preparation",
      difficulty: "Intermediate",
    },
    {
      title: "Build a Complete Data Cleaning Pipeline",
      difficulty: "Advanced",
    },
  ],

  tools: [
    {
      title: "Pandas",
      url: "https://pandas.pydata.org/",
    },
    {
      title: "Jupyter Notebook",
      url: "https://jupyter.org/",
    },
    {
      title: "Google Colab",
      url: "https://colab.research.google.com/",
    },
  ],
},
 /*===============================================
                    Data Visualization
   =============================================*/
  {
  id: "data-visualization",
  logo: "/logos/matplotlib.svg",
  title: "Data Visualization",
  description: "Learn how to visualize datasets using Python to better understand patterns, trends, correlations, and insights before building Machine Learning models.",
  difficulty: "Beginner",
  duration: "2 Weeks",

  learningPath: [
    "Why Data Visualization Matters",
    "Introduction to Matplotlib",
    "Introduction to Seaborn",
    "Introduction to Plotly",
    "Line Charts",
    "Bar Charts",
    "Scatter Plots",
    "Histograms",
    "Box Plots",
    "Pie Charts",
    "Heatmaps",
    "Pair Plots",
    "Distribution Plots",
    "Correlation Matrix",
    "Subplots",
    "Customizing Figures",
    "Interactive Visualizations",
    "Visualization Best Practices",
  ],

  documentation: [
    {
      id: "matplotlib-docs",
      title: "Matplotlib Documentation",
      url: "https://matplotlib.org/stable/",
      recommended: true,
    },
     {
      id: "seaborn-docs",
      title: "Seaborn Documentation",
      url: "https://seaborn.pydata.org/",
      
    },
     {
      id: "plotly-docs",
      title: "Plotly Python Documentation",
      url: "https://plotly.com/python/",
      
    },
  ],

  videos: [
    {
      id: "matplotlib-course",
      title: "Matplotlib Tutorial for Beginners",
      duration: "35m",
      url: "https://youtu.be/7Lc2AxiM17o?si=3VBrbqgbvHmUENC6",
    },
    {
      id: "seaborn-course",
      title: "Seaborn Full Course",
      duration: "49m",
      url: "https://youtu.be/39cge_JhVjI?si=05aSJjnnRY2ZUpzL",
    },
  ],

  practice: [
    {
      id: "kaggle",
      title: "Kaggle Learn",
      description: "Practice visualizing real-world datasets.",
      url: "https://www.kaggle.com/learn",
    },
     {
      id: "dataquest",
      title: "Dataquest",
      description: "Interactive data visualization exercises.",
      url: "https://www.dataquest.io/",
    },
    {
      id: "uci",
      title: "UCI Machine Learning Repository",
      description: "Download datasets to create your own visualizations.",
      url: "https://archive.ics.uci.edu/ml/",
    },
  ],

  projects: [
    {
      title: "Analyze Global COVID-19 Data",
      difficulty: "Beginner",
    },
    {
      title: "Create an Interactive Sales Dashboard",
      difficulty: "Intermediate",
    },
    {
      title: "Visualize an End-to-End Machine Learning Dataset",
      difficulty: "Advanced",
    },
  ],

  tools: [
    {
      title: "Matplotlib",
      url: "https://matplotlib.org/",
    },
    {
      title: "Seaborn",
      url: "https://seaborn.pydata.org/",
    },
    {
      title: "Plotly",
      url: "https://plotly.com/python/",
    },
  ],
},
 /*===============================================
              DATA cleaning & preprocessing 
   =============================================*/
  {
  id: "data-cleaning-preprocessing",
  logo: "/logos/scikit-learn.svg",
  title: "Data Cleaning & Preprocessing",
  description: "Learn how to clean, transform, and prepare datasets for Machine Learning by handling missing values, encoding categorical data, scaling features, and building reliable preprocessing pipelines.",
  difficulty: "Intermediate",
  duration: "3 Weeks",

  learningPath: [
    "Introduction to Data Preprocessing",
    "Understanding Dataset Quality",
    "Handling Missing Values",
    "Removing Duplicate Data",
    "Detecting & Handling Outliers",
    "Data Transformation",
    "Feature Scaling",
    "Normalization",
    "Standardization",
    "Encoding Categorical Variables",
    "Label Encoding",
    "One-Hot Encoding",
    "Feature Engineering",
    "Feature Selection",
    "Train/Test Split",
    "Cross Validation Basics",
    "Building Preprocessing Pipelines",
    "Preventing Data Leakage",
  ],

  documentation: [
    {
      id: "sklearn-preprocessing",
      title: "Scikit-learn Preprocessing",
      url: "https://scikit-learn.org/stable/modules/preprocessing.html",
      recommended: true,
    },
    {
      id: "sklearn-impute",
      title: "Scikit-learn Imputation",
      url: "https://scikit-learn.org/stable/modules/impute.html",
      recommended: true,
    },
    {
      id: "pandas-missing",
      title: "Pandas Missing Data",
      url: "https://pandas.pydata.org/docs/user_guide/missing_data.html",
      recommended: true,
    },
  ],

  videos: [
    {
      id: "data-preprocessing-course",
      title: "Data Preprocessing for Machine Learning",
      duration: "2h 48m",
      url: "https://youtu.be/fHFOANOHwh8?si=liLGzoDvfkW7kz5U",
    },
    {
      id: "feature-engineering-course",
      title: "Feature Engineering Tutorial",
      duration: "1h 11m",
      url: "https://youtu.be/uu8um0JmYA8?si=wyfKJAMAQwlapmQ-",
    },
  ],

  practice: [
    {
      id: "kaggle-data-cleaning",
      title: "Kaggle Learn - Data Cleaning",
      description: "Interactive exercises for cleaning real-world datasets.",
      url: "https://www.kaggle.com/learn/data-cleaning",
    },
    {
      id: "uci",
      title: "UCI Machine Learning Repository",
      description: "Practice preprocessing using public datasets.",
      url: "https://archive.ics.uci.edu/ml/",
    },
    {
      id: "openml",
      title: "OpenML",
      description: "Download datasets for preprocessing and machine learning practice.",
      url: "https://www.openml.org/",
    },
  ],

  projects: [
    {
      title: "Clean and Prepare a Housing Prices Dataset",
      difficulty: "Beginner",
    },
    {
      title: "Build a Complete Data Preprocessing Pipeline",
      difficulty: "Intermediate",
    },
    {
      title: "Compare Different Feature Engineering Techniques",
      difficulty: "Advanced",
    },
  ],

  tools: [
    {
      title: "Pandas",
      url: "https://pandas.pydata.org/",
    },
    {
      title: "Scikit-learn",
      url: "https://scikit-learn.org/",
    },
    {
      title: "Google Colab",
      url: "https://colab.research.google.com/",
    },
  ],
},
 /*===============================================
            Machine learning fundamentals
   =============================================*/
   {
  id: "machine-learning-fundamentals",
  logo: "/logos/machine-learning.svg",
  title: "Machine Learning Fundamentals",
  description: "Learn the core concepts of Machine Learning, including how models learn from data, different learning paradigms, the ML workflow, and common applications.",
  difficulty: "Intermediate",
  duration: "3 Weeks",

  learningPath: [
    "What is Machine Learning?",
    "AI vs Machine Learning vs Deep Learning",
    "Types of Machine Learning",
    "Supervised Learning",
    "Unsupervised Learning",
    "Reinforcement Learning",
    "Machine Learning Workflow",
    "Features & Labels",
    "Training, Validation, & Testing Sets",
    "Bias & Variance",
    "Overfitting",
    "Underfitting",
    "Feature Engineering Basics",
    "Introduction to ML Algorithms",
    "Choosing the Right Algorithm",
    "Real-World Machine Learning Applications",
  ],

  documentation: [
    {
      id: "sklearn-user-guide",
      title: "Scikit-learn User Guide",
      url: "https://scikit-learn.org/stable/user_guide.html",
      recommended: true,
    },
    {
      id: "google-ml-crash-course",
      title: "Google Machine Learning Crash Course",
      url: "https://developers.google.com/machine-learning/crash-course",
    },
    {
      id: "ibm-ml",
      title: "IBM Machine Learning",
      url: "https://www.ibm.com/topics/machine-learning",
    },
  ],

  videos: [
    {
      id: "ml-introduction",
      title: "Machine Learning Explained",
      duration: "3m",
      url: "https://youtu.be/PeMlggyqz0Y?si=lmYejnxMAmS2VKf2",
    },
    {
      id: "google-ml-course",
      title: "Machine Learning Full Course",
      duration: "18h",
      url: "https://youtu.be/hDKCxebp88A?si=t3HoU5JImwyRij4K",
    },
  ],

  practice: [
    {
      id: "kaggle-intro-ml",
      title: "Kaggle Learn - Intro to Machine Learning",
      description: "Hands-on beginner Machine Learning course.",
      url: "https://www.kaggle.com/learn/intro-to-machine-learning",
    },
    {
      id: "google-crash-course",
      title: "Google ML Crash Course",
      description: "Interactive exercises and quizzes.",
      url: "https://developers.google.com/machine-learning/crash-course",
    },
    {
      id: "uci",
      title: "UCI Machine Learning Repository",
      description: "Download datasets for practicing Machine Learning.",
      url: "https://archive.ics.uci.edu/ml/",
    },
  ],

  projects: [
    {
      title: "Predict Student Performance",
      difficulty: "Beginner",
    },
    {
      title: "House Price Prediction",
      difficulty: "Intermediate",
    },
    {
      title: "End-to-End Machine Learning Pipeline",
      difficulty: "Advanced",
    },
    
  ],

  tools: [
    {
      title: "Scikit-learn",
      url: "https://scikit-learn.org/",
    },
    {
      title: "Jupyter Notebook",
      url: "https://jupyter.org/",
    },
    {
      title: "Google Colab",
      url: "https://colab.research.google.com/",
    },
  ],
},
 /*===============================================
                 Supervised-learning
   =============================================*/
  {
  id: "supervised-learning",
  logo: "/logos/supervised-learning.png",
  title: "Supervised Learning",
  description: "Learn how to train Machine Learning models using labeled data for regression and classification tasks with industry-standard algorithms.",
  difficulty: "Intermediate",
  duration: "4 Weeks",

  learningPath: [
    "What is Supervised Learning?",
    "Regression vs Classification",
    "Preparing Training Data",
    "Linear Regression",
    "Multiple Linear Regression",
    "Logistic Regression",
    "K-Nearest Neighbors (KNN)",
    "Decision Trees",
    "Random Forest",
    "Support Vector Machines (SVM)",
    "Naive Bayes",
    "Gradient Boosting",
     "XGBoost Basics",
    "Feature Importance",
    "Hyperparameter Tuning",
    "Real-World Applications",
  ],

  documentation: [
    {
      id: "sklearn-supervised",
      title: "Scikit-learn Supervised Learning",
      url: "https://scikit-learn.org/stable/supervised_learning.html",
      recommended: true,
    },
    {
      id: "xgboost-docs",
      title: "XGBoost Documentation",
      url: "https://xgboost.readthedocs.io/",
    },
    {
      id: "google-ml-classification",
      title: "Google ML Classification",
      url: "https://developers.google.com/machine-learning/crash-course/classification",
    
    },
  ],

  videos: [
    {
      id: "supervised-course",
      title: "Supervised Machine Learning",
      duration: "7m",
      url: "https://youtu.be/W01tIRP_Rqs?si=1lMVn8zN_O6ItKf3",
    },
    {
      id: "classification-course",
      title: "Classification & Regression Explained",
      duration: "3m",
      url: "https://youtu.be/TJveOYsK6MY?si=WR_cQqCoTXU7j1go",
    },
  ],

  practice: [
    {
      id: "kaggle-intro-ml",
      title: "Kaggle Learn - Intro to Machine Learning",
      description: "Practice supervised learning using real datasets.",
      url: "https://www.kaggle.com/learn/intro-to-machine-learning",
    },
    {
      id: "uci",
      title: "UCI Machine Learning Repository",
      description: "Explore datasets for regression and classification.",
      url: "https://archive.ics.uci.edu/ml/",
    },
    {
      id: "openml",
      title: "OpenML",
      description: "Public datasets for supervised learning experiments.",
      url: "https://www.openml.org/",
    },
  ],

  projects: [
    {
      title: "House Price Prediction",
      difficulty: "Beginner",
    },
    {
      title: "Customer Churn Prediction",
      difficulty: "Intermediate",
    },
    {
      title: "Credit Card Fraud Detection",
      difficulty: "Advanced",
    },
  ],

  tools: [
    {
      title: "scikit-learn",
      url: "https://scikit-learn.org/",
    },
    {
      title: "XGBoost",
      url: "https://xgboost.readthedocs.io/",
    },
    {
      title: "Google Colab",
      url: "https://colab.research.google.com/",
    },
  ],
},
/*===============================================
         Unsupervised learning
   =============================================*/
   {
  id: "unsupervised-learning",
  logo: "/logos/unsupervised-learning.png",
  title: "Unsupervised Learning",
  description: "Learn how to uncover hidden patterns and relationships in unlabeled data using clustering, dimensionality reduction, and anomaly detection techniques.",
  difficulty: "Intermediate",
  duration: "3 Weeks",

  learningPath: [
    "What is Unsupervised Learning?",
    "When to Use Unsupervised Learning",
    "Clustering vs Classification",
    "K-Means Clustering",
    "Choosing the Number of Clusters",
    "Hierarchical Clustering",
    "DBSCAN",
    "Dimensionality Reduction",
    "Principal Component Analysis (PCA)",
    "t-SNE Basics",
    "Anomaly Detection",
    "Association Rule Learning",
     "Customer Segmentation",
    "Recommendation Systems Basics",
    "Real-World Applications",
  ],

  documentation: [
    {
      id: "sklearn-unsupervised",
      title: "Scikit-learn Unsupervised Learning",
      url: "https://scikit-learn.org/stable/unsupervised_learning.html",
      recommended: true,
    },
    {
      id: "sklearn-clustering",
      title: "Clustering - Scikit learn",
      url: "https://scikit-learn.org/stable/modules/clustering.html",
      
    },
    {
      id: "sklearn-decomposition",
      title: "Dimensionality Reduction - Scikit learn",
      url: "https://scikit-learn.org/stable/modules/decomposition.html",
      
    },
  ],

  videos: [
    {
      id: "unsupervised-learning-course",
      title: "Unsupervised Machine Learning",
      duration: "1h 18m",
      url: "https://www.youtube.com/live/461Opp1TShk?si=6SZea8c6QEmkquJO",
    },
    {
      id: "clustering-explained",
      title: "K-Means ",
      duration: "7m",
      url: "https://youtu.be/4b5d3muPQmA?si=WMEQHSspHnexH8Lx",
    },
     {
      id: "pca-explained",
      title: "PCA Explained",
      duration: "9m",
      url: "https://youtu.be/ZgyY3JuGQY8?si=FMB9HBKhs7mKnrQq",
    },
  ],

  practice: [
    {
      id: "kaggle-intermediate-ml",
      title: "Kaggle learn",
      description: "Practice clustering and dimensionality reduction using real datasets.",
      url: "https://www.kaggle.com/learn",
    },
    {
      id: "openml",
      title: "OpenML",
      description: "Download datasets for clustering experiments.",
      url: "https://www.openml.org/",
    },
    {
      id: "uci",
      title: "UCI Machine Learning Repository",
      description: "Public datasets for unsupervised learning practice.",
      url: "https://archive.ics.uci.edu/ml/",
    },
  ],

  projects: [
    {
      title: "Customer Segmentation with K-Means",
      difficulty: "Beginner",
    },
    {
      title: "Movie Recommendation Prototype",
      difficulty: "Intermediate",
    },
    {
      title: "Network Intrusion Anomaly Detection",
      difficulty: "Advanced",
    },
  ],

  tools: [
    {
      title: "Scikit-learn",
      url: "https://sciki-learn.org/",
    },
    {
      title: "Google Colab",
      url: "https://colab.research.google.com/",
    },
    {
      title: "Jupyter Notebook",
      url: "https://jupyter.org/",
    },
    
  ],
},
/*===============================================
             Model Evaluation
   =============================================*/
   {
  id: "model-evaluation",
  logo: "/logos/model-evaluation.svg",
  title: "Model Evaluation",
  description: "Learn how to evaluate, compare, and improve Machine Learning models using industry-standard metrics, validation techniques, and hyperparameter optimization.",
  difficulty: "Intermediate",
  duration: "2 Weeks",

  learningPath: [
    "Why Model Evaluation Matters",
    "Training vs Validation vs Test Sets",
    "Cross Validation",
    "Confusion Matrix",
    "Accuracy",
    "Precision",
    "Recall",
    "F1 Score",
    "ROC Curve",
    "AUC Score",
    "Mean Absolute Error (MAE)",
    "Mean Squared Error (MSE)",
     "Root Mean Squared Error (RMSE)",
     "R² Score",
     "Bias vs Variance",
     "Learning Curves",
     "Hyperparameter Tuning",
     "Grid Search",
     "Random Search",
     "Choosing the Best Model",
  ],

  documentation: [
    {
      id: "sklearn-model-evalution",
      title: "Scikit-learn Model Evaluation Guide",
      url: "https://scikit-learn.org/stable/model_selection.html",
      recommended: true,
    },
    {
      id: "sklearn-metrics",
      title: "Scikit-learn Metrics",
      url: "https://scikit-learn.org/stable/modules/model_evaluation.html",
      
    },
    {
      id: "google-ml-evaluation",
      title: "Google Machine Learning Crash Course - Evaluation",
      url: "https://developers.google.com/machine-learning/crash-course/classification/accuracy-precision-recall",
      
    },
  ],

  videos: [
    {
      id: "model-evaluation-course",
      title: "Model Evaluation Metrics Explained",
      duration: "50m",
      url: "https://youtu.be/lt1YxJ_8Jzs?si=fc0HXZdEQIe7K2NX",
    },
    {
      id: "cross-validation-course",
      title: "Cross Validation & Hyperparameter Tuning",
      duration: "25m",
      url: "https://youtu.be/gJo0uNL-5Qw?si=5eB24MT0J_8gGZU0",
    },
  ],

  practice: [
    {
      id: "kaggle-intermediate-ml",
      title: "Kaggle Learn - Intermediate Machine Learning",
      description: "Practice evaluating and improving machine learning models.",
      url: "https://www.kaggle.com/learn/intermediate-machine-learning",
    },
     {
      id: "openml",
      title: "OpenML",
      description: "Experiment with datasets and compare model performance.",
      url: "https://www.openml.org/",
    },
    {
      id: "uci",
      title: "UCI Machine Learning Repository",
      description: "Use public datasets to evaluate different ML algorithms.",
      url: "https://archive.ics.uci.edu/ml/",
    },
  ],

  projects: [
    {
      title: "Compare Multiple Classification Models",
      difficulty: "Beginner",
    },
    {
      title: "Optimize a Regression Model with Grid Search",
      difficulty: "Intermediate",
    },
    {
      title: "Build an End-to-End Model Selection Pipeline",
      difficulty: "Advanced",
    },
  ],

  tools: [
    {
      title: "Scikit-learn",
      url: "https://scikit-learn.org/",
    },
    {
      title: "MLflow",
      url: "https://mlflow.org/",
    },
    {
      title: "Weights & Biases",
      url: "https://wandb.ai/",
    },
    
  ],
},
/*===============================================
               Scikit-learn
   =============================================*/
  {
  id: "scikit-learn",
  logo: "/logos/scikit-learn.svg",
  title: "Scikit-learn",
  description: "Master Scikit-learn, the most popular Python library for classical Machine Learning, and learn how to build complete ML pipelines from preprocessing to model deployment.",
  difficulty: "Intermediate",
  duration: "3 Weeks",

  learningPath: [
    "Introduction to Scikit-learn",
    "Installing Scikit-learn",
    "Datasets Module",
    "Loading Built-in Datasets",
    "Train/Test Split",
    "Preprocessing Data",
    "Regression Modules",
    "Clustering Models",
    "Pipelines",
    "Feature Selection",
    "Hyperparameter Tuning",
    "GridSearchCV",
     "RandomizedSearchCV",
     "Model Persistence",
     "Building End-to-End ML Pipelines",
  ],

  documentation: [
    {
      id: "sklearn-docs",
      title: "Scikit-learn Documentation",
      url: "https://scikit-learn.org/stable/",
      recommended: true,
    },
    {
      id: "sklearn-user-guide",
      title: "Scikit-learn User Guide",
      url: "https://scikit-learn.org/stable/user_guide.html",
     
    },
    {
      id: "sklearn-examples",
      title: "Scikit-learn Examples",
      url: "https://scikit-learn.org/stable/auto_examples.html",
     
    },
  ],

  videos: [
    {
      id: "sklearn-course",
      title: "Scikit-learn Full Course",
      duration: "2h 10m",
      url: "https://youtu.be/0B5eIE_1vpU?si=tDbJf7kjguxYUDDd",
    },
    {
      id: "ml-pipeline-course",
      title: "Machine Learning with Scikit-learn",
      duration: "18h",
      url: "https://youtu.be/hDKCxebp88A?si=EKxU_XNOl0d0Qddn",
    },
  ],

  practice: [
    {
      id: "kaggle",
      title: "Kaggle Learn",
      description: "Practice building Machine Learning models with Scikit-learn.",
      url: "https://www.kaggle.com/learn",
    },
    {
      id: "openml",
      title: "OpenML",
      description: "Experiment with datasets using Scikit-learn.",
      url: "https://www.openml.org/",
    },
    {
      id: "uci",
      title: "UCI Machine Learning Repository",
      description: "Use public datasets for machine learning projects.",
      url: "https://archive.ics.uci.edu/ml/",
    },
  ],

  projects: [
    {
      title: "Iris Flower Classification",
      difficulty: "Beginner",
    },
    {
      title: "Customer Churn Prediction",
      difficulty: "Intermediate",
    },
    {
      title: "End-to-End Machine Learning Pipeline",
      difficulty: "Advanced",
    },
  ],

  tools: [
    {
      title: "Scikit-learn",
      url: "https://scikit-learn.org/",
    },
    {
      title: "Google Colab",
      url: "https://colab.research.google.com/",
    },
    {
      title: "Jupyter Notebook",
      url: "https://jupyter.org/",
    },
    
  ],
},
/*===============================================
             Deep learning fundamentals
   =============================================*/
   {
  id: "deep-learning-fundamentals",
  logo: "/logos/deep-learning.svg",
  title: "Deep Learning Fundamentals",
  description: "Learn the foundations of Deep Learning, including artificial neural networks, activation functions, backpropagation, optimization, and the concepts behind today's most powerful AI systems.",
  difficulty: "Intermediate",
  duration: "3 Weeks",

  learningPath: [
    "Introduction to Deep Learning",
    "AI vs Machine Learning vs Deep Learning",
    "Biological Neurons vs Artificial Neurons",
    "Perceptron",
    "Artificial Neural Networks (ANNs)",
    "Forward Propagation",
    "Activation Functions",
    "Loss Functions",
    "Gradient Descent Review",
    "Backpropagation",
    "Epochs",
    "Batch Size",
     "Learning Rate",
     "Optimizers (SGD, Adam, RMSProp)",
     "Regularization",
     "Dropout",
     "Batch Normalization",
     "Overfitting in Deep Learning",
     "Training Deep Neural Networks",
     "Real-World Deep Learning Applications",
  ],

  documentation: [
    {
      id: "deeplearningbook",
      title: "Deep Learning Book",
      url: "https://www.deeplearningbook.org/",
      recommended: true,
    },
    {
      id: "tensorflow-guide",
      title: "TensorFlow Guide",
      url: "https://www.tensorflow.org/guide",
     
    },
    {
      id: "keras-guides",
      title: "Keras Guides",
      url: "https://keras.io/guides/",
      
    },
  ],

  videos: [
    {
      id: "deep-learning-course",
      title: "Deep Learning Fundamentals",
      duration: "18m",
      url: "https://youtu.be/aircAruvnKk?si=JRf6deUnBYpZRIAV",
    },
    {
      id: "neural-network-explained",
      title: "Neural Networks Explained",
      duration: "18m",
      url: "https://youtu.be/aircAruvnKk?si=f8hB8bCVJO4TNxmp",
    },
  ],

  practice: [
    {
      id: "kaggle-dl",
      title: "Kaggle Learn - Intro to Deep Learning",
      description: "Hands-on deep learning exercises using TensorFlow.",
      url: "https://www.kaggle.com/learn/intro-to-deep-learning",
    },
    {
      id: "google-colab",
      title: "Google Colab",
      description: "Train deep learning models in the cloud using free GPUs.",
      url: "https://colab.research.google.com/",
    },
    {
      id: "tensorflow-playground",
      title: "TensorFlow Playground",
      description: "Interactive neural network visualization.",
      url: "https://playground.tensorflow.org/",
    },
  ],

  projects: [
    {
      title: "Build Your First Neural Network",
      difficulty: "Beginner",
    },
    {
      title: "Classify Handwritten Digits (MNIST)",
      difficulty: "Intermediate",
    },
    {
      title: "Build a Deep Neural Network from Scratch",
      difficulty: "Advanced",
    },
  ],

  tools: [
    {
      title: "TensorFlow",
      url: "https://www.tensorflow.org/",
    },
    {
      title: "Keras",
      url: "https://kares.io/",
    },
    {
      title: "Google Colab",
      url: "https://colab.research.google.com/",
    },
    
  ],
},
/*===============================================
             Neural Networks
   =============================================*/
   {
  id: "neural-networks",
  logo: "/logos/neural-network.svg",
  title: "Neural Networks",
  description: "Learn how Artificial Neural Networks work, how they are designed, trained, and optimized, and understand the architectures that power modern AI applications.",
  difficulty: "Intermediate",
  duration: "3 Weeks",

  learningPath: [
    "Introduction to Neural Networks",
    "Artificial Neurons",
    "Weights & Biases",
    "Network Architecture",
    "Input Layer",
    "Hidden Layers",
    "Output Layer",
    "Forward Propagation",
    "Activation Functions",
    "Loss Functions",
    "Backpropagation",
    "Gradient Descent",
     "Weight Initialization",
     "Vanishing & Exploding Gradients",
     "Batch Normalization",
     "Dropout",
     "Residual Connections",
     "Training Neural Networks",
     "Hyperparameter Tuning",
     "Neural Network Best Practices",
  ],

  documentation: [
    {
      id: "tensorflow-nn",
      title: "TensorFlow Neural Networks Guide",
      url: "https://www.tensorflow.org/guide/keras",
      recommended: true,
    },
    {
      id: "keras-sequential",
      title: "Keras Sequential Model Guide",
      url: "https://keras.io/guides/sequential_model/",
     
    },
    {
      id: "pytorch-nn",
      title: "PyTorch nn Documentation",
      url: "https://pytorch.org/docs/stable/nn.html",
      
    },
  ],

  videos: [
    {
      id: "neural-network-course",
      title: "Neural Networks Explained",
      duration: "18m",
      url: "https://youtu.be/aircAruvnKk?si=-J_ijCMp6kDK2nKx",
    },
    {
      id: "backpropagation-course",
      title: "Backpropagation Explained",
      duration: "13m",
      url: "https://youtu.be/Ilg3gGewQ5U?si=0hDiePe4SMj_kcN9",
    },
  ],

  practice: [
    {
      id: "tensorflow-playground",
      title: "TensorFlow Playground",
      description: "Interactively build and train neural networks in your browser.",
      url: "https://playground.tensorflow.org/",
    },
    {
      id: "kaggle-dl",
      title: "Kaggle Learn - Intro to Deep Learning",
      description: "Hands-on neural network exercises using TensorFlow.",
      url: "https://www.kaggle.com/learn/intro-to-deep-learning",
    },
    {
      id: "google-colab",
      title: "Google Colab",
      description: "Train neural networks using free GPU resources.",
      url: "https://colab.research.google.com/",
    },
  ],

  projects: [
    {
      title: "Build a Neural Network for MNIST Digit Classification",
      difficulty: "Beginner",
    },
    {
      title: "Predict House Prices Using a Neural Network",
      difficulty: "Intermediate",
    },
    {
      title: "Design and Optimize a Deep Neural Network",
      difficulty: "Advanced",
    },
  ],

  tools: [
    {
      title: "TensorFlow",
      url: "https://www.tensorflow.org/",
    },
    {
      title: "Keras",
      url: "https://kares.io/",
    },
    {
      title: "PyTorch",
      url: "https://pytorch.org/",
    },
    
  ],
},
/*===============================================
          tensorflow & keras
   =============================================*/
   {
  id: "tensorflow-keras",
  logo: "/logos/tensorflow.svg",
  title: "TensorFlow & Keras",
  description: "Learn how to build, train, evaluate, and deploy deep learning models using TensorFlow and Keras, the industry's most widely used deep learning framework.",
  difficulty: "Intermediate",
  duration: "4 Weeks",

  learningPath: [
    "Introduction to TensorFlow",
    "Installing TensorFlow",
    "Introduction to Keras",
    "Tensors",
    "Tensor Operations",
    "Sequential API",
    "Functional API",
    "Building Neural Networks",
    "Layers",
    "Dense Layers",
    "Activation Functions",
    "Loss Functions",
     "Optimizers",
     "Metrics",
     "Training Models",
     "Validation",
     "Callbacks",
     "Early Stopping",
     "Model Checkpoints",
     "TensorBoard",
     "Saving & Loading Models",
     "Transfer Learning",
     "Data Pipelines with tf.data",
     "Deploying TensorFlow Models",
  ],

  documentation: [
    {
      id: "tensorflow-docs",
      title: "TensorFlow Documentation",
      url: "https://www.tensorflow.org/guide",
      recommended: true,
    },
    {
      id: "keras-docs",
      title: "Keras Documentation",
      url: "https://keras.io",
     
    },
    {
      id: "tensorflow-api",
      title: "TensorFlow API Reference",
      url: "https://www.tensorflow.org/api_docs",
      
    },
  ],

  videos: [
    {
      id: "tensorflow-course",
      title: "TensorFlow Full Course",
      duration: "6h 52m",
      url: "https://youtu.be/tPYj3fFJGjk?si=awkkZgSDAuwjpOEL",
    },
    {
      id: "keras-course",
      title: "Keras Tutorial for Beginners",
      duration: "2h 47m",
      url: "https://youtu.be/qFJeN9V1ZsI?si=Fn1_MOFcGAUfcniV",
    },
  ],

  practice: [
    {
      id: "kaggle-dl",
      title: "Kaggle Learn - Intro to Deep Learning",
      description: "Practice building TensorFlow models through interactive notebooks.",
      url: "https://www.kaggle.com/learn/intro-to-deep-learning",
    },
    {
      id: "google-colab",
      title: "Google Colab",
      description: "Train TensorFlow models using free GPU resources.",
      url: "https://colab.research.google.com/",
    },
    {
      id: "tensorflow-tutorials",
      title: "TensorFlow Tutorials",
      description: "Official hands-on TensorFlow tutorials.",
      url: "https://www.tensorflow.org/tutorials",
    },
  ],

  projects: [
    {
      title: "Handwritten Digit Recognition (MNIST)",
      difficulty: "Beginner",
    },
    {
      title: "Image Classification with Transfer Learning",
      difficulty: "Intermediate",
    },
    {
      title: "Build an End-to-End Deep Learning Image Classifier",
      difficulty: "Advanced",
    },
  ],

  tools: [
    {
      title: "TensorFlow",
      url: "https://www.tensorflow.org/",
    },
    {
      title: "Keras",
      url: "https://kares.io/",
    },
    {
      title: "TensorBoard",
      url: "https://www.tensorflow.org/tensorboard",
    },
    
  ],
},
/*===============================================
             pytorch
   =============================================*/
   {
  id: "pytorch",
  logo: "/logos/pytorch.svg",
  title: "PyTorch",
  description: "Learn PyTorch, Meta's open-source deep learning framework, and build, train, and deploy neural networks for computer vision, NLP, and modern AI applications.",
  difficulty: "Intermediate",
  duration: "4 Weeks",

  learningPath: [
    "Introduction to PyTorch",
    "Installing PyTorch",
    "PyTorch Tensors",
    "Tensor Operations",
    "Autograd",
    "Automatic Differentiation",
    "Building Neural Networks with torch.nn",
    "Loss Functions",
    "Optimizers",
    "Training Loop",
    "Evaluation Loop",
    "Working with Datasets",
     "DataLoader",
     "Custom Dataset Classes",
     "GPU Training",
     "Transfer Learning",
     "Saving & Loading Models",
     "Inference",
     "PyTorch Best Practices",
     "Introduction to PyTorch Lightning",
  ],

  documentation: [
    {
      id: "pytorch-docs",
      title: "PyTorch Documentation",
      url: "https://pytorch.org/docs/stable/",
      recommended: true,
    },
    {
      id: "pytorch-tutorials",
      title: "PyTorch Tutorials",
      url: "https://pytorch.org/tutorials/",
     
    },
    {
      id: "pytorch-beginner",
      title: "PyTorch Beginner Tutorials",
      url: "https://pytorch.org/tutorials/beginner/basics/intro.html",
      
    },
  ],

  videos: [
    {
      id: "pytorch-course",
      title: "PyTorch Full Course",
      duration: "25h",
      url: "https://youtu.be/V_xro1bcAuA?si=ukLhe3aXV8bn7lI5",
    },
  ],

  practice: [
    {
      id: "learnpytorch",
      title: "Learn PyTorch",
      description: "Hands-on notebooks covering the PyTorch fundamentals.",
      url: "https://www.learnpytorch.io",
    },
    {
      id: "kaggle",
      title: "Kaggle",
      description: "Practice PyTorch using real-world datasets.",
      url: "https://www.kaggle.com/",
    },
    {
      id: "google-colab",
      title: "Google Colab",
      description: "Train PyTorch models using free GPUs.",
      url: "https://colab.research.google.com/",
    },
  ],

  projects: [
    {
      title: "MNIST Digit Classifier with PyTorch",
      difficulty: "Beginner",
    },
    {
      title: "Cats vs Dogs Image Classifier",
      difficulty: "Intermediate",
    },
    {
      title: "Build an End-to-End Image Classification Pipeline",
      difficulty: "Advanced",
    },
  ],

  tools: [
    {
      title: "PyTorch",
      url: "https://pytorch.org/",
    },
    {
      title: "TorchVision",
      url: "https://pytorch.org/vision/stable/index.html",
    },
    {
      title: "PyTorch Lightning",
      url: "https://lightning.ai/docs/pytorch/stable",
    },
    
  ],
},

/*===============================================
             computer vision
   =============================================*/
   {
  id: "computer-vision",
  logo: "/logos/computer-vision.svg",
  title: "Computer Vision",
  description: "Learn how AI understands and analyzes images and videos using OpenCV, Convolutional Neural Networks (CNNs), object detection, image segmentation, and modern vision models.",
  difficulty: "Advanced",
  duration: "5 Weeks",

  learningPath: [
    "Introduction to Computer Vision",
    "Digital Images",
    "Color Spaces (RGB, HSV, Grayscale)",
    "Image Processing Basics",
    "OpenCV Fundamentals",
    "Image Transformations",
    "Filtering & Edge Detection",
    "Image Augmentation",
    "Convolutional Neural Networks (CNNs)",
    "Pooling Layers",
    "Transfer Learning",
    "Image Classification",
     "Object Detection",
     "YOLO",
     "Semantic Segmentation",
     "Instance Segmentation",
     "Face Detection",
     "Optical Character Recognition (OCR)",
     "Vision Transformers (ViTs)",
     "Real-World Computer Vision Applications",
  ],

  documentation: [
    {
      id: "opencv-docs",
      title: "OpenCV Documentation",
      url: "https://docs.opencv.org/4.x/",
      recommended: true,
    },
    {
      id: "pytorch-vision",
      title: "TorchVision Documentation",
      url: "https://pytorch.org/vision/stable/index.html",
     
    },
    {
      id: "ultralytics-docs",
      title: "Ultralytics YOLO Documentation",
      url: "https://docs.ultralytics.com/",
      
    },
  ],

  videos: [
    {
      id: "opencv-course",
      title: "OpenCV & Computer Vision",
      duration: "3h",
      url: "https://youtu.be/P4Z8_qe2Cu0?si=NF6qdQxZlpTdomZp",
    },
    {
      id: "cnn-course",
      title: "Convolutional Neural Networks Explained",
      duration: "6m",
      url: "https://youtu.be/YRhxdVk_sIs?si=5jiFO_XkSY6ldtE0",
    },
  ],

  practice: [
    {
      id: "kaggle-cv",
      title: "Kaggle Learn - Computer Vision",
      description: "Hands-on image classification and computer vision projects.",
      url: "https://www.kaggle.com/learn/computer-vision",
    },
    {
      id: "roboflow",
      title: "Roboflow",
      description: "Build datasets, annotate images, and train computer vision models.",
      url: "https://colab.research.google.com/",
    },
    {
      id: "google-colab",
      title: "Google Colab",
      description: "Train computer vision models using free GPU resources.",
      url: "https://colab.research.google.com/",
    },
  ],

  projects: [
    {
      title: "Image Classifier using CNN",
      difficulty: "Beginner",
    },
    {
      title: "Real-Time Face Detection with OpenCV",
      difficulty: "Intermediate",
    },
    {
      title: "YOLO Object Detection System",
      difficulty: "Advanced",
    },
  ],

  tools: [
    {
      title: "OpenCV",
      url: "https://opencv.org/",
    },
    {
      title: "TorchVision",
      url: "https://pytorch.org/vision/",
    },
    {
      title: "Ultralytics YOLO",
      url: "https://github.com/ultralytics/ultralytics",
    },
    
  ],
},
/*===============================================
            Natural Language Processing
   =============================================*/
   {
  id: "natural-language-processing",
  logo: "/logos/nlp.svg",
  title: "Natural Language Processing (NLP)",
  description: "Learn how computers understand, analyze, and generate human language using modern Natural Language Processing techniques, from text preprocessing to transformer-based language models.",
  difficulty: "Advanced",
  duration: "5 Weeks",

  learningPath: [
    "Introduction to NLP",
    "Text Preprocessing",
    "Tokenization",
    "Bag of Words (BoW)",
    "TF-IDF",
    "Word Embeddings",
    "Word2Vec",
    "GloVe",
    "FastText",
    "Sequence Models",
    "Recurrent Neural Networks (RNN)",
    "Long Short-Term Memory (LSTM)",
     "Gated Recurrent Units (GRU)",
     "Attention Mechanism",
     "Sentiment Analysis",
     "Named Entity Recognition (NER)",
     "Text Classification",
     "Question Answering",
     "Chatbots",
     "Real-World NLP Applications",
  ],

  documentation: [
    {
      id: "huggingface-course",
      title: "Hugging Face NLP Course",
      url: "https://huggingface.co/learn/nlp-course/",
      recommended: true,
    },
    {
      id: "nltk-docs",
      title: "NLTK Documentation",
      url: "https://www.nltk.org/",
     
    },
    {
      id: "spacy-docs",
      title: "spaCy Documentation",
      url: "https://spacy.io/usage",
      
    },
  ],

  videos: [
    {
      id: "nlp-course",
      title: "Natural Language Processing Full Course",
      duration: "3h 53m",
      url: "https://youtu.be/ENLEjGozrio?si=PyVWwKIbtDZiTk9u",
    },
    {
      id: "nlp-python",
      title: "NLP with Python",
      duration: "3h",
      url: "https://youtu.be/dIUTsFT2MeQ?si=aGdy3-19VbtVjWYr",
    },
  ],

  practice: [
    {
      id: "kaggle-nlp",
      title: "Kaggle Learn - Natural Language Processing",
      description: "Practice sentiment analysis, text classification, and transformer models.",
      url: "https://www.kaggle.com/learn/natural-language-processing",
    },
    {
      id: "huggingface",
      title: "Hugging Face",
      description: "Train, fine-tune, and experiment with modern NLP models.",
      url: "https://huggingface.co/",
    },
    {
      id: "google-colab",
      title: "Google Colab",
      description: "Develop NLP projects using free GPU resources.",
      url: "https://colab.research.google.com/",
    },
  ],

  projects: [
    {
      title: "Movie Review Sentiment Analyzer",
      difficulty: "Beginner",
    },
    {
      title: "News Article Classifier",
      difficulty: "Intermediate",
    },
    {
      title: "AI Chatbot with Intent Classification",
      difficulty: "Advanced",
    },
  ],

  tools: [
    {
      title: "spaCy",
      url: "https://spacy.io/",
    },
    {
      title: "NLTK",
      url: "https://www.nltk.org/",
    },
    {
      title: "Hugging Face Transformers",
      url: "https://huggingface.co/docs/transformers",
    },
    
  ],
},
/*===============================================
           transformers
   =============================================*/
   {
  id: "transformers",
  logo: "/logos/transformers.png",
  title: "Transformers",
  description: "Master the Transformer architecture that powers today's most advanced AI systems, including ChatGPT, Gemeni, Claude, Llama, BERT, and modern vision-language models.",
  difficulty: "Advanced",
  duration: "5 Weeks",

  learningPath: [
    "Why Transformers?",
    "Limitations of RNNs & LSTMs",
    "Attention Mechanism Review",
    "Self-Attention",
    "Scaled Dot-Product Attention",
    "Multi-Head Attention",
    "Positional Encoding",
    "Encoder Architecture",
    "Decoder Architecture",
    "Encoder-Decoder Models",
    "Masked Attention",
    "Transformer Training",
     "BERT",
     "GPT",
     "T5",
     "Vision Transformers (ViTs)",
     "Fine-Tuning Transformers",
     "Transfer Learning",
     "Prompt Engineering Basics",
     "Real-World Transformer Applications",
  ],

  documentation: [
    {
      id: "huggingface-course",
      title: "Hugging Face Course",
      url: "https://huggingface.co/learn/nlp-course/",
      recommended: true,
    },
    {
      id: "transformer-docs",
      title: "Hugging Face Transformers Documentation",
      url: "https://huggingface.co/docs/transformers/",
     
    },
    {
      id: "attention",
      title: "Attention Is All You Need",
      url: "https://arxiv.org/abs/1706.03762",
      
    },
  ],

  videos: [
    {
      id: "transformers-course",
      title: "Transformers Explained",
      duration: "27m",
      url: "https://youtu.be/wjZofJX0v4M?si=TDuvngq3oILNnkN0",
    },
    {
      id: "attention-explained",
      title: "Attention Mechanism Explained",
      duration: "26m",
      url: "https://youtu.be/eMlx5fFNoYc?si=NbEUhuRTpHlxYRBU",
    },
  ],

  practice: [
    {
      id: "huggingface",
      title: "Hugging Face",
      description: "Fine-tune and experiment with transformer models.",
      url: "https://huggingface.co/",
    },
    {
      id: "kaggle",
      title: "Kaggle",
      description: "Build NLP and transformer-based machine learning projects.",
      url: "https://www.kaggle.com/",
    },
    {
      id: "google-colab",
      title: "Google Colab",
      description: "Train transformer models using free GPUs.",
      url: "https://colab.research.google.com/",
    },
  ],

  projects: [
    {
      title: "Fine-Tune BERT for Sentiment Analysis",
      difficulty: "Beginner",
    },
    {
      title: "Question Answering using DistilBERT",
      difficulty: "Intermediate",
    },
    {
      title: "Build a Transformer-based Text Summarizer",
      difficulty: "Advanced",
    },
  ],

  tools: [
    {
      title: "Hugging Face Transformers",
      url: "https://huggingface.co/docs/transformers",
    },
    {
      title: "PyTorch",
      url: "https://pytorch.org/",
    },
    {
      title: "TensorFlow",
      url: "https://www.tensorflow.org/",
    },
    
  ],
},
/*===============================================
           Large language models
   =============================================*/
   {
  id: "llm",
  logo: "",
  title: "Large Language Models (LLMs)",
  description: "Learn how modern Large Language Models are built, trained, fine-tuned, and deployed to power applications like Gemeni, Copilot, ChatGPT and other generative AI systems.",
  difficulty: "Advanced",
  duration: "5 Weeks",

  learningPath: [
    "Introduction to LLMs",
    "How Large Language Models work",
    "Tokens & Tokenization",
    "Embeddings",
    "Context Windows",
    "Pre-training",
    "Fine-training",
    "Instruction Tuning",
    "Parameter-Efficient Fine-Tuning (LoRA & QLoRA)",
    "Retrieval-Augmented Generation (RAG)",
    "Vector Databases",
    "Prompt Engineering",
     "System Prompts",
     "Function Calling",
     "Tool Use",
     "AI Agents",
     "Open-source LLMs (Llama, Mistral, Gemma, Qwen, DeepSeek)",
     "Commercial Models (GPT, Claude, Gemeni)",
     "Hallucinations & AI Safety",
     "Evaluating LLMs",
     "Building LLM Applications",
  ],

  documentation: [
    {
      id: "huggingface-llm-course",
      title: "Hugging Face LLM Course",
      url: "https://huggingface.co/learn/",
      recommended: true,
    },
    {
      id: "openai-docs",
      title: "OpenAI API Documenation",
      url: "https://platform.openai.com/docs",
     
    },
    {
      id: "langchain-docs",
      title: "LangChain Documentation",
      url: "https://python.langchain.com/docs/introduction/",
      
    },
  ],

  videos: [
    {
      id: "llm-explained",
      title: "Large Language Models Explained",
      duration: "8m",
      url: "https://youtu.be/LPZh9BOjkQs?si=XbENDe0iooFI7L_I",
    },
    {
      id: "rag-course",
      title: "RAG & LLM Applications",
      duration: "2h 33m",
      url: "https://youtu.be/sVcwVQRHIc8?si=6cCyj-lUpFtYvIgC",
    },
  ],

  practice: [
    {
      id: "huggingface",
      title: "Hugging Face",
      description: "Explore, fine-tune, and deploy open-source language models.",
      url: "https://huggingface.co/",
    },
    {
      id: "langchain",
      title: "LangChain",
      description: "Build LLM-Powered applications using chains, tools, and agents.",
      url: "https://python.langchain.com/",
    },
    {
      id: "google-colab",
      title: "Google Colab",
      description: "Experiment with LLMs using free GPU resources.",
      url: "https://colab.research.google.com/",
    },
  ],

  projects: [
    {
      title: "Build an AI Chatbot using an LLM API",
      difficulty: "Beginner",
    },
    {
      title: "Create a PDF Question-Answering Assistant with RAG",
      difficulty: "Intermediate",
    },
    {
      title: "Develop a Multi-Agent AI Assistant with Tool Calling",
      difficulty: "Advanced",
    },
  ],

  tools: [
    {
      title: "Hugging Face Transformers",
      url: "https://huggingface.co/docs/transformers",
    },
    {
      title: "LangChain",
      url: "https://python.langchain.com/",
    },
    {
      title: "OpenAI API",
      url: "https://platform.openai.com/docs",
    },
    
  ],
},
/*===============================================
           Ai Deployment & Mlops
   =============================================*/
   {
  id: "ai-deployment-mlops",
  logo: "/logos/mlops.png",
  title: "AI Deployment & MLOps",
  description: "Learn how to deploy, monitor, scale, and maintain Machine Learning and Large Language Model applications using modern MLOps practices and cloud-native technologies.",
  difficulty: "Advanced",
  duration: "5 Weeks",

  learningPath: [
    "Introduction to MLOps",
    "ML Lifecycle",
    "Model Serialization",
    "Serving Machine Learning Models",
    "Building APIs with FastAPI",
    "Building APIs with Flask",
    "Docker Fundamentals",
    "Containerizing ML Applications",
    "Docker Compose",
    "Kubernetes Basics",
    "Model Versioning",
    "Data Versioning (DVC)",
     "Experiment Tracking (MLflow)",
     "Weights & Biases",
     "CI/CD for Machine Learning",
     "Model Monitoring",
     "Data Drift",
     "Model Drift",
     "ONNX",
     "TensorFlow Serving",
     "TorchServe",
     "Deploying LLM Applications",
     "Cloud Deployment (AWS, Azure, GCP)",
     "Building Production AI Systems",
  ],

  documentation: [
    {
      id: "mlflow-docs",
      title: "MLflow Documentation",
      url: "https://mlflow.org/docs/latest/index.html",
      recommended: true,
    },
    {
      id: "fastapi-docs",
      title: "FastAPI Documentation",
      url: "https://fastapi.tiangolo.com/",
     
    },
    {
      id: "docker-docs",
      title: "Docker Documentation",
      url: "https://docs.docker.com/",
      
    },
    {
      id: "kubernetes-docs",
      title: "Kubernetes Documentation",
      url: "https://kubernetes.io/docs/",
      
    },
  ],

  videos: [
    {
      id: "mlops-course",
      title: "MLOps Full Course",
      duration: "26m",
      url: "https://youtu.be/biqYkVf-a7Y?si=o86TWZg_9Q_LnLs7",
    },
    {
      id: "fastapi-ml",
      title: "Deploy Machine Learning Models with FastAPI",
      duration: "19m",
      url: "https://youtu.be/b5F667g1yCk?si=FKam0piH8MMXojb8",
    },
  ],

  practice: [
    {
      id: "huggingface-spaces",
      title: "Hugging Face Spaces",
      description: "Deploy AI applications for free using Gradio or Streamlit.",
      url: "https://huggingface.co/spaces",
    },
    {
      id: "render",
      title: "Render",
      description: "Deploy FastAPI and AI applications with free hosting.",
      url: "https://render.com/",
    },
    {
      id: "google-colab",
      title: "Google Colab",
      description: "Prototype and test deployment-ready AI models.",
      url: "https://colab.research.google.com/",
    },
  ],

  projects: [
    {
      title: "Deploy a Machine Learning Model with FastAPI",
      difficulty: "Beginner",
    },
    {
      title: "Deploy an Image Classification API using Docker",
      difficulty: "Intermediate",
    },
    {
      title: "Build and Deploy a Production-Ready RAG AI Assistant",
      difficulty: "Advanced",
    },
  ],

  tools: [
    {
      title: "FastAPI",
      url: "https://fastapi.tiangolo.com/",
    },
    {
      title: "Docker",
      url: "https://www.docker.com/",
    },
    {
      title: "MLflow",
      url: "https://mlflow.org/",
    },
    
  ],
},

];