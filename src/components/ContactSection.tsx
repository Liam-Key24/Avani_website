import MapComponent from "./MapComponent";

export default function ContactSection() {
    return (
      <section className="p-20 bg-[#C2C5AA] text-secondary">
        <div className="max-w-6xl mx-auto">
          <div className=" p-12 rounded">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="flex flex-col justify-center items-center text-center gap-6 bg-tertiary p-4 rounded-lg">
                <h2 className="text-4xl">Info</h2>
                <div className="space-y-2 text-lg">
                  <p>
                    info@avantiacton.com
                  </p>
                  <p>
                  020 8752 1711
                  </p>
                  <p>
                  328 Uxbridge Rd, London W3 9QP
                  </p>
                  <p>
                    Mon-Fri: 11am - 10pm<br />Sat-Sun: 11am - 11pm
                  </p>
                </div>
              </div>
              <div>
                <MapComponent />
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  