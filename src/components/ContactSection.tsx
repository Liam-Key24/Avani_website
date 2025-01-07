import MapComponent from "./MapComponent";

export default function ContactSection() {
    return (
      <section className="p-20 bg-primary text-secondary">
        <div className="max-w-6xl mx-auto">
          <div className="bg-tertiary p-12 rounded shadow">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="flex flex-col justify-center gap-6">
                <h2 className="text-4xl">Info</h2>
                <div className="space-y-4">
                  <p className="text-xl">
                    info@avantiacton.com
                  </p>
                  <p className="text-xl">
                    020202020
                  </p>
                  <p className="text-xl">
                    123 Avanti Street<br />London, UK SW1A 1AA
                  </p>
                  <p className="text-xl">
                    Mon-Fri: 11am - 10pm<br />Sat-Sun: 10am - 11pm
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
  
  