# Website Update Instructions

This document provides detailed instructions for updating different sections of the AUV IIITDM website.

## Table of Contents
- [Main Page](#main-page)
  - [About Section](#about-section)
  - [Achievements Section](#achievements-section)
  - [Vehicles Section](#vehicles-section)
  - [Sponsors Section](#sponsors-section)
- [Team Hub Page](#team-hub)
- [Contact Section](#contact-section)
- [Gallery](#gallery)
- [Videos](#videos)
- [Best Practices](#best-practices)

## Main Page

### About Section
1. Navigate to `src/components/About.jsx`
2. Update the mission statement or description text
3. To update statistics:
```jsx
const stats = [
  {
    number: "YOUR_NUMBER",
    text: "STAT_DESCRIPTION"
  },
  // Add more stats
];
```

### Achievements Section
1. Navigate to `src/components/Achievements.jsx`
2. To add a new achievement:
```jsx
{
  title: "Achievement Title",
  description: "Achievement description",
  year: "YYYY",
  image: require("../assets/achievements/image_name.jpg")
}
```
3. Add achievement images to `src/assets/achievements/`

### Vehicles Section
1. Navigate to `src/components/Vehicles.jsx`
2. To add a new vehicle:
```jsx
{
  name: "Vehicle Name",
  year: "YYYY",
  description: "Vehicle description",
  specs: [
    "Spec 1",
    "Spec 2",
    // Add more specifications
  ],
  image: require("../assets/vehicles/vehicle_image.jpg")
}
```
3. Add vehicle images to `src/assets/vehicles/`
4. For technical specifications, use bullet points for clarity

### Sponsors Section
1. Navigate to `src/components/Sponsors.jsx`
2. To add a new sponsor:
```jsx
{
  name: "Sponsor Name",
  logo: require("../assets/sponsors/sponsor_logo.png"),
  website: "https://sponsor-website.com",
  tier: "platinum" // or "gold", "silver", etc.
}
```
3. Add sponsor logos to `src/assets/sponsors/`
4. Ensure logos are transparent PNG files
5. Recommended logo size: 300x200px

## Team Hub Page

### Navigation
1. Navigate to `src/components/TeamHub.jsx`
2. Update navigation links in the `nav-links` section:
```jsx
<button 
  className={`nav-link ${section === "your_section" ? "active" : ""}`}
  onClick={() => scrollToSection("your_section")}
>
  Section Name
</button>
```

### Team Members

### Adding New Team Members
1. Add member photos to the appropriate year directory in `src/assets/auv_photos_team/YEAR-YEAR/`
2. Navigate to `src/components/Teams/Teams.jsx`
3. Add member information in the following format:
```jsx
{
  name: "Member Name",
  image: require("../../assets/auv_photos_team/YEAR-YEAR/member_photo.jpg"),
  linkedin: "https://www.linkedin.com/in/member-profile/",
  role: "Role Name" // Optional
}
```

### Adding a New Year Section
1. Create a new directory for photos: `src/assets/auv_photos_team/YEAR-YEAR/`
2. In `src/components/Teams/Teams.jsx`, add a new section:
```jsx
<TeamSection
  year="YEAR-YEAR"
  members={[
    // Add member objects here
  ]}
/>
```

### Videos

### Adding New Videos
1. Navigate to `src/components/TeamHub.jsx`
2. Find the `VideoSection` component
3. Add new video in the videos array:
```jsx
{
  id: "YouTube_Video_ID",
  title: "Video Title"
}
```

Note: Use only the video ID from YouTube URL (e.g., for https://youtube.com/watch?v=ABC123, use "ABC123")

## Contact Section

### Basic Information
1. Navigate to `src/components/Contact.jsx`
2. Update contact details:
```jsx
const contactInfo = {
  email: "your.email@example.com",
  address: "Your Address",
  socialMedia: {
    linkedin: "linkedin_url",
    instagram: "instagram_url",
    youtube: "youtube_url"
  }
};
```

### Contact Form
1. Update form fields in `Contact.jsx`:
```jsx
const formFields = [
  {
    name: "name",
    label: "Your Name",
    type: "text",
    required: true
  },
  // Add more fields
];
```

### Map Configuration
1. In `Contact.jsx`, update map settings:
```jsx
const mapConfig = {
  center: {
    lat: YOUR_LATITUDE,
    lng: YOUR_LONGITUDE
  },
  zoom: 15,
  styles: mapStyles // Custom map styles
};
```

## Gallery

### Adding New Images
1. Add images to `src/assets/gallery/`
2. Navigate to `src/components/Posts/Gallery.jsx`
3. Add image information:
```jsx
{
  src: require("../../assets/gallery/image_name.jpg"),
  alt: "Image Description",
  category: "competition" // or "testing", "workshop", etc.
}
```

## Videos

### Adding New Videos
1. Navigate to `src/components/TeamHub.jsx`
2. Find the `VideoSection` component
3. Add new video in the videos array:
```jsx
{
  id: "YouTube_Video_ID",
  title: "Video Title"
}
```

Note: Use only the video ID from YouTube URL (e.g., for https://youtube.com/watch?v=ABC123, use "ABC123")

## Best Practices

### Content Guidelines
1. Text Content:
   - Keep descriptions concise and professional
   - Use proper formatting for technical terms
   - Maintain consistent tone across sections

2. Image Guidelines:
   - Team member photos: Square format, 500x500px
   - Gallery images: 16:9 ratio
   - Vehicle images: High resolution, consistent aspect ratio
   - Sponsor logos: Transparent PNG, 300x200px
   - Optimize all images before uploading

3. Code Style:
   - Follow existing naming conventions
   - Use meaningful component and variable names
   - Add comments for complex logic
   - Keep components modular and reusable

4. Testing:
   - Test all changes locally before deployment
   - Check mobile responsiveness
   - Verify all links and media load correctly
   - Test contact form submission
   - Ensure map loads properly
   - Check social media integrations

### SEO Best Practices
1. Use descriptive alt text for images
2. Include meta descriptions for each page
3. Use semantic HTML elements
4. Ensure proper heading hierarchy

### Performance
1. Compress images before uploading
2. Lazy load images and videos
3. Minimize external dependencies
4. Use appropriate image formats:
   - Photos: JPEG/WebP
   - Logos: PNG
   - Icons: SVG

## Deployment Checklist
1. Test all changes locally
2. Update any relevant documentation
3. Commit changes with clear messages
4. Push to main branch
5. Run deployment command
6. Verify changes on live site
7. Test all functionality on live site

## Need Help?

If you need assistance or have questions about updating the website, please:
1. Check the existing code for similar implementations
2. Review the [React documentation](https://reactjs.org/docs)
3. Contact the development team for support
4. Check the commit history for recent changes
5. Review pull requests for implementation examples 