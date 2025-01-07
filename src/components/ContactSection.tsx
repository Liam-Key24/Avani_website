import MapComponent from "./MapComponent";

export default function ContactSection() {
    return (
      <section className="py-20 px-8 bg-sage-100 text-secondary ">
        <div className="max-w-6xl mx-auto">
          <div className="bg-[#f5f0e8] p-12 rounded-lg shadow-lg">
            <h2 className="text-3xl mb-8">Contact us</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-4 text-sage-600">
                <p className="flex items-center">
                    info@avantiacton.com
                </p>
                <p className="flex items-center">
                  020202020
                </p>
                <p className="flex items-center">
                  123 Avanti Street<br />London, UK SW1A 1AA
                </p>
                <p className="flex items-center">
                  
                  Mon-Fri: 11am - 10pm<br />Sat-Sun: 10am - 11pm
                </p>
              </div>
              <div className="space-y-4">
                <MapComponent />
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  