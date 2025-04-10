# [Hype] E-commerce Website

![Screenshot 2025-02-28 085501](https://github.com/user-attachments/assets/17b7059a-df25-4096-a4c8-266ac9e028c9)

![Screenshot 2025-02-28 142132](https://github.com/user-attachments/assets/0dbfefb7-5c91-4c45-8b12-fd8697841f3b)


A fully functional e-commerce website built by [Alulutho Dumani, Raeesa Baerhedein, Ibrahim Karlie, Yandisa Khumalo] for the [Course Name] assignment. [Website Name] offers a [A short (1-2 sentence) summary of what the project does and its main purpose].

## Table of Contents
- [Live Demo]
- [Technologies Used](#technologies-used)
- [Setup Instructions](#setup-instructions)
- [Key Features](#key-features)
- [Usage Instructions](#usage-instructions) (Optional)
- [Potential Improvements](#potential-improvements) (Optional)
- [Credits](#credits) (If Applicable)
- [License](#license) (If Applicable)
- [Author](#author)

## Live Demo
[Link to the live deployed website](link/to/live_demo)

## Technologies Used
- **Front-end:** HTML, CSS, JavaScript
- **Styling:**  Bootstrap, Custom CSS]
- **Back-end:** Node JS
- **Database:** MySQL
  

## Setup Instructions

Follow these steps to run the ReflectaHome website on your local development environment:

1.  **Prerequisites:**
    * Node Js Express
    * MySQL Server installed and running
    * Web server (chrome)

2.  **Clone the Repository:**
    ```bash
    git clone [[repository URL](https://github.com/AluluthoDumani/hype_module_3_project.git)]
    cd [AluluthoDumani/hype_module_3_project.git]
    ```

3. no composer

4.  **Database Setup:**
    * Create a new database named `hype` in your MySQL server.
    * Import the database schema from the provided SQL file (`database/hype.sql`). 
        ```bash
        mysql -u [alulutho_dumani] -p reflectahome < database/hype.sql
        ```
    * Configure the database connection details in your PHP configuration file (e.g., `config.php`, `.env`):
      node
      import mysql from 'mysql2/promise'
// import jwt from 'jsonwebtoken'
import {config} from 'dotenv'

config()

const pool = mysql.createPool({
    host:process.env.HOST,
    user:process.env.USER,
    password:process.env.PASSWORD,
    database:process.env.DATABASE


})

export {pool}
       

5.  **Web Server Configuration:**
    * - Production: `/var/www/hype-sneakers/public`
   - Local: - Production: `/var/www/hype-sneakers/public`
   - Local: http://localhost:8081/
6.  **Run the Development Server:**
    ```bash
     -S localhost:8081
    ```
    Then, open your web browser and navigate to `http://localhost:8081`.

## Key Features
This e-commerce website implements the following key features:

* **User Login and Registration:** Secure user registration and login functionality.
* **User Interface Design and UX/UI Principles:** A user-friendly and visually appealing design adhering to UX/UI best practices.
* **Product/Service Display and Catalog Implementation:** Clear and organized display of mirror products with detailed information and browsing capabilities.
* **Shopping Cart and Order Process:** A functional shopping cart allowing users to add, modify, and checkout with their selected items.
* **Responsive Design Implementation:** The website adapts seamlessly to various screen sizes (desktop, tablet, mobile).
* **Database Design and Implementation:** A well-structured database (`reflectahome`) to store user, product, and order data.
* **Authentication and User Management:** Secure authentication for users and potentially an administrative interface for managing the website.
* **Product/Service Data Management:** [If implemented] An administrative interface for adding, editing, and deleting products.
* **Order Processing and Management:** [If implemented] An administrative interface for viewing and managing customer orders.
* **Payment System Integration:** [Specify if actual or simulated] Integration with a payment gateway (either a real implementation or a simulated process).
* **Overall System Integration (Front-end and Back-end):** Seamless communication and data flow between the user interface and the server-side logic.

## Usage Instructions (Optional)
[Provide brief instructions on how to navigate and use the website as a regular user.]

## Potential Improvements (Optional)
[List ideas for future enhancements, such as:]
* Advanced search and filtering options.
* User order history.
* Wishlist functionality.
* More sophisticated payment gateway integration.
* Product reviews and ratings.

## Credits (If Applicable)
[Acknowledge any libraries, frameworks, or resources used, e.g.:]
* Bootstrap: [https://getbootstrap.com/]
* [Name of other library]: [Link to library]

## License (If Applicable)
[Specify the license, e.g., MIT License](link/to/license)

## Author
[Alulutho Dumani(s)]
[aluluthodumani99@gmail.com(s)]
[AluluthoDumani(s)]
