import AdBanner from '@/components/adBanner'
import Carousel from '@/components/carousel'
import Form from '@/components/form'
import Notice from '@/components/notice'
import Orders from '@/components/orders'

export default function Home() {
  return (
    <main>
      <Carousel />
      <AdBanner />
      <section className='flex gap-10 max-w-[80rem] mx-auto justify-between'>
        <Orders />
        <Notice />
      </section>
      <section className='bg-neutral-100'>
        <h2 className="align_cnt" data-scroll="in" data-todown="">
          상품권 판매 신청서
          <small>신청서를 작성하고 &apos;교환신청&apos; 버튼을 클릭하시면<br className="m_item"/>확인 후 최대 1분 이내 현금으로 입금해드립니다.</small>
        </h2>
        <Form />
      </section>
    </main>
  )
}
