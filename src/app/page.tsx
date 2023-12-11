import AdBanner from '@/components/adBanner'
import Carousel from '@/components/carousel'
import Notice from '@/components/notice'


export default function Home() {
  return (
    <main>
      <Carousel />
      <AdBanner />
      <Notice />
    </main>
  )
}
