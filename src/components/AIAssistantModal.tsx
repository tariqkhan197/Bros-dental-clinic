import React, { useState, useRef, useEffect } from 'react';
import { Sparkles, Send, X, Bot, User, PhoneCall, Calendar } from 'lucide-react';
import { ChatMessage } from '../types';
import { CLINIC_INFO } from '../data/clinicData';

interface AIAssistantModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenBooking: () => void;
}

export const AIAssistantModal: React.FC<AIAssistantModalProps> = ({
  isOpen,
  onClose,
  onOpenBooking,
}) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'm-1',
      sender: 'assistant',
      text: 'Hello! I am BROS Dental AI Assistant, official virtual concierge for BROS Dental Clinic in Riyadh. How can I assist you with your dental health, services, or appointment scheduling today?',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
  ]);
  const [inputText, setInputText] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  if (!isOpen) return null;

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim() || loading) return;

    const userMsg: ChatMessage = {
      id: 'usr-' + Date.now(),
      sender: 'user',
      text: inputText.trim(),
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    const currentPrompt = inputText.trim();
    setInputText('');
    setLoading(true);

    try {
      const apiHistory = messages.map((m) => ({
        role: m.sender === 'user' ? 'user' : 'model',
        text: m.text,
      }));

      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: currentPrompt,
          history: apiHistory,
        }),
      });

      const data = await response.json();
      const botText = data.reply || 'Thank you for reaching out. Would you like to schedule a consultation with our specialists?';

      const botMsg: ChatMessage = {
        id: 'bot-' + Date.now(),
        sender: 'assistant',
        text: botText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setMessages((prev) => [...prev, botMsg]);
    } catch (err) {
      const fallbackMsg: ChatMessage = {
        id: 'bot-err-' + Date.now(),
        sender: 'assistant',
        text: 'Our AI Dental Advisor is currently connecting to the server. For immediate assistance, please call 011 455 7028 directly!',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, fallbackMsg]);
    } finally {
      setLoading(false);
    }
  };

  const samplePrompts = [
    'What dental services do you provide?',
    'Is a dental implant procedure painful?',
    'Where is BROS Dental Clinic located?',
    'What should I do if I have sudden tooth pain?',
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-end sm:justify-center p-0 sm:p-4 bg-slate-950/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white w-full sm:max-w-md h-[85vh] sm:h-[600px] sm:rounded-3xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden relative">
        {/* Header */}
        <div className="bg-slate-900 text-white p-4 flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-sky-600 text-white flex items-center justify-center shadow-md">
              <Sparkles className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-base leading-tight">Dr. Bros AI Concierge</h3>
              <span className="text-[10px] text-emerald-400 font-semibold flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                Powered by Gemini AI • Active
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Messages Body */}
        <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-slate-50/70">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex items-start gap-2.5 ${
                msg.sender === 'user' ? 'flex-row-reverse' : ''
              }`}
            >
              <div
                className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 text-xs ${
                  msg.sender === 'user'
                    ? 'bg-sky-600 text-white'
                    : 'bg-slate-900 text-sky-400 border border-slate-800'
                }`}
              >
                {msg.sender === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
              </div>

              <div
                className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-xs sm:text-sm shadow-sm ${
                  msg.sender === 'user'
                    ? 'bg-sky-600 text-white rounded-tr-none'
                    : 'bg-white text-slate-800 border border-slate-200/80 rounded-tl-none leading-relaxed'
                }`}
              >
                <p className="whitespace-pre-wrap">{msg.text}</p>
                <span
                  className={`text-[9px] block mt-1 ${
                    msg.sender === 'user' ? 'text-sky-200 text-right' : 'text-slate-400'
                  }`}
                >
                  {msg.timestamp}
                </span>
              </div>
            </div>
          ))}

          {loading && (
            <div className="flex items-center gap-2 text-xs text-slate-500 bg-white p-3 rounded-2xl border border-slate-200 w-fit">
              <Sparkles className="w-4 h-4 text-sky-600 animate-spin" />
              <span>Dr. Bros AI is analyzing your inquiry...</span>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Prompt Suggestions */}
        <div className="px-3 py-2 bg-white border-t border-slate-100 flex items-center gap-1.5 overflow-x-auto text-[11px] no-scrollbar">
          {samplePrompts.map((prompt, idx) => (
            <button
              key={idx}
              onClick={() => {
                setInputText(prompt);
              }}
              className="whitespace-nowrap bg-slate-100 hover:bg-sky-50 text-slate-700 hover:text-sky-700 px-2.5 py-1 rounded-full border border-slate-200 transition-colors shrink-0"
            >
              {prompt}
            </button>
          ))}
        </div>

        {/* Action Bar inside Chat */}
        <div className="bg-slate-100 px-4 py-2 border-t border-slate-200 flex items-center justify-between text-xs">
          <button
            onClick={() => {
              onClose();
              onOpenBooking();
            }}
            className="flex items-center gap-1 text-sky-700 font-semibold hover:underline"
          >
            <Calendar className="w-3.5 h-3.5" /> Book Consultation
          </button>

          <a
            href={`tel:${CLINIC_INFO.phoneDirect}`}
            className="flex items-center gap-1 text-rose-600 font-semibold hover:underline"
          >
            <PhoneCall className="w-3.5 h-3.5" /> Call Hotline
          </a>
        </div>

        {/* Input Form */}
        <form onSubmit={handleSendMessage} className="p-3 bg-white border-t border-slate-200 flex items-center gap-2">
          <input
            type="text"
            placeholder="Ask about treatments, pricing, or pain-free care..."
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            className="flex-1 bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-800 focus:ring-2 focus:ring-sky-500 focus:outline-none"
          />
          <button
            type="submit"
            disabled={!inputText.trim() || loading}
            className="bg-sky-600 hover:bg-sky-700 disabled:opacity-50 text-white p-2.5 rounded-xl transition-all shadow-sm"
          >
            <Send className="w-4 h-4" />
          </button>
        </form>
      </div>
    </div>
  );
};
