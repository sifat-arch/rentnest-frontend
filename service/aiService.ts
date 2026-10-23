"use server";

import { getBackendUrl } from "@/lib/apiConfig";

export interface ChatHistoryItem {
  role: "user" | "assistant";
  content: string;
}

export async function askNestBotAction(
  message: string,
  history: ChatHistoryItem[] = []
) {
  try {
    const backendUrl = getBackendUrl();
    const res = await fetch(`${backendUrl}/api/ai/chat`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message, history }),
      cache: "no-store",
    });

    if (!res.ok) {
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
    const backendUrl = getBackendUrl();
    const res = await fetch(`${backendUrl}/api/ai/generate-listing`, {
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
