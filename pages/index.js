import Head from 'next/head'
import styles from '../styles/Home.module.css'

import React, { useState, useEffect } from 'react'

export default function Home() {
  if (typeof window !== 'undefined') {

    const defaultRetirementAge = 100;
    const defaultTargetRetAmt = 0;
    const defaultAnnualRetExp = 10000;
    const defaultCurrentAge = 35;
    const defaultCurrentSavings = 10000;
    const defaultContributions = 500;
    const defaultContributionFreq = "Monthly";
    const defaultPreRetROR = 4;
    const defaultPostRetROR = 4;
    const defaultInflation = 1.84;
    const defaultTaxRate = 27.82;

    // Access localStorage
    const initialRetirementAge = Number(localStorage.getItem("retirementAge") || defaultRetirementAge)
    const initialTargetRetAmt = Number(localStorage.getItem("targetRetAmt") || defaultTargetRetAmt)
    const initialAnnualRetExp = Number(localStorage.getItem("annualRetExp") || defaultAnnualRetExp)
    const initialCurrentAge = Number(localStorage.getItem("currentAge") || defaultCurrentAge)
    const initialCurrentSavings = Number(localStorage.getItem("currentSavings") || defaultCurrentSavings)
    const initialContributions = Number(localStorage.getItem("contributions") || defaultContributions)
    const initialContributionFreq = (localStorage.getItem("contributionFreq") || defaultContributionFreq)
    const initialPreRetROR = Number(localStorage.getItem("preRetROR") || defaultPreRetROR)
    const initialPostRetROR = Number(localStorage.getItem("postRetROR") || defaultPostRetROR)
    const initialInflation = Number(localStorage.getItem("inflation") || defaultInflation)
    const initialTaxRate = Number(localStorage.getItem("taxRate") || defaultTaxRate)

    const [retirementAge, setRetirementAge] = useState(initialRetirementAge)
    const [targetRetAmt, setTargetRetAmt] = useState(initialTargetRetAmt)
    const [annualRetExp, setAnnualRetExp] = useState(initialAnnualRetExp)
    const [currentAge, setCurrentAge] = useState(initialCurrentAge)
    const [currentSavings, setCurrentSavings] = useState(initialCurrentSavings)
    const [contributions, setContributions] = useState(initialContributions)
    const [contributionFreq, setContributionFreq] = useState(initialContributionFreq)
    const [preRetROR, setPreRetROR] = useState(initialPreRetROR)
    const [postRetROR, setPostRetROR] = useState(initialPostRetROR)
    const [inflation, setInflation] = useState(initialInflation)
    const [taxRate, setTaxRate] = useState(initialTaxRate)

    const [currentSavingsPercent, setCurrentSavingsPercent] = useState("0%")

    const formatter = new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR", minimumFractionDigits: 2 })

    const resetInput = async () => {
      console.log("resetting ...")
      setAnnualRetExp(defaultAnnualRetExp);
      setCurrentAge(defaultCurrentAge);
      setCurrentSavings(defaultCurrentSavings);
      setContributions(defaultContributions);
      setContributionFreq(defaultContributionFreq);
      setPreRetROR(defaultPreRetROR);
      setPostRetROR(defaultPostRetROR);
      setInflation(defaultInflation);
      setTaxRate(defaultTaxRate);
    }

    const calcRetirementAge = (updatedTargetRetAmt) => {
      // console.log('start calcRetirementAge ...')
      const netPreRetROR = (preRetROR - inflation) / 100;
      let currBal = currentSavings;
      const annualCont = contributionFreq === "Annually" ? contributions : contributions * 12;
      let retAge = currentAge;

      //console.log("currBal before: ", currBal)
      //console.log("annualCont: ", annualCont)
      //console.log("taxRate: ", taxRate)
      //console.log("updatedTargetRetAmt: ", updatedTargetRetAmt)
      while (currBal < updatedTargetRetAmt) {
        //console.log("annualCont: ", annualCont)
        //console.log("currBal in: ", currBal)

        //console.log('tax: ', currBal * netPreRetROR * (taxRate * 100 / 10000))
        //console.log("zins: ", currBal * netPreRetROR - currBal * netPreRetROR * (taxRate * 100 / 10000))


        currBal = annualCont + currBal * (1 + netPreRetROR) - currBal * netPreRetROR * (taxRate * 100 / 10000);
        //console.log("currBal in after: ", currBal);
        //currBal = _currBal * (1 - taxRate * 100 / 10000);

        //console.log("currBal inside after tax: ", currBal);

        retAge += 1;


        if (retAge > 200) break;


      }
      return retAge;
    };

    useEffect(() => {
      localStorage.setItem("retirementAge", retirementAge);
      localStorage.setItem("targetRetAmt", targetRetAmt);
      localStorage.setItem("annualRetExp", annualRetExp);
      localStorage.setItem("currentAge", currentAge);
      localStorage.setItem("currentSavings", currentSavings);
      localStorage.setItem("contributions", contributions);
      localStorage.setItem("contributionFreq", contributionFreq);
      localStorage.setItem("preRetROR", preRetROR);
      localStorage.setItem("postRetROR", postRetROR);
      localStorage.setItem("inflation", inflation);
      localStorage.setItem("taxRate", taxRate);

      // improve
      // annualRetExp <= targetRetAmt * NetRateOfReturn
      let netPostRetROR = (postRetROR - inflation) / 100;
      if (netPostRetROR === 0) netPostRetROR = 0.000001;

      let updatedTargetRetAmt = annualRetExp * (1 + taxRate / 100) / netPostRetROR;
      // x * (1 - taxRate / 100) = 
      setTargetRetAmt(updatedTargetRetAmt);

      const retAge = calcRetirementAge(updatedTargetRetAmt);
      setRetirementAge(retAge);

      //console.log(currentSavings)
      //console.log(updatedTargetRetAmt)
      let currSavPer = parseInt(parseInt(currentSavings) / parseInt(updatedTargetRetAmt) * 100) + '%'
      //console.log(currSavPer)
      setCurrentSavingsPercent(currSavPer)

    }, [annualRetExp, currentAge, currentSavings, contributions, contributionFreq, preRetROR, postRetROR, inflation, taxRate]);

    return (
      <div className={styles.container} style={{ backgroundColor: '#fff' }}>
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />

          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous" />
        </Head>

        <main className={styles.main} style={{}}>

          <div style={{ justifyContent: 'center', alignItems: 'center', margin: '1rem 3rem', padding: '2rem 0', backgroundColor: '#efefef', borderRadius: '15px' }}>
            <h1 className={styles.title}>
              Finanzielle Freiheit
            </h1>

            <p className={styles.description} >
              Unter dem Begriff "Finanzielle Freiheit" oder "Finanzielle Unabhängigkeit" wird ein Zustand verstanden, in dem es möglich ist, seinen Lebensunterhalt zu bestreiten, ohne dabei auf Erwerbseinkommen - insbesondere solches aus abhängiger Beschäftigung - angewiesen zu sein.
            </p>

            <div className="result-blockquote" section="calc">
              <h2>Alter: <span className="badge rounded-pill bg-success">{retirementAge}</span></h2>
              <h2>Vermögen: <span className="badge rounded-pill bg-warning text-dark">{formatter.format(targetRetAmt)}</span></h2>

              <div style={{ width: '94%', margin: '0 3%' }}>
                <h5 style={{ textAlign: 'left' }}>Ziel</h5>
                <div className="progress" style={{ width: '100%' }}>

                  <div className="progress-bar" role="progressbar" style={{ width: currentSavingsPercent }} >{currentSavingsPercent}</div> {/*aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"*/}
                </div>
              </div>
            </div>



            {/*<div style={{ width: "80vw" }}>*/}{/*className={styles.grid}*/}
            <form style={{ width: "90vw", padding: '2rem 5vw' }}>
              <div className="mb-3">
                <label htmlFor="annualRetExp" className="form-label">Erwartete jährliche Ausgaben</label>
                <input type="number" value={annualRetExp} onChange={(e) => setAnnualRetExp(parseInt(e.target.value) || 0)} className="form-control" id="annualRetExp" aria-describedby="annualRetExpHelp" />
                {/*<div id="annualRetExpHelp" className="form-text">Geplante jährlcihe Ausgaben in der Auszahlungszeit</div>*/}
              </div>
              <div className="mb-3">
                <label htmlFor="currentAge" className="form-label">Aktuelles Alter</label>
                <input type="number" value={currentAge} onChange={(e) => setCurrentAge(parseInt(e.target.value) || 0)} className="form-control" id="currentAge" aria-describedby="currentAgeHelp" />
                {/*<div id="currentAgeHelp" className="form-text">Geplante jährlcihe Ausgaben in der Auszahlungszeit</div>*/}
              </div>
              <div className="mb-3">
                <label htmlFor="currentSavings" className="form-label">Aktuelle Ersparnisse</label>
                <input type="number" value={currentSavings} onChange={(e) => setCurrentSavings(parseInt(e.target.value) || 0)} className="form-control" id="currentSavings" aria-describedby="currentSavingsHelp" />
                {/*<div id="currentSavingsHelp" className="form-text">Geplante jährlcihe Ausgaben in der Auszahlungszeit</div>*/}
              </div>
              <div className="input-group mb-3">
                <label htmlFor="contributions" className="input-group-text">Sparrate</label>
                <input type="number" value={contributions} onChange={(e) => setContributions(parseInt(e.target.value) || 0)} className="form-control" id="contributions" />
                <span className="input-group-text">€</span>
                <select className="form-select" aria-label="Default select example" value={contributionFreq} onChange={(e) => setContributionFreq(e.target.value)} >
                  <option value="Monthly">Monatlich</option>
                  <option value="Annually">Jährlich</option>
                </select>
              </div>

              {/*<div className="input-group form-floating mb-3">
                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                <label for="floatingInput">Email address</label>
                <span class="input-group-text">$</span>
              </div>
              <div className="form-floating mb-3">
                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                <label for="floatingInput">Email address</label>
              </div>
              <div className="form-floating">
                <select className="form-select" id="floatingSelect" aria-label="Floating label select example">
                  <option selected>Open this select menu</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
                <label for="floatingSelect">Works with selects</label>
              </div>*/}


              {/*<div className="mb-3">
                <label htmlFor="contributions" className="form-label">Sparrate</label>
                <select className="form-select" aria-label="Default select example" value={contributionFreq} onChange={(e) => setContributionFreq(e.target.value)} >
                  <option value="Monthly">Monatlich</option>
                  <option value="Annually">Jährlich</option>
                </select>
            </div>*/}


              <h4>Erweitert</h4>
              <div className="input-group mb-3">
                <label htmlFor="preRetROR" className="input-group-text">Rendite Ansparzeit</label>
                <input type="number" value={preRetROR} onChange={(e) => setPreRetROR(parseInt(e.target.value) || 0)} className="form-control" id="preRetROR" aria-describedby="preRetRORHelp" />
                <label htmlFor="postRetROR" className="input-group-text">Rendite Auszahlzeit</label>
                <input type="number" value={postRetROR} onChange={(e) => setPostRetROR(parseInt(e.target.value) || 0)} className="form-control" id="postRetROR" aria-describedby="postRetRORHelp" />
              </div>
              {/*<div className="mb-3">
                <label htmlFor="preRetROR" className="form-label">Rendite Ansparzeit</label>
                <input type="number" value={preRetROR} onChange={(e) => setPreRetROR(parseInt(e.target.value) || 0)} className="form-control" id="preRetROR" aria-describedby="preRetRORHelp" />
              </div>
              <div className="mb-3">
                <label htmlFor="postRetROR" className="form-label">Rendite Auszahlzeit</label>
                <input type="number" value={postRetROR} onChange={(e) => setPostRetROR(parseInt(e.target.value) || 0)} className="form-control" id="postRetROR" aria-describedby="postRetRORHelp" />
              </div>*/}
              <div className="input-group mb-3">
                <label htmlFor="inflation" className="input-group-text">Inflationsrate</label>
                <input type="number" value={inflation} onChange={(e) => setInflation(parseFloat(e.target.value) || 0)} className="form-control" id="inflation" aria-describedby="inflationHelp" />
                <label htmlFor="taxRate" className="input-group-text">Steuersatz</label>
                <input type="number" value={taxRate} onChange={(e) => setTaxRate(parseFloat(e.target.value) || 0)} className="form-control" id="taxRate" aria-describedby="taxRateHelp" />
              </div>
              {/*<div className="mb-3">
                <label htmlFor="inflation" className="form-label">Inflationsrate</label>
                <input type="number" value={inflation} onChange={(e) => setInflation(parseInt(e.target.value) || 0)} className="form-control" id="inflation" aria-describedby="inflationHelp" />
              </div>*/}
              <button type="button" onClick={() => resetInput()} className="btn btn-outline-warning btn-sm">Reset <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                <path d="M1.293 1.293a1 1 0 0 1 1.414 0L8 6.586l5.293-5.293a1 1 0 1 1 1.414 1.414L9.414 8l5.293 5.293a1 1 0 0 1-1.414 1.414L8 9.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L6.586 8 1.293 2.707a1 1 0 0 1 0-1.414z" />
              </svg></button>
            </form>
            <p style={{ textAlign: 'center' }}>Alle Ausgaben ohne Gewähr!</p>
            {/*</div>*/}
          </div>

          <div style={{ width: '70vw', marginTop: '3em' }}>
            <h2 style={{ color: '#0070f3', borderBottom: '1px solid #0070f3' }}>Wissenswertes</h2>

            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <h4>
                  Wie kann ich das für meine finanzielle Freiheit benötigte Kapital erwirtschaften?
                </h4>
                <p>
                  Es empfiehlt sich am Anfang, Teile des Arbeitseinkommens zu sparen. Je höher dabei die Sparrate ist, desto mehr Geld kannst du gewinnbringend in ETFs oder Aktien investieren und vom Zinseszinseffekt profitieren.
                </p>
              </li>
              <li className="list-group-item">
                <h4>Welche Einkünfte gehören zu den Einkünften aus Kapitalvermögen? </h4>
                <p>Unter anderem zählen dazu: Dividenden, Zinserträge, Mieteinnahmen, Zahlungen aus Lebensversicherungen, Unternehmensbeteiligungen und alle sonstigen Kapitalerträge.</p>
              </li>
              <li className="list-group-item">
                <h4>
                  Wird passives Einkommen versteuert?
                </h4>
                <p>
                  Ja, auch passives Einkommen wird in Deutschland versteuert, es sein denn es ist so gering, dass es unter dem aktuell gültigen Steuerfreibetrag bleibt.
                </p>
              </li>
              <li className="list-group-item">
                <h4>Zielsetzung</h4>
                <p>Insgesamt sollte man als Erstes überlegen, was finanzielle Freiheit für das eigene Leben bedeutet und wie wichtig diese einem ist. Zudem ist es wichtig, sich klare Ziele zu setzen, damit man weiß wohin die Reise gehen soll.</p>
              </li>
            </ul>
          </div>

          {/*<div className={styles.grid}>
            <a href="https://nextjs.org/docs" className={styles.card}>
              <h3>Documentation &rarr;</h3>
              <p>Find in-depth information about Next.js features and API.</p>
            </a>

            <a href="https://nextjs.org/learn" className={styles.card}>
              <h3>Learn &rarr;</h3>
              <p>Learn about Next.js in an interactive course with quizzes!</p>
            </a>

            </div>*/}
        </main>

        <footer className={styles.footer}>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{' '}
            <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
          </a>
        </footer>
        <style jsx>{`
          .result-blockquote {
            width: 80%;
            margin: 0 10%;
            text-align: center;
            /*border: 2px solid #b3b3b3;*/
            padding: 15px;
            border-radius: 25px;
            background-color: rgb(43, 37, 110);
            color: #f2f1fb;
            box-shadow: 10px 10px 59px -7px rgba(0,0,0,0.75);
          }
          @media (max-width: 600px) {
            .result-blockquote {
              width: 96%;
              margin: 0 2%;
            }
            .input-group input {
              min-width: 100px;
            }
            .input-group select {
              min-width: 100px;
            }
          }  
        `}</style>
      </div >
    )
  } else {
    return <div>Server</div>
  }

}
