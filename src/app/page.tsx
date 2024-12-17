import "./style.css"

export default function Home() {
  return (
    <div className=" justify-items-start min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {/* Header */}
      <header className="text-start">
        <h1>Famous Swedish Inventions</h1>
        <p>Discovering Sweden's Contributions to the World</p>
      </header>

      {/* Main Content */}
      <main>
        <Section title="Food & Beverage">
          <div className="grid-container">
            <InventionCard
              name="Oatmeal"
              description="A staple breakfast food, widely consumed for its simplicity and nutritional value."
              imageSrc="https://via.placeholder.com/150"
              link="https://example.com/oatmeal"
            />
            <InventionCard
              name="Coca-Cola Bottle (1916)"
              description="The iconic contoured bottle design, created by Swedish-born Alexander Samuelson."
              imageSrc="https://via.placeholder.com/150"
              link="https://example.com/oatmeal"
            />
            <InventionCard name="Absolut Vodka" description="A globally recognized premium vodka brand, originating in Sweden." imageSrc="https://via.placeholder.com/150" />
            <InventionCard
              name="Peepoo Bag"
              description="A single-use toilet designed to prevent contamination from human waste, showcasing Sweden's commitment to sustainable solutions for sanitation issues in developing countries."
              imageSrc="https://via.placeholder.com/150"
              link="https://example.com/oatmeal"
            />
          </div>
        </Section>

        <Section title="Engineering & Technology">
          <div className="grid-container">
            <InventionCard
              name="Adjustable Wrench (1892)"
              description="Invented by Johan Petter Johansson, this versatile tool allows users to adjust the size of the opening to fit various nuts and bolts, eliminating the need for multiple wrenches."
              imageSrc="https://via.placeholder.com/150" // Replace with actual image URL
              link="https://example.com/oatmeal"
            />
            <InventionCard
              name="Safety Matches (Early 19th Century)"
              description="Developed by Gustaf Erik Pasch, these matches moved the flammable material to the side of the box, making them much safer to use."
              imageSrc="https://via.placeholder.com/150"
              link="https://example.com/oatmeal"
            />
            <InventionCard
              name="Tetra Pak (1940s)"
              description="Invented by Erik Wallenberg, this packaging method revolutionized food storage by allowing liquids to be stored without refrigeration."
              imageSrc="https://via.placeholder.com/150"
              link="https://example.com/oatmeal"
            />
            <InventionCard
              name="Ultrasound Technology"
              description="Pioneered in Sweden, ultrasound imaging has become a vital tool in medical diagnostics."
              imageSrc="https://via.placeholder.com/150"
              link="https://example.com/oatmeal"
            />
            <InventionCard
              name="Match Stick (1844)"
              description="The safety match was invented by Gustaf Erik Pasch, revolutionizing fire-making."
              imageSrc="https://via.placeholder.com/150"
              link="https://example.com/oatmeal"
            />
            <InventionCard
              name="Three-Point Seatbelt (1959)"
              description="Invented by Volvo, the three-point seatbelt significantly improved car safety."
              imageSrc="https://via.placeholder.com/150"
              link="https://example.com/oatmeal"
            />
            <InventionCard
              name="Tetra Pak (1951)"
              description="A Swedish innovation that revolutionized liquid food storage and transport."
              imageSrc="https://via.placeholder.com/150"
              link="https://example.com/oatmeal"
            />
          </div>
        </Section>

        <Section title="Digital Technology">
          <div className="grid-container">
            <InventionCard
              name="Bluetooth Technology"
              description="Developed by Swedish engineers Jaap Haartsen and Sven Mattisson, Bluetooth allows for short-range wireless communication between devices."
              imageSrc="https://via.placeholder.com/150"
              link="https://example.com/oatmeal"
            />
            <InventionCard
              name="Automatic Identification Systems (AIS)"
              description="Created by Håkan Lans, this system enhances maritime navigation by tracking vessels using GPS technology."
              imageSrc="https://via.placeholder.com/150"
              link="https://example.com/oatmeal"
            />
            <InventionCard name="Skype" description="A game-changing platform for online voice and video calls." imageSrc="https://via.placeholder.com/150" />
            <InventionCard
              name="Spotify"
              description="The world's leading music streaming service, transforming how we listen to music."
              imageSrc="https://via.placeholder.com/150"
              link="https://example.com/oatmeal"
            />
            <InventionCard name="Ericsson" description="A major telecommunications company, pioneering mobile communication." imageSrc="https://via.placeholder.com/150" link="https://example.com/oatmeal" />
          </div>
        </Section>

        <Section title="Gaming">
          <div className="grid-container">
            <InventionCard name="Minecraft" description="A globally popular sandbox video game created by Mojang, a Swedish company." imageSrc="https://via.placeholder.com/150" link="https://example.com/oatmeal" />
            <InventionCard name="Candy Crush" description="A highly addictive mobile game developed by King, a Swedish company." imageSrc="https://via.placeholder.com/150" link="https://example.com/oatmeal" />
          </div>
        </Section>

        <Section title="Science & Innovation">
          <div className="grid-container">
            <InventionCard
              name="Nobel Prize"
              description="Established by Alfred Nobel, awarded for excellence in sciences, peace, and literature."
              imageSrc="https://via.placeholder.com/150"
              link="https://example.com/oatmeal"
            />
            <InventionCard name="First Cholera Vaccine" description="Developed by a Swedish scientist to combat the deadly disease." imageSrc="https://via.placeholder.com/150" link="https://example.com/oatmeal"/>
            <InventionCard
              name="Hövding (Invisible Bicycle Helmet)"
              description="This innovative helmet functions like an airbag for cyclists, inflating upon impact to protect the head while being worn as a collar."
              imageSrc="https://via.placeholder.com/150"
              link="https://example.com/oatmeal"
            />
            <InventionCard
              name="Life-Saving Drones"
              description="Swedish innovations in drone technology have been applied in healthcare for delivering medical supplies quickly and efficiently."
              imageSrc="https://via.placeholder.com/150"
              link="https://example.com/oatmeal"
            />
          </div>
        </Section>

        <Section title="Design & Retail">
          <div className="grid-container">
            <InventionCard name="H&M" description="A leading global fashion retailer, known for affordable clothing." imageSrc="https://via.placeholder.com/150" link="https://example.com/oatmeal" />
            <InventionCard
              name="IKEA"
              description="A Swedish multinational furnishing company famous for flat-pack furniture and affordable home designs."
              imageSrc="https://via.placeholder.com/150"
              link="https://example.com/oatmeal"
            />
          </div>
        </Section>
        <Section title="Miscellaneous">
          <div className="grid-container">
            <InventionCard
              name="Celsius Temperature Scale (1742)"
              description="Developed by Anders Celsius, this scale is widely used around the world for measuring temperature."
              imageSrc="https://via.placeholder.com/150"
              link="https://example.com/oatmeal"
            />
          </div>
        </Section>
      </main>
    </div>
  )
}

// Section Component
function Section({ title, children }) {
  return (
    <section>
      <h2 className="text-xl font-bold mb-4">
        {title}
      </h2>
      <div className="grid-container">
        {children}
      </div>
    </section>
  )
}

// InventionCard Component
function InventionCard({ name, description, imageSrc, link }) {
  return (
    <div className="invention-card flex items-center bg-white shadow-lg p-4 rounded-lg border">
      {/* Image Section */}
      <img src={imageSrc} alt={name} className="w-16 h-16 object-cover rounded-md mr-4" />

      {/* Text Section */}
      <div>
        <h3 className="text-lg font-semibold mb-2">{name}</h3>
        <p className="text-sm text-gray-700 mb-2">{description}</p>
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline text-sm"
          >
            Learn more
          </a>
        )}
      </div>
    </div>
  )
}
