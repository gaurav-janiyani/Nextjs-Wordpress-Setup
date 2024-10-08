Building a Next.js Blog with Headless WordPress: A Step-by-Step Guide
=====================================================================

This guide will walk you through setting up a headless WordPress site as a backend for a Next.js blog, including JWT authentication setup on the WordPress side.

Part 1: WordPress Setup
-----------------------

### Prerequisites

*   A WordPress site installed and running
    
*   Admin access to your WordPress site
    
*   Ability to install plugins on your WordPress site
    

### Steps

1.  **Install and Activate Required Plugins**
    
    *   Log into your WordPress admin panel and navigate to Plugins > Add New
        
    *   Search for, install, and activate the following plugins:a. WPGraphQLb. WPGraphQL JWT Authentication
        
2.  **Configure WPGraphQL**
    
    *   Go to GraphQL > Settings in your WordPress admin panel
        
    *   Ensure the GraphQL endpoint is enabled and set to /graphql
        
    *   Optionally enable the GraphiQL IDE for testing
        
3.  **Set Up JWT Authentication**
    
    *   Open your WordPress site's wp-config.php file
        
    *   Copydefine('GRAPHQL\_JWT\_AUTH\_SECRET\_KEY', 'your-secret-key-here');
        
    *   Replace 'your-secret-key-here' with a strong, unique key
        
    *   You can generate a secure key at: [https://api.wordpress.org/secret-key/1.1/salt/](https://api.wordpress.org/secret-key/1.1/salt/)
        
4.  **Create a WordPress User for API Access**
    
    *   Go to Users > Add New in your WordPress admin panel
        
    *   Create a new user with appropriate permissions (e.g., Editor role)
        
    *   Make note of this user's username and password for future API requests
        
5.  **Test Your GraphQL Endpoint**
    
    *   Visit your GraphQL endpoint (usually https://your-wordpress-site.com/graphql)
        
    *   Try a simple query to fetch post titles to ensure it's working correctly
        
6.  **Test JWT Authentication**
    
    *   Use the GraphiQL IDE or a tool like Postman to test the JWT authentication
        
    *   Copymutation LoginUser { login(input: {username: "your-username", password: "your-password"}) { authToken }}
        
    *   If successful, you'll receive an auth token in the response


Part 2: Next.js Blog with Headless WordPress and JWT Authentication
-----------------------

This project is a Next.js blog that uses WordPress as a headless CMS. It incorporates JWT authentication to securely fetch posts from WordPress.

## Setup Instructions

### 1. Clone the Project
```bash
git clone https://github.com/your-username/nextjs-blog.git
cd nextjs-blog
```

### 2. Set Up Environment Variables

Create a .env.local file in the root of your Next.js project and add:

```bash
WORDPRESS_AUTH_REFRESH_TOKEN=ADD_TOKEN
WP_ENDPOINT=SITEURL.COM
WORDPRESS_REVALIDATE_SECRET=ABCDEFGHIJ
```

Replace your-jwt-auth-token with the JWT token generated from the WordPress GraphQL endpoint.

### 3. Run Your Next.js App

Install the dependencies and start the development server:

```bash
npm install
npm run dev
```
Visit http://localhost:3000 to view the blog.

## Features

* Fetches posts from WordPress using WPGraphQL
* Uses JWT authentication to secure API requests
* Supports static generation with Next.js

This will guide users through the process of setting up the Next.js blog with JWT authentication.

