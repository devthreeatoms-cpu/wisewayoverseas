const fs = require('fs');
const createIco = require('png-to-ico');

async function createFavicon() {
  try {
    const icoBuffer = await createIco('public/images/logo.jpeg');
    fs.writeFileSync('src/app/favicon.ico', icoBuffer);
    console.log('Successfully created favicon.ico from vRlogo.png');
  } catch (error) {
    console.error('Error creating favicon:', error);
  }
}

createFavicon();