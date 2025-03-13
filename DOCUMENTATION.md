# Static Content Client

A React-based frontend application designed to render and display HTML content received from a backend API. This client is particularly useful for marketing campaigns and content management where pre-styled HTML needs to be displayed to the public.

## Overview

This application serves as a frontend renderer for static content that is managed and delivered by a backend API. It's built with React and uses modern web technologies to efficiently display HTML content with its associated styles.

### Key Features

- **Dynamic Content Rendering**: Displays HTML content from the backend API based on the current URL path
- **Preserves Styling**: Maintains all CSS styling from the backend HTML, making it perfect for marketing campaigns
- **Responsive Design**: Adapts to different screen sizes for optimal viewing experience
- **Fast Loading**: Optimized for quick content delivery

## How It Works

The application works by:

1. Capturing the current URL path in the browser
2. Requesting the corresponding HTML content from the backend API
3. Rendering the received HTML content within the application frame
4. Preserving all CSS styling from the original HTML

This approach allows marketing teams to create fully styled HTML content that can be seamlessly integrated into the website without requiring frontend development for each new campaign or content piece.

## Application Structure

- **Frontend Framework**: Built with React and React Router for navigation
- **Frontend Styling**: Uses Tailwind v4.0 for styling the application shell (header, footer, navigation)
- **Content Display**: The main content area displays HTML from the backend with its original CSS intact

This separation allows for:

- Consistent application shell styled with Tailwind CSS
- Complete flexibility for the content's styling which comes from the backend
- Clean separation between application structure and dynamic content

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone [repository-url]

# Navigate to the project directory
cd static-content-client

# Install dependencies
npm install

# Start the development server
npm run dev
```

### Environment Configuration

Create a `.env` file in the root directory with the following variables:

VITE_API_BASE_URL=http://your-backend-api-url

## Additional Information

For information about the backend API that provides the HTML content to this frontend application, please refer to the backend project's documentation at [https://github.com/Guillermouy/static-content-challenge-server/blob/main/DOCUMENTATION.md](https://github.com/Guillermouy/static-content-challenge-server/blob/main/DOCUMENTATION.md). The backend handles all content management, HTML generation with styling, and serves the content that this frontend application renders.

## Deployment

The application is currently deployed and available at:
**[https://static-content-client.vercel.app/legal/privacy](https://static-content-client.vercel.app/legal/privacy)**
