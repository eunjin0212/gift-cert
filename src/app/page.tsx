import AdBanner from '@/components/adBanner'
import Carousel from '@/components/carousel'
import Form from '@/components/form'
import Notice from '@/components/notice'
import Orders from '@/components/orders'
import SectionTitle from '@/components/sectionTitle'

export default function Home() {
  return (
    <main>
      <Carousel />
      <AdBanner />
      <section className='flex gap-10 max-w-[80rem] pb-24 mx-auto justify-between'>
        <Orders />
        <Notice />
      </section>
      <section className='bg-neutral-100 pt-24'>
        <SectionTitle 
          title='상품권 판매 신청서' 
          description='신청서를 작성하고 &apos;교환신청&apos; 버튼을 클릭하시면 확인 후 최대 1분 이내 현금으로 입금해드립니다.'
        />
        <Form />
      </section>
    </main>
  )
}
