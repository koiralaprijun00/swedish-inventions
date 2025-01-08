"use client"

const inventionsData = [
  {
    category: "Food & Beverage",
    items: [
      {
        name: "Oatly Oat Milk",
        description:
          "Oatly Oat Milk is a plant-based milk alternative made from oats. It is known for its creamy texture and mild, slightly sweet flavor. Oatly is a popular choice for those who are lactose intolerant, vegan, or looking to reduce their dairy consumption. It is often used in coffee, smoothies, and baking, and is fortified with vitamins and minerals to provide a nutritious alternative to cow's milk.",
        imageSrc: "/invention-images/oatly.jpg",
        link: "https://example.com/oatmeal",
        inventorName: "Rickard Öste"
      },
      {
        name: "Coca-Cola Bottle (1916)",
        description:
          "The iconic contoured Coca-Cola bottle was designed by Swedish-born Alexander Samuelson in 1915. He was working for the Root Glass Company in Indiana, USA, at the time.",
        imageSrc: "/invention-images/coca-cola.jpg",
        link: "https://www.coca-colacompany.com/about-us/history/the-history-of-the-coca-cola-contour-bottle",
        inventorName: "Alexander Samuelson"
      },
      {
        name: "Absolut Vodka",
        description:
          "Lars Olsson Smith, a Swedish entrepreneur, introduced Absolut Rent Brännvin (Absolute Pure Vodka) in 1879. He is known for revolutionizing the vodka industry with his continuous distillation process.",
        imageSrc: "/invention-images/absolut-vodka.jpg",
        link: "https://example.com/oatmeal",
        inventorName: "Lars Olsson Smith"
      },
      {
        name: "Peepoo Bag",
        description:
          "nders Wilhelmson, a Swedish architect and professor, invented the Peepoo Bag. It is a single-use, self-sanitizing toilet designed to provide safe sanitation in areas lacking proper facilities.",
        imageSrc: "/invention-images/peepoo-bag.jpg",
        link: "https://example.com/oatmeal",
        inventorName: "Anders Wilhelmson"
      }
    ]
  },
  {
    category: "Engineering & Technology",
    items: [
      {
        name: "Adjustable Wrench",
        description:
          "ohan Petter Johansson, a Swedish inventor, created the adjustable wrench in 1892. This tool allows users to adjust the size of the opening to fit various nuts and bolts, eliminating the need for multiple wrenches.",
        imageSrc: "/invention-images/wrench.jpg",
        link: "https://example.com/oatmeal",
        inventorName: "Johan Petter Johansson"
      },
      {
        name: "Safety Matches",
        description:
          "Gustaf Erik Pasch, a Swedish chemist, developed safety matches in the early 19th century. He moved the flammable material to the side of the box, making them much safer to use compared to earlier matches.",
        imageSrc: "/invention-images/safety-matches.jpg",
        link: "https://example.com/oatmeal",
        inventorName: "Gustaf Erik Pasch"
      },
      {
        name: "Tetra Pak (1940s)",
        description:
          "Erik Wallenberg, a Swedish engineer, invented the Tetra Pak packaging method in the 1940s. This innovative packaging allows liquids to be stored without refrigeration, revolutionizing food storage and distribution.",
        imageSrc: "/invention-images/tetra-pak.jpg",
        link: "https://example.com/oatmeal",
        inventorName: "Erik Wallenberg"
      },
      {
        name: "Ultrasound Technology",
        description: "Pioneered in Sweden, ultrasound imaging has become a vital tool in medical diagnostics.",
        imageSrc: "/invention-images/ultrasound.jpg",
        link: "https://example.com/oatmeal",
        inventorName: "Prijun Koirala"
      },
      {
        name: "Three-Point Seatbelt (1959)",
        description:
          "Nils Bohlin, a Swedish engineer working for Volvo, invented the three-point seatbelt in 1959. This design significantly improved car safety by securing both the upper and lower body with a single continuous belt. It has since become a standard safety feature in vehicles worldwide.",
        imageSrc: "/invention-images/seatbelt.jpg",
        link: "https://example.com/oatmeal",
        inventorName: "Nils Bohlin"
      }
    ]
  },
  {
    category: "Digital Technology",
    items: [
      {
        name: "Bluetooth Technology",
        description:
          "Bluetooth technology was developed by Swedish engineers Jaap Haartsen and Sven Mattisson while working at Ericsson in the 1990s. It allows for short-range wireless communication between devices, enabling the creation of wireless personal area networks.",
        imageSrc: "/invention-images/blueetooth.jpg",
        link: "https://example.com/oatmeal",
        inventorName: "Jaap Haartsen and Sven Mattisson"
      },
      {
        name: "Automatic Identification Systems (AIS)",
        description:
          "Håkan Lans, a Swedish inventor, created the Automatic Identification System (AIS). This system enhances maritime navigation by tracking vessels using GPS technology, improving safety and efficiency in maritime operations.",
        imageSrc: "/invention-images/ais.jpg",
        link: "https://example.com/oatmeal",
        inventorName: "Håkan Lans"
      },
      {
        name: "Skype",
        description:
          "Skype was co-founded by Swedish entrepreneur Niklas Zennström and Danish entrepreneur Janus Friis in 2003. It revolutionized online communication by providing a platform for voice and video calls over the internet.",
        imageSrc: "/invention-images/skype.jpg",
        link: "https://example.com/oatmeal",
        inventorName: "Niklas Zennström and Janus Friis"
      },
      {
        name: "Spotify",
        description:
          "Spotify was founded by Swedish entrepreneurs Daniel Ek and Martin Lorentzon in 2006. It is a digital music streaming service that provides users with access to millions of songs and podcasts from around the world.",
        imageSrc: "/invention-images/spotify.jpg",
        link: "https://example.com/oatmeal",
        inventorName: "Daniel Ek and Martin Lorentzon "
      },
      {
        name: "Ericsson",
        description:
          "Founded in 1876 by Lars Magnus Ericsson, Ericsson is a Swedish multinational networking and telecommunications company. It has been at the forefront of mobile communication technology, contributing significantly to the development of mobile networks and infrastructure worldwide.",
        imageSrc: "/invention-images/ericsson.jpg",
        link: "https://example.com/oatmeal",
        inventorName: "Lars Magnus Ericsson"
      }
    ]
  },
  {
    category: "Gaming",
    items: [
      {
        name: "Minecraft",
        description:
          "Minecraft is a globally popular sandbox video game created by Markus Persson, also known as Notch. It was developed by Mojang, a Swedish company, and released in 2011. The game allows players to build and explore virtual worlds made up of blocks.",
        imageSrc: "/invention-images/minecraft.jpg",
        link: "https://example.com/oatmeal",
        inventorName: "Markus Persson(Notch)"
      },
      {
        name: "Candy Crush",
        description:
          "Candy Crush is a highly addictive mobile game developed by King, a Swedish company. It was released in 2012 and quickly became one of the most popular mobile games worldwide. The game involves matching candies to achieve specific goals and progress through levels.",
        imageSrc: "/invention-images/candy-crush.jpg",
        link: "https://example.com/oatmeal",
        inventorName: "Riccardo Zacconi (CEO of King)"
      }
    ]
  },
  {
    category: "Science & Innovation",
    items: [
      {
        name: "Nobel Prize",
        description:
          "The Nobel Prize was established by Alfred Nobel, a Swedish inventor, engineer, and industrialist, in his will in 1895. The prizes are awarded annually in recognition of outstanding achievements in the fields of Physics, Chemistry, Medicine, Literature, Peace, and Economic Sciences. The Nobel Prizes are considered some of the most prestigious awards in the world, honoring individuals and organizations that have made significant contributions to humanity.",
        imageSrc: "/invention-images/nobel-prize.jpg",
        link: "https://example.com/oatmeal",
        inventorName: "Alfred Nobel"
      },
      {
        name: "First Oral Cholera Vaccine, Drokal",
        description:
          "Jan Holmgren, a Swedish scientist, developed the first effective oral cholera vaccine known as Drokal. This vaccine has been crucial in combating the deadly disease by providing an easy-to-administer and effective method of immunization, significantly reducing the incidence of cholera in affected regions.",
        imageSrc: "/invention-images/cholera-vaccine.jpeg",
        link: "https://example.com/oatmeal",
        inventorName: "Jan Holmgren"
      },
      {
        name: "Hövding (Invisible Bicycle Helmet)",
        description:
          "The Hövding is an innovative bicycle helmet designed by Swedish inventors Anna Haupt and Terese Alstin. Unlike traditional helmets, the Hövding is worn as a collar around the neck and inflates like an airbag upon impact to protect the cyclist's head. This design provides both safety and comfort, making it a popular choice among urban cyclists.",
        imageSrc: "/invention-images/hovding.jpg",
        link: "https://example.com/oatmeal",
        inventorName: "Anna Haupt and Terese Alstin"
      },
      {
        name: "Life-Saving Drones",
        description: "Swedish innovations in drone technology have been applied in healthcare for delivering medical supplies quickly and efficiently.",
        imageSrc: "/invention-images/drones.jpg",
        link: "https://example.com/oatmeal",
        inventorName: "Prijun Koirala"
      }
    ]
  },
  {
    category: "Design & Retail",
    items: [
      {
        name: "H&M",
        description: (
          <div class="container">
            <section class="space-y-8 mb-8">
              <p class="text-lg leading-relaxed">
                Sweden, renowned for its breathtaking landscapes and innovative spirit, has given the world numerous groundbreaking contributions. Among these is Hennes & Mauritz,
                better known as H&M, a global fashion giant that has revolutionized the retail clothing industry. As part of Sweden&lsquo;s rich legacy of innovation, H&M has
                established itself not only as a fashion leader but also as a pioneer in sustainable practices and accessible style. This blog explores the story, growth, and
                impact of H&M, demonstrating why it deserves a spot among the top 100 Swedish inventions.
              </p>

              <section>
                <h2 class="text-xl font-semibold text-blue-500">Humble Beginnings: The Birth of H&M</h2>
                <p class="text-lg leading-relaxed">
                  H&M was founded in 1947 by Erling Persson in the small Swedish town of Västerås. Originally named Hennes (Swedish for “hers”), the store focused exclusively on
                  women&rsquo;s clothing. Persson's inspiration came from a trip to the United States, where he observed the efficiency and popularity of mass-produced clothing.
                  Persson envisioned a store that offered fashionable, affordable clothing to the everyday consumer.
                </p>
                <p class="text-lg leading-relaxed">
                  In 1968, Persson acquired Mauritz Widforss, a retailer specializing in men&rsquo;s and outdoor clothing, leading to the rebranding of the company as Hennes &
                  Mauritz—H&M. With this merger, H&M began offering a wide array of clothing for women, men, and eventually children, catering to a diverse audience and laying the
                  foundation for its global expansion.
                </p>
              </section>

              <section>
                <h2 class="text-xl font-semibold text-blue-500">Global Expansion: Becoming a Fashion Empire</h2>
                <p class="text-lg leading-relaxed">
                  H&M&rsquo;sjourney from a single store in Sweden to a global fashion empire is a testament to its innovative business model and relentless pursuit of excellence.
                  The company&rsquo;s first international store opened in Norway in 1964, and by the 1970s, it had expanded to Denmark and the United Kingdom.
                </p>
                <p class="text-lg leading-relaxed">
                  H&M&rsquo;sappeal lies in its ability to merge affordability with trend-focused designs. The brand embraced the concept of fast fashion, ensuring that
                  high-quality, fashionable clothing reached stores quickly after appearing on runways. This model not only democratized fashion but also cemented H&M as a go-to
                  destination for consumers seeking style without breaking the bank.
                </p>
                <p class="text-lg leading-relaxed">
                  By the 2000s, H&M had firmly established itself on every continent, with flagship stores in major cities like New York, Paris, and Tokyo. Today, H&M operates in
                  over 75 markets with thousands of stores and a robust online presence.
                </p>
              </section>

              <section>
                <h2 class="text-xl font-semibold text-blue-500">Innovations in the Retail Industry</h2>
                <p class="text-lg leading-relaxed">
                  H&M&rsquo;s success can be attributed to its innovative approach to retail. The brand has consistently stayed ahead of industry trends, leveraging technology and
                  design to enhance the shopping experience.
                </p>

                <h3 class="text-xl font-semibold text-blue-400 mt-6">Collaborations with Designers and Celebrities</h3>
                <p class="text-lg leading-relaxed">
                  H&M pioneered the concept of designer collaborations, bridging the gap between high fashion and mainstream retail. Partnerships with industry icons like Karl
                  Lagerfeld, Stella McCartney, and Alexander Wang brought haute couture designs to the masses at affordable prices. These limited-edition collections generated
                  global buzz, attracting millions of shoppers and solidifying H&M&rsquo;sstatus as a trendsetter.
                </p>

                <h3 class="text-xl font-semibold text-blue-400 mt-6">Digital Transformation</h3>
                <p class="text-lg leading-relaxed">
                  Recognizing the importance of e-commerce early on, H&M invested heavily in its online platform. The brand&rsquo;s mobile app and website offer seamless shopping
                  experiences, featuring user-friendly interfaces, personalized recommendations, and virtual styling tools. H&M&rsquo;s embrace of technology has ensured its
                  relevance in an increasingly digital world.
                </p>
              </section>
            </section>
          </div>
        ),
        imageSrc: "/invention-images/handm.jpg",
        link: "https://example.com/oatmeal",
        inventorName: "Erling Persson"
      },
      {
        name: "IKEA",
        description:
          "IKEA is a Swedish multinational furnishing company founded by Ingvar Kamprad in 1943. It is renowned for its affordable, flat-pack furniture and innovative home designs. IKEA's products are designed to be easily assembled by the consumer, making stylish and functional home furnishings accessible to a wide audience. The company has grown to become one of the largest furniture retailers in the world, with a strong focus on sustainability and customer experience.",
        imageSrc: "/invention-images/ikea.jpg",
        link: "https://example.com/oatmeal",
        inventorName: "Ingvar Kamprad"
      }
    ]
  },
  {
    category: "Miscellaneous",
    items: [
      {
        name: "Celsius Temperature Scale (1742)",
        description: "Developed by Anders Celsius, this scale is widely used around the world for measuring temperature.",
        imageSrc: "/invention-images/celsius.jpg",
        link: "https://example.com/oatmeal",
        inventorName: "Prijun Koirala"
      }
    ]
  }
]

export default inventionsData
