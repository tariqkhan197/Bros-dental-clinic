import express from 'express';
import { GoogleGenAI } from '@google/genai';

const app = express();
app.use(express.json());

// Initialize Gemini Client
const ai = process.env.GEMINI_API_KEY
  ? new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        },
      },
    })
  : null;

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    clinic: 'BROS DENTAL CLINICS',
    aiEnabled: !!ai,
    timestamp: new Date().toISOString(),
  });
});

// Gemini Chat Endpoint for BROS Dental Assistant
app.post('/api/chat', async (req, res) => {
  try {
    const { message, history } = req.body;

    if (!message || typeof message !== 'string') {
      return res.status(400).json({ error: 'Message is required.' });
    }

    if (!ai) {
      // Fallback response if GEMINI_API_KEY is not configured yet
      return res.json({
        reply: `Thank you for contacting BROS Dental Clinic in Riyadh! Regarding "${message}", our clinic provides general dentistry, cosmetic dentistry & smile makeovers, orthodontics (braces & aligners), dental implants, periodontal gum care, and restorative procedures. Would you like to schedule an appointment at our Olaya St clinic?`,
      });
    }

    const systemInstruction = `You are BROS Dental AI Assistant, the official AI concierge for BROS Dental Clinic located at Olaya St, Al Wurud, Riyadh, Saudi Arabia (Phone: 011 455 7028).
Your goals:
1. Provide warm, reassuring, professional advice on dental procedures (general care, cosmetic makeovers, orthodontics, implants, periodontal treatments, restorative procedures).
2. Emphasize BROS Dental Clinic's key pillars: Gentle & Painless Care, 3D Intraoral Digital Scanners, and Modern Clinical Precision.
3. Help users evaluate symptoms, give general oral hygiene tips, and invite them to book an appointment using the online form. Do not provide specific pricing as customized evaluations are conducted in person.
4. Keep answers concise (2-4 scannable sentences or clear bullet points), empathetic, and informative. Always recommend a direct clinical examination for precise diagnosis.
5. If the user describes severe swelling, uncontrollable bleeding, or sudden traumatic pain, flag it as a Dental Emergency and recommend calling our direct clinic desk (011 455 7028) immediately.`;

    const model = 'gemini-3.6-flash';

    // Format previous messages for conversation context
    const formattedContents = [];
    if (Array.isArray(history)) {
      for (const msg of history) {
        if (msg.role === 'user' || msg.role === 'model') {
          formattedContents.push({
            role: msg.role,
            parts: [{ text: msg.text }],
          });
        }
      }
    }
    formattedContents.push({
      role: 'user',
      parts: [{ text: message }],
    });

    const response = await ai.models.generateContent({
      model,
      contents: formattedContents,
      config: {
        systemInstruction,
        temperature: 0.7,
      },
    });

    const replyText = response.text || 'I am here to assist you with your dental care at BROS Dental Clinic. How can I help you today?';
    return res.json({ reply: replyText });
  } catch (err: any) {
    console.error('Error in /api/chat:', err);
    return res.status(500).json({
      error: 'Failed to process chat request.',
      reply: 'Our AI Assistant is currently experiencing high demand. Please feel free to use our online appointment form or call 011 455 7028 directly!',
    });
  }
});

// Appointment confirmation endpoint simulation
app.post('/api/appointments/book', (req, res) => {
  const { serviceId, date, timeSlot, fullName, phone } = req.body;
  if (!fullName || !phone || !date || !timeSlot) {
    return res.status(400).json({ error: 'Missing required booking fields.' });
  }

  const bookingReference = 'BROS-' + Math.floor(100000 + Math.random() * 900000);
  return res.json({
    success: true,
    bookingReference,
    message: `Appointment confirmed for ${fullName} on ${date} at ${timeSlot}. Confirmation code: ${bookingReference}.`,
  });
});

// Vercel Node.js runtime invokes the default export as a request handler.
// Express apps are callable as (req, res), so exporting `app` directly works.
export default app;
