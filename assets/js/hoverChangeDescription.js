export function hoverChangeDescription(nameCard, text) {
  var changeDescription = document.querySelector(".changeDescription");

  document.querySelector(nameCard).addEventListener("mouseover", () => {
    changeDescription.innerHTML = text;
  });

  document.querySelector(nameCard).addEventListener("mouseout", () => {
    changeDescription.innerHTML = `*move the mouse cursor over the card to read*`;
  });
}

// Call hoverChangeDescription for each skill card
hoverChangeDescription(".python", "Python - Python is a high-level programming language known for its simplicity and versatility. It is widely used for various applications, including web development, data analysis, artificial intelligence, and scientific computing.");
hoverChangeDescription(".SQL", "SQL - Structured Query Language is the standard language for managing relational databases, enabling users to store, manipulate, and retrieve data in a structured format.");
hoverChangeDescription(".data", "Data visualization - Data visualization is the graphical representation of information and data. By using visual elements like charts, graphs, and maps, data visualization tools provide an accessible way to see and understand trends, outliers, and patterns in data.");
hoverChangeDescription(".numpy","Numpy - NumPy is a crucial library for data science, offering N-dimensional array objects, linear algebra operations, Fourier transforms, and random number generation, essential for data analysis and machine learning tasks.");
hoverChangeDescription(".pandas", "Pandas Library - Pandas is a powerful open-source data manipulation and analysis library for Python. It provides easy-to-use data structures and functions for working with structured data, making it an essential tool for tasks such as data cleaning, transformation, analysis, and visualization in data science and machine learning projects.");
hoverChangeDescription(".pytorch", "PyTorch - PyTorch is an open-source machine learning library based on the Torch library, used for applications such as natural language processing and computer vision.");
hoverChangeDescription(".webs", "Web Scraping - Web scraping is the automated process of extracting information from websites. and it is a foundational technique in data science, utilized for automatically retrieving and extracting data from various websites.");
hoverChangeDescription(".seaborn", "Seaborn - Seaborn is a data visualization library built on matplotlib, ideal for exploratory data analysis. It simplifies complex plot creation, allowing data scientists to focus on interpreting results. Seaborn integrates well with pandas dataframes, making it a popular choice for data visualization and analysis.");
hoverChangeDescription(".html", "HTML - Hypertext Markup Language is the standard markup language for documents designed to be displayed in a web browser.");
hoverChangeDescription(".css", "CSS - Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in HTML.");
hoverChangeDescription(".databricks","Databricks - Databricks is an analytics platform built on Apache Spark, enabling data engineering, data science, and machine learning with collaborative notebooks and automated cluster management.");

// Add descriptions for other skills similarly

