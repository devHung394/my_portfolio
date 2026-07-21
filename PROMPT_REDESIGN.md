# Redesign Portfolio — NQH (Inspired by congdu.webflow.io)

## Mục tiêu tổng thể
Redesign toàn bộ portfolio `hungnq.netlify.app` theo hướng **dark theme**, có cá tính mạnh,
lấy cảm hứng từ `congdu.webflow.io`. Giữ stack hiện tại: Next.js 14, TypeScript, Tailwind CSS,
Framer Motion. Đọc `CLAUDE.md` trước khi làm bất kỳ thứ gì.

---

## 1. Global — Theme & Typography

### Màu sắc (thêm vào tailwind.config.ts)
```
background:  #0E0E0C   (near-black, warm tint)
surface:     #161614   (card background)
border:      #2A2A28   (subtle divider)
text-primary:#F0EFE9   (warm white)
text-muted:  #6B6B67   (secondary text)
accent:      #1D9E75   (green — giữ từ bản cũ, dùng sparingly)
```

### Font (đã có, chỉ cần confirm)
- Display: `Instrument Serif` — dùng cho heading lớn, kết hợp regular + italic
- Label/mono: `DM Mono` — dùng cho badge, tag, label nhỏ
- Body: `Outfit` — dùng cho paragraph

### Tailwind config
Thêm `darkMode: 'class'` nếu chưa có. Set `class="dark"` mặc định trên `<html>`.

---

## 2. Intro Screen ("Click to start")

**File:** `components/IntroScreen.tsx`

Tạo một full-screen overlay xuất hiện khi người dùng vào lần đầu:
- Background `#0E0E0C` với dot pattern SVG lặp lại (white dots, opacity 0.06, spacing 24px)
- Center: logo `NQH` bằng Instrument Serif italic, size 64px, màu `#F0EFE9`
- Bên dưới: text `"Click anywhere to enter"` — DM Mono, 11px, letter-spacing 0.16em, màu muted, có blink animation (opacity 1 → 0.3 lặp lại 1.2s)
- Khi click: Framer Motion exit animation — `opacity: 0, scale: 0.98`, duration 0.6s ease-out
- Lưu `sessionStorage.setItem('intro-seen', 'true')` để không hiện lại khi reload trong cùng session

```tsx
// Logic cơ bản
const [show, setShow] = useState(() => {
  if (typeof window === 'undefined') return true
  return !sessionStorage.getItem('intro-seen')
})
```

---

## 3. Navigation

**File:** `components/Navbar.tsx`

- Background: `#0E0E0C` với `border-bottom: 1px solid #2A2A28`
- Logo `NQH`: Instrument Serif italic, 18px — KHÔNG bold
- Links: DM Mono, 11px, letter-spacing 0.1em, màu `#6B6B67`
- Active link: màu `#F0EFE9`, không underline, không background
- Hover: transition color 0.2s sang `#F0EFE9`
- `position: sticky top-0`, `z-index: 50`, `backdrop-filter: blur(8px)`, background `rgba(14,14,12,0.85)`

---

## 4. Hero Section

**File:** `components/sections/HeroSection.tsx`

Layout: full viewport height (`min-h-screen`), flex column, justify-between, padding `80px 80px 48px`

**Phần trên — Stacked headline lớn:**
```
UI/UX Designer & Frontend Developer    ← DM Mono 11px, muted, letter-spacing 0.16em
                                          margin-bottom 32px

Nông Quốc Hưng                         ← Instrument Serif, 72px, #F0EFE9, line-height 1.0
Designing &                            ← Instrument Serif italic, 72px, #6B6B67
building                               ← Instrument Serif, 72px, #F0EFE9
beyond the screen.                     ← Instrument Serif italic, 72px, #6B6B67
```
Framer Motion: mỗi dòng `fadeUp` staggered (y: 30 → 0, opacity 0 → 1, delay tăng dần 0.1s)

**Phần dưới — Split row:**
- Bên trái: description text 14px màu muted, max-width 360px
- Bên phải: 2 CTA — `"View case studies ↗"` (underline style) + `"Download CV"` (ghost)
- Giữa: `"● Available for internship — Ho Chi Minh City"` — DM Mono 10px, accent green

**Dot pattern background** giống intro screen — subtle, opacity 0.04

---

## 5. About Section — Chat UI

**File:** `components/sections/AboutSection.tsx`

Lấy cảm hứng từ congdu: trình bày About dưới dạng **chat messenger UI**.

Layout: 2 cột — trái là ảnh + info card, phải là chat bubbles

**Cột trái — Info card** (`surface` background, border `#2A2A28`, rounded-2xl):
- Avatar ảnh `avt.jpg` — tròn, 72px
- Tên: Instrument Serif 20px
- Role: DM Mono 11px, muted
- Các thông tin nhỏ (birthday, location, email) — mỗi dòng có icon Tabler + text 13px

**Cột phải — Chat bubbles:**
Dùng 2 "nhân vật": `NQH` (bạn) và `Recruiter` (ẩn danh)

```
[Recruiter]  "Hey Hưng! Tell me about yourself 👋"

[NQH]        "Hi! I'm a UI/UX Designer + Frontend Dev
              based in Ho Chi Minh City 🇻🇳
              Currently studying Software Engineering
              at HCMUTE (GPA 3.2/4.0)"

[Recruiter]  "What's your design process like?"

[NQH]        "I go from messy problems → clean flows →
              consistent UI systems → ship with React.
              Basically: think in UX, build in code."

[Recruiter]  "Impressive! Are you available?"

[NQH]        "● Open for UI/UX internship — HCMC"
```

Styling bubbles:
- NQH (sender): background `#1D9E75` opacity 20%, border `#1D9E75` opacity 40%, text `#F0EFE9`, align right
- Recruiter: background `#2A2A28`, text muted, align left
- Avatar nhỏ 24px bên cạnh bubble
- Framer Motion: mỗi bubble `fadeUp` staggered khi scroll vào viewport (`whileInView`)

---

## 6. Skills Section

**File:** `components/sections/SkillsSection.tsx`

**KHÔNG dùng progress bar.**

Layout: 2 cột chính

**Cột 1 — UX/UI:**
- Header: Instrument Serif 28px "UX / UI"
- Sub: DM Mono muted "Case study · Flows · UI system"
- List các skill item: mỗi item là 1 dòng với bullet `—` ở đầu, font 13px
- Tool badges: Figma, Adobe Illustrator — chip style (border `#2A2A28`, DM Mono 10px)

**Cột 2 — Frontend:**
- Header: Instrument Serif 28px "Frontend"
- Sub: DM Mono muted "React · Next.js · TypeScript"
- List tương tự
- Tool badges: React, Next.js, TypeScript, Tailwind, Git

**Bottom row — marquee chạy ngang:**
Tất cả skill tags chạy loop: `Figma • React • Next.js • TypeScript • Tailwind CSS • Adobe Illustrator • Git • HTML/CSS • Framer Motion • UI Design • Design System • Prototyping • Wireframing •`
CSS animation `marquee` infinite linear 20s, duplicate để seamless.

---

## 7. Projects Section

**File:** `components/sections/ProjectsSection.tsx`

Giữ layout đã redesign trước đó (featured card lớn + 3 card nhỏ) nhưng adapt sang dark theme:

- Card background: `#161614` (surface)
- Card border: `#2A2A28`
- Card hover: border sang `#3A3A38`, translateY(-2px)
- Image overlay: `rgba(0,0,0,0.3)` → `rgba(0,0,0,0)` on hover
- Number badge: `rgba(255,255,255,0.12)` background
- Role badges: giữ màu pastel nhưng giảm opacity 80% để hợp dark theme
- Tech tags: border `#2A2A28`, text `#6B6B67`, background `#161614`

---

## 8. Activities Section

**File:** `components/sections/ActivitiesSection.tsx`

Giữ structure cũ (leadership cards + activity cards) nhưng dark theme.
Thêm một chi tiết nhỏ: mỗi activity card có số thứ tự `01`, `02`... ở góc trên phải,
DM Mono 11px, màu muted — tạo cảm giác curated.

---

## 9. Contact Section

**File:** `components/sections/ContactSection.tsx`

Layout đơn giản, centered, full-width:

```
— Get in touch —          ← DM Mono 10px, muted, letter-spacing 0.16em

Let's Connect.            ← Instrument Serif italic, 56px

nqhung394.work@gmail.com  ← link lớn, Instrument Serif 24px, hover underline

[GitHub]  [LinkedIn]  [Facebook]   ← icon + text, DM Mono 11px, muted
```

Footer: `© 2026 Nông Quốc Hưng · Built with Next.js · Tailwind · Framer Motion`
DM Mono 10px, muted, border-top `#2A2A28`

---

## 10. Framer Motion — Global Rules

Tạo file `lib/animations.ts` với các preset:

```ts
export const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }
}

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.4 }
}

export const stagger = (i: number) => ({
  ...fadeUp,
  transition: { ...fadeUp.transition, delay: i * 0.08 }
})
```

Dùng `whileInView` + `viewport={{ once: true, margin: "-80px" }}` cho tất cả section.
KHÔNG dùng rotate, bounce, hay flip.

---

## Thứ tự implement (quan trọng)

1. `tailwind.config.ts` — thêm màu custom + dark mode
2. `globals.css` — set background, text color mặc định cho dark theme
3. `IntroScreen.tsx` — làm trước để thấy vibe ngay
4. `Navbar.tsx`
5. `HeroSection.tsx`
6. `AboutSection.tsx` (chat UI — phần thú vị nhất)
7. `SkillsSection.tsx`
8. `ProjectsSection.tsx` (adapt từ bản đã có)
9. `ActivitiesSection.tsx`
10. `ContactSection.tsx`
11. Test responsive mobile — tất cả section phải đẹp ở 375px

---

## Lưu ý cuối

- Tất cả ảnh (`avt.jpg`, project images) đã có trong `/public` — dùng lại, không cần thay
- Không dùng `Inter`, `Roboto`, hay bất kỳ system font nào
- Không dùng `box-shadow` — dùng `border` thay thế
- Không dùng gradient trên background chính
- Mỗi section cách nhau `section padding: 96px 80px`
- Mobile: padding giảm xuống `48px 24px`
