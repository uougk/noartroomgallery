import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Welcome to my app!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="leggo!" />
        <div className="perspective">
    <div className="slider">
        <div className="corridor">
            <div></div>
            <div></div>
            <div></div>
            <div></div><span className="img"></span><span className="img-mirror"></span>
        </div>
        <div className="corridor">
            <div></div>
            <div></div>
            <div></div>
            <div></div><span className="img"></span><span className="img-mirror"></span>
        </div>
        <div className="corridor">
            <div></div>
            <div></div>
            <div></div>
            <div></div><span className="img"></span><span className="img-mirror"></span>
        </div>
        <div className="corridor">
            <div></div>
            <div></div>
            <div></div>
            <div></div><span className="img"></span><span className="img-mirror"></span>
        </div>
        <div className="corridor">
            <div></div>
            <div></div>
            <div></div>
            <div></div><span className="img"></span><span className="img-mirror"></span>
        </div>
    </div>
</div>
      </main>


      <Footer />
    </div>
  )
}
