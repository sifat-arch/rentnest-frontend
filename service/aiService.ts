"use server";

const BACKEND_URL = process.env.BACKEND_API_URL || "http://localhost:5000";

export interface ChatHistoryItem {
  role: "user" | "assistant";
  content: string;
}

export async function askNestBotAction(
  message: string,
  history: ChatHistoryItem[] = []
) {
  try {
    const res = await fetch(`${BACKEND_URL}/api/ai/chat`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message, history }),
      cache: "no-store",
    });

    if (!res.ok) {
      const err = await res.text();
      return {
        success: false,
        message: "NestBot is taking a quick rest. Please try again in a moment.",
      };
    }

    const json = await res.json();
    return {
      success: true,
      reply: json?.data?.reply || json?.reply || "I am here to help you find your ideal rental!",
    };
  } catch (error: any) {
    return {
      success: false,
      message: error?.message || "AI Service unavailable",
    };
  }
}

export interface GenerateAiListingInput {
  prompt?: string;
  title?: string;
  location?: string;
  price?: number;
  categoryName?: string;
}

export interface GeneratedListingOutput {
  title: string;
  description: string;
  highlights: string[];
  suggestedPrice?: number;
}

export async function generateAiListingAction(input: GenerateAiListingInput) {
  try {
    const res = await fetch(`${BACKEND_URL}/api/ai/generate-listing`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(input),
      cache: "no-store",
    });

    if (!res.ok) {
      return {
        success: false,
        message: "Failed to generate AI listing.",
      };
    }

    const json = await res.json();
    return {
      success: true,
      data: json?.data as GeneratedListingOutput,
    };
  } catch (error: any) {
    return {
      success: false,
      message: error?.message || "AI Service unavailable",
    };
  }
}
