# 🦷 BROS Dental Clinic

A premium, modern website for **BROS Dental Clinic** in Riyadh, Saudi Arabia. It features online appointment booking, a services showcase, an interactive gallery, and an **AI dental assistant** powered by Google Gemini.

> 📍 Olaya St, Al Wurud, Riyadh, Saudi Arabia · ☎️ 011 455 7028

---

## ✨ Features

- **Responsive landing page** with Hero, About, Services, Doctors, Why Choose Us, Gallery, Testimonials, FAQ, Appointment and Contact/Map sections
- **Online appointment booking** form with service and doctor pre-selection (returns a booking reference like `BROS-123456`)
- **AI Dental Concierge ("Dr. Bros AI")** – a Gemini-powered chat assistant that:
  - answers general dental questions (general care, cosmetic dentistry, orthodontics, implants, periodontal care, restorative procedures)
  - flags dental emergencies and directs patients to call the clinic
  - never quotes prices and always recommends an in-person examination
  - falls back to a friendly default reply if no API key is configured
- **Interactive gallery** with a lightbox viewer
- **Smooth animations** and a clean luxury look with Tailwind CSS and Motion
- **Express backend** with a health-check endpoint and ready-to-deploy Vercel handler

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | React 19, TypeScript, Vite 6 |
| Styling | Tailwind CSS 4, Lucide React icons, Motion |
| Backend | Node.js, Express 4 |
| AI | Google Gemini via `@google/genai` |
| Build tools | esbuild, tsx |

---

## 📁 Project Structure

```
Bros-dental-clinic/
├── src/
│   ├── App.tsx              # Main app layout and section composition
│   ├── components/          # Navbar, Hero, About, Services, Doctors, Gallery,
│   │                        # Testimonials, FAQ, AppointmentForm, ContactMap,
│   │                        # Footer, AIAssistantModal, LightboxModal, ...
│   ├── data/clinicData.ts   # Clinic info, services, doctors, etc.
│   └── types/               # TypeScript types
├── server.ts                # Express server (dev + production) with Vite middleware
├── api-index.ts             # Express app exported as a Vercel serverless handler
├── index.html               # App entry HTML
├── script.js                # Smooth-scroll helper
├── metadata.json            # AI Studio app metadata
├── .env.example             # Environment variable template
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 18 or newer
- A [Gemini API key](https://aistudio.google.com/apikey) (optional, but required for the AI assistant)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/tariqkhan197/Bros-dental-clinic.git
cd Bros-dental-clinic

# 2. Install dependencies
npm install

# 3. Set up environment variables
cp .env.example .env
```

Edit `.env` and add your values:

```env
GEMINI_API_KEY="your_gemini_api_key"
APP_URL="http://localhost:3000"
```

### Run in development

```bash
npm run dev
```

The app runs at **http://localhost:3000** (Express + Vite middleware).

### Build and run for production

```bash
npm run build
npm start
```

---

## 📜 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start the dev server (Express + Vite) |
| `npm run build` | Build the frontend and bundle the server into `dist/` |
| `npm start` | Run the production server from `dist/server.cjs` |
| `npm run preview` | Preview the Vite build |
| `npm run lint` | Type-check with TypeScript |
| `npm run clean` | Remove build output |

---

## 🔌 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/health` | Server status and whether AI is enabled |
| `POST` | `/api/chat` | Send `{ message, history }` to the AI assistant and get `{ reply }` |
| `POST` | `/api/appointments/book` | Book an appointment. Requires `fullName`, `phone`, `date`, `timeSlot`; optional `serviceId` |

> **Note:** The booking endpoint is currently a **simulation**. It generates a reference code but does not store appointments in a database.

### Example

```bash
curl -X POST http://localhost:3000/api/chat \
  -H "Content-Type: application/json" \
  -d '{"message": "How do dental implants work?", "history": []}'
```

---

## ☁️ Deployment

- **Vercel:** `api-index.ts` exports the Express app as a serverless handler. Set `GEMINI_API_KEY` in your project's environment variables.
- **Google AI Studio / Cloud Run:** The `GEMINI_API_KEY` and `APP_URL` values are injected automatically at runtime.
- **Self-hosted:** Run `npm run build` followed by `npm start` behind a reverse proxy of your choice.

---

## 🔒 Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `GEMINI_API_KEY` | Optional | Enables the live AI assistant. Without it, a static fallback reply is used |
| `APP_URL` | Optional | Public URL where the app is hosted |

Never commit your `.env` file. It is already excluded by `.gitignore`.

---

## 🗺️ Roadmap Ideas

- Store appointments in a database and send email/SMS/WhatsApp confirmations
- Admin dashboard for managing bookings
- Arabic language support with RTL layout
- Patient login and appointment history

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m "Add your feature"`
4. Push the branch: `git push origin feature/your-feature`
5. Open a Pull Request

---

## ⚠️ Disclaimer

The AI assistant provides general information only and is **not a substitute for professional dental diagnosis or treatment**. In an emergency, contact the clinic directly at **011 455 7028**.

---

## 👤 Author

**Tariq Khan** – [@tariqkhan197](https://github.com/tariqkhan197)

---

## 📄 License

Add a license of your choice (e.g. MIT) and update this section.
