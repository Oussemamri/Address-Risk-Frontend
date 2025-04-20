# Address Risk App

## Overview

The Address Risk App is a comprehensive web application built with Next.js and TypeScript that allows users to search for physical addresses and retrieve detailed risk assessment information associated with each location. This tool integrates with a NestJS backend API to provide accurate, up-to-date risk data including natural hazards, environmental factors, and geographic vulnerabilities.

Perfect for real estate professionals, insurance agents, urban planners, or concerned citizens looking to understand potential risks associated with specific addresses before making important decisions.

![App Screenshot Placeholder](screenshots/app-screenshot.png)

## Features

### Address Search
- **Intuitive Search Interface**: Clean, responsive form that provides real-time feedback
- **Address Autocomplete**: Suggestions appear as you type to help find locations quickly
- **Input Validation**: Prevents invalid searches and provides helpful error messages
- **Search History**: Recently searched addresses are saved for quick access

### Address Information
- **Comprehensive Location Data**: Displays formatted address, postal code, city information
- **Geolocation Coordinates**: Precise latitude and longitude coordinates
- **Copy Functionality**: Easily copy address details to clipboard
- **Shareable Links**: Generate links to share specific address information

### Risk Assessment
- **Multi-level Risk Classification**: Color-coded indicators for high, medium, and low risks
- **Detailed Risk Descriptions**: In-depth explanations of each identified risk
- **Historical Risk Data**: View trends and historical risk information where available
- **Risk Comparison**: Compare risks between different addresses

### Map Visualization
- **Interactive Maps**: Powered by Leaflet for smooth, responsive map interactions
- **Custom Markers**: Visual indicators showing the precise location
- **Risk Overlay**: Optional visualization of risk zones on the map
- **Zoom and Pan Controls**: Easily navigate the surrounding area

### User Experience
- **Responsive Design**: Optimized for mobile, tablet, and desktop devices
- **Dark Mode Support**: Eye-friendly interface with light/dark theme options
- **Accessibility Features**: Designed to meet WCAG guidelines for accessibility
- **Offline Support**: Basic functionality works without an internet connection
- **Performance Optimization**: Fast loading times and efficient data handling

## Technical Architecture

The Address Risk App is built with a modern technology stack:

### Frontend
- **Framework**: Next.js 14+ (React framework for SSR and static generation)
- **Language**: TypeScript for type-safe code
- **Styling**: Tailwind CSS for utility-first styling
- **State Management**: React Hooks for component-level state
- **Map Integration**: Leaflet for interactive maps
- **Data Fetching**: Native fetch API with async/await pattern

### Backend Integration
- **API Consumption**: RESTful API calls to NestJS backend
- **Data Parsing**: Efficient JSON handling and type validation
- **Error Handling**: Comprehensive error catching and user feedback
- **Caching**: Local storage for search history and frequently used data

### Performance Considerations
- **Code Splitting**: Dynamic imports for optimal chunk loading
- **Lazy Loading**: Components and maps loaded only when needed
- **Optimized Assets**: Efficient loading of map tiles and markers
- **Memoization**: Prevents unnecessary re-renders with React.memo and useMemo

## Technologies Used

- **Next.js**: React framework for production-grade applications
- **TypeScript**: Typed JavaScript for better development experience
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **React Hooks**: Modern React state and effect management
- **Leaflet**: Open-source JavaScript library for mobile-friendly interactive maps
- **LocalStorage API**: Browser storage for maintaining user preferences
- **Fetch API**: Modern interface for making HTTP requests

## API Endpoints

The application interacts with a NestJS backend through the following endpoints:

### Address Search

- **POST** `/api/addresses/`
  - **Purpose**: Search for addresses based on user input
  - **Request Body**: 
    ```json
    { 
      "q": "search address string" 
    }
    ```
  - **Response**: 
    ```json
    {
      "id": 123,
      "label": "123 Main St, Anytown, 12345",
      "housenumber": "123",
      "street": "Main St",
      "postcode": "12345",
      "citycode": "67890",
      "latitude": 40.7128,
      "longitude": -74.0060
    }
    ```
  - **Status Codes**:
    - `200 OK`: Successful search with results
    - `400 Bad Request`: Invalid search parameters
    - `404 Not Found`: No addresses match the search criteria
    - `500 Server Error`: Internal server error

### Risk Information

- **GET** `/api/addresses/{id}/risks/`
  - **Purpose**: Retrieve risk assessment data for a specific address
  - **URL Parameters**: `id` - The unique identifier of the address
  - **Response**: 
    ```json
    {
      "code": "success",
      "data": {
        "commune": {
          "code_insee": "75056",
          "nom": "Anytown",
          "risques": [
            {
              "type": "Flood Risk",
              "niveau": "Élevé",
              "description": "This area has significant flooding risk due to proximity to River X."
            },
            {
              "type": "Ground Movement",
              "niveau": "Moyen",
              "description": "Moderate risk of soil erosion and ground instability."
            }
          ]
        },
        "adresse": {
          "latitude": 40.7128,
          "longitude": -74.0060,
          "adresse": "123 Main St, Anytown, 12345"
        }
      }
    }
    ```
  - **Status Codes**:
    - `200 OK`: Successful retrieval of risk data
    - `404 Not Found`: Address ID not found
    - `500 Server Error`: Internal server error

