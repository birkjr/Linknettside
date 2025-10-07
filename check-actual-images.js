#!/usr/bin/env node

/**
 * Script for å sjekke hvilke bilder som faktisk finnes
 * Kjør: node check-actual-images.js
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Sjekk hvilke bilder som faktisk finnes
const checkActualImages = () => {
  const imageDirs = [
    'public/images/logos',
    'public/images/subgroups', 
    'public/images/content',
    'public/images/company_logos',
    'public/images/board_pics'
  ];

  console.log('🔍 Sjekker faktiske bilder i public/images/...');
  console.log('==============================================\n');

  let totalFound = 0;
  let totalMissing = 0;

  // Bilder som trengs for at nettsiden skal fungere
  const requiredImages = {
    logos: ['logo_transparent.png', 'logo_sirkel.avif'],
    subgroups: ['styret.png', 'bedrift.png', 'marked.png', 'logistikk.png', 'fa.png'],
    content: ['bedriftsbilde.avif', 'instagram.avif']
  };

  Object.entries(requiredImages).forEach(([category, images]) => {
    console.log(`📁 ${category.toUpperCase()}:`);
    
    images.forEach(imageName => {
      const imagePath = path.join(__dirname, 'public', 'images', category, imageName);
      
      if (fs.existsSync(imagePath)) {
        console.log(`   ✅ ${imageName}`);
        totalFound++;
      } else {
        console.log(`   ❌ ${imageName} (mangler)`);
        totalMissing++;
      }
    });
    console.log('');
  });

  // Sjekk også board_pics (medlemsbilder)
  const boardPicsDir = path.join(__dirname, 'public', 'images', 'board_pics');
  if (fs.existsSync(boardPicsDir)) {
    const boardPics = fs.readdirSync(boardPicsDir).filter(file => 
      /\.(png|jpg|jpeg|avif|webp)$/i.test(file)
    );
    
    if (boardPics.length > 0) {
      console.log(`📁 BOARD_PICS (${boardPics.length} bilder):`);
      boardPics.forEach(pic => {
        console.log(`   ✅ ${pic}`);
        totalFound++;
      });
      console.log('');
    }
  }

  // Sjekk også company_logos (bedriftslogoer)
  const companyLogosDir = path.join(__dirname, 'public', 'images', 'company_logos');
  if (fs.existsSync(companyLogosDir)) {
    const companyLogos = fs.readdirSync(companyLogosDir).filter(file => 
      /\.(png|jpg|jpeg|avif|webp)$/i.test(file)
    );
    
    if (companyLogos.length > 0) {
      console.log(`📁 COMPANY_LOGOS (${companyLogos.length} bilder):`);
      companyLogos.forEach(logo => {
        console.log(`   ✅ ${logo}`);
        totalFound++;
      });
      console.log('');
    }
  }

  console.log(`📊 Sammendrag:`);
  console.log(`   ✅ Funnet: ${totalFound} bilder`);
  console.log(`   ❌ Mangler: ${totalMissing} bilder`);
  console.log('');

  if (totalMissing === 0) {
    console.log('🎉 Alle nødvendige bilder er på plass!');
    console.log('Du kan nå kjøre: pnpm run update:image-paths');
  } else {
    console.log('⚠️  Noen bilder mangler fortsatt.');
    console.log('Last ned de manglende bildene fra IMAGE-MIGRATION-GUIDE.md');
  }

  return { totalFound, totalMissing };
};

checkActualImages();
