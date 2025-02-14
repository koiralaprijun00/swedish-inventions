const inventionsData = [
  {
    category: "foodBeverage",
    items: [
      {
        name: {
          en: "Oatly Oat Milk",
          sv: "Oatly Havremjölk"
        },
        inventorName: "Rickard Öste",
        description: {
          en: "Oatly Oat Milk is a plant-based milk alternative made from oats, known for its creamy texture and mild, slightly sweet flavor.",
          sv: "Oatly Havremjölk är ett växtbaserat mjölkalternativ gjort av havre, känt för sin krämiga textur och milda, något söta smak."
        },
        imageSrc: "/invention-images/oatly.jpg",
        transparentImage: "/invention-images/oatly-png.jpg",
        link: "https://example.com/oatmeal"
      },
      {
        name: {
          en: "Coca-Cola Bottle",
          sv: "Coca-Cola Flaska"
        },
        inventorName: "Alexander Samuelson",
        description: {
          en: "The iconic contoured Coca-Cola bottle was designed by Swedish-born Alexander Samuelson in 1915.",
          sv: "Den ikoniska konturformade Coca-Cola-flaskan designades av svenskfödde Alexander Samuelson 1915."
        },
        imageSrc: "/invention-images/coca-cola.jpg",
        link: "https://www.coca-colacompany.com/about-us/history/the-history-of-the-coca-cola-contour-bottle"
      },
      {
        name: {
          en: "Absolut Vodka",
          sv: "Absolut Vodka"
        },
        inventorName: "Lars Olsson Smith",
        description: {
          en: "Introduced Absolut Rent Brännvin (Absolute Pure Vodka) in 1879, revolutionizing the vodka industry.",
          sv: "Introducerade Absolut Rent Brännvin 1879 och revolutionerade vodkaindustrin."
        },
        imageSrc: "/invention-images/absolut-vodka.jpg",
        link: "https://example.com/oatmeal"
      }
    ]
  },
  {
    category: "engineeringTechnology",
    items: [
      {
        name: {
          en: "Adjustable Wrench",
          sv: "Skiftnyckel"
        },
        inventorName: "Johan Petter Johansson",
        description: {
          en: "A wrench with an adjustable jaw invented in 1892.",
          sv: "En skiftnyckel med justerbar käft, uppfunnen 1892."
        },
        imageSrc: "/invention-images/wrench.jpg",
        transparentImage: "/invention-images/wrench-png.jpg",
        link: "https://example.com/oatmeal"
      },
      {
        name: {
          en: "Safety Matches",
          sv: "Säkerhetständstickor"
        },
        inventorName: "Gustaf Erik Pasch",
        description: {
          en: "Matches that ignite only when struck on a special surface, developed in the 19th century.",
          sv: "Tändstickor som tänds endast när de stryks mot en speciell yta, utvecklade under 1800-talet."
        },
        imageSrc: "/invention-images/safety-matches.jpg",
        link: "https://example.com/oatmeal"
      },
      {
        name: {
          en: "Tetra Pak",
          sv: "Tetra Pak"
        },
        inventorName: "Erik Wallenberg",
        description: {
          en: "Innovative liquid packaging method developed in the 1940s.",
          sv: "Innovativ förpackningsmetod för vätskor utvecklad på 1940-talet."
        },
        imageSrc: "/invention-images/tetra-pak.jpg",
        link: "https://example.com/oatmeal"
      },
      {
        name: {
          en: "Ultrasound Technology",
          sv: "Ultraljudsteknik"
        },
        inventorName: "Hellmuth Hertz and Inge Edler",
        description: {
          en: "Pioneered in Sweden, ultrasound imaging has become a vital tool in medical diagnostics.",
          sv: "Ultraljudsavbildning, pionjär i Sverige, har blivit ett viktigt verktyg inom medicinsk diagnostik."
        },
        imageSrc: "/invention-images/ultrasound.jpg",
        link: "https://example.com/oatmeal"
      },
      {
        name: {
          en: "Three-Point Seatbelt",
          sv: "Tre-punkts säkerhetsbälte"
        },
        inventorName: "Nils Bohlin",
        description: {
          en: "Invented in 1959, significantly improving car safety by securing both the upper and lower body.",
          sv: "Uppfunnet 1959, vilket avsevärt förbättrade bilsäkerheten genom att säkra både överkroppen och underkroppen."
        },
        imageSrc: "/invention-images/seatbelt.jpg",
        link: "https://example.com/oatmeal"
      }
    ]
  },
  {
    category: "digitalTechnology",
    items: [
      {
        name: {
          en: "Bluetooth Technology",
          sv: "Bluetooth-teknik"
        },
        inventorName: "Jaap Haartsen and Sven Mattisson",
        description: {
          en: "Short-range wireless communication technology developed at Ericsson in the 1990s.",
          sv: "Kortdistans trådlös kommunikationsteknik utvecklad på Ericsson på 1990-talet."
        },
        imageSrc: "/invention-images/bluetooth.jpg",
        transparentImage: "/invention-images/bluetooth-png.jpg",
        link: "https://example.com/oatmeal"
      },
      {
        name: {
          en: "Automatic Identification Systems (AIS)",
          sv: "Automatiskt Identifieringssystem (AIS)"
        },
        inventorName: "Håkan Lans",
        description: {
          en: "Enhances maritime navigation by tracking vessels using GPS technology.",
          sv: "Förbättrar sjöfartsnavigering genom att spåra fartyg med GPS-teknik."
        },
        imageSrc: "/invention-images/ais.jpg",
        link: "https://example.com/oatmeal"
      },
      {
        name: {
          en: "Skype",
          sv: "Skype"
        },
        inventorName: "Niklas Zennström and Janus Friis",
        description: {
          en: "Online communication platform for voice and video calls, launched in 2003.",
          sv: "Plattform för röst- och videosamtal online, lanserad 2003."
        },
        imageSrc: "/invention-images/skype.jpg",
        link: "https://example.com/oatmeal"
      },
      {
        name: {
          en: "Spotify",
          sv: "Spotify"
        },
        inventorName: "Daniel Ek and Martin Lorentzon",
        description: {
          en: "Digital music streaming service founded in 2006.",
          sv: "Digital musiktjänst grundad 2006."
        },
        imageSrc: "/invention-images/spotify.jpg",
        link: "https://example.com/oatmeal"
      }
    ]
  },
  {
    category: "gaming",
    items: [
      {
        name: {
          en: "Minecraft",
          sv: "Minecraft"
        },
        inventorName: "Markus Persson (Notch)",
        description: {
          en: "Popular sandbox game developed by Mojang, released in 2011.",
          sv: "Populärt sandlådespel utvecklat av Mojang, släppt 2011."
        },
        imageSrc: "/invention-images/minecraft.jpg",
        link: "https://example.com/oatmeal"
      },
      {
        name: {
          en: "Candy Crush",
          sv: "Candy Crush"
        },
        inventorName: "Riccardo Zacconi",
        description: {
          en: "Highly addictive mobile game developed by King in 2012.",
          sv: "Mycket beroendeframkallande mobilspel utvecklat av King 2012."
        },
        imageSrc: "/invention-images/candy-crush.jpg",
        link: "https://example.com/oatmeal"
      }
    ]
  },
  {
    category: "scienceInnovation",
    items: [
      {
        name: {
          en: "Nobel Prize",
          sv: "Nobelpriset"
        },
        inventorName: "Alfred Nobel",
        description: {
          en: "Established in 1895, awarded for outstanding achievements in various fields.",
          sv: "Grundades 1895 och delas ut för framstående prestationer inom olika områden."
        },
        imageSrc: "/invention-images/nobel-prize.jpg",
        link: "https://example.com/oatmeal"
      },
      {
        name: {
          en: "Celsius Temperature Scale",
          sv: "Celsius temperaturskala"
        },
        inventorName: "Anders Celsius",
        description: {
          en: "Widely used temperature scale developed by Anders Celsius.",
          sv: "Allmänt använd temperaturskala utvecklad av Anders Celsius."
        },
        imageSrc: "/invention-images/celsius.jpg",
        link: "https://example.com/oatmeal"
      },
      {
        name: {
          en: "First Oral Cholera Vaccine, Drokal",
          sv: "Första orala koleravaccinet, Drokal"
        },
        inventorName: "Jan Holmgren",
        description: {
          en: "Developed the first effective oral cholera vaccine.",
          sv: "Utvecklade det första effektiva orala koleravaccinet."
        },
        imageSrc: "/invention-images/cholera-vaccine.jpeg",
        link: "https://example.com/oatmeal"
      }
    ]
  }
]

export default inventionsData
