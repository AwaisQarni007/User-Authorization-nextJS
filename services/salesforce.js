// services/salesforce.js
const jsforce = require('jsforce');

const salesforce = new jsforce.Connection({
  loginUrl: 'https://login.salesforce.com', // Use the appropriate login URL for your Salesforce instance
});

// Salesforce authentication function
async function authenticate() {
  const username = 'your-salesforce-username'; 
  const password = 'your-salesforce-password'; 
  const securityToken = 'your-salesforce-security-token';

  try {
    await salesforce.login(username, password + securityToken);
    console.log('Connected to Salesforce');
  } catch (error) {
    console.error('Salesforce authentication error:', error);
    throw error;
  }
}

// Function to submit data to Salesforce
async function submitToSalesforce(data) {
  try {
    // Authenticate if not already authenticated
    if (!salesforce.accessToken) {
      await authenticate();
    }

    // Create a Salesforce record (SObject) with the provided data
    const sObject = 'Your_Salesforce_Object__c'; // Replace with the actual Salesforce object name
    const result = await salesforce.sobject(sObject).create(data);

    console.log('Data submitted to Salesforce:', result);
    return result; // Optionally, return the Salesforce response
  } catch (error) {
    console.error('Error submitting data to Salesforce:', error);
    throw error;
  }
}

module.exports = {
  authenticate,
  submitToSalesforce,
};
