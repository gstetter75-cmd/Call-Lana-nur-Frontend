import React, { useState, useEffect } from "react";
import { Bot, User, Send, MessageCircle, Sparkles, Loader2, Wand2 } from "lucide-react";
import LanaFace from "../components/LanaFace";
import { callGemini, getTextFromResponse } from "../utils/gemini";

export default function DemosPage() {
  const [chatMessages, setChatMessages] = useState([
    {
      role: "model",
      text: "Hallo, hier ist die Firma Weber Sanitär. Mein Name ist Lana, die digitale Assistentin. Wie kann ich Ihnen helfen?",
    },
  ]);
  const [chatInput, setChatInput] = useState("");
  const [isChatTyping, setIsChatTyping] = useState(false);
  const chatEndRef = React.useRef(null);

  const [demoTrade, setDemoTrade] = useState("");
  const [demoContext, setDemoContext] = useState("");
  const [generatedScript, setGeneratedScript] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);

  const handleSendChatMessage = async () => {
    if (!chatInput.trim()) return;
    const newMessages = [...chatMessages, { role: "user", text: chatInput }];
    setChatMessages(newMessages);
    setChatInput("");
    setIsChatTyping(true);
    const formattedHistory = newMessages.map((msg) => ({
      role: msg.role === "model" ? "model" : "user",
      parts: [{ text: msg.text }],
    }));
    const data = await callGemini({
      contents: formattedHistory,
      systemInstruction: {
        parts: [
          {
            text: "Du bist Lana, die KI-Telefonassistentin der Firma Weber Sanitär. Antworte extrem natürlich, in kurzen Sätzen. Frage bei Terminwünschen nach dem Problem, Name und Telefonnummer.",
          },
        ],
      },
    });
    const text = getTextFromResponse(data);
    setChatMessages((prev) => [
      ...prev,
      {
        role: "model",
        text: text || "Entschuldigung, die Verbindung ist momentan schlecht. Bitte versuchen Sie es gleich nochmal.",
      },
    ]);
    setIsChatTyping(false);
  };

  const generateScript = async () => {
    if (!demoTrade) return;
    setIsGenerating(true);
    setGeneratedScript("");
    const data = await callGemini({
      contents: [
        {
          parts: [
            {
              text: `Schreibe ein kurzes Telefonskript (ca. 4 Wechsel) zwischen einem Kunden und 'Lana'. Gewerk: ${demoTrade}. Kontext: ${demoContext || "Terminvereinbarung"}. Format zwingend: **Kunde:** [Text] **Lana:** [Text]`,
            },
          ],
        },
      ],
      systemInstruction: { parts: [{ text: "Antworte auf Deutsch. Professionell." }] },
    });
    setGeneratedScript(getTextFromResponse(data) || "Fehler bei Generierung. Bitte erneut versuchen.");
    setIsGenerating(false);
  };

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatMessages, isChatTyping]);

  return (
    <div className="pt-32 pb-24 relative">
      <div className="fixed inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

      {/* CHAT */}
      <section className="max-w-4xl mx-auto px-6 relative mb-32">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[150px] animate-blob pointer-events-none" />
        <div className="text-center mb-16 relative z-10 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-medium mb-6">
            <MessageCircle className="w-4 h-4" /> Multi-Turn Conversation
          </div>
          <h1 className="text-4xl font-bold text-white mb-4">Chatte live mit Lana</h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Probier es aus! Stell dir vor, du rufst bei "Weber Sanitär" an.
          </p>
        </div>
        <div
          className="bg-[#111B21] border border-white/10 rounded-3xl overflow-hidden shadow-2xl relative z-10 flex flex-col h-[600px] max-w-3xl mx-auto animate-fade-in-up"
          style={{ animationDelay: "0.2s" }}
        >
          <div className="bg-white/5 border-b border-white/5 px-6 py-4 flex items-center gap-4">
            <LanaFace size="small" className="shadow-none" />
            <div>
              <h2 className="text-white font-bold">Weber Sanitär Hotline</h2>
              <p className="text-xs text-emerald-400 flex items-center gap-1.5 mt-0.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />{" "}
                KI ist online
              </p>
            </div>
          </div>
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {chatMessages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex gap-4 animate-fade-in-up ${msg.role === "user" ? "flex-row-reverse" : ""}`}
              >
                <div className="flex-shrink-0">
                  {msg.role === "model" ? (
                    <div className="w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center border border-indigo-500/30 shadow-inner">
                      <Bot className="w-5 h-5 text-indigo-400" />
                    </div>
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center border border-emerald-500/30">
                      <User className="w-5 h-5 text-emerald-400" />
                    </div>
                  )}
                </div>
                <div
                  className={`max-w-[75%] rounded-2xl p-4 shadow-sm text-[15px] leading-relaxed ${
                    msg.role === "user"
                      ? "bg-emerald-600 border border-emerald-500 text-white rounded-tr-none"
                      : "bg-white/10 border border-white/10 text-slate-200 rounded-tl-none"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isChatTyping && (
              <div className="flex gap-4 animate-fade-in-up">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center border border-indigo-500/30">
                  <Bot className="w-5 h-5 text-indigo-400" />
                </div>
                <div className="bg-white/10 border border-white/10 text-slate-200 rounded-2xl rounded-tl-none p-4 flex items-center gap-2 h-[56px]">
                  <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" />
                  <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }} />
                  <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: "0.4s" }} />
                </div>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>
          <div className="p-4 bg-white/5 border-t border-white/5 backdrop-blur-md">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendChatMessage();
              }}
              className="flex gap-3"
            >
              <input
                type="text"
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                placeholder="Antworte Lana..."
                aria-label="Chat-Nachricht eingeben"
                className="flex-1 bg-[#0B0F19] border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-indigo-500 transition-colors shadow-inner"
              />
              <button
                type="submit"
                disabled={!chatInput.trim() || isChatTyping}
                className="bg-indigo-600 hover:bg-indigo-500 disabled:bg-slate-800 disabled:text-slate-500 text-white px-6 py-3 rounded-xl font-semibold flex items-center justify-center transition-all shadow-lg disabled:shadow-none active:scale-95"
                aria-label="Nachricht senden"
              >
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* SCRIPT GENERATOR */}
      <section className="max-w-7xl mx-auto px-6 relative mb-32 animate-fade-in-up">
        <div className="flex flex-col lg:flex-row gap-12 items-start relative z-10">
          <div className="flex-1 w-full">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Teste Lanas Verhandlungsgeschick
            </h2>
            <p className="text-slate-400 mb-8">
              Gib dein Gewerk ein und ein schwieriges Szenario. Unsere KI
              generiert live einen Dialog.
            </p>
            <div className="space-y-4">
              <div>
                <label htmlFor="demo-trade" className="block text-sm font-medium text-slate-300 mb-2">
                  Dein Gewerk
                </label>
                <input
                  id="demo-trade"
                  type="text"
                  value={demoTrade}
                  onChange={(e) => setDemoTrade(e.target.value)}
                  placeholder="z.B. Sanitär-Notdienst"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500"
                />
              </div>
              <div>
                <label htmlFor="demo-context" className="block text-sm font-medium text-slate-300 mb-2">
                  Besondere Anweisung
                </label>
                <textarea
                  id="demo-context"
                  value={demoContext}
                  onChange={(e) => setDemoContext(e.target.value)}
                  placeholder="z.B. Kunde ist in Panik..."
                  rows={3}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500 resize-none"
                />
              </div>
              <button
                onClick={generateScript}
                disabled={!demoTrade || isGenerating}
                className="w-full bg-indigo-600 hover:bg-indigo-500 disabled:bg-slate-800 text-white px-6 py-4 rounded-xl font-semibold flex items-center justify-center gap-2 active:scale-95 transition-transform"
              >
                {isGenerating ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <Sparkles className="w-5 h-5" />
                )}
                {isGenerating ? "Schreibe Skript..." : "Skript generieren"}
              </button>
            </div>
          </div>
          <div className="flex-1 w-full min-h-[400px]">
            <div className="h-full bg-[#111B21] border border-white/5 hover:border-indigo-500/30 transition-colors rounded-3xl p-6 relative flex flex-col shadow-xl">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-blue-500" />
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/5">
                <LanaFace size="small" className="shadow-none" />
                <div>
                  <h3 className="text-white font-medium">Lana Live-Transkript</h3>
                  <p className="text-xs text-slate-500">Generiert von KI</p>
                </div>
              </div>
              <div className="flex-1 overflow-y-auto space-y-4 text-sm max-h-[400px] pr-2">
                {!generatedScript && !isGenerating && (
                  <div className="h-full flex flex-col items-center justify-center text-slate-500 py-10">
                    <Wand2 className="w-12 h-12 mb-4 opacity-20" />
                    <p>Warte auf Eingabe...</p>
                  </div>
                )}
                {isGenerating && (
                  <div className="h-full flex flex-col items-center justify-center text-indigo-400 py-10">
                    <Loader2 className="w-10 h-10 animate-spin mb-4" />
                    <p className="animate-pulse">Analysiere Szenario...</p>
                  </div>
                )}
                {generatedScript && !isGenerating && (
                  <div className="whitespace-pre-wrap text-slate-300 pb-4 animate-fade-in-up">
                    {generatedScript.split("\n").map((line, idx) => {
                      if (line.trim() === "") return <div key={idx} className="h-2" />;
                      const isKunde =
                        line.includes("**Kunde:**") || line.startsWith("Kunde:");
                      const isLana =
                        line.includes("**Lana:**") || line.startsWith("Lana:");
                      if (isKunde)
                        return (
                          <div
                            key={idx}
                            className="bg-white/5 border border-white/5 rounded-2xl rounded-tl-none p-3 mb-3 text-slate-300 max-w-[85%]"
                          >
                            <span className="font-bold text-slate-400 text-xs block mb-1">
                              KUNDE
                            </span>
                            {line
                              .replace(/\*\*Kunde:\*\*/g, "")
                              .replace(/Kunde:/g, "")
                              .trim()}
                          </div>
                        );
                      if (isLana)
                        return (
                          <div
                            key={idx}
                            className="bg-indigo-600/20 border border-indigo-500/20 rounded-2xl rounded-tr-none p-3 mb-3 text-indigo-100 max-w-[85%] ml-auto"
                          >
                            <span className="font-bold text-indigo-300 text-xs block mb-1">
                              LANA
                            </span>
                            {line
                              .replace(/\*\*Lana:\*\*/g, "")
                              .replace(/Lana:/g, "")
                              .trim()}
                          </div>
                        );
                      return (
                        <span
                          key={idx}
                          className="text-xs text-slate-500 italic block text-center my-2"
                        >
                          {line}
                        </span>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