## Getting Started

### System Requirements

- **Node.js**: Version 14.x or higher
- **npm**: Version 7.x or higher (or yarn 1.22+)
- **Browser**: Modern browser with JavaScript enabled
- **Storage**: Minimum 100MB free disk space
- **Memory**: Minimum 512MB RAM available
- **Connection**: Internet connection for API interaction

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn
- A modern web browser
- API access (configured automatically for development)

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/address-risk-app.git
   cd address-risk-app
   ```

2. Install dependencies:
   ```
   npm install
   ```
   or
   ```
   yarn install
   ```

3. Create environment configuration:
   
   Create a `.env.local` file in the project root with the following variables:
   ```
   NEXT_PUBLIC_API_BASE_URL=http://63.178.19.158:8000/api
   NEXT_PUBLIC_MAP_TILE_PROVIDER=https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png
   ```

### Running the Application

To start the development server, run:
```
npm run dev
```
or
```
yarn dev
```

The application will be available at `http://localhost:3000`.

### Building for Production

To create an optimized production build:
```
npm run build
```
or
```
yarn build
```

To start the production server:
```
npm start
```
or
```
yarn start
```

## Usage Guide

### Searching for an Address

1. Navigate to the home page
2. Enter an address in the search bar (e.g., "123 Main Street, New York")
3. Click the "Search" button or press Enter
4. Review the displayed address information

### Viewing Risk Details

1. After finding an address, click the "View Risks" button
2. Review the color-coded risk indicators:
   - Red: High risk level
   - Yellow: Medium risk level
   - Green: Low risk level
3. Click on individual risk items for more detailed information

### Using the Map

1. After an address is selected, the map will automatically display its location
2. Use mouse or touch controls to:
   - Zoom in/out with scroll wheel or pinch gesture
   - Pan by clicking and dragging
   - Click on the marker to view the address popup

### Managing Search History

1. Previously searched addresses appear in the history panel
2. Click on any address in the history to quickly select it again
3. Use the "Clear History" button to remove all saved addresses

## Folder Structure

```
address-risk-app/
├── public/             # Static files
├── src/
│   ├── app/            # Next.js app directory
│   │   ├── globals.css # Global styles
│   │   ├── layout.tsx  # Root layout component
│   │   └── page.tsx    # Home page component
│   ├── components/     # Reusable UI components
│   │   ├── AddressCard.tsx
│   │   ├── AddressSearch.tsx
│   │   ├── Map.tsx
│   │   ├── RiskDetails.tsx
│   │   └── SearchHistory.tsx
│   ├── hooks/          # Custom React hooks
│   │   └── useAddressHistory.ts
│   ├── services/       # API service functions
│   │   └── api.ts
│   ├── types/          # TypeScript interfaces
│   │   └── index.ts
│   └── utils/          # Utility functions
└── ...config files
```

## Development

### Code Conventions

- Use TypeScript for all new code
- Follow functional component patterns with React Hooks
- Use named exports for components
- Maintain proper typing for all props and state
- Follow the existing styling patterns with Tailwind CSS

### Adding New Features

1. Create any necessary types in `src/types/`
2. Implement API functions in `src/services/api.ts`
3. Create new components in `src/components/`
4. Update page components in `src/app/`
5. Add unit tests for new functionality

## Testing

### Running Tests

```
npm test
```
or
```
yarn test
```

### Testing Strategy

- Unit tests for utility functions and hooks
- Component tests for UI elements
- Integration tests for API services
- End-to-end tests for critical user flows

## Deployment

The application is currently deployed and accessible at:
**[https://address-risk-frontend.vercel.app/](https://address-risk-frontend.vercel.app/)**

You can visit the link above to use the application without setting up a local environment.

For deploying your own instance, the application can be deployed to various hosting platforms:

### Vercel (Recommended)

```
npm run build
vercel deploy --prod
```

### Netlify

```
npm run build
netlify deploy --prod
```

### Docker

```
docker build -t address-risk-app .
docker run -p 3000:3000 address-risk-app
```

## Troubleshooting

### Common Issues

- **API Connection Failed**: Ensure the API base URL is correctly configured
- **Map Not Displaying**: Check if Leaflet assets are properly loaded
- **Search Returns No Results**: Verify the address format matches the API requirements
- **Local Storage Issues**: Clear browser cache and reload the application

### Browser Compatibility

The application is tested and supported on:
- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add some amazing feature'`)
5. Push to the branch (`git push origin feature/amazing-feature`)
6. Open a Pull Request

Please ensure your code follows the existing style conventions and includes appropriate tests.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- OpenStreetMap contributors for map data
- Leaflet team for the mapping library
- Next.js team for the React framework
- Contributors to all open-source packages used in this project