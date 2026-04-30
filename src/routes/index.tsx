import { createFileRoute } from "@tanstack/react-router";
import { Experience } from "@/components/birthday/Experience";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "A Birthday Surprise — Made With Love" },
      { name: "description", content: "An interactive, cinematic birthday gift — letters, cakes, memories, and one very big surprise." },
      { property: "og:title", content: "A Birthday Surprise — Made With Love" },
      { property: "og:description", content: "A handcrafted, romantic, magical birthday experience." },
    ],
  }),
  component: Index,
});

function Index() {
  return <Experience />;
}
