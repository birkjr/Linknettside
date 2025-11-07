#!/usr/bin/env node

/**
 * Script for å migrere bilder fra Supabase til lokale paths
 * Kjør: node migrate-images.js
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Liste over bilder som trengs (basert på kodebasen)
// Bare de faktiske bildene som trengs for nettsiden
const requiredImages = {
  // Logoer
  logos: ['logo_transparent.png', 'logo_sirkel.avif'],

  // Undergruppe bilder
  subgroups: [
    'styret.png',
    'bedrift.png',
    'marked.png',
    'logistikk.png',
    'fa.png',
  ],

  // Innholdsbilder
  content: ['bedriftsbilde.avif', 'instagram.avif'],
};

// Supabase URLs
const supabaseUrls = {
  main: 'https://iglqmuqbolugyifhsrfh.supabase.co/storage/v1/object/public/bilder/',
  subgroups:
    'https://iglqmuqbolugyifhsrfh.supabase.co/storage/v1/object/public/bilder/subGroup/',
  boardPics:
    'https://iglqmuqbolugyifhsrfh.supabase.co/storage/v1/object/public/bilder/board_pic/',
  companyLogos:
    'https://iglqmuqbolugyifhsrfh.supabase.co/storage/v1/object/public/bilder/company_logo/',
};

console.log('🖼️  EMIL-Link Image Migration Helper');
console.log('=====================================\n');

console.log('📋 Bilder som trengs å lastes ned:');
console.log('');

// Vis alle bilder som trengs
Object.entries(requiredImages).forEach(([category, images]) => {
  console.log(`📁 ${category.toUpperCase()}:`);
  images.forEach(image => {
    console.log(`   - ${image}`);
  });
  console.log('');
});

console.log('📥 Last ned bildene manuelt fra:');
console.log('');
console.log('🔗 Logoer:');
console.log(`   ${supabaseUrls.main}logo_transparent.png`);
console.log(`   ${supabaseUrls.main}logo_sirkel.avif`);
console.log('');

console.log('🔗 Undergruppe bilder:');
requiredImages.subgroups.forEach(image => {
  console.log(`   ${supabaseUrls.subgroups}${image}`);
});
console.log('');

console.log('🔗 Innholdsbilder:');
requiredImages.content.forEach(image => {
  console.log(`   ${supabaseUrls.main}${image}`);
});
console.log('');

console.log('🔗 Bedriftslogoer:');
console.log(
  '   Disse er dynamiske basert på partnernavn og finnes allerede i public/images/company_logos/'
);
console.log('');

console.log('📝 Instruksjoner:');
console.log('1. Last ned bildene fra URL-ene over');
console.log('2. Plasser dem i riktige mapper:');
console.log('   - public/images/logos/');
console.log('   - public/images/subgroups/');
console.log('   - public/images/content/');
console.log('3. Kjør: npm run update-image-paths');
console.log('');

// Sjekk om bilder allerede eksisterer
console.log('🔍 Sjekker eksisterende bilder...');
let existingCount = 0;
let missingCount = 0;

Object.entries(requiredImages).forEach(([category, images]) => {
  images.forEach(image => {
    const imagePath = path.join('public', 'images', category, image);
    if (fs.existsSync(imagePath)) {
      console.log(`✅ ${imagePath}`);
      existingCount++;
    } else {
      console.log(`❌ ${imagePath} (mangler)`);
      missingCount++;
    }
  });
});

console.log('');
console.log(
  `📊 Status: ${existingCount} bilder funnet, ${missingCount} bilder mangler`
);

if (missingCount === 0) {
  console.log(
    '🎉 Alle bilder er på plass! Du kan nå kjøre: npm run update-image-paths'
  );
} else {
  console.log('⚠️  Last ned de manglende bildene først.');
}
