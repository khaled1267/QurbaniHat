/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { // এখানে 'image' না হয়ে 'images' হবে (s যোগ হবে)
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // নির্দিষ্ট ডোমেইন না থাকলে ডাবল স্টার দিয়ে সব এলাউ করা যায়
        port: "",
      },
    ],
  },
};

export default nextConfig;