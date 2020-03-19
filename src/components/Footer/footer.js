import React from 'react'
const logo = '/assets/img/loogo.png'

const social_logos = [
  '/assets/img/facebook.svg',
  '/assets/img/instagram.svg',
  '/assets/img/vk.svg',
  '/assets/img/linkedin.svg'
]
export class Footer extends React.Component {
  render() {
    return (
      <div className="row cont">
        <div className="col text-left">
          <h2 className="mb-3">Ree-action</h2>
          <a onClick={() => window.scroll(0, 0)}><img src={logo} height="100px"></img></a>

          <p className="my-3">Limited time offer—Get $8 Wallet Credit to spend on your next store purchase!</p>
          <a href="" style={{ color: "gold", fontWeight: "bold" }}>Invite a friend</a>
        </div>
        <div className="col">
          <ul className="footerList text-left">

            {['Blog', 'Support', 'Order Resender', 'Developer'].map((item, index) => {
              return (
                <li key={index}>{item}</li>
              )
            })}

          </ul>
        </div>
        <div className="col">
          <ul className="footerList text-left">
            {['Terms of Service', 'Privacy Policy', 'Cookie Policy', 'Legal Notices'].map((item, index) => {
              return (<li key={index}>{item}</li>)
            })}
          </ul>
        </div>
        <div className="text-right">
          <ul style={{ display: "flex" }}>
            {social_logos.map((logo, index) => {
              if (index === 3) {
                return (<li key={index} className="p-2">
                  <a href="https://www.linkedin.com/in/mostafafarag14/" target="_blank">
                    <img src={logo} height="40" width="40" style={{ display: "flex" }}></img>
                  </a>
                </li>)
              }
              else {
                return (<li key={index} className="p-2">
                  <img src={logo} height="40" width="40" style={{ display: "flex" }}></img>
                </li>)
              }
            })}
          </ul>
        </div>
      </div>
    )
  }
}