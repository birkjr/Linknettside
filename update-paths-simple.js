#!/usr/bin/env node

/**
 * Enkelt script for å oppdatere image paths fra Supabase til lokale paths
 */

import fs from 'fs';

const filesToUpdate = [
  'src/Pages/AboutUs.tsx',
  'src/Pages/App.tsx', 
  'src/Pages/ForCompanies.tsx',
  'src/Pages/ContactUs.tsx',
  'src/components/Header.tsx',
  'src/components/Tools/Header.tsx',
  'src/components/Schema/Partners.tsx',
  'src/components/Schema/CoopPartners.tsx'
];

console.log('🔄 Oppdaterer image paths...');
console.log('============================\n');

let totalReplacements = 0;

filesToUpdate.forEach(filePath => {
  if (!fs.existsSync(filePath)) {
    console.log(`⚠️  Fil ikke funnet: ${filePath}`);
    return;
  }
  
  let content = fs.readFileSync(filePath, 'utf8');
  let fileReplacements = 0;
  
  // Oppdater logo_transparent.png
  if (content.includes('logo_transparent.png')) {
    content = content.replace(
      /\$\{supabaseStorageUrl\}logo_transparent\.png/g,
      '/images/logos/logo_transparent.png'
    );
    fileReplacements++;
  }
  
  // Oppdater logo_sirkel (både .png og .avif)
  if (content.includes('logo_sirkel')) {
    content = content.replace(
      /\$\{supabaseStorageUrl\}logo_sirkel\.png/g,
      '/images/logos/logo_sirkel.avif'
    );
    content = content.replace(
      /\$\{supabaseStorageUrl\}logo_sirkel\.avif/g,
      '/images/logos/logo_sirkel.avif'
    );
    fileReplacements++;
  }
  
  // Oppdater undergruppe bilder
  const subgroups = ['styret', 'bedrift', 'marked', 'logistikk', 'fa'];
  subgroups.forEach(subgroup => {
    if (content.includes(`${subgroup}.png`)) {
      content = content.replace(
        new RegExp(`\\$\\{supabaseStorageUrl\\}${subgroup}\\.png`, 'g'),
        `/images/subgroups/${subgroup}.png`
      );
      fileReplacements++;
    }
  });
  
  // Oppdater innholdsbilder
  if (content.includes('bedriftsbilde')) {
    content = content.replace(
      /\$\{supabaseStorageUrl\}bedriftsbilde\.png/g,
      '/images/content/bedriftsbilde.avif'
    );
    content = content.replace(
      /\$\{supabaseStorageUrl\}bedriftsbilde\.avif/g,
      '/images/content/bedriftsbilde.avif'
    );
    fileReplacements++;
  }
  
  if (content.includes('instagram')) {
    content = content.replace(
      /\$\{supabaseStorageUrl\}instagram\.png/g,
      '/images/content/instagram.avif'
    );
    content = content.replace(
      /\$\{supabaseStorageUrl\}instagram\.avif/g,
      '/images/content/instagram.avif'
    );
    fileReplacements++;
  }
  
  // Oppdater bedriftslogoer
  if (content.includes('company_logo')) {
    content = content.replace(
      /\$\{supabaseStorageUrl\}\/\$\{partner\}\.JPG/g,
      '/images/company_logos/${partner}.JPG'
    );
    fileReplacements++;
  }
  
  // Oppdater medlemsbilder
  if (content.includes('board_pic')) {
    content = content.replace(
      /\$\{supabaseStorageUrl\}\$\{([^}]+)\.name\.split\(" "\)\[0\]\}\.png/g,
      '/images/board_pics/${$1.name.split(" ")[0]}.png'
    );
    fileReplacements++;
  }
  
  if (fileReplacements > 0) {
    fs.writeFileSync(filePath, content);
    console.log(`✅ ${filePath}: ${fileReplacements} paths oppdatert`);
    totalReplacements += fileReplacements;
  } else {
    console.log(`ℹ️  ${filePath}: Ingen endringer nødvendig`);
  }
});

console.log('');
console.log(`🎉 Ferdig! ${totalReplacements} image paths oppdatert totalt.`);
console.log('');
console.log('📝 Neste steg:');
console.log('1. Test at bildene vises riktig: pnpm dev');
console.log('2. Bygg prosjektet: pnpm build');
console.log('3. Deploy til Vercel for automatisk bildeoptimalisering');
