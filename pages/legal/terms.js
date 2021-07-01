import Head from 'next/head'
import Link from 'next/link'


export default function PrivacyPolicy() {

  return (
    <div className="container" style={{ backgroundColor: '#fff' }}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />

        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous" />
      </Head>

      <main className="main" style={{}}>

        <div style={{ justifyContent: 'center', alignItems: 'center', margin: '1rem 3rem', padding: '2rem', backgroundColor: '#efefef', borderRadius: '15px' }}>
          <h1>
            Impressum
          </h1>

          <p>
            Diese Webseite ist ein Angebot von< br />< br />
            Webschmiede Dennis Haser, gleichzeitig inhaltlich Verantwortlicher gemäß § 55 Abs. 2 RStV< br />
            Ringstrasse 25< br />
            82386 Huglfing< br />
            Deutschland
          </p>
          <h3>Kontakt</h3>
          <p>
            Sie erreichen mich am besten per E-Mail unter kontakt@dennis-haser.de. Ich bemühe mich, eingehende Anfragen schnellstmöglich zu beantworten. Bitte haben Sie Verständnis, sollte eine Rückmeldung einmal etwas länger auf sich warten lassen.

          </p>

        </div>

      </main>

      <footer className="footer">
        <div>
          <Link href="/#calc">
            <a>Home</a>
          </Link>
          {' '}
          <Link href="/legal/privacy-policy">
            <a>Datenschutz</a>
          </Link>
        </div>
        <div>
          <a
            href="https://dennis-haser.de"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{' '}
            <img src="https://dennis-haser.de/img/logo.webp" alt="Webschmiede Logo" className="logo" />
          </a>
        </div>
      </footer>
      <style jsx>{`
          .container {
            min-height: 100vh;
            padding: 0 0.5rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }
          .main {
            /* padding: 5rem 0;*/
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }
          
          @media (max-width: 600px) {
          }  
        `}</style>
    </div >
  )

}
