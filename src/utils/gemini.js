const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY || "";

const RETRY_DELAYS = [1000, 2000, 4000];
const MAX_RETRIES = 3;

export function getGeminiUrl(model = "gemini-2.5-flash-preview-09-2025") {
  return `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${GEMINI_API_KEY}`;
}

export async function callGemini(payload, model) {
  const url = getGeminiUrl(model);
  for (let i = 0; i < MAX_RETRIES; i++) {
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!response.ok) throw new Error(`API Error: ${response.status}`);
      return await response.json();
    } catch (err) {
      if (i === MAX_RETRIES - 1) return null;
      await new Promise((r) => setTimeout(r, RETRY_DELAYS[i]));
    }
  }
  return null;
}

export function getTextFromResponse(data) {
  return data?.candidates?.[0]?.content?.parts?.[0]?.text || null;
}
