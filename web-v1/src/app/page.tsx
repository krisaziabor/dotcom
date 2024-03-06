import Image from "next/image";
import Link from "next/link";

function Background() {
  return (
    <Image
      src = "/crush_darkmode.png"
      alt = "crush-background"
      placeholder = "blur"
      blurDataURL = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkqAcAAIUAgUW0RjgAAAAASUVORK5CYII"
      fill = {true}
      objectFit = "cover"
      quality = {100}
      sizes = "100vw"
      priority = {true}
    />
  )
}

export default function Home() {
  return (
    <main className="font-Neue-Haas text-white">
      <Background />
    </main>
  );
}
