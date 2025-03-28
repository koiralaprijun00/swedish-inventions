const inventionsData = [
    {
        category: "foodBeverage",
        items: [
            {
                id: 1,
                name: { en: "Oatly Oat Milk", sv: "Oatly Havremjölk" },
                inventorName: "Rickard Öste",
                year: 2001,
                oneLineHeading: { en: "Creamy Revolution: Oat Milk Takes the World by Storm", sv: "Krämig Revolution: Havremjölk Tar Världen med Storm" },
                description: {
                    en: "Oatly Oat Milk is a plant-based milk alternative made from oats, known for its creamy texture and mild, slightly sweet flavor.",
                    sv: "Oatly Havremjölk är ett växtbaserat mjölkalternativ gjort av havre, känt för sin krämiga textur och milda, något söta smak.",
                },
                imageSrc: "/invention-images/oatly.webp",
                transparentImage: "/invention-images/oatly-png.webp",
                link: "https://example.com/oatmeal",
            },
            {
                id: 52,
                name: { en: "Coca-Cola Bottle", sv: "Coca-Cola Flaska" },
                inventorName: "Alexander Samuelson",
                year: 1915,
                oneLineHeading: {
                    en:
                        "The Coca-Cola bottle is one of the most recognizable designs in the world. With its unique curves and instantly recognizable shape, it has become a symbol of branding excellence. But what many people don't realize is that the design of the Coca-Cola bottle has strong Swedish roots. The bottle that changed beverage packaging forever was designed by Swedish-born innovator Alexander Samuelson.",
                    sv:
                        "Coca-Cola-flaskan är en av världens mest igenkännliga designer. Med sina unika kurvor och omedelbart identifierbara form har den blivit en symbol för varumärkesexcellens. Men vad många inte vet är att designen av Coca-Cola-flaskan har starka svenska rötter. Flaskan som för alltid förändrade dryckesförpackningar skapades av den svenskfödde innovatören Alexander Samuelson.",
                },
                description: { en: "The iconic contoured Coca-Cola bottle was designed by Swedish-born Alexander Samuelson in 1915.", sv: "Den ikoniska konturformade Coca-Cola-flaskan designades av svenskfödde Alexander Samuelson 1915." },
                imageSrc: "/invention-images/coca-cola.webp",
                link: "https://www.coca-colacompany.com/about-us/history/the-history-of-the-coca-cola-contour-bottle",
            },
            {
                id: 3,
                name: { en: "Absolut Vodka", sv: "Absolut Vodka" },
                inventorName: "Lars Olsson Smith",
                year: 1879,
                oneLineHeading: { en: "Pure Spirit: Vodka's Swedish Breakthrough", sv: "Ren Ande: Vodkans Svenska Genombrott" },
                description: {
                    en:
                        "Absolut Vodka is more than just a premium spirit; it's a cultural icon that has redefined the vodka industry. Born in Sweden and embraced worldwide, Absolut has become synonymous with purity, quality, and innovative marketing. From its minimalist bottle design to its commitment to sustainability, Absolut Vodka is a brand that continues to make a lasting impact on the spirits industry.",
                    sv:
                        "Absolut Vodka är mer än bara en premiumspririt; det är en kulturell ikon som har omdefinierat vodkaindustrin. Född i Sverige och omfamnad över hela världen har Absolut blivit synonymt med renhet, kvalitet och innovativ marknadsföring. Från dess minimalistiska flaskdesign till dess engagemang för hållbarhet är Absolut Vodka ett varumärke som fortsätter att sätta ett bestående avtryck i spritindustrin.",
                },
                imageSrc: "/invention-images/absolut-vodka.webp",
                link: "https://example.com/oatmeal",
            },
        ],
    },
    {
        category: "engineeringTechnology",
        items: [
            {
                id: 4,
                name: { en: "Adjustable Wrench", sv: "Skiftnyckel" },
                oneLineHeading: { en: "The Swedish Marvel: How the Adjustable Wrench Revolutionized Tools", sv: "Den svenska underverket: Hur den justerbara skiftnyckeln revolutionerade verktyg" },
                inventorName: "Johan Petter Johansson",
                year: 1892,
                description: {
                    en:
                        "When you think of groundbreaking inventions, your mind might wander to the automobile, the airplane, or even the smartphone. But one tool that has quietly shaped industries, households, and repair shops worldwide is the adjustable wrench—a simple yet ingenious device that was invented in Sweden.",
                    sv:
                        "När du tänker på banbrytande uppfinningar kanske du föreställer dig bilen, flygplanet eller till och med smarttelefonen. Men ett verktyg som tyst har format industrier, hushåll och verkstäder världen över är den justerbara skiftnyckeln – en enkel men genialisk uppfinning som kommer från Sverige.",
                },
                imageSrc: "/invention-images/wrench.webp",
                transparentImage: "/invention-images/wrench-png.webp",
                link: "https://example.com/oatmeal",
            },
            {
                id: 5,
                name: { en: "Safety Matches", sv: "Säkerhetständstickor" },
                inventorName: "Gustaf Erik Pasch",
                year: 1855,
                oneLineHeading: { en: "Strike Safely: The Match That Changed Fire Forever", sv: "Tänd Säkert: Tändstickan Som Förändrade Elden För Alltid" },
                description: {
                    en:
                        "Fire has been essential to human survival for millennia, but before the invention of safety matches, igniting a flame was a risky business. Early matches were unstable, dangerous, and often toxic. That all changed in the 19th century when Swedish chemist Gustaf Erik Pasch and industrialist Johan Edvard Lundström introduced a groundbreaking innovation—the safety match. This invention revolutionized fire-starting, making it safer, more reliable, and widely accessible.",
                    sv:
                        "Elden har varit avgörande för mänsklighetens överlevnad i årtusenden, men innan säkerhetständstickorna uppfanns var det en riskfylld historia att tända en låga. Tidiga tändstickor var ostabila, farliga och ofta giftiga. Allt detta förändrades på 1800-talet när den svenske kemisten Gustaf Erik Pasch och industrialisten Johan Edvard Lundström introducerade en banbrytande uppfinning – säkerhetständstickan. Denna innovation revolutionerade eldstartandet och gjorde det säkrare, mer pålitligt och allmänt tillgängligt.",
                },
                imageSrc: "/invention-images/safety-matches.webp",
                link: "https://example.com/oatmeal",
            },
            {
                id: 6,
                name: { en: "Tetra Pak", sv: "Tetra Pak" },
                inventorName: "Erik Wallenberg",
                year: 1951,
                oneLineHeading: { en: "Pack Savvy: The Carton That Keeps Liquids Fresh", sv: "Smart Förpackning: Kartongen Som Håller Vätskor Färska" },
                description: {
                    en:
                        "From milk and juice to soups and sauces, Tetra Pak is a name seen on billions of food and beverage cartons worldwide. This Swedish invention revolutionized the way liquids are packaged, stored, and transported, significantly reducing food waste and improving sustainability. Today, Tetra Pak is the world's leading provider of packaging solutions, with a presence in over 160 countries. But how did this game-changing innovation come to be?",
                    sv:
                        "Från mjölk och juice till soppor och såser – Tetra Pak är ett namn som syns på miljarder livsmedels- och dryckeskartonger världen över. Denna svenska uppfinning revolutionerade hur vätskor förpackas, lagras och transporteras, och minskade matsvinn betydligt samtidigt som den förbättrade hållbarheten. Idag är Tetra Pak världens ledande leverantör av förpackningslösningar, med närvaro i över 160 länder. Men hur uppstod denna banbrytande innovation?",
                },
                imageSrc: "/invention-images/tetra-pak.webp",
                link: "https://example.com/oatmeal",
            },
            {
                id: 7,
                name: { en: "Ultrasound Technology", sv: "Ultraljudsteknik" },
                inventorName: "Hellmuth Hertz and Inge Edler",
                year: 1953,
                oneLineHeading: { en: "Seeing Sound: Ultrasound's Medical Miracle", sv: "Se med Ljud: Ultraljudets Medicinska Mirakel" },
                description: {
                    en:
                        "Medical imaging has transformed the way doctors diagnose and treat diseases, and one of the most groundbreaking advancements in this field is ultrasound technology. Used in pregnancy scans, heart examinations, and countless other medical applications, ultrasound has become an essential tool in modern healthcare. What many people don't realize is that this life-saving technology was pioneered in Sweden by Inge Edler and Carl Hellmuth Hertz. Their work laid the foundation for the non-invasive, radiation-free imaging technology we rely on today.",
                    sv:
                        "Medicinsk bildteknik har förändrat hur läkare diagnostiserar och behandlar sjukdomar, och en av de mest banbrytande framstegen inom detta område är ultraljudstekniken. Använd i graviditetsskanningar, hjärtundersökningar och otaliga andra medicinska tillämpningar har ultraljud blivit ett oumbärligt verktyg inom modern sjukvård. Vad många inte vet är att denna livräddande teknologi utvecklades i Sverige av Inge Edler och Carl Hellmuth Hertz. Deras arbete lade grunden för den icke-invasiva, strålningsfria bildteknik vi är beroende av idag.",
                },
                imageSrc: "/invention-images/ultrasound.webp",
                link: "https://example.com/oatmeal",
            },
            {
                id: 8,
                name: { en: "Three-Point Seatbelt", sv: "Tre-punkts säkerhetsbälte" },
                inventorName: "Nils Bohlin",
                year: 1959,
                oneLineHeading: { en: "Buckle Up: The Belt That Saved Millions", sv: "Spänn Fast: Bältet Som Räddade Miljoner" },
                description: {
                    en:
                        "Every time you buckle up in a car, you are using one of the greatest life-saving inventions in automotive history—the three-point seatbelt. This simple yet revolutionary device has saved millions of lives worldwide, and it was invented in Sweden by Volvo engineer Nils Bohlin in 1959.",
                    sv:
                        "Varje gång du spänner fast säkerhetsbältet i en bil använder du en av de mest livräddande uppfinningarna i bilhistorien – tre-punktsbältet. Denna enkla men revolutionerande uppfinning har räddat miljontals liv världen över och uppfanns i Sverige av Volvo-ingenjören Nils Bohlin 1959.",
                },
                imageSrc: "/invention-images/seatbelt.webp",
                link: "https://example.com/oatmeal",
            },
            {
                id: 21,
                name: { en: "Zipper", sv: "Blixtlås" },
                inventorName: "Gideon Sundbäck",
                year: 1913,
                oneLineHeading: { en: "Fasten Up: The Zipper That Stitched the World Together", sv: "Fäst Upp: Blixtlåset Som Sydde Ihop Världen" },
                description: {
                    en:
                        "The modern zipper, widely used in clothing, bags, and footwear, was perfected by the Swedish-American inventor Gideon Sundbäck in 1913. His design improved earlier fastening devices, making them more reliable and practical. Today, zippers are indispensable in everyday life, demonstrating the power of Swedish ingenuity.",
                    sv:
                        "Den moderna dragkedjan, som används flitigt i kläder, väskor och skor, fulländades av den svensk-amerikanske uppfinnaren Gideon Sundbäck år 1913. Hans design förbättrade tidigare fästanordningar och gjorde dem mer pålitliga och praktiska. Idag är dragkedjor oumbärliga i vardagen och visar på den svenska uppfinningsrikedomen.",
                },
                imageSrc: "/invention-images/zipper.webp",
                link: "https://example.com/oatmeal",
            },
            {
                id: 22,
                name: { en: "Ball Bearing", sv: "Kullager" },
                inventorName: "Sven Wingquist",
                year: 1907,
                oneLineHeading: { en: "Smooth Moves: The Bearing That Powers Machines", sv: "Mjuka Rörelser: Kullagret Som Driver Maskiner" },
                description: {
                    en:
                        "Invented by Swedish engineer Sven Wingquist in 1907, the self-aligning ball bearing transformed machinery and transportation. It reduced friction, extended the lifespan of mechanical parts, and boosted efficiency in industries such as automotive, aerospace, and manufacturing. The invention remains crucial in modern engineering and mechanics.",
                    sv: "Uppfunnet av Sven Wingquist 1907 revolutionerade det självjusterande kullagret maskiner genom att minska friktion och slitage. Genom att grunda SKF blev denna svenska innovation en hörnsten i industriell teknik.",
                },
                imageSrc: "/invention-images/ball-bearing.webp",
                link: "https://example.com/oatmeal",
            },
            {
                id: 23,
                name: { en: "Propeller", sv: "Propeller" },
                inventorName: "John Ericsson",
                year: 1836,
                oneLineHeading: { en: "Sail On: The Propeller That Steered the Seas", sv: "Segla Vidare: Propellern Som Styrde Haven" },
                description: {
                    en: "John Ericsson's adjustable-pitch propeller, developed in the 19th century, transformed maritime travel with its efficiency and adaptability. This Swedish invention powered ships and naval breakthroughs worldwide.",
                    sv: "John Ericssons propeller med justerbar stigning, utvecklad på 1800-talet, förändrade sjöfarten med sin effektivitet och anpassningsbarhet. Denna svenska uppfinning drev fartyg och marina genombrott världen över.",
                },
                imageSrc: "/invention-images/propeller.webp",
                link: "https://example.com/oatmeal",
            },
            {
                id: 24,
                name: { en: "Blowtorch", sv: "Blåslampa" },
                inventorName: "Carl Richard Nyberg",
                year: 1882,
                oneLineHeading: { en: "Flame On: The Torch That Lit Up Industry", sv: "Flamma På: Lampan Som Lyste Upp Industrin" },
                description: {
                    en: "Carl Richard Nyberg's blowtorch, invented in 1882, became a vital tool for welding and metalwork. This Swedish creation fueled industrial progress and even early aviation experiments.",
                    sv: "Carl Richard Nybergs blåslampa, uppfunnen 1882, blev ett viktigt verktyg för svetsning och metallarbete. Denna svenska uppfinning drev industriella framsteg och till och med tidiga flygexperiment.",
                },
                imageSrc: "/invention-images/blowtorch.webp",
                link: "https://example.com/oatmeal",
            },
            {
                id: 2,
                name: { en: "The Re-washable Dishcloth", sv: "Den Tvättbara Disktrasan" },
                inventorName: "Curt Lindquist",
                year: 1949,
                oneLineHeading: { en: "Wipe Smart: The Cloth That Cleans Forever", sv: "Torka Smart: Trasan Som Håller För Evigt" },
                description: {
                    en:
                        "The rewashable Wettex dishcloth, invented in 1949 by Curt Lindquist, transformed kitchen chores with its ability to absorb up to 15 times its weight in liquids. Made from a blend of regenerated cellulose and cotton fibre, this durable, eco-friendly innovation can be washed and reused endlessly without losing shape or quality. From Sweden to over 50 countries, it's a household staple that proves small ideas can spark big change.",
                    sv:
                        "Den tvättbara Wettex-disktrasan, uppfunnen 1949 av Curt Lindquist, förvandlade köksarbete med sin förmåga att absorbera upp till 15 gånger sin vikt i vätska. Tillverkad av en blandning av regenererad cellulosa och bomullsfiber är denna hållbara, miljövänliga uppfinning tvättbar och återanvändbar i oändlighet utan att förlora form eller kvalitet. Från Sverige till över 50 länder är det en hushållsklassiker som visar att små idéer kan tända stora förändringar.",
                },
                imageSrc: "/invention-images/dishcloth.webp",
                link: "https://example.com/dishcloth",
            },
            {
                id: 41,
                name: { en: "Modern Walking Frame", sv: "Modern Gåstol" },
                inventorName: "Aina Wifalk",
                year: 1965,
                oneLineHeading: { en: "The Modern Walking Frame: A Swedish Step Forward", sv: "Den Moderna Gåstolen: Ett Svenskt Steg Framåt" },
                description: {
                    en:
                        "Aina Wifalk's modern walking frame, designed in the 1960s, revolutionized mobility aids for the elderly and disabled. This Swedish invention improved quality of life and independence for millions of people worldwide.",
                    sv:
                        "Aina Wifalks moderna gåstol, designad på 1960-talet, revolutionerade rörlighetsstöd för äldre och funktionshindrade. Denna svenska uppfinning förbättrade livskvaliteten och självständigheten för miljontals människor världen över.",
                },
                imageSrc: "/invention-images/walking-frame.webp",
                link: "https://example.com/oatmeal",
            },
            {
                id: 50,
                name: { en: "The First Bolt Cutter", sv: "Den Första Bultsaxen" },
                inventorName: "Jonas Jönsson Byman",
                year: 1866,
                oneLineHeading: { en: "Cut Through: The Tool That Broke Barriers", sv: "Klipp Igenom: Verktyget Som Bröt Barriärer" },
                description: {
                    en:
                        "The first bolt cutter was designed in 1866 by Jonas Jönsson Byman in a small village in Jämtland, Sweden, empowering anyone to slice through bolts, chains, padlocks, and wires with ease. This iconic tool, still in use 150+ years later, hit a snag when a shady metalworker stole Byman's design and patented it first. Despite the betrayal, Byman's legacy endures in workshops worldwide, a testament to Swedish grit and ingenuity.",
                    sv:
                        "Den första bultsaxen designades 1866 av Jonas Jönsson Byman i en liten by i Jämtland, Sverige, och gav vem som helst möjlighet att klippa genom bultar, kedjor, hänglås och trådar med lätthet. Detta ikoniska verktyg, fortfarande i bruk över 150 år senare, stötte på problem när en skum metallarbetare stal Bymans design och patenterade den först. Trots sveket lever Bymans arv vidare i verkstäder världen över, ett bevis på svensk envishet och uppfinningsrikedom.",
                },
                imageSrc: "/invention-images/bolt-cutter.webp",
                link: "https://example.com/bolt-cutter",
            },
        ],
    },
    {
        category: "digitalTechnology",
        items: [
            {
                id: 9,
                name: { en: "Bluetooth Technology", sv: "Bluetooth-teknik" },
                inventorName: "Jaap Haartsen and Sven Mattisson",
                year: 1994,
                oneLineHeading: { en: "Wires Be Gone: Bluetooth Connects the World", sv: "Sladdar Bort: Bluetooth Kopplar Ihop Världen" },
                description: {
                    en:
                        "This game-changing technology was developed by Swedish engineer Jaap Haartsen while working for Ericsson in the 1990s. Today, Bluetooth is used by billions of devices worldwide, proving once again that Swedish innovation is at the forefront of global technology.",
                    sv:
                        "Denna banbrytande teknologi utvecklades av den svenske ingenjören Jaap Haartsen medan han arbetade för Ericsson på 1990-talet. Idag används Bluetooth av miljarder enheter världen över, vilket än en gång bevisar att svensk innovation ligger i framkant av global teknik.",
                },
                imageSrc: "/invention-images/bluetooth.webp",
                transparentImage: "/invention-images/bluetooth-png.webp",
                link: "https://example.com/oatmeal",
            },
            {
                id: 10,
                name: { en: "Automatic Identification System", sv: "Automatiskt Identifieringssystem" },
                inventorName: "Håkan Lans",
                year: 1990,
                oneLineHeading: { en: "Sea Tracker: AIS Guides Ships Safely", sv: "Havets Spårare: AIS Leder Fartyg Säkert" },
                description: {
                    en:
                        "The Automatic Identification System (AIS) is one of the most important technologies in modern maritime navigation, ensuring that ships worldwide can avoid collisions, track movements, and communicate more efficiently. Invented in Sweden, AIS has become a mandatory system for large vessels worldwide, allowing ships, ports, and coast guards to monitor vessel traffic in real-time. This groundbreaking innovation has significantly reduced accidents at sea, improved global shipping logistics, and strengthened maritime security.",
                    sv:
                        "Det Automatiska Identifieringssystemet (AIS) är en av de viktigaste teknologierna inom modern sjöfart, och säkerställer att fartyg världen över kan undvika kollisioner, spåra rörelser och kommunicera mer effektivt. Uppfunnet i Sverige har AIS blivit ett obligatoriskt system för stora fartyg globalt, vilket gör att fartyg, hamnar och kustbevakningar kan övervaka fartygstrafik i realtid. Denna banbrytande innovation har kraftigt minskat olyckor till sjöss, förbättrat globala logistiklösningar för sjöfarten och stärkt sjösäkerheten.",
                },
                imageSrc: "/invention-images/ais.webp",
                link: "https://example.com/oatmeal",
            },
            {
                id: 11,
                name: { en: "Skype", sv: "Skype" },
                inventorName: "Niklas Zennström and Janus Friis",
                year: 2003,
                oneLineHeading: { en: "Voices Across: Skype Brings the World Closer", sv: "Röster Överallt: Skype För Världen Närmare" },
                description: {
                    en:
                        "Before video calls became a daily part of life, long-distance communication was expensive and inconvenient. Then came Skype, a revolutionary software that made voice and video calls free over the internet. Launched in 2003, Skype was co-founded by Swedish entrepreneur Niklas Zennström and quickly became a household name, forever changing the way people connected across the globe. Today, Skype's impact is still felt in modern communication platforms, from business meetings to personal chats with loved ones.",
                    sv:
                        "Innan videosamtal blev en daglig del av livet var långdistanskommunikation dyr och opraktisk. Sedan kom Skype, en revolutionerande mjukvara som gjorde röst- och videosamtal gratis över internet. Skype lanserades 2003 och grundades tillsammans av den svenske entreprenören Niklas Zennström, och blev snabbt ett känt namn som för alltid förändrade hur människor kopplade upp sig världen över. Idag märks Skypes påverkan fortfarande i moderna kommunikationsplattformar, från affärsmöten till personliga samtal med nära och kära.",
                },
                imageSrc: "/invention-images/skype.webp",
                link: "https://example.com/oatmeal",
            },
            {
                id: 12,
                name: { en: "Spotify", sv: "Spotify" },
                inventorName: "Daniel Ek and Martin Lorentzon",
                year: 2006,
                oneLineHeading: { en: "Tune In: Spotify Streams Music Everywhere", sv: "Lyssna In: Spotify Strömmar Musik Överallt" },
                description: {
                    en:
                        "Music has always been a fundamental part of human culture, but how we listen to music has changed dramatically over the years. From vinyl records and CDs to MP3 downloads, each era brought new ways to access songs. Then, in 2006, Spotify emerged from Sweden, revolutionizing the music industry by offering on-demand streaming with a vast catalog of songs. Today, Spotify is the world's leading music streaming platform, proving once again that Swedish innovation can reshape global industries.",
                    sv:
                        "Musik har alltid varit en grundläggande del av mänsklig kultur, men hur vi lyssnar på musik har förändrats dramatiskt genom åren. Från vinylskivor och CD-skivor till MP3-nedladdningar har varje era fört med sig nya sätt att få tillgång till låtar. Sedan kom Spotify från Sverige 2006 och revolutionerade musikindustrin genom att erbjuda on-demand-strömning med ett enormt bibliotek av låtar. Idag är Spotify världens ledande musikströmningsplattform och bevisar än en gång att svensk innovation kan omforma globala industrier.",
                },
                imageSrc: "/invention-images/spotify.webp",
                link: "https://example.com/oatmeal",
            },
            {
                id: 76,
                name: { en: "The First Telephone Handset", sv: "Den Första Telefonluren" },
                inventorName: "Lars Magnus Ericsson",
                year: 1876,
                oneLineHeading: { en: "Voice of Connection: The Handset That Rang the World", sv: "Röst av Förbindelse: Luren Som Ringde Världen" },
                description: {
                    en:
                        "Alexander Graham Bell might have patented the telephone, but the first telephone handset was invented in Sweden in 1876 by Lars Magnus Ericsson, exploiting the fact that Bell's patent didn't cover the Nordic countries. (Though, fun fact: Italian Antonio Meucci beat them both to the punch!) Ericsson's clever design birthed the world's first public telephone exchange in Stockholm, paving the way for a telecom revolution that still echoes today.",
                    sv:
                        "Alexander Graham Bell kanske patenterade telefonen, men den första telefonluren uppfanns i Sverige 1876 av Lars Magnus Ericsson, som utnyttjade att Bells patent inte täckte Norden. (Roligt nog: Italiens Antonio Meucci hann före dem båda!) Ericssons smarta design födde världens första offentliga telefonväxel i Stockholm och banade väg för en telekomrevolution som fortfarande ekar idag.",
                },
                imageSrc: "/invention-images/first-telephone.webp",
                link: "https://example.com/telephone",
            },
        ],
    },
    {
        category: "gaming",
        items: [
            {
                id: 13,
                name: { en: "Minecraft", sv: "Minecraft" },
                inventorName: "Markus Persson (Notch)",
                year: 2009,
                oneLineHeading: { en: "Block by Block: Minecraft Builds a Legacy", sv: "Kloss för Kloss: Minecraft Bygger ett Arv" },
                description: {
                    en:
                        "Video games have evolved from simple pixelated experiences to immersive, cinematic masterpieces. But in 2009, a small Swedish game called Minecraft changed everything. Created by Markus a.k.a. Notch Persson, Minecraft introduced a sandbox-style world where players could build, explore, and create anything they imagined. With its blocky graphics and open-ended gameplay, it became a global phenomenon, influencing both gaming and education. Today, Minecraft is the best-selling video game of all time, proving that Swedish creativity can reshape the entertainment industry.",
                    sv:
                        "Videospel har utvecklats från enkla pixlade upplevelser till immersiva, filmiska mästerverk. Men 2009 förändrade ett litet svenskt spel vid namn Minecraft allt. Skapat av Markus a.k.a. Notch Persson introducerade Minecraft en sandlådestilvärld där spelare kunde bygga, utforska och skapa vad de än kunde föreställa sig. Med sina blockiga grafik och öppna spelupplägg blev det ett globalt fenomen som påverkat både spel och utbildning. Idag är Minecraft det mest sålda videospelet någonsin, vilket bevisar att svensk kreativitet kan omforma underhållningsindustrin.",
                },
                imageSrc: "/invention-images/minecraft.webp",
                link: "https://example.com/oatmeal",
            },
            {
                id: 14,
                name: { en: "Candy Crush", sv: "Candy Crush" },
                inventorName: "Riccardo Zacconi",
                year: 2012,
                oneLineHeading: { en: "Sweet Success: Candy Crush Hooks the Globe", sv: "Söt Framgång: Candy Crush Fångar Världen" },
                description: {
                    en:
                        "Mobile gaming has transformed the way people play, bringing quick, addictive entertainment to millions of users worldwide. Among the most successful mobile games ever is Candy Crush, a colorful and engaging puzzle game that has captivated players of all ages. Created by Swedish game developer King, Candy Crush became a global sensation, proving that Sweden is not only a leader in technology but also in digital entertainment. With billions of downloads, Candy Crush remains one of the most-played mobile games of all time.",
                    sv:
                        "Mobilspel har transformerat hur människor spelar och erbjuder snabb, beroendeframkallande underhållning till miljontals användare världen över. Ett av de mest framgångsrika mobilspelen någonsin är Candy Crush, ett färgglatt och engagerande pusselspel som fångat spelare i alla åldrar. Skapat av det svenska spelföretaget King blev Candy Crush en global sensation, vilket bevisar att Sverige inte bara är ledande inom teknologi utan även inom digital underhållning. Med miljarder nedladdningar är Candy Crush fortfarande ett av de mest spelade mobilspelen genom tiderna.",
                },
                imageSrc: "/invention-images/candy-crush.webp",
                link: "https://example.com/oatmeal",
            },
            {
                id: 15,
                name: { en: "Battlefield", sv: "Battlefield" },
                inventorName: "Lars Gustavsson",
                year: 2002,
                oneLineHeading: { en: "Epic Battles: Why Battlefield is Sweden's Ultimate Action Gaming Masterpiece", sv: "Episka Slag: Varför Battlefield är Sveriges Ultimata Actionspelsmästerverk" },
                description: {
                    en:
                        "Action gaming has redefined entertainment with intense, immersive experiences that thrill players globally. Among the most iconic action games is Battlefield, a dynamic first-person shooter that pits teams against each other in sprawling, realistic battlefields. Developed by Swedish studio DICE, Battlefield has become a global phenomenon, showcasing Sweden's prowess in creating cutting-edge gaming experiences. With millions of players and critically acclaimed titles, Battlefield remains a powerhouse in the gaming world.",
                    sv:
                        "Actionspel har omdefinierat underhållning med intensiva, immersiva upplevelser som thrillrar spelare globalt. Ett av de mest ikoniska actionspelen är Battlefield, ett dynamiskt förstapersonsskjutspel där team möts i stora, realistiska slagfält. Utvecklat av det svenska studion DICE har Battlefield blivit ett globalt fenomen och visar Sveriges styrka i att skapa avancerade spelupplevelser. Med miljontals spelare och kritiskt hyllade titlar förblir Battlefield en kraft i spelvärlden.",
                },
                imageSrc: "/invention-images/battlefield.webp",
                link: "https://example.com/battlefield",
            },
            {
                id: 16,
                name: { en: "Geometry Dash", sv: "Geometry Dash" },
                inventorName: "Robert Topala",
                year: 2013,
                oneLineHeading: { en: "Rhythmic Thrills: Why Geometry Dash is Sweden's Addictive Rhythm Game Sensation", sv: "Rytmspänning: Varför Geometry Dash är Sveriges Beroendeframkallande Rytmspelsensation" },
                description: {
                    en:
                        "Mobile and rhythm gaming have brought fast-paced, addictive fun to players everywhere, revolutionizing casual gaming. One standout title is Geometry Dash, a vibrant, rhythm-based platformer that challenges players with tricky levels and catchy beats. Created by Swedish developer Robert Topala, Geometry Dash has taken the world by storm, proving Sweden's innovation in creating engaging digital games. With millions of downloads and a dedicated fanbase, it's a must-play for gaming enthusiasts.",
                    sv:
                        "Mobil- och rytmspel har fört snabbfotad, beroendeframkallande kul till spelare överallt och revolutionerat vardagligt spelande. En framträdande titel är Geometry Dash, ett färgstarkt, rytmbaserat plattformsspel som utmanar spelare med knepiga nivåer och fängslande beats. Skapat av den svenska utvecklaren Robert Topala har Geometry Dash tagit världen med storm och bevisar Sveriges innovation i att skapa engagerande digitala spel. Med miljontals nedladdningar och en hängiven fanbase är det ett måste för spelentusiaster.",
                },
                imageSrc: "/invention-images/geometry-dash.webp",
                link: "https://example.com/geometry-dash",
            },
            {
                id: 17,
                name: { en: "The Goat Simulator", sv: "Get Simulatorn" },
                inventorName: "Armin Ibrisagic",
                year: 2014,
                oneLineHeading: { en: "Unleashing Chaos: Why The Goat Simulator is the Funniest Swedish Game You'll Ever Play", sv: "Släppa Kaos: Varför Get Simulatorn är det Roligaste Svenska Spelet Du Någonsin Spelat" },
                description: {
                    en:
                        "Humor and gaming have merged to create unforgettable, lighthearted fun for players worldwide, transforming the industry. A standout example is The Goat Simulator, a quirky, physics-based game where players control a mischievous goat causing hilarious mayhem. Developed by Swedish studio Coffee Stain Studios, this game has won hearts globally, highlighting Sweden's creativity in digital entertainment. With its absurd humor and massive popularity, The Goat Simulator remains a beloved title for casual gamers.",
                    sv:
                        "Humor och spelande har slagits samman för att skapa oförglömlig, lättsam kul för spelare världen över och transformerat industrin. Ett framträdande exempel är Get Simulatorn, ett knäppt, fysikbaserat spel där spelare kontrollerar en busig get som orsakar häftigt kaos. Utvecklat av det svenska studion Coffee Stain Studios har detta spel vunnit hjärtan globalt och belyser Sveriges kreativitet inom digital underhållning. Med sin absurda humor och enorma popularitet förblir Get Simulatorn en älskad titel för vardagliga spelare.",
                },
                imageSrc: "/invention-images/goat-simulator.webp",
                link: "https://example.com/goat-simulator",
            },
        ],
    },
    {
        category: "scienceInnovation",
        items: [
            {
                id: 18,
                name: { en: "Nobel Prize", sv: "Nobelpriset" },
                inventorName: "Alfred Nobel",
                year: 1895,
                oneLineHeading: { en: "Honor of Excellence: The Prize That Inspires Greatness", sv: "Ära av Excellence: Priset Som Inspirerar Storhet" },
                description: {
                    en:
                        "Few awards in history hold as much prestige as the Nobel Prize. Established by Swedish industrialist Alfred Nobel in 1895, the prize honors individuals and organizations that have made groundbreaking contributions to science, literature, and peace. Every year, the world watches as the Nobel Prizes are awarded in Stockholm and Oslo, recognizing achievements that have changed humanity for the better. Sweden's commitment to intellectual progress, discovery, and global improvement has made the Nobel Prize one of the most respected honors in the world.",
                    sv:
                        "Få utmärkelser i historien har lika hög prestige som Nobelpriset. Instiftat av den svenske industrialisten Alfred Nobel 1895 hedrar priset individer och organisationer som gjort banbrytande bidrag till vetenskap, litteratur och fred. Varje år följer världen med när Nobelprisen delas ut i Stockholm och Oslo, och erkänner prestationer som förbättrat mänskligheten. Sveriges engagemang för intellektuell utveckling, upptäckter och global förbättring har gjort Nobelpriset till en av världens mest respekterade utmärkelser.",
                },
                imageSrc: "/invention-images/nobel-prize.webp",
                link: "https://example.com/oatmeal",
            },
            {
                id: 19,
                name: { en: "Celsius Temperature Scale", sv: "Celsius temperaturskala" },
                inventorName: "Anders Celsius",
                year: 1742,
                oneLineHeading: { en: "Hot or Cold: Celsius Measures It All", sv: "Varmt eller Kallt: Celsius Mäter Allt" },
                description: {
                    en:
                        "From weather forecasts to scientific research, the Celsius temperature scale is used worldwide to measure heat and cold. Developed in Sweden in 1742 by astronomer Anders Celsius, this simple yet precise system has become the standard for temperature measurement in most countries. Whether tracking daily temperatures or conducting laboratory experiments, Celsius provides a logical and universal way to quantify temperature.",
                    sv:
                        "AFrån väderprognoser till vetenskaplig forskning används Celsius-temperaturskalan över hela världen för att mäta värme och kyla. Utvecklad i Sverige 1742 av astronomen Anders Celsius har detta enkla men precisa system blivit standarden för temperaturmätning i de flesta länder. Oavsett om det handlar om att följa dagliga temperaturer eller genomföra laboratorieexperiment, erbjuder Celsius ett logiskt och universellt sätt att kvantifiera temperatur.",
                },
                imageSrc: "/invention-images/celsius.webp",
                link: "https://example.com/oatmeal",
            },
            {
                id: 20,
                name: { en: "First Oral Cholera Vaccine Drokal", sv: "Första orala koleravaccinet, Drokal" },
                inventorName: "Jan Holmgren",
                year: 1991,
                oneLineHeading: {
                    en:
                        "Cholera has long been one of the deadliest diseases in human history, causing devastating outbreaks across the world. For centuries, there was no reliable way to prevent it—until Sweden developed the first effective oral cholera vaccine, Dukoral. Created by Swedish researchers in the 1990s, Dukoral has since played a crucial role in protecting millions of people from cholera, particularly in regions where clean water and sanitation remain challenges. This Swedish medical innovation has saved countless lives and continues to be a key tool in global health efforts.",
                    sv:
                        "Kolera har länge varit en av de dödligaste sjukdomarna i mänsklighetens historia och orsakat förödande utbrott över hela världen. I århundraden fanns det inget tillförlitligt sätt att förebygga den – tills Sverige utvecklade det första effektiva orala koleravaccinet, Dukoral. Skapat av svenska forskare på 1990-talet har Dukoral sedan dess spelat en avgörande roll i att skydda miljontals människor från kolera, särskilt i regioner där rent vatten och sanitet fortfarande är en utmaning. Denna svenska medicinska innovation har räddat otaliga liv och fortsätter att vara ett viktigt verktyg i globala hälsoinsatser.",
                },
                description: {
                    en:
                        "Cholera is an acute diarrheal disease caused by the Vibrio cholerae bacteria. It spreads primarily through contaminated water and food, often in areas with poor sanitation and limited access to clean drinking water. The disease causes severe dehydration and, without rapid treatment, can be fatal within hours.",
                    sv:
                        "Kolera är en akut diarrésjukdom orsakad av bakterien Vibrio cholerae. Den sprids huvudsakligen genom förorenat vatten och mat, ofta i områden med dålig sanitet och begränsad tillgång till rent dricksvatten. Sjukdomen orsakar svår uttorkning och kan, utan snabb behandling, vara dödlig inom några timmar.",
                },
                imageSrc: "/invention-images/cholera-vaccine.webp",
                link: "https://example.com/oatmeal",
            },
            {
                id: 25,
                name: { en: "Dynamite", sv: "Dynamit" },
                inventorName: "Alfred Nobel",
                year: 1867,
                oneLineHeading: { en: "Boom Time: Dynamite Blasts Through History", sv: "Bommens Tid: Dynamit Spränger Genom Historien" },
                description: {
                    en: "Invented by Alfred Nobel in 1867, dynamite reshaped construction and mining with its controlled explosive power. This Swedish breakthrough left a lasting mark—both literally and figuratively—on the world.",
                    sv: "Uppfunnet av Alfred Nobel 1867 omformade dynamit byggnation och gruvdrift med sin kontrollerade sprängkraft. Detta svenska genombrott lämnade ett bestående avtryck – bokstavligt och bildligt – på världen.",
                },
                imageSrc: "/invention-images/dynamite.webp",
                link: "https://example.com/oatmeal",
            },
            {
                id: 26,
                name: { en: "AGA Cooker", sv: "AGA-spis" },
                inventorName: "Gustaf Dalén",
                year: 1922,
                oneLineHeading: { en: "Warm Heart: The Cooker That Heated Homes", sv: "Varmt Hjärta: Spisen Som Värmde Hem" },
                description: {
                    en: "Gustaf Dalén's AGA Cooker, invented in 1922, brought efficient, heat-retaining cooking to households worldwide. This Swedish innovation blended practicality with elegance, earning a lasting place in kitchens.",
                    sv: "Gustaf Daléns AGA-spis, uppfunnen 1922, förde effektiv, värmehållande matlagning till hushåll världen över. Denna svenska innovation blandade praktik med elegans och fick en beständig plats i kök.",
                },
                imageSrc: "/invention-images/aga-cooker.webp",
                link: "https://example.com/oatmeal",
            },
            {
                id: 27,
                name: { en: "Implantable Pacemaker", sv: "Pacemaker" },
                inventorName: "Rune Elmqvist",
                year: 1958,
                oneLineHeading: { en: "Heartbeat Hero: The Pacemaker Saves Lives", sv: "Hjärteslagshjälte: Pacemakern Räddar Liv" },
                description: {
                    en: "Developed by Rune Elmqvist in 1958, the first implantable pacemaker revolutionized cardiac care. This Swedish invention has since kept millions of hearts beating steadily around the globe.",
                    sv: "Utvecklad av Rune Elmqvist 1958 revolutionerade den första implanterbara pacemakern hjärtvården. Denna svenska uppfinning har sedan dess hållit miljontals hjärtan slående stadigt världen över.",
                },
                imageSrc: "/invention-images/pacemaker.webp",
                link: "https://example.com/oatmeal",
            },
            {
                id: 28,
                name: { en: "Absorption Refrigerator", sv: "Absorption Kylskåpet" },
                inventorName: "Carl Munters & Baltzar von Platen",
                year: 1925,
                oneLineHeading: { en: "Cool Idea: The Fridge That Changed Food Forever", sv: "Sval Idé: Kylskåpet Som Förändrade Mat För Alltid" },
                description: {
                    en: "In the 1920s, Carl Munters and Baltzar von Platen invented a gas-absorption refrigerator with no moving parts. This Swedish breakthrough transformed food storage, making freshness a global reality.",
                    sv: "På 1920-talet uppfann Carl Munters och Baltzar von Platen ett gasabsorptionskylskåp utan rörliga delar. Detta svenska genombrott förändrade matförvaring och gjorde färskhet till en global verklighet.",
                },
                imageSrc: "/invention-images/refrigerator.webp",
                link: "https://example.com/oatmeal",
            },
            {
                id: 60,
                name: { en: "The Gamma Knife", sv: "Gammakniven" },
                inventorName: "Lars Leksell",
                year: 1968,
                oneLineHeading: { en: "Precision Strike: Targeting Tumors with Radiance", sv: "Precisionsslag: Riktar In sig på Tumörer med Strålglans" },
                description: {
                    en:
                        "The Gamma Knife, a Swedish invention developed by Professor Lars Leksell at Karolinska Hospital, redefined brain tumor treatment with its debut in 1968. Active from 1960 to 1974, Leksell crafted a tool that delivers pinpoint radiation to destroy tumors while sparing healthy tissue. Over 100,000 patients worldwide have benefited from this non-invasive marvel, showcasing Sweden's leadership in medical innovation.",
                    sv:
                        "Gammakniven, en svensk uppfinning utvecklad av professor Lars Leksell vid Karolinska sjukhuset, omdefinierade behandling av hjärntumörer med sin debut 1968. Aktiv mellan 1960 och 1974 skapade Leksell ett verktyg som levererar exakt strålning för att förstöra tumörer samtidigt som det skonar frisk vävnad. Över 100 000 patienter världen över har gynnats av detta icke-invasiva underverk, vilket visar Sveriges ledarskap inom medicinsk innovation.",
                },
                imageSrc: "/invention-images/gamma-knife.webp",
                link: "https://example.com/gamma-knife",
            },
        ],
    },
    {
        category: "artsCulture",
        items: [
            {
                id: 40,
                name: { en: "The First Abstract Paintings", sv: "De Första Abstrakta Målningarna" },
                inventorName: "Hilma af Klint",
                year: 1906,
                oneLineHeading: { en: "Visionary Canvas: The Birth of Abstract Art", sv: "Visionär Duk: Abstrakt Konsts Födelse" },
                description: {
                    en:
                        "Hilma af Klint was a Swedish artist who pioneered abstract painting around 1906, long before it became a mainstream movement. Influenced by theosophy and spiritualism, she believed her vibrant, symbolic works channeled higher truths, creating a revolutionary art form that reshaped creative expression. Hidden for decades, her paintings stunned the world when showcased at the Guggenheim in 2018, cementing her legacy as a trailblazer in art history.",
                    sv:
                        "Hilma af Klint var en svensk konstnär som banade väg för abstrakt måleri runt 1906, långt innan det blev en mainstreamrörelse. Påverkad av teosofi och spiritualism trodde hon att hennes livfulla, symboliska verk förmedlade högre sanningar, och skapade en revolutionerande konstform som omformade kreativt uttryck. Gömd i årtionden chockade hennes målningar världen när de visades på Guggenheim 2018, och befäste hennes arv som en pionjär i konsthistorien.",
                },
                imageSrc: "/invention-images/abstract-paintings.webp",
                link: "https://example.com/abstract-art",
            },
        ],
    },
];

export default inventionsData;