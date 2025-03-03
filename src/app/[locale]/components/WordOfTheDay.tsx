// components/WordOfTheDay.tsx
import { parseStringPromise } from "xml2js";

// Define the shape of an RSS item
interface FeedItem {
  title: string;
  description: string;
}

// Fetch RSS feed (server-side)
async function fetchRssFeed(): Promise<FeedItem[]> {
  try {
    const response = await fetch("https://feeds.feedblitz.com/swedish-word-of-the-day", {
      cache: "no-store", // Fresh data on each request
    });
    const xml = await response.text();
    const result = await parseStringPromise(xml);
    const items = result.rss.channel[0].item.map((item: any) => ({
      title: item.title[0],
      description: item.description[0],
    }));
    return items;
  } catch (error) {
    console.error("Error fetching or parsing RSS feed:", error);
    return [];
  }
}

// WordOfTheDay component
export default async function WordOfTheDay() {
  const feedItems = await fetchRssFeed();

  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
      <h1 style={{ fontSize: "2rem", marginBottom: "20px" }}>
        Swedish Word of the Day
      </h1>
      {feedItems.length > 0 ? (
        feedItems.map((item, index) => (
          <div
            key={index}
            style={{
              marginBottom: "20px",
              borderBottom: "1px solid #ccc",
              paddingBottom: "10px",
            }}
          >
            <h2 style={{ fontSize: "1.5rem", margin: "0" }}>{item.title}</h2>
            <div
              dangerouslySetInnerHTML={{ __html: item.description }}
              style={{ fontSize: "1rem", marginTop: "5px" }}
            />
          </div>
        ))
      ) : (
        <p>No feed items available.</p>
      )}
    </div>
  );
}