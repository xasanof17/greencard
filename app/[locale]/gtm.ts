// Import necessary modules or dependencies

// Function to initialize GTM
export const initializeGTM = () => {
  // Replace 'GTM-XXXXXX' with your actual GTM container ID
  const containerId = process.env.NEXT_PUBLIC_GTM_ID;

  // Create a script element for GTM
  const script = document.createElement('script');
  script.src = `https://www.googletagmanager.com/gtm.js?id=${containerId}`;
  script.async = true;

  // Append the script to the document's head
  document.head.appendChild(script);

  // Initialize GTM dataLayer if needed
  window.dataLayer = window.dataLayer || [];

  // Push any initial data or events to the dataLayer
  // For example:
  // window.dataLayer.push({ event: 'customEvent', someKey: 'someValue' });
};

// Function to load GTM
export const loadGTM = () => {
  // Call the initializeGTM function to add the GTM script to the page
  initializeGTM();

  // You can add other configurations or event listeners here
  // For example, you might want to listen for route changes
};

// Initialize GTM when the app loads
loadGTM();
