export type Service = {
  slug: string
  name: string
  eyebrow: string
  description: string
  icon: string
}

export type Product = {
  id: number
  slug: string
  name: string
  game: string
  gameSlug: string
  service: string
  serviceSlug: string
  description: string
  shortDescription: string
  price: number
  oldPrice?: number
  rating: number
  reviews: number
  delivery: string
  badge?: string
  accent: string
}

export const slugify = (value: string) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')

export const services: Service[] = [
  { slug: 'account-boosting', name: 'Account Boosting', eyebrow: 'Power up', description: 'Expert progression built around your goals, schedule, and platform.', icon: '↗' },
  { slug: 'modding-services', name: 'Modding Services', eyebrow: 'Customize', description: 'Curated enhancements and unlock packages with transparent delivery steps.', icon: '◆' },
  { slug: 'account-recovery', name: 'Account Recovery', eyebrow: 'Get back in', description: 'Guided recovery support from specialists who understand every platform.', icon: '↺' },
  { slug: 'currency-top-ups', name: 'Currency Top-Ups', eyebrow: 'Stock up', description: 'Fast, tracked currency delivery for the games you play most.', icon: '◈' },
  { slug: 'leveling', name: 'Leveling', eyebrow: 'Skip the grind', description: 'Reach your target level while keeping your account and preferences in focus.', icon: '△' },
  { slug: 'rank-boosting', name: 'Rank Boosting', eyebrow: 'Climb higher', description: 'Competitive rank services with progress updates from start to finish.', icon: '♛' },
  { slug: 'item-farming', name: 'Item Farming', eyebrow: 'Build the loadout', description: 'Targeted farming for rare gear, materials, mounts, and resources.', icon: '✦' },
  { slug: 'unlock-services', name: 'Unlock Services', eyebrow: 'Open everything', description: 'Camos, operators, achievements, and content unlocked to order.', icon: '⌁' },
  { slug: 'game-accounts', name: 'Game Accounts', eyebrow: 'Start ahead', description: 'Vetted game accounts with clear inventories and secure handover.', icon: '◎' },
]

export const gameNames = [
  'Call of Duty BO1','Call of Duty BO2','Call of Duty BO3','Call of Duty BO4','Call of Duty BO6','Call of Duty MW','GTA V','CSR2','Elden Ring','Diablo','Borderlands','OneState RP','Greenville Roblox','WoW Retail','Elder Scrolls Online','Forza Horizon 6','Gray Zone Warfare','ARC Raiders','Aion 2','Albion Online','Apex Legends','Arena Breakout: Infinite','Arknights: Endfield','Ashes of Creation','Assassin’s Creed Black Flag','Back 4 Blood','Baldur’s Gate 3','Battlefield 6','Battlefield 2042','Black Desert Online','Black Myth: Wukong','Blue Protocol','Brawl Stars','Call of Duty','Clash of Clans','Clash Royale','Corepunk','Counter-Strike 2','Crimson Desert','Dark and Darker','DC Universe Online','Dead by Daylight','Deadlock','Deep Rock Galactic Rogue Core','Delta Force','Destiny 2','Diablo 4','Diablo Games','Division 2','Division Resurgence','Doom: The Dark Ages','Dragon Ball Legends','Dragon’s Dogma 2','Dreadmyst','Dune Awakening','Elden Ring Nightreign','Enotria: Last Song','Escape from Tarkov','EVE Online','FC 26','FC 25','Fallout 76','Fellowship','Final Fantasy XIV','Fisch','Fortnite','Forza Horizon 4','Forza Horizon 5','Free Fire','Genshin Impact','Grim Dawn','Grow a Garden','Grow a Garden 2','Guild Wars 2','Hades 2','Hay Day','Hearthstone','Helldivers 2','Honkai Star Rail','Honor of Kings','Hytale','King of Avalon','John Carpenter’s Toxic Commando','Last Epoch','League of Legends','Legacy: Steel & Sorcery','Lost Ark','MapleStory','Marathon','Marvel Rivals','Metin2','Minecraft','Mobile Legends: Bang Bang','Monster Hunter Wilds','Murder Mystery 2','Naraka Bladepoint','New World','Neverwinter','Night Crows','Old School RuneScape','Once Human','Overwatch','Palworld','Path of Exile 2','Path of Exile','Plants vs Brainrots','Pokémon GO','Pokémon TCG Pocket','PUBG Mobile','Raid: Shadow Legends','Rainbow Six Mobile','Rainbow Six Siege','RF Online Next','Roblox','Rocket League','RuneScape Dragonwilds','RuneScape 3','Rust','SAND: Raiders of Sophie','Sea of Thieves','Skull and Bones','Smite 2','Sonic Rumble','Squad Busters','Stalker 2: Heart of Chornobyl','Star Citizen','Star Wars: The Old Republic','Steal a Brainrot','Subnautica 2','Summoners War','Teamfight Tactics','The Finals','The First Descendant','The Seven Deadly Sins: Origin','Torchlight Infinite','UFC 6','War Thunder','Valorant','Warcraft Rumble','Warframe','Warhammer 40,000: Space Marine 2','Where Winds Meet','Whiteout Survival','World of Tanks','WoW Classic Era','WoW Classic Hardcore','WoW Mists of Pandaria','WoW Season of Discovery','WoW TBC Classic Anniversary','WoW Titan Reforged','Wuthering Waves','XDefiant','Zenless Zone Zero','8 Ball Pool','ARK: Survival Ascended','Ragnarok X: Next Generation','Ragnarok M Classic','Jurassic World Alive','Arcane Legends',
]

