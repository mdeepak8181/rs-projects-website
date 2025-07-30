// src/lib/analytics.ts

export function trackFormSubmission(formName: string) {
  console.log(`✅ Form submitted: ${formName}`);
}

export function trackContactClick(context: string) {
  console.log(`✅ Contact Click tracked: ${context}`);
}

export function trackGalleryView(galleryName: string) {
  console.log(`✅ Gallery viewed: ${galleryName}`);
}

export function trackProjectInterest(projectType: string) {
  console.log(`✅ Project interest tracked: ${projectType}`);
}
