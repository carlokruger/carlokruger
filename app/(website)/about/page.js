import { getAllAuthors, getSettings } from "@/lib/sanity/client";
import About from "./about";

export default async function AboutPage() {
  try {
    const authors = await getAllAuthors() || [];
    const settings = await getSettings() || {};
    return <About settings={settings} authors={authors} />;
  } catch (error) {
    console.error('Error fetching about page data:', error);
    // Return with empty data if Sanity fetch fails
    return <About settings={{}} authors={[]} />;
  }
}

export const dynamic = 'force-dynamic';
// export const revalidate = 60;
