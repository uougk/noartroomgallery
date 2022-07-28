import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>lessssssss fuckin go!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="leggo!" />
        <div class="perspective">
    <div class="slider">
        <div class="corridor">
            <div></div>
            <div></div>
            <div></div>
            <div></div><span class="img"></span><span class="img-mirror"></span>
        </div>
        <div class="corridor">
            <div></div>
            <div></div>
            <div></div>
            <div></div><span class="img"></span><span class="img-mirror"></span>
        </div>
        <div class="corridor">
            <div></div>
            <div></div>
            <div></div>
            <div></div><span class="img"></span><span class="img-mirror"></span>
        </div>
        <div class="corridor">
            <div></div>
            <div></div>
            <div></div>
            <div></div><span class="img"></span><span class="img-mirror"></span>
        </div>
        <div class="corridor">
            <div></div>
            <div></div>
            <div></div>
            <div></div><span class="img"></span><span class="img-mirror"></span>
        </div>
    </div>
</div>
      </main>


      <Footer />
    </div>
  )
}
