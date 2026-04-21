const probe = require('probe-image-size');
const fs = require('fs');
const path = require('path');

async function checkImageSize() {
  try {
    const buffer = fs.readFileSync(path.join('public', 'vRlogo.png'));
    const result = probe.sync(buffer);
    console.log(`vRlogo.png dimensions: ${result.width}x${result.height}`);
    
    if (result.width === result.height) {
      console.log('Image is square');
    } else {
      console.log('Image is not square');
      console.log('Creating a square version for favicon...');
      
      // We'll need to create a square version of the image
      // For now, let's just inform the user
      console.log('You may need to create a square version of the logo for the favicon');
    }
  } catch (error) {
    console.error('Error checking image size:', error);
  }
}

checkImageSize();