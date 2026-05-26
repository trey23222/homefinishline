/** @type {import('next').NextConfig} */
const nextConfig = {
  // Prevent webpack from bundling these server-side packages — require them at runtime instead.
  // Without this, webpack can fail with "path argument must be of type string, received undefined"
  // when analyzing packages that load many modules (resend -> svix -> postal-mime).
  serverExternalPackages: ['resend', 'svix', 'postal-mime', '@supabase/supabase-js', '@anthropic-ai/sdk'],
};

export default nextConfig;
