#!/usr/bin/env node

/**
 * Script for å oppdatere alle image paths fra Supabase til lokale paths
 * Kjør: node update-image-paths.js
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Mapping fra Supabase URLs til lokale paths
// Bare de faktiske bildene som trengs for nettsiden
const pathMappings = {
  // Logoer
  'https://iglqmuqbolugyifhsrfh.supabase.co/storage/v1/object/public/bilder/logo_transparent.png':
    '/images/logos/logo_transparent.png',
  'https://iglqmuqbolugyifhsrfh.supabase.co/storage/v1/object/public/bilder/logo_sirkel.png':
    '/images/logos/logo_sirkel.avif',
  'https://iglqmuqbolugyifhsrfh.supabase.co/storage/v1/object/public/bilder/logo_sirkel.avif':
    '/images/logos/logo_sirkel.avif',

  // Undergruppe bilder
  'https://iglqmuqbolugyifhsrfh.supabase.co/storage/v1/object/public/bilder/subGroup/styret.png':
    '/images/subgroups/styret.png',
  'https://iglqmuqbolugyifhsrfh.supabase.co/storage/v1/object/public/bilder/subGroup/bedrift.png':
    '/images/subgroups/bedrift.png',
  'https://iglqmuqbolugyifhsrfh.supabase.co/storage/v1/object/public/bilder/subGroup/marked.png':
    '/images/subgroups/marked.png',
  'https://iglqmuqbolugyifhsrfh.supabase.co/storage/v1/object/public/bilder/subGroup/logistikk.png':
    '/images/subgroups/logistikk.png',
  'https://iglqmuqbolugyifhsrfh.supabase.co/storage/v1/object/public/bilder/subGroup/fa.png':
    '/images/subgroups/fa.png',

  // Innholdsbilder
  'https://iglqmuqbolugyifhsrfh.supabase.co/storage/v1/object/public/bilder/bedriftsbilde.png':
    '/images/content/bedriftsbilde.avif',
  'https://iglqmuqbolugyifhsrfh.supabase.co/storage/v1/object/public/bilder/bedriftsbilde.avif':
    '/images/content/bedriftsbilde.avif',
  'https://iglqmuqbolugyifhsrfh.supabase.co/storage/v1/object/public/bilder/instagram.png':
    '/images/content/instagram.avif',
  'https://iglqmuqbolugyifhsrfh.supabase.co/storage/v1/object/public/bilder/instagram.avif':
    '/images/content/instagram.avif',

  // Bedriftslogoer - dynamiske paths
  'https://iglqmuqbolugyifhsrfh.supabase.co/storage/v1/object/public/bilder/company_logo/':
    '/images/company_logos/',
};

// Filer som skal oppdateres
const filesToUpdate = [
  'src/Pages/AboutUs.tsx',
  'src/Pages/App.tsx',
  'src/Pages/ForCompanies.tsx',
  'src/Pages/ContactUs.tsx',
  'src/components/Header.tsx',
  'src/components/Tools/Header.tsx',
  'src/components/Schema/Partners.tsx',
  'src/components/Schema/CoopPartners.tsx',
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

  // Oppdater hver mapping
  Object.entries(pathMappings).forEach(([supabaseUrl, localPath]) => {
    const regex = new RegExp(
      supabaseUrl.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'),
      'g'
    );
    const matches = content.match(regex);

    if (matches) {
      content = content.replace(regex, localPath);
      fileReplacements += matches.length;
      totalReplacements += matches.length;
    }
  });

  // Spesialhåndtering for dynamiske URLs
  // Bedriftslogoer: ${supabaseStorageUrl}/${partner}.JPG -> /images/company_logos/${partner}.JPG
  content = content.replace(
    /\$\{supabaseStorageUrl\}\/\$\{partner\}\.JPG/g,
    '/images/company_logos/${partner}.JPG'
  );

  // Medlemsbilder: ${supabaseStorageUrl}${name}.png -> /images/board_pics/${name}.png
  content = content.replace(
    /\$\{supabaseStorageUrl\}\$\{([^}]+)\.name\.split\(" "\)\[0\]\}\.png/g,
    '/images/board_pics/${$1.name.split(" ")[0]}.png'
  );

  if (fileReplacements > 0) {
    fs.writeFileSync(filePath, content);
    console.log(`✅ ${filePath}: ${fileReplacements} paths oppdatert`);
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
