import Image from 'next/image'

export default function Home() {
  return (
    <main className=" min-h-screen  text-white items-center p-24 grid grid-cols-1">
      <section>
        <p> 화면에 보여질 width 와 height 만 제공</p>
        <div className={'border-red w-full h-[40rem] border-red inset-0 relative'}>
          <Image
            src="/image/mountain.jpg"
            alt="Mountain"
            fill
            className={'object-cover object-left-top'}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </section>
      <section>
        <p> img 그대로 제공</p>
        <div className={'border-red w-full h-[40rem] border-red inset-0 relative overflow-hidden'}>
          <img
            src="/image/mountain.jpg"
            alt="Mountain"
          />

        </div>
      </section>

      {/*<section>*/}
      {/*  <p> 화면에 보여질 width 와 height 만 제공</p>*/}
      {/*  <Image*/}
      {/*    src="/image/mountain.jpg"*/}
      {/*    alt="Mountain"*/}
      {/*    width={400}*/}
      {/*    height={400}*/}
      {/*    sizes={'50vws' }*/}
      {/*  />*/}
      {/*</section>*/}

    </main>
  )
}
