# DataSherpas 🏔️

**Your Career Guide to Data Engineering** — A premium Next.js 14 website for career guidance and mentorship in the data engineering field.

## 🚀 Quick Start

```bash
# Navigate to the project directory
cd /home/meet-wadekar/Desktop/projects/DataSherpas

# Install dependencies (run this in your own terminal — requires internet)
npm install

# Start the development server
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🗂️ Project Structure

```
DataSherpas/
├── src/
│   ├── app/
│   │   ├── page.tsx              # Home page (Hero + Programs + Stats + Testimonials)
│   │   ├── layout.tsx            # Root layout (Navbar + Footer)
│   │   ├── globals.css           # Global styles & design system
│   │   ├── about/               # About page (Story, Mission, Timeline)
│   │   ├── programs/            # Programs page (3 detailed paths + curriculum)
│   │   ├── roadmap/             # Roadmap page (6-phase free DE roadmap)
│   │   ├── team/                # Team page (Founders + 50+ mentor grid)
│   │   └── contact/             # Contact page (Form + booking)
│   └── components/
│       ├── 3d/
│       │   ├── HeroScene.tsx     # 3D hero — star field + data nodes + wireframe sphere
│       │   ├── FloatingTorus.tsx # 3D animated torus with distort material
│       │   └── DataFlowScene.tsx # 3D data pipeline particle visualization
│       ├── layout/
│       │   ├── Navbar.tsx        # Responsive navbar with scroll behavior
│       │   └── Footer.tsx        # Footer with newsletter + links
│       └── ui/
│           ├── CustomCursor.tsx  # Neon green custom cursor with lag ring
│           ├── CountUp.tsx       # Animated number counter (intersection observer)
│           └── Reveal.tsx        # Scroll-triggered reveal animations
├── package.json
├── tailwind.config.ts            # Green/black/white theme + animations
├── tsconfig.json
└── next.config.js
```

---

## 🎨 Design System

**Colors:**
- 🟢 Neon Green: `#00ff88` (primary accent)
- ⚫ Background: `#080808`
- 🃏 Card: `#0f0f0f`
- ⬜ Text: `#ffffff`

**Fonts:** Inter (body) + Outfit (display) + JetBrains Mono (code)

**Key CSS Classes:**
- `.btn-primary` — Green gradient CTA button with neon glow
- `.btn-outline` — Green outline button
- `.card-glass` — Glassmorphism card with hover effects
- `.card-dark` — Dark card with green hover border
- `.text-gradient-green` — White-to-green gradient text
- `.badge-green` / `.badge-white` — Pill badges
- `.section-padding` — Responsive horizontal padding
- `.section-inner` — Max-width container (7xl)

---

## 📦 Dependencies

| Package | Purpose |
|---------|---------|
| `next@14` | React framework |
| `framer-motion` | Animations |
| `three` | 3D rendering |
| `@react-three/fiber` | React bindings for Three.js |
| `@react-three/drei` | 3D helpers (Torus, Float, etc.) |
| `gsap` | Advanced animations |
| `lucide-react` | Icon library |
| `tailwindcss` | Utility CSS |

---

## 📄 Pages

| Route | Page | Description |
|-------|------|-------------|
| `/` | Home | Hero 3D scene, stats, programs, tech stack, testimonials |
| `/about` | About | Story, mission, values, company timeline |
| `/programs` | Programs | 3 program tracks with expandable curriculum |
| `/roadmap` | Roadmap | Free 6-phase DE roadmap |
| `/team` | Team | Founders + 50+ mentor grid |
| `/contact` | Contact | Booking form + discovery call |

---

## 🔧 Customization

**Update team/content:** Edit the arrays in each `*PageClient.tsx` file  
**Change colors:** Modify `tailwind.config.ts` → `colors.green.neon`  
**Add pages:** Create new directories in `src/app/`  
**Connect a backend:** Replace the form `handleSubmit` in `ContactPageClient.tsx` with an API call

---

## 🚢 Production Build

```bash
npm run build
npm run start
```

## 🌐 Deploy

Optimized for Vercel deployment:
```bash
npx vercel --prod
```
