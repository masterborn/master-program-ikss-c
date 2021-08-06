const axios = require('axios');

axios.post('https://api.vercel.com/v1/integrations/deploy/prj_hBxJSoZXbvXUWO3N1NV7PL62xQFP/HY8epD0bgo')
  .then(() => console.log('✅ Deploying'))
  .catch(() => console.log('❌ Something went wrong.'));
