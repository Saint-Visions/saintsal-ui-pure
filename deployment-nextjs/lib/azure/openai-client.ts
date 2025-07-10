"use client";
import { OpenAI } from "openai";

// Azure OpenAI Configuration for SaintVisionAI
export class SaintAzureAI {
  private client: OpenAI;

  constructor() {
    this.client = new OpenAI({
      apiKey: process.env.AZURE_OPENAI_API_KEY,
      baseURL: `https://${process.env.AZURE_OPENAI_ENDPOINT}/openai/deployments/${process.env.AZURE_OPENAI_DEPLOYMENT}`,
      defaultQuery: { "api-version": "2024-02-15-preview" },
      defaultHeaders: {
        "api-key": process.env.AZURE_OPENAI_API_KEY,
      },
    });
  }

  // SaintSal AI Chat Stream
  async chatStream(messages: any[], userId: string) {
    try {
      const stream = await this.client.chat.completions.create({
        model: "gpt-4o", // Your Azure deployment name
        messages: [
          {
            role: "system",
            content: `You are SaintSal™, the elite AI companion from SaintVisionAI. 
            You don't just answer - you adapt, empower, and become the user's "GOTTA GUY™".
            
            Patent-Protected: U.S. Patent No. 10,290,222
            
            Always be helpful, intelligent, and maintain the premium SaintVisionAI brand voice.
            You're part of an elite AI sanctuary built on Azure + OpenAI GPT-4o.`,
          },
          ...messages,
        ],
        stream: true,
        temperature: 0.7,
        max_tokens: 2000,
        user: userId,
      });

      return stream;
    } catch (error) {
      console.error("SaintAzureAI Error:", error);
      throw error;
    }
  }

  // SaintSal AI Analysis for PartnerTech Pro
  async analyzeForPartnerTech(data: any, userPlan: string) {
    if (userPlan !== "pro" && userPlan !== "enterprise") {
      throw new Error("Pro subscription required for PartnerTech AI analysis");
    }

    try {
      const response = await this.client.chat.completions.create({
        model: "gpt-4o",
        messages: [
          {
            role: "system",
            content:
              "You are SaintSal's PartnerTech Pro AI analyst. Provide elite-level business intelligence.",
          },
          {
            role: "user",
            content: `Analyze this business data: ${JSON.stringify(data)}`,
          },
        ],
        temperature: 0.3,
        max_tokens: 1500,
      });

      return response.choices[0].message.content;
    } catch (error) {
      console.error("PartnerTech Analysis Error:", error);
      throw error;
    }
  }
}

export const saintAI = new SaintAzureAI();