export const games = gameNames.map((name, index) => ({
  name,
  slug: slugify(name),
  popular: index < 18,
  code: name.split(/\s+/).slice(0, 2).map((part) => part[0]).join('').toUpperCase(),
  accent: ['#4d8dff', '#d4a72c', '#8b5cf6', '#23c483', '#ef5da8', '#ff7043'][index % 6],
}))

export const products: Product[] = [
  { id: 1, slug: 'bo6-dark-matter-unlock', name: 'Dark Matter Unlock', game: 'Call of Duty BO6', gameSlug: 'call-of-duty-bo6', service: 'Unlock Services', serviceSlug: 'unlock-services', description: 'A fully tracked Dark Matter unlock package completed by a vetted specialist. Choose your platform, desired pace, and optional weapon priority. Progress updates are included throughout the order.', shortDescription: 'Complete camo progression with tracked milestones and priority options.', price: 179.99, oldPrice: 229.99, rating: 4.98, reviews: 284, delivery: '2–5 days', badge: 'FLASH SALE', accent: '#4d8dff' },
  { id: 2, slug: 'gta-v-cash-rank-package', name: 'Cash + Rank Package', game: 'GTA V', gameSlug: 'gta-v', service: 'Modding Services', serviceSlug: 'modding-services', description: 'Build the GTA Online profile you want with a configurable cash and rank package. Every order includes a pre-delivery review and clear setup instructions.', shortDescription: 'Custom cash, rank, stats, and unlocks in one premium package.', price: 89.99, oldPrice: 119.99, rating: 4.96, reviews: 641, delivery: '1–24 hours', badge: 'BEST SELLER', accent: '#d4a72c' },
  { id: 3, slug: 'elden-ring-runes-items', name: 'Runes + Item Drop', game: 'Elden Ring', gameSlug: 'elden-ring', service: 'Item Farming', serviceSlug: 'item-farming', description: 'Pick your rune amount and requested item set. A specialist coordinates delivery and confirms every included item before the order is marked complete.', shortDescription: 'Fast rune delivery with configurable weapons, armor, and talismans.', price: 24.99, rating: 4.99, reviews: 392, delivery: '15–60 min', badge: 'FAST DELIVERY', accent: '#d4a72c' },
  { id: 4, slug: 'wow-mythic-plus-push', name: 'Mythic+ Key Push', game: 'WoW Retail', gameSlug: 'wow-retail', service: 'Rank Boosting', serviceSlug: 'rank-boosting', description: 'Reach your target Mythic+ rating with flexible self-play or piloted options. Select key range, timing, and bonus loot preferences at checkout.', shortDescription: 'Targeted rating progress with self-play and scheduled run options.', price: 39.99, rating: 4.95, reviews: 188, delivery: 'Scheduled', accent: '#8b5cf6' },
  { id: 5, slug: 'diablo-4-level-60', name: 'Level 1–60 Express', game: 'Diablo 4', gameSlug: 'diablo-4', service: 'Leveling', serviceSlug: 'leveling', description: 'A fast route to endgame with milestone notifications and optional build setup. Your specialist follows your preferred play schedule.', shortDescription: 'Reach endgame quickly with build setup and milestone updates.', price: 54.99, oldPrice: 69.99, rating: 4.94, reviews: 155, delivery: '12–24 hours', badge: '20% OFF', accent: '#ef5d55' },
  { id: 6, slug: 'apex-ranked-boost', name: 'Ranked Division Boost', game: 'Apex Legends', gameSlug: 'apex-legends', service: 'Rank Boosting', serviceSlug: 'rank-boosting', description: 'Choose your current and target rank for an instant quote. Available as duo-play or piloted progression with live order tracking.', shortDescription: 'Climb to your target division with duo or piloted options.', price: 64.99, rating: 4.92, reviews: 476, delivery: '1–3 days', accent: '#ef5da8' },
  { id: 7, slug: 'fortnite-vbucks-topup', name: 'V-Bucks Top-Up', game: 'Fortnite', gameSlug: 'fortnite', service: 'Currency Top-Ups', serviceSlug: 'currency-top-ups', description: 'Quick V-Bucks top-up with region and platform checks before fulfillment. Select the package size that fits your next drop.', shortDescription: 'Fast, verified top-ups with platform and region checks.', price: 19.99, rating: 4.97, reviews: 823, delivery: '5–30 min', badge: 'TRENDING', accent: '#23c483' },
  { id: 8, slug: 'valorant-placement-wins', name: 'Placement Wins', game: 'Valorant', gameSlug: 'valorant', service: 'Account Boosting', serviceSlug: 'account-boosting', description: 'Start the act strong with configurable placement wins, agent preferences, and optional duo queue. Includes live status updates.', shortDescription: 'Confident placements with duo queue and agent preferences.', price: 47.99, rating: 4.91, reviews: 216, delivery: '1–2 days', accent: '#ff4655' },
]

export const getGame = (slug: string) => games.find((game) => game.slug === slug)
export const getService = (slug: string) => services.find((service) => service.slug === slug)
export const getProduct = (value: string) => products.find((product) => product.slug === value || String(product.id) === value)
