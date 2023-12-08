import ImgBgPatternCard from '@/imgs/bg-pattern-card'
import ImgAvatar from '@/components/img-avatar'
import User from '@/components/user'
import Metrics from '@/components/metrics'

export default function Home() {
  return (
    <main className='flex items-center justify-center bg-Dark-cyan'>
      <div className='h-screen'></div>
      <div className='flex flex-col items-center bg-white rounded-2xl overflow-hidden'>
        <ImgBgPatternCard />
        <ImgAvatar />
        <User />

        {/* Horizontal Line */}
        <div className='h-[1px] w-full my-6 bg-slate-200'></div>

        <Metrics />
      </div>
    </main>
  )
}
