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
            Datenschutzerklärung
          </h1>

          <h3>Vorwort</h3>
          <p>
            Als Betreiber dieser Webseite verarbeite ich personenbezogene Daten von Ihnen als Besucher/Nutzer dieser Webseite. Ganz ohne dem geht es leider nicht. Die DSGVO schreibt mir als Verantwortlichen vor, Sie über bestimmte Details der Datenverarbeitung und Ihre Datenschutzrechte aufzuklären. Dieser Informationspflicht komme ich hiermit gerne nach.
            <br />
            Nach den datenschutzrechtlichen Grundprinzipien der Transparenz bzw. Verständlichkeit möchte ich diese Datenschutzerklärung minimalistisch, strukturiert und beschränkt auf die in Art. 13 DSGVO geforderten Angaben gestalten.
          </p>
          <h3>Informationen zur Datenverarbeitung</h3>
          <h4>1. Verantwortliche Stelle</h4>
          <p>Die Datenverarbeitung auf dieser Webseite erfolgt durch den Webseitenbetreiber als Verantwortlichen. Meinen Namen und die Kontaktdaten entnehmen Sie bitte dem Impressum.</p>
          <h4>2. Datenschutzbeauftragter</h4>
          <p>Es wurde kein Datenschutzbeauftragter bestellt. Dies ist auch nicht notwendig, da keine 20 Personen regelmäßig und ständig mit der automatisierten Verarbeitung personenbezogener Daten beschäftigt sind. Anfragen zum Datenschutz richten Sie bitte an die im Impressum angegebene E-Mail-Adresse.</p>
          <h4>3. Datenverarbeitungen</h4>
          <h5>Cookies</h5>
          <p>Diese Webseite setzt Cookies. Cookies sind Textdateien, die auf Ihrem Computer/Smartphone abgelegt und von Ihrem Browser verwendet werden.
            <br />
            Einerseits wird mit einem Cookie nachvollzogen, ob Sie das aufploppende Cookie-Hinweisbanner bereits geschlossen haben. Die Verarbeitung ist damit zur Erfüllung einer rechtlichen Verpflichtung erforderlich (Art. 6 Abs. 1 lit. c) DSGVO i. V. m. § 15 Abs. 3 TMG). Der Cookie wird für die Dauer von einer Woche gespeichert.
            <br />
            Andererseits werden sogenannte Session-Cookies verwendet, die nach dem Beenden der Browsersitzung automatisch gelöscht werden. Die Verarbeitung erfolgt auf Grundlage berechtigter Interessen (Art. 6 Abs. 1 lit. f) DSGVO). Das berechtigte Interesse ist die technisch fehlerfreie und optimierte Darstellung der Webseite.
            <br />
            Damit Sie die im Formular eingegebenen Daten nicht bei jedem Seitenaufruf neu eingeben müssen, verwendet diese Webseite neben Cookies auch die sogenannte Local Storage Technik (auch „Lokale Daten“ und „Lokaler Speicher“ genannt. Dabei werden Daten lokal im Cache Ihres Browsers gespeichert, die auch nach dem Schließen des Browser-Fensters oder dem Beenden des Programms – soweit sie den Cache nicht löschen - weiterhin bestehen und ausgelesen werden können.
            <br />
            Auf die im Local Storage gespeicherten Daten können Dritte nicht zugreifen. Sie werden an Dritte nicht weitergegeben und auch nicht zu Werbezwecken verwendet.
            <br />
            Wir verwenden diese Techniken im berechtigten Interesse um ihnen ein attraktives voll funktionsfähiges Angebot machen zu können auf Basis von Artikel 6 Abs 1 lit. f DSGVO.
            <br />
            Sie können Ihren Browser so konfigurieren, dass Sie über das Setzen von Cookies informiert werden. Ebenso können bestimmte Cookies abgelehnt werden. Bitte beachten Sie jedoch, dass dadurch die Funktionalität dieser Webseite eingeschränkt sein kann.
          </p>
          <h5>Server-Log-Dateien</h5>
          <p>Ihr Browser übermittelt technische Daten (u. a. Browsertyp, Betriebssystem, IP-Adresse) an den Server(provider). Mit dem Serverprovider wurde ein Auftragsverarbeitungsvertrag abgeschlossen. Die Daten werden auf dem Server auf Grundlage berechtigter Interessen (technisch fehlerfreie und optimierte Darstellung; Art. 6 Abs. 1 lit. f) DSGVO) gespeichert.</p>
          <h5>Anfragen</h5>
          <p>Wenn Sie mich per E-Mail oder Telefon kontaktieren, wird Ihre Anfrage samt aller darin enthaltenen personenbezogenen Daten gespeichert und weiter verarbeitet. Das dient natürlich letztlich der Beantwortung Ihrer Anfrage. Die Verarbeitung ist zur Erfüllung des Nutzungsvertrages oder zur Durchführung vorvertraglicher Maßnahmen erforderlich (Art. 6 Abs. 1 lit. b) DSGVO). Ihre Daten werden gelöscht, sobald Ihr Anliegen geklärt wurde.</p>
          <h4>4. Betroffenenrechte</h4>
          <p>
            Sie haben nach der DSGVO folgende Betroffenenrechte:
            <ul>
              <li>Recht auf Auskunft gem. Art. 15 DSGVO: Sie haben zu jeder Zeit das Recht, Auskunft über die zu Ihrer Person gespeicherten Daten zu erhalten.</li>
              <li>Recht auf Berichtigung gem. Art. 16 DSGVO: Sollten die verarbeiteten personenbezogenen Daten unrichtig oder unter Berücksichtigung der Verarbeitungszwecke unvollständig sein, besteht nach Art. 16 DSGVO das Recht, eine Berichtigung bzw. eine Vervollständigung der personenbezogenen Daten zu verlangen.</li>
              <li>Recht auf Löschung gem. Art. 17 DSGVO: Es besteht das Recht, eine Löschung personenbezogener Daten zu verlangen, wenn die Verarbeitung personenbezogener Daten aus einem der in dieser Vorschrift genannten Gründe unzulässig ist. Eine Löschung kann nicht verlangt werden, sofern die (weitere) Verarbeitung zur Erfüllung einer rechtlichen Verpflichtung erforderlich ist (Art. 17 Abs. 3 DSGVO). Hierbei kommen insbesondere gesetzliche Aufbewahrungspflichten in Betracht.</li>
              <li>Recht auf Einschränkung der Verarbeitung gem. Art. 18 DSGVO: Unter den Voraussetzungen des Art. 18 Abs. 1 lit. a) bis d) DSGVO haben Sie die Möglichkeit, die Einschränkung der Verarbeitung (Sperrung) zu verlangen. Dies kann z. B. dann der Fall sein, wenn Sie gespeicherte Daten zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen benötigen und diese deshalb noch nicht gelöscht werden sollen.</li>
              <li>Recht auf Datenübertragbarkeit gem. Art. 20 DSGVO: Sie haben das Recht, die Sie betreffenden personenbezogenen Daten, die Sie bereitgestellt haben, in einem strukturierten, gängigen und maschinenlesbaren Format zu erhalten, und Sie haben das Recht, diese Daten einem anderen Verantwortlichen ohne Behinderung, zu übermitteln.</li>
              <li>Recht auf Widerspruch gem. Art. 21 DSGVO: Sie haben das Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben, jederzeit gegen die Verarbeitung Sie betreffender personenbezogener Daten, die aufgrund von Artikel 6 Absatz 1 lit. e) oder f) DSGVO erfolgt, Widerspruch einzulegen; dies gilt auch für ein auf diese Bestimmungen gestütztes Profiling. Wir verarbeiten die personenbezogenen Daten nicht mehr, es sei denn, wir können zwingende schutzwürdige Gründe für die Verarbeitung nachweisen, die Ihren Interessen, Rechten und Freiheiten überwiegen, oder die Verarbeitung dient der Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen.</li>
              <li>Eine automatisierte Entscheidungsfindung gem. Art. 22 DSGVO erfolgt nicht. Die Daten werden nicht für ein Profiling zur Bildung von Wahrscheinlichkeits- oder Scorewerten verarbeitet.</li>
              <li>Recht auf Beschwerde bei einer Aufsichtsbehörde gem. Art. 77 DSGVO: Sie haben das Recht auf Beschwerde bei der zuständigen Aufsichtsbehörde.</li>
              <li>Recht auf Widerruf der Einwilligung gem. Art. 7 Abs. 3 DSGVO: Sie haben jederzeit das Recht, eine einmal abgegebene Einwilligung zu widerrufen.</li>
            </ul>
            Richten Sie eine Anfrage zum Datenschutz bitte an die im Impressum angegebene E-Mail-Adresse.
          </p>

        </div>

      </main>

      <footer className="footer">
        <div>
          <Link href="/#calc">
            <a>Home</a>
          </Link>
          {' '}
          <Link href="/legal/terms">
            <a>Impressum</a>
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
