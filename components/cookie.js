import React, { useState } from 'react'

export default function Cookie() {

  const [requestCookies, setRequestCookies] = useState(Boolean(localStorage.getItem("allowCookies") === 'true' ? false : true))
  console.log('requestCookies: ', requestCookies)

  const setCookies = async () => {
    console.log("setting cookies ...")
    localStorage.setItem("allowCookies", true);
    setRequestCookies(false);
  }
  return (
    <div>
      {requestCookies &&
        <div className="box-fixed">
          <div className="box-style">
            {/*<div className="row" style={{ width: '100%' }}>
              <div className="col-10">

              </div>
              <div className="col-2 text-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                  <path d="M1.293 1.293a1 1 0 0 1 1.414 0L8 6.586l5.293-5.293a1 1 0 1 1 1.414 1.414L9.414 8l5.293 5.293a1 1 0 0 1-1.414 1.414L8 9.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L6.586 8 1.293 2.707a1 1 0 0 1 0-1.414z" />
                </svg>
              </div>
      </div>*/}
            <h2>Cookies</h2>
            <p>Diese Seite nutzt Cookies, damit der volle Funktionsumfang gegeben ist. Dabei handelt es sich ausschließlich um technisch Notwendige. Cookies für Marketing oder Analyse werden nicht verwendet.
              Weitere Informationen zum Einsatz findest du in der <a href="/legal/privacy-policy" style={{ textDecoration: 'underline' }}>Datenschutzerklärung</a>.
            </p>
            <button on type="button" onClick={() => setCookies()} className="btn btn-danger w-100">Ok</button>
          </div>
        </div>
      }

      <style jsx>{`
        .box-fixed {
          bottom: 0;
          position: fixed;
          right: 0;
          margin: 1rem;
          width: 33%;   
          z-index: 100;       
        }
        .box-style {
          color: #fff !important;
          background-color: #130f40;
          padding: 1rem !important;
          padding-bottom: 1.5rem !important;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          border-radius: 4px;
        }
          
          @media (max-width: 600px) {
            .box-fixed {
              width: 100%;    
              margin: 0;     
            }
          }  
        `}</style>
    </div >

  )

}
