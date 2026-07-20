import nellyPortrait from "../../assets/nelly-boustead.jpg";
import consueloPortrait from "../../assets/consuelo-ortiga.jpg";

import teodoraPortrait from "../../assets/teodora.webp";
import solisPortrait from "../../assets/solis.webp";
import leonorWebpPortrait from "../../assets/Leonor_Rivera.webp";
import oseiPortrait from "../../assets/osei.webp";
import suzannePortrait from "../../assets/suzanne-jacoby.webp";
import josephinePortrait from "../../assets/josephine.webp";
import valenzuelaPortrait from "../../assets/leonor_valenzuela.webp";
import gertrudePortrait from "../../assets/gertrude_1.webp";
export interface Tribute {
  type:
    | "Poem"
    | "Letters"
    | "Artwork"
    | "Novel Character"
    | "Diary"
    | "MEMOIR"
    | "Sculpture"
    | "Gift"
    | "Dedication";
  title: string;
  description: string;
}

export interface Woman {
  id: string;
  numeral: string;
  name: string;
  years: string;
  role: string;
  relationship: string;
  location: string;
  mapX: number;
  mapY: number;
  portrait: string;
  thumbnail?: string;
  bio: string;
  quote: string;
  quoteSource: string;
  placeInfo: string;
  tributes: Tribute[];
}

export const women: Woman[] = [
   {
    id: "orang",
    numeral: "III",
    name: "Leonor Valenzuela",
    years: "",
    role: "Second Love",
    relationship: "An early, youthful sweetheart",
    location: "Intramuros, Manila",
    mapX: 83.6,
    mapY: 41.89,
    portrait: valenzuelaPortrait,
    bio: "Leonor Valenzuela, affectionately called \"Orang,\" was one of Rizal's early sweethearts while he was studying medicine. She lived near Rizal's boarding house in Intramuros, making it easy for them to spend time together. Their relationship was youthful and playful rather than deeply serious, and it eventually ended when Rizal left for Spain in 1882 to continue his studies.",
    quote: "Isa siyang matangkad na dalagang napakaganda ng tindig (She is a tall young woman who carries herself with grace and elegance)",
    quoteSource: "– Jose Rizal under. poem “ A La Señorita C.O.Y.P.”",
    placeInfo:
      "Rizal met Leonor while he was a second-year medical student at the University of Santo Tomas and staying at Doña Concha Leyva's boarding house in Intramuros, Manila. Leonor lived nearby, and Rizal frequently visited her family's home, which was a popular gathering place for students. Intramuros was the center of Spanish political, religious, and educational life in the Philippines, and the old University of Santo Tomas campus was located within its walls. Students often rented rooms in nearby boarding houses, and wealthy Filipino families lived within or near the Walled City, creating opportunities for social gatherings and courtship among students.",
    tributes: [
      {
        type: "Letters",
        title: "Secret Letters Written in Invisible Ink",
        description:
          "One of the most famous stories about Rizal and Leonor involves the secret letters he wrote to her using invisible ink made from water and salt.",
      },
      {
        type: "Dedication",
        title: "Frequent Visits",
        description:
          "Rizal regularly visited the Valenzuela residence while courting Leonor. Their home became a common meeting place for students, allowing their friendship and courtship to develop naturally.",
      },
    ],
  },
   {
    id: "gertrude",
    numeral: "VII",
    name: "Gertrude Beckett",
    years: "",
    role: "London Romance",
    relationship: "His sculpting companion, \"Gettie\" or \"Tottie\"",
    location: "London, England",
    mapX: 49.9,
    mapY: 20.6,
    portrait: gertrudePortrait,
    bio: "Gertrude Beckett, nicknamed \"Gettie\" or \"Tottie,\" London romance. Genealogical records list her birth year as 1867, and confirm she was the eldest of Charles Beckett's daughters; her relationship with Rizal is dated to May 1888 in London. She helped him mix paint colors and prepare clay for sculpting, and he gave her a group carving of the Beckett sisters as a farewell gift before leaving for Paris. Genealogy sites list Rizal as a \"spouse\" entry for record-keeping purposes, but this reflects a documented romantic relationship, not an actual marriage, no historical source claims they married.",    quote: "Maganda siya, mayumi gaya ng namumukadkad na bulaklak, na may mabubuting mata. (She is beautiful, demure like a budding flower, with kindly eyes)",
    quoteSource: "– Jose Rizal under. poem “ A La Señorita C.O.y.P.” So called “Rebound Girl”.",
    placeInfo:
      "May 1888, in London, England. Rizal boarded at the Beckett family home near the British Museum shortly after arriving in the city.",
    tributes: [
        {
          type: "Sculpture",
          title: "Group Carving of the Beckett Sisters",
          description:
            "Dr. José Rizal gave Gertrude Beckett a composite clay carving of the heads of the Beckett sisters as a parting gift and tribute to their relationship before he left London in March 1889. The primary tribute was a group carving featuring the faces of Gertrude and her two sisters.",
        },
      ],
    },
  {
    id: "teodora",
    numeral: "I",
    name: "Teodora Alonso Realonda",
    years: "",
    role: "Mother",
    relationship: "His first and greatest teacher",
    location: "Calamba, Laguna",
    mapX: 83.66,
    mapY: 42.1,
    portrait: teodoraPortrait,
    bio: "Doña Teodora Alonso Realonda was born November 9, 1827, in Manila. As José's first teacher, she taught him the alphabet, prayers, and the value of education long before he entered formal schooling, and Rizal often credited her for nurturing his love of reading, literature, and learning. In 1871, she was imprisoned by Spanish colonial authorities on false accusations of attempted poisoning, an injustice that deeply affected Rizal and became one of the earliest personal events shaping his reformist ideals. Throughout his years abroad, Rizal regularly wrote letters to his mother, updating her about his studies and expressing concern for her health, and his greatest tribute was becoming an ophthalmologist so he could treat her worsening cataracts and restore her eyesight. She died August 16, 1911.",
    quote:
      "She was my first teacher, and the most thorough I have ever had.",
    quoteSource: "José Rizal, letter to Ferdinand Blumentritt",
    placeInfo:
      "Calamba was a prosperous agricultural town, which was dominated by Dominican-owned haciendas. Although economically active because of rice and sugar production, many of the Filipino tenants suffered under unfair land practices, and growing up in this environment exposed Rizal to the inequalities that later influenced his nationalist writings.",
    tributes: [
      {
        type: "Poem",
        title: "Mi Primera Inspiracion / My First Inspiration",
        description:
          "Rizal is traditionally credited with writing this early poem as a birthday tribute to his mother while he was a young Ateneo student. It presents Teodora as the first source of his learning and literary inspiration.",
      },
      {
        type: "Letters",
        title: "Letters and Medical Care for His Mother",
        description:
          "Rizal regularly wrote to his family while abroad and trained as an ophthalmologist partly because of Teodora's failing eyesight. His practical tribute to her was not only literary: he wanted to treat her cataracts himself.",
      },
    ],
  },
   {
    id: "segunda",
    numeral: "II",
    name: "Segunda Solis Katigbak",
    years: "",
    role: "First Love",
    relationship: "Rizal's first love",
    location: "Trozo, Manila",
    mapX: 83.61,
    mapY: 41.89,
    portrait: solisPortrait,
    bio: "Segunda Solis Katigbak was a young woman from Lipa, Batangas, and is widely recognized as Jose Rizal's first love. She came from a respected family and was known for her beauty, intelligence, and gentle personality. Rizal was about 16 years old when they met, while Segunda was around 14 years old. Their romance was short-lived because Segunda was already engaged to Manuel Luz, a fellow Batangueño. Despite this, Rizal regarded her as his first experience of romantic love, and the memory remained significant throughout his life.",
    quote: "She was the first to awaken in me the idea of what love might someday be.",
    quoteSource: "José Rizal, private diary, circa 1877",
    placeInfo:
      "Rizal first met Segunda at his grandmother's house in Trozo, Manila (now part of Tondo). He was visiting with his friend Mariano Katigbak, Segunda's brother. Their families were acquainted, making the meeting possible. It was said that Rizal admired Segunda immediately upon seeing her. Trozo, Manila was a quiet residential district outside the Walled City (Intramuros). It was home to many Filipino and mestizo families during the Spanish colonial period. Family gatherings and social visits were common, allowing young people like Rizal and Segunda to meet under the supervision of relatives. Rizal also visited La Concordia College, where his sister Olympia and Segunda studied, giving him additional opportunities to see her.",
    tributes: [
      {
        type: "MEMOIR",
        title: "Memorias de un Estudiante de Manila",
        description:
          "Rizal later remembered Segunda in his student memoirs as his first love. There is no well-established surviving poem, artwork, or gift specifically made for her; what remains is his written recollection of the brief, frustrated romance.",
      },
    ],
  },
  {
      id: "leonor",
      numeral: "III",
      name: "Lenoro Rivera Bauzon",
      years: "",
      role: "Great Love",
      relationship: "Greatest love; inspiration for Maria Clara",
      location: "Intramuros, Manila",
      mapX: 83.6,
      mapY: 41.89,
      portrait: leonorWebpPortrait,
      thumbnail: leonorWebpPortrait,
      bio: "Lenoro Rivera Bauzon born on April 11, 1867, died on August 28. 1893. She was Rizal's long-time sweetheart and fiancée, and their relationship lasted for about eleven years, mostly maintained through letters while Rizal studied in Europe. Her family, particularly her mother, was against their relationship and secretly withheld many of Rizal's letters. Eventually, she got married to the British railway engineer Henry Charles Kipping, which left Rizal heartbroken. Leonor became the inspiration for Maria Clara, who is the heroine of Noli Me Tangere. Their romance remains one of the best-known love stories in Philippine history and significantly influenced Rizal's emotional life and literary works.",
      quote: "Though seas divide us, nothing shall divide my love for you.",
      quoteSource: "Leonor Rivera, letter to José Rizal, 1887",
      placeInfo:
        "Rizal fell in love with Leonor at the Rivera Residence in Intramuros, Manila, in April 1880, on her 13th birthday. Intramuros was the political, religious, and educational center of Spanish Manila, and it was surrounded by massive stone walls that housed elite Filipino and Spanish families, churches, government offices, and schools, reflecting the social hierarchy of the colonial period.",
      tributes: [
        {
          type: "Letters",
          title: "Courtship Letters Across Distance",
          description:
            "Rizal and Leonor Rivera maintained their relationship largely through letters while he was away. Many accounts describe her family, especially her mother, as blocking or withholding correspondence, which helped end the relationship.",
        },
        {
          type: "Novel Character",
          title: "Maria Clara in Noli Me Tangere",
          description:
            "Leonor Rivera is widely identified as a major inspiration for Maria Clara, the sheltered heroine of Noli Me Tangere. This is the clearest literary echo of Rizal's relationship with Leonor, though Maria Clara is also a crafted fictional character shaped by Rizal's critique of colonial society.",
        },
      ],
    },
  {
      id: "osei",
      numeral: "IV",
      name: "O-Sei-San (Seiko Usui)",
      years: "",
      role: "Japanese Sweetheart",
      relationship: "His companion in Meiji-era Tokyo",
      location: "Tokyo, Japan",
      mapX: 88.79,
      mapY: 30.18,
      portrait: oseiPortrait,
      bio: "Seiko Usui, also affectionately called O-Sei-San, belonged to a respected Japanese family and met Rizal during his stay in Tokyo in 1888. She was fluent in English and French, as she served as Rizal's guide, interpreter, and companion as he explored Japanese culture. Their relationship lasted only about a month before Rizal continued his journey to the United States. Rizal admired O-Sei-San's intelligence, independence, and patriotism. He was also reportedly tempted to remain in Japan permanently, but he ultimately chose to continue his mission for the Philippines.",
      quote: "It was a happy golden month I spent with you.",
      quoteSource: "José Rizal, farewell note to O-Sei-San, 1888",
      placeInfo:
        "Tokyo during the Meiji Era was rapidly modernizing while preserving much of its traditional culture. Western-style government buildings, railways, and schools stood alongside temples, gardens, and cherry blossom parks, and Rizal admired Japan's cleanliness, discipline, and strong sense of national identity.",
      tributes: [
        {
          type: "Diary",
          title: "Diary Memories of Japan",
          description:
            "Rizal recorded his Japanese stay as one of the happiest episodes of his travels and associated that memory with O-Sei-San, who helped him experience Tokyo and Japanese culture. The most reliable tribute here is diary remembrance, not a separate surviving artwork.",
        },
      ],
    },
  {
    id: "nelly",
    numeral: "V",
    name: "Nelly Boustead",
    years: "",
    role: "Parisian Suitor",
    relationship: "His rejected proposal in Biarritz",
    location: "Biarritz, France",
    mapX: 49.57,
    mapY: 25.84,
    portrait: nellyPortrait,
    bio: "Nelly Boustead was a Filipina socialite of the expatriate ilustrado class, living among the leisure and salons of Biarritz. Rizal stayed with her family for a period, and they fenced together, debated philosophy, and walked the Atlantic promenades. A genuine attachment formed. When Rizal eventually proposed, Nelly set a single condition: that he convert from Catholicism. Rizal, unwilling to perform a faith he did not hold, refused. They parted without hostility — an ending almost more melancholy for its civility.",
    quote:
      "Even rejection, when done with honesty, leaves no wound that cannot heal.",
    quoteSource:
      "attributed to José Rizal, recalled by Nelly Boustead",
    placeInfo:
      "Biarritz in the late 1880s was the resort playground of European royalty and the wealthy expatriate class. Napoleon III had made it fashionable decades earlier; by Rizal's time it was a city of grand Baroque hotels, ocean promenades, and casino culture. The Boustead family represented the Filipino ilustrado class that had achieved a comfortable European life — speaking French and English, attending salons, maintaining a cultured distance from the colonial troubles of their homeland. The Atlantic wind off the Basque coast carried, for these expatriates, neither fish nor salt but the particular melancholy of the perpetually displaced.",
    tributes: [
      {
        type: "Letters",
        title: "Proposal and Correspondence",
        description:
          "Rizal seriously considered marriage with Nelly Boustead and proposed to her, but the relationship ended over religious differences and practical concerns. No specific surviving poem, sculpture, or artwork for Nelly is firmly documented, so this exhibit treats the proposal and correspondence as the historical record rather than inventing an object.",
      },
    ],
  },
  {
    id: "consuelo",
    numeral: "VI",
    name: "Consuelo Ortiga y Pérez",
    years: "",
    role: "Madrid Admirer",
    relationship: "His carefully restrained affection",
    location: "Madrid, Spain",
    mapX: 48.97,
    mapY: 27.55,
    portrait: consueloPortrait,
    bio: 'Consuelo Ortiga y Pérez was the daughter of Don Pablo Ortiga, former Manila mayor, whose Madrid home served as a gathering place for Filipino expatriates and reformists. She was vivacious, intelligent, and openly fond of Rizal. He, in turn, admired her deeply — but suppressed his feelings out of loyalty to Leonor Rivera and profound respect for the family\'s hospitality. The restraint cost him something. He later dedicated to her the poem "A La Señorita C.O. y P.," a tender act of sublimated devotion.',
    quote:
      "Some loves are expressed best in the things left unsaid.",
    quoteSource: "José Rizal, poem dedication, 1883",
    placeInfo:
      "Madrid in the 1880s was a city of cafés, literary journals, and sustained political argument. Rizal enrolled at the Universidad Central de Madrid and frequented the Ateneo — a cultural club where Filipino students and Spanish liberals argued about colonial reform. The Ortiga household on Calle Ancha de San Bernardo was a warm salon for the expatriate Filipino community, a place where Tagalog was spoken without lowering one's voice. The Spanish capital was alive with propaganda wars: Filipino reformists petitioned for parliamentary representation while conservative friars lobbied against every concession.",
    tributes: [
      {
        type: "Poem",
        title:
          '"A La Senorita C.O. y R." (To Miss C.O. y R.), 1883',
        description:
          "Rizal wrote this Spanish poem in Madrid and dedicated it to Consuelo Ortiga y Rey. The poem is the clearest documented work connected to Consuelo; Rizal eventually stepped back because he was still attached to Leonor Rivera and because his friend Eduardo de Lete also loved Consuelo.",
      },
    ],
  },
  {
      id: "suzanne",
      numeral: "VII",
      name: "Suzanne Jacoby",
      years: "",
      role: "Brussels Romance",
      relationship: "A fond friendship during his time in Brussels",
      location: "Brussels, Belgium",
      mapX: 51.21,
      mapY: 21.75,
      portrait: suzannePortrait,
      bio: "Suzanne Jacoby was a Belgian woman, the niece of Rizal's landlady in Brussels, where he lived while writing El Filibusterismo. She reportedly grew fond of him during his stay, and when he departed for Madrid in 1890, she wept at his leaving. She continued writing to him afterward, though, as with several of the women in his life, no specific poem or major surviving tribute is documented for her the way there is for Leonor Rivera or Consuelo Ortiga.",
      quote: "She reminded me that even a man carrying a nation may sometimes laugh.",
      quoteSource: "José Rizal, letter to Blumentritt, 1890",
      placeInfo:
        "Rizal met Suzanne Jacoby around 1890 in Brussels, Belgium, where she was the niece of his landlady during his stay there while he was finishing El Filibusterismo.",
      tributes: [
        {
          type: "Letters",
          title: "A Remembered Brussels Attachment",
          description:
            "Suzanne Jacoby is remembered as the niece of Rizal's Brussels landladies who grew attached to him while he was working on El Filibusterismo. There is no firmly documented poem, artwork, or gift made for Suzanne; the accurate note is that the attachment appears in biographical accounts, not in a known dedicated work by Rizal.",
        },
      ],
    },
  {
      id: "josephine",
      numeral: "VIII",
      name: "Josephine Bracken",
      years: "",
      role: "Common-Law Wife",
      relationship: "His last love, present until the end",
      location: "Dapitan, Zamboanga del Norte",
      mapX: 84.28,
      mapY: 45.19,
      portrait: josephinePortrait,
      bio: "Marie Josephine Leopoldine Bracken was born August 9, 1876 at Victoria Barracks in Hong Kong to Irish parents — James Bracken, a British Army corporal, and Elizabeth Jane McBride. Her mother died shortly after childbirth, and her father gave her up for adoption to his American friend, the blind engineer George Taufer. She traveled to Dapitan in February 1895 to have Rizal, a respected ophthalmologist, examine Taufer's failing eyesight. Taufer's condition was beyond treatment, but Rizal fell for Josephine instead; Taufer initially opposed the relationship but eventually gave in. A local priest agreed to marry them only with the Bishop of Cebu's permission, which never came through before Taufer's abrupt departure forced the matter to stall. The couple's son was stillborn during Rizal's exile. After his execution, colonial authorities pressured her to leave the Philippines; she later remarried in Hong Kong and died of tuberculosis in 1902, at age 25.",
      quote: "She came to Dapitan seeking sight for her father. She gave sight to me.",
      quoteSource: "attributed to José Rizal",
      placeInfo:
        "Rizal met Josephine Bracken in February 1895, in Dapitan, Zamboanga del Norte, Philippines — she arrived with her adoptive father, George Taufer, seeking Rizal's help as an ophthalmologist for Taufer's failing eyesight.",
      tributes: [
        {
          type: "Poem",
          title: "Mi Ultimo Adios",
          description:
            "Rizal wrote Mi Ultimo Adios on the eve of his execution. Josephine Bracken is often linked to the poem's final affectionate address, commonly interpreted as a reference to a beloved stranger, though the poem itself does not name her directly.",
        },
        {
          type: "Dedication",
          title: "Final Companionship and Disputed Marriage",
          description:
            "Josephine was with Rizal during his Dapitan exile and remained central to his final years. Their reported marriage shortly before his execution is part of Rizal tradition, but historians note that the documentary record is contested, so it should be presented carefully rather than as a settled artifact.",
        },
      ],
    },
];