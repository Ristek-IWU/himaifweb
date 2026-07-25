// Category Configuration (matching order and items from images)
export const categoryGroups = {
  platform: {
    label: "Platform",
    icon: "devices",
    tags: [
      { name: "Full Stack", icon: "layers" },
      { name: "Frontend", icon: "language" },
      { name: "Backend", icon: "database" },
      { name: "Vibe Coding", icon: "music_note" },
      { name: "Pembuatan Game", icon: "sports_esports" },
      { name: "iOS", icon: "phone_iphone" },
      { name: "Android", icon: "adb" },
      { name: "Mobile", icon: "phone_android" },
      { name: "Desktop", icon: "desktop_windows" },
      { name: "DevOps", icon: "settings_suggest" },
      { name: "Keamanan (Security)", icon: "shield" },
      { name: "Kecerdasan Buatan (AI)", icon: "psychology" },
      { name: "Data", icon: "analytics" },
      { name: "Perangkat Keras", icon: "memory" },
      { name: "IoT", icon: "router" },
      { name: "Ekstensi Chrome", icon: "extension" },
      { name: "Open Source", icon: "folder_open" },
      { name: "Web3", icon: "currency_bitcoin" }
    ]
  },
  sector: {
    label: "Sektor",
    icon: "domain",
    tags: [
      { name: "Indonesia Emas", icon: "workspace_premium" },
      { name: "E-Commerce", icon: "shopping_cart" },
      { name: "Fintech & Finance", icon: "payments" },
      { name: "UMKM", icon: "store" },
      { name: "EdTech", icon: "school" },
      { name: "Kesehatan & Kebugaran", icon: "favorite" },
      { name: "Media Sosial", icon: "forum" },
      { name: "Logistik", icon: "local_shipping" },
      { name: "Bahasa Lokal", icon: "translate" },
      { name: "Halal", icon: "star" },
      { name: "Pemerintahan", icon: "account_balance" },
      { name: "Agritech", icon: "agriculture" },
      { name: "Produktivitas", icon: "schedule" },
      { name: "SaaS", icon: "cloud" },
      { name: "Direct-to-Consumer", icon: "diversity_3" },
      { name: "Online-to-Offline", icon: "sync_alt" },
      { name: "Pasar Sekunder", icon: "storefront" },
      { name: "Iklim & Lingkungan", icon: "thermostat" }
    ]
  },
  language: {
    label: "Bahasa Pemrograman",
    icon: "code",
    tags: [
      { name: "JavaScript", icon: "javascript" },
      { name: "TypeScript", icon: "shift" },
      { name: "Python", icon: "data_object" },
      { name: "PHP", icon: "php" },
      { name: "Go", icon: "swap_horiz" },
      { name: "Java", icon: "coffee" },
      { name: "Dart", icon: "flight" },
      { name: "C++", icon: "add_box" },
      { name: "C#", icon: "tag" },
      { name: "Rust", icon: "hardware" },
      { name: "Swift", icon: "phone_iphone" },
      { name: "Solidity", icon: "token" }
    ]
  },
  framework: {
    label: "Framework",
    icon: "architecture",
    tags: [
      { name: "React", icon: "cycle" },
      { name: "Next.js", icon: "arrow_forward" },
      { name: "Vue", icon: "visibility" },
      { name: "Nuxt", icon: "view_in_ar" },
      { name: "Svelte", icon: "bolt" },
      { name: "Angular", icon: "change_history" },
      { name: "Node.js", icon: "hexagon" },
      { name: "Unity", icon: "sports_esports" },
      { name: "Deno", icon: "pets" },
      { name: "Bun", icon: "bakery_dining" },
      { name: "GraphQL", icon: "scatter_plot" },
      { name: "Flutter", icon: "flutter" },
      { name: "Laravel", icon: "diamond" },
      { name: "Rails", icon: "train" },
      { name: ".NET", icon: "grid_view" }
    ]
  },
  infrastructure: {
    label: "Infrastruktur",
    icon: "cloud_done",
    tags: [
      { name: "Docker", icon: "inventory_2" },
      { name: "Kubernetes", icon: "hub" },
      { name: "AWS", icon: "cloud_circle" },
      { name: "GCP", icon: "cloud_queue" },
      { name: "Redis", icon: "bolt" },
      { name: "MySQL", icon: "database" },
      { name: "PostgreSQL", icon: "table_chart" },
      { name: "MongoDB", icon: "description" }
    ]
  }
}

// Order of categories (Platform, Sektor, Bahasa, Framework, Infrastruktur)
export const groupOrder = ["platform", "sector", "language", "framework", "infrastructure"]

// Showcase Projects Database with detailed tags
export const initialProjects = [
  {
    id: 1,
    title: "VeriChain - Ijazah Digital",
    description: "Sistem otentikasi dokumen akademis berbasis blockchain untuk menjamin keaslian ijazah secara real-time. Menggunakan smart contract ERC-721.",
    author: "Fadhil R. (2024)",
    upvotes: 42,
    hasUpvoted: false,
    demoUrl: "https://verichain.example.com",
    githubUrl: "https://github.com/himaif/verichain",
    files: ["contract.sol", "index.html", "app.js", "README.md"],
    image: "",
    tags: {
      platform: "Web3",
      sector: "EdTech",
      language: "JavaScript",
      framework: "React",
      infrastructure: "PostgreSQL"
    },
    comments: [
      { name: "Zahra A.", comment: "Ide yang keren! Sangat bermanfaat untuk mencegah pemalsuan ijazah." }
    ]
  },
  {
    id: 2,
    title: "Portal Jamsos ZKP",
    description: "Platform jaminan sosial berbasis bukti tanpa pengungkapan (ZKP) untuk menjaga privasi identitas penerima bansos secara terenkripsi.",
    author: "Zahra A. (2024)",
    upvotes: 38,
    hasUpvoted: false,
    demoUrl: "https://jamsos.example.com",
    githubUrl: "https://github.com/himaif/jamsos-zkp",
    files: ["zkp_circuit.circom", "verify.py", "main.py"],
    image: "",
    tags: {
      platform: "Keamanan (Security)",
      sector: "Pemerintahan",
      language: "Python",
      framework: "Node.js",
      infrastructure: "PostgreSQL"
    },
    comments: [
      { name: "Rizky D.", comment: "Implementasi snyk-proofnya rapi sekali!" }
    ]
  },
  {
    id: 3,
    title: "Bobotoh Pay",
    description: "Dompet digital terintegrasi jaringan Web3 untuk mempermudah transaksi saldo dan layanan pembayaran QRIS secara instan.",
    author: "Rizky D. (2024)",
    upvotes: 55,
    hasUpvoted: false,
    demoUrl: "https://bobotohpay.example.com",
    githubUrl: "https://github.com/himaif/bobotoh-pay",
    files: ["App.tsx", "package.json", "wallet_connector.ts"],
    image: "",
    tags: {
      platform: "Mobile",
      sector: "Fintech & Finance",
      language: "TypeScript",
      framework: "Flutter",
      infrastructure: "Redis"
    },
    comments: []
  },
  {
    id: 4,
    title: "AI Chatbot Mentor",
    description: "Asisten AI pintar untuk mahasiswa Informatika guna membantu menjawab pertanyaan coding, debugging, dan materi kuliah secara otomatis.",
    author: "Amelia S. (2025)",
    upvotes: 29,
    hasUpvoted: false,
    demoUrl: "https://mentorbot.example.com",
    githubUrl: "https://github.com/himaif/ai-chatbot",
    files: ["rag_model.py", "api.js", "chat.css"],
    image: "",
    tags: {
      platform: "Kecerdasan Buatan (AI)",
      sector: "EdTech",
      language: "Python",
      framework: "Next.js",
      infrastructure: "MongoDB"
    },
    comments: []
  },
  {
    id: 5,
    title: "Smart Agriculture IoT",
    description: "Sensor tanah otomatis terintegrasi dashboard real-time untuk memantau kelembapan, suhu, dan ph tanah tanaman hias.",
    author: "Rendi K. (2023)",
    upvotes: 19,
    hasUpvoted: false,
    demoUrl: "https://smartagri.example.com",
    githubUrl: "https://github.com/himaif/smart-agriculture",
    files: ["arduino_sketch.ino", "dashboard.html", "server.js"],
    image: "",
    tags: {
      platform: "IoT",
      sector: "Agritech",
      language: "C++",
      framework: "React",
      infrastructure: "MySQL"
    },
    comments: []
  }
]

// Drive Storage Files Database (Simulated)
export const initialDriveFiles = [
  { id: 101, name: "Tugas Akhir / Skripsi", type: "folder", size: "--", date: "12-07-2026", isPublic: false },
  { id: 102, name: "Proyek Kuliah", type: "folder", size: "--", date: "15-07-2026", isPublic: true },
  { id: 103, name: "Sertifikat Lomba", type: "folder", size: "--", date: "10-06-2026", isPublic: false },
  { id: 104, name: "VeriChain - Source Code.zip", type: "zip", size: "14.2 MB", date: "16-07-2026", isPublic: true },
  { id: 105, name: "Draft_Proposal.docx", type: "document", size: "1.2 MB", date: "14-07-2026", isPublic: false },
  { id: 106, name: "Foto_Kegiatan.png", type: "image", size: "4.5 MB", date: "16-07-2026", isPublic: true }
]
