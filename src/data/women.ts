import segundaPortrait from "../imports/images.jpeg";
import leonorPortrait from "../imports/Leonor_Rivera.jpg";
import leonorThumbnail from "../imports/images-2.jpeg";

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
    id: "teodora",
    numeral: "I",
    name: "Teodora Alonso Realonda",
    years: "1827 – 1911",
    role: "Mother",
    relationship: "His first and greatest teacher",
    location: "Calamba, Laguna",
    mapX: 82.0,
    mapY: 41.8,
    portrait:
      "../../../assets/teodora.webp",
    bio: "Doña Teodora Alonso Realonda was born November 9, 1827, in Manila. As José's first teacher, she taught him the alphabet, prayers, and the value of education long before he entered formal schooling, and Rizal often credited her for nurturing his love of reading, literature, and learning. In 1871, she was imprisoned by Spanish colonial authorities on false accusations of attempted poisoning, an injustice that deeply affected Rizal and became one of the earliest personal events shaping his reformist ideals. Throughout his years abroad, Rizal regularly wrote letters to his mother, updating her about his studies and expressing concern for her health, and his greatest tribute was becoming an ophthalmologist so he could treat her worsening cataracts and restore her eyesight. She died August 16, 1911.",
    quote:
      "She was my first teacher, and the most thorough I have ever had.",
    quoteSource: "José Rizal, letter to Ferdinand Blumentritt",
    placeInfo:
      "Calamba was a prosperous agricultural town, which was dominated by Dominican-owned haciendas. Although economically active because of rice and sugar production, many of the Filipino tenants suffered under unfair land practices, and growing up in this environment exposed Rizal to the inequalities that later influenced his nationalist writings.",
    tributes: [
      {
        type: "Dedication",
        title: "Rizal's First Teacher",
        description:
          "She became Rizal's first teacher and one of the greatest influences on his intellectual and moral development. She taught him the alphabet, prayers, and the value of education long before he entered formal schooling.",
      },
      {
        type: "Letters",
        title: "Letters While Abroad",
        description:
          "Throughout the years abroad, Rizal regularly wrote letters to Teodora, updating her about his studies and expressing concern for her health.",
      },
      {
        type: "Dedication",
        title: "Became an Ophthalmologist",
        description:
          "Rizal's greatest tribute to Teodora was becoming an ophthalmologist so he could treat her worsening cataracts and restore her eyesight.",
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
    mapX: 82.8,
    mapY: 42.5,
    portrait: "../../../assets/solis.webp",
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
          "Years later, Rizal wrote about Segunda in his memoirs, Memorias de un Estudiante de Manila, a written record of the young woman from Lipa, Batangas who became his first experience of romantic love, even though their brief acquaintance had ended long before with her engagement to Manuel Luz.",
      },
    ],
  },
  {
      id: "leonor",
      numeral: "III",
      name: "Lenoro Rivera Bauzon",
      years: "1867 – 1893",
      role: "Great Love",
      relationship: "Greatest love; inspiration for Maria Clara",
      location: "Intramuros, Manila",
      mapX: 80.8,
      mapY: 42.5,
      portrait: "../../../assets/Leonor_Rivera.webp",
      thumbnail: "../../../assets/Leonor_Rivera.webp",
      bio: "Lenoro Rivera Bauzon born on April 11, 1867, died on August 28. 1893. She was Rizal's long-time sweetheart and fiancée, and their relationship lasted for about eleven years, mostly maintained through letters while Rizal studied in Europe. Her family, particularly her mother, was against their relationship and secretly withheld many of Rizal's letters. Eventually, she got married to the British railway engineer Henry Charles Kipping, which left Rizal heartbroken. Leonor became the inspiration for Maria Clara, who is the heroine of Noli Me Tangere. Their romance remains one of the best-known love stories in Philippine history and significantly influenced Rizal's emotional life and literary works.",
      quote: "Though seas divide us, nothing shall divide my love for you.",
      quoteSource: "Leonor Rivera, letter to José Rizal, 1887",
      placeInfo:
        "Rizal fell in love with Leonor at the Rivera Residence in Intramuros, Manila, in April 1880, on her 13th birthday. Intramuros was the political, religious, and educational center of Spanish Manila, and it was surrounded by massive stone walls that housed elite Filipino and Spanish families, churches, government offices, and schools, reflecting the social hierarchy of the colonial period.",
      tributes: [
        {
          type: "Letters",
          title: "Letters, Sketches, and Illustrated Correspondence",
          description:
            "Rizal sent Leonor numerous love letters, sketches, poems, and illustrated correspondence while studying abroad. His portrayal of Maria Clara is also widely regarded as a literary tribute to Leonor's character and their relationship.",
        },
      ],
    },
  {
      id: "osei",
      numeral: "IV",
      name: "O-Sei-San (Seiko Usui)",
      years: "1868 – ?",
      role: "Japanese Sweetheart",
      relationship: "His companion in Meiji-era Tokyo",
      location: "Tokyo, Japan",
      mapX: 87.8,
      mapY: 30.2,
      portrait: "../../../assets/osei.webp",
      bio: "Seiko Usui, also affectionately called O-Sei-San, belonged to a respected Japanese family and met Rizal during his stay in Tokyo in 1888. She was fluent in English and French, as she served as Rizal's guide, interpreter, and companion as he explored Japanese culture. Their relationship lasted only about a month before Rizal continued his journey to the United States. Rizal admired O-Sei-San's intelligence, independence, and patriotism. He was also reportedly tempted to remain in Japan permanently, but he ultimately chose to continue his mission for the Philippines.",
      quote: "It was a happy golden month I spent with you.",
      quoteSource: "José Rizal, farewell note to O-Sei-San, 1888",
      placeInfo:
        "Tokyo during the Meiji Era was rapidly modernizing while preserving much of its traditional culture. Western-style government buildings, railways, and schools stood alongside temples, gardens, and cherry blossom parks, and Rizal admired Japan's cleanliness, discipline, and strong sense of national identity.",
      tributes: [
        {
          type: "Diary",
          title: "Diary Mentions and Farewell Note",
          description:
            "Rizal frequently mentioned O-Sei-San in his diary and left her a heartfelt farewell note, writing that he had spent \"a happy golden month\" with her, and their relationship became one of the most memorable episodes of Rizal's travels abroad.",
        },
      ],
    },
  {
    id: "nelly",
    numeral: "V",
    name: "Nelly Boustead",
    years: "1868 – 1936",
    role: "Parisian Suitor",
    relationship: "His rejected proposal in Biarritz",
    location: "Biarritz, France",
    mapX: 48.2,
    mapY: 25.8,
    portrait:
      "https://images.unsplash.com/photo-1752317591860-aadd6ff38d90?w=600&h=800&fit=crop&auto=format",
    bio: "Nelly Boustead was a Filipina socialite of the expatriate ilustrado class, living among the leisure and salons of Biarritz. Rizal stayed with her family for a period, and they fenced together, debated philosophy, and walked the Atlantic promenades. A genuine attachment formed. When Rizal eventually proposed, Nelly set a single condition: that he convert from Catholicism. Rizal, unwilling to perform a faith he did not hold, refused. They parted without hostility — an ending almost more melancholy for its civility.",
    quote:
      "Even rejection, when done with honesty, leaves no wound that cannot heal.",
    quoteSource:
      "attributed to José Rizal, recalled by Nelly Boustead",
    placeInfo:
      "Biarritz in the late 1880s was the resort playground of European royalty and the wealthy expatriate class. Napoleon III had made it fashionable decades earlier; by Rizal's time it was a city of grand Baroque hotels, ocean promenades, and casino culture. The Boustead family represented the Filipino ilustrado class that had achieved a comfortable European life — speaking French and English, attending salons, maintaining a cultured distance from the colonial troubles of their homeland. The Atlantic wind off the Basque coast carried, for these expatriates, neither fish nor salt but the particular melancholy of the perpetually displaced.",
    tributes: [
      {
        type: "Sculpture",
        title: "Portrait Bust, circa 1890",
        description:
          "Rizal was a gifted sculptor — self-taught, working in clay and occasionally plaster. During his time with the Boustead family he sculpted a small portrait bust of Nelly, which she kept. It is one of several portrait sculptures he made of women he admired, evidence of an impulse to capture likeness as a form of sustained devotion.",
      },
      {
        type: "Artwork",
        title: "Watercolor Portrait Sketch, 1890",
        description:
          "Beyond the bust, Rizal made a watercolor sketch of Nelly during their time in Biarritz — part of his ongoing habit of drawing the people around him as a form of attention, remembrance, and sometimes courtship. The sketch was affectionate in execution, careful in its rendering of her features.",
      },
    ],
  },
  {
    id: "consuelo",
    numeral: "VI",
    name: "Consuelo Ortiga y Pérez",
    years: "1862 – ?",
    role: "Madrid Admirer",
    relationship: "His carefully restrained affection",
    location: "Madrid, Spain",
    mapX: 47.2,
    mapY: 27.2,
    portrait:
      "https://images.unsplash.com/photo-1752317591526-6cac646cc05b?w=600&h=800&fit=crop&auto=format",
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
          '"A La Señorita C.O. y P." (To Miss C.O. y P.), 1883',
        description:
          "This formal dedication poem in Spanish is one of Rizal's most carefully coded expressions of feeling. He admires, praises, and mourns — all in language calibrated to never cross a line he had drawn for himself. The initials in the title were transparent to anyone in their social circle. Consuelo received it and understood exactly what it was and what it was not.",
      },
      {
        type: "Gift",
        title: "Decorated Spanish Fan, 1883",
        description:
          "Rizal painted a traditional Spanish folding fan with floral motifs — a common token of esteem in 1880s Madrid society — and gave it to Consuelo. The act was proper, socially unremarkable, and yet intimate: he had spent time painting it, selecting its motifs, handling it before she touched it. It was a gift that communicated exactly as much as he allowed himself to say.",
      },
    ],
  },
  {
    id: "suzanne",
    numeral: "VII",
    name: "Suzanne Jacoby",
    years: "1869 – ?",
    role: "Walloon Friend",
    relationship: "His affectionate correspondent in Ghent",
    location: "Ghent, Belgium",
    mapX: 50.2,
    mapY: 21.2,
    portrait:
      "https://images.unsplash.com/photo-1752317591734-74d999595b0c?w=600&h=800&fit=crop&auto=format",
    bio: 'Suzanne Jacoby was the niece of Rizal\'s landlady in Ghent, Belgium, where he traveled in 1890 to have El Filibusterismo reprinted at lower cost. She was warm, witty, and called him affectionately "my little Japanese" — a nickname that made Rizal laugh and blush in equal measure. Their friendship was literary and playful rather than deeply romantic, but she offered something Rizal rarely permitted himself: lightness. In an exile defined by urgency and sacrifice, she gave him the rare gift of an uncomplicated smile.',
    quote:
      "She reminded me that even a man carrying a nation may sometimes laugh.",
    quoteSource: "José Rizal, letter to Blumentritt, 1890",
    placeInfo:
      "Ghent in 1890 was a prosperous Flemish city, its gothic cathedral and medieval guild halls testifying to centuries of mercantile wealth. Rizal came specifically because printing was cheaper here than in Paris or Madrid — his second novel El Filibusterismo was printed by F. Meyer-Van Loo at a fraction of the cost he had been quoted elsewhere. The city had a working-class intellectual culture quite distinct from the French sophistication Rizal knew better: earnest, unpretentious, rooted in local pride rather than cosmopolitan performance.",
    tributes: [
      {
        type: "Letters",
        title: "Affectionate Correspondence, 1890 – 1891",
        description:
          'After leaving Ghent, Rizal maintained a warm correspondence with Suzanne Jacoby — lighter in tone than his letters to Blumentritt or Leonor, full of wordplay and mutual teasing. Her nickname for him, "my little Japanese," appeared in her letters to him; his replies matched her playfulness. These letters are among the most relaxed he ever wrote.',
      },
      {
        type: "Artwork",
        title: "Pencil Sketch (Keepsake), 1890",
        description:
          "Before leaving Ghent, Rizal left Suzanne a pencil sketch as a keepsake — his habitual parting gift to people who had mattered to him. The sketch is not catalogued among his surviving works, but his correspondence references it. He drew quickly and precisely, and she seems to have kept it.",
      },
    ],
  },
  {
    id: "josephine",
    numeral: "VIII",
    name: "Josephine Bracken",
    years: "1876 – 1902",
    role: "Common-Law Wife",
    relationship: "His last love, present until the end",
    location: "Dapitan, Zamboanga del Norte",
    mapX: 83.8,
    mapY: 45.2,
    portrait:
      "https://images.unsplash.com/photo-1743267216980-a5ffe3766818?w=600&h=800&fit=crop&auto=format",
    bio: "Josephine Bracken arrived in Dapitan in January 1895, brought by her ailing adoptive father who sought Rizal's medical skill for his failing eyesight. She stayed. Irish-Filipino, raised in Macao, twenty years old, she became Rizal's companion through his final exile. The Catholic Church refused to perform their marriage without Rizal's full doctrinal recantation — which he declined to give. Accounts suggest they exchanged vows in a private civil ceremony on the morning of his execution, December 30, 1896. She had borne him a son months before who lived only three hours. She kept his memory and his letters for the rest of her life.",
    quote:
      "She came to Dapitan seeking sight for her father. She gave sight to me.",
    quoteSource: "attributed to José Rizal",
    placeInfo:
      "Dapitan in 1892 was a remote town on the northwestern tip of Mindanao, chosen by the Spanish colonial government as Rizal's place of exile precisely for its isolation from Manila's political life. But Rizal transformed his banishment into something remarkable: he built a school, a small clinic, a water system, and a sculptural relief map of Mindanao in the town plaza. He corresponded with scientists worldwide, sent botanical and zoological specimens to European museums, and practiced medicine without charge for hundreds of patients.",
    tributes: [
      {
        type: "Poem",
        title:
          '"Mi Último Adiós" (My Last Farewell), December 1896',
        description:
          "Rizal's final poem — fourteen stanzas of measured, luminous verse — was written in his cell in Fort Santiago the night before his execution. He hid the manuscript inside a small alcohol lamp he had carved by hand. His family found it after his death. The poem is addressed to the Philippines, but its closing lines — tender, resigned, in love with life — are understood as also addressed to Josephine. It is among the greatest poems written in Spanish.",
      },
      {
        type: "Gift",
        title:
          "Carved Alcohol Lamp (Secret Hiding Place), 1896",
        description:
          'The small lamp Rizal hand-carved during his Dapitan exile served its most famous purpose on the eve of his execution: he hid the rolled manuscript of "Mi Último Adiós" inside it and gave it to Josephine as a keepsake. She brought it out of Fort Santiago past the guards. The lamp is now a national artifact — a plain carved object that contained his last words.',
      },
      {
        type: "Dedication",
        title:
          "El Filibusterismo — Completed in Dapitan's Exile",
        description:
          "Rizal completed and saw to publication the second of his great novels — El Filibusterismo, a darker and more revolutionary work than Noli Me Tángere — before Josephine arrived. But it was the peace of Dapitan exile, the domestic calm that her presence later extended, that gave him space for the scientific writing, letters, and clinic work of his last years. She was the atmosphere in which his final chapter was lived.",
      },
    ],
  },
];