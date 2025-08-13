import { createClient } from "contentful";


export async function fetchData() {
  const client = createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID!,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN!,
  });

  const response = await client.getEntries({ content_type: "post" });
  return response.items;

}