import HomeSection from "@/components/HomeSection"
import AboutSection from "@/components/AboutSection"

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-4 sm-px-6 md:max-w-5xl">
      <HomeSection/>
      <AboutSection/>
    </main>
  )
}
