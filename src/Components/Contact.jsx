
const Img3 = "/src/assets/images/calculator-image.png"
export default function Contact() {
  return (
    <>
    <section className="calculator">
  <div className="container">
    <div className="row">
      <div className="col-lg-7">
        <div className="left-image">
          <img src={Img3} alt="" />
        </div>
      </div>
      <div className="col-lg-5">
        <div className="section-heading">
          <h6>Your Freedom</h6>
          <h4>Get a Financial Plan</h4>
        </div>
        <form id="calculate" action="" method="get">
          <div className="row">
            <div className="col-lg-6">
              <fieldset>
                <label htmlFor="name">Your Name</label>
                <input
                  type="name"
                  name="name"
                  id="name"
                  placeholder=""
                  autoComplete="on"
                  required=""
                />
              </fieldset>
            </div>
            <div className="col-lg-6">
              <fieldset>
                <label htmlFor="email">Your Email</label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  pattern="[^ @]*@[^ @]*"
                  placeholder=""
                  required=""
                />
              </fieldset>
            </div>
            <div className="col-lg-12">
              <fieldset>
                <label htmlFor="subject">Subject</label>
                <input
                  type="subject"
                  name="subject"
                  id="subject"
                  placeholder=""
                  autoComplete="on"
                />
              </fieldset>
            </div>
            <div className="col-lg-12">
              <fieldset>
                <label htmlFor="chooseOption" className="form-label">
                  Your Reason
                </label>
                <select
                  name="Category"
                  className="form-select"
                  aria-label="Default select example"
                  id="chooseOption"
                //   onchange="this.form.click()"
                >
                  <option selected="">Choose an Option</option>
                  <option type="checkbox" name="option1" value="Online Banking">
                    Online Banking
                  </option>
                  <option value="Financial Control">Financial Controls</option>
                  <option value="Yearly Profit">Yearly Profits</option>
                  <option value="Crypto Investment">Crypto Investments</option>
                </select>
              </fieldset>
            </div>
            <div className="col-lg-12">
              <fieldset>
                <button
                  type="submit"
                  id="form-submit"
                  className="orange-button"
                >
                  Submit Now
                </button>
              </fieldset>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>

    </>
  )
}
