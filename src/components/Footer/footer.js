import React from 'react'

export class Footer extends React.Component {
  render() {
    return (
      <div className="row cont">
        <div className="col text-left">
          <h2 className="mb-5">Humble</h2>
          <p>Limited time offer—Get $8 Wallet Credit to spend on your next store purchase!</p>
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
        <div className="col-6 text-right">
          The Humble community has contributed over $165,000,000 to charity since 2010, making an amazing difference to causes all over the world.
        </div>
      </div>
    )
  }
}