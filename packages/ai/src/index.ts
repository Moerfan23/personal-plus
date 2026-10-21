import type { ZodSchema } from "zod";

export interface Usage {
  tokensIn: number;
  tokensOut: number;
}

export interface GenerateObjectOptions<T> {
  schema: ZodSchema<T>;
  system: string;
  input: unknown;
  maxTokens: number;
}

// Unified provider interface (engineering plan §5.1) — GeminiProvider and
// QwenProvider implement this; provider choice is config-driven per task.
export interface LLMProvider {
  generateObject<T>(opts: GenerateObjectOptions<T>): Promise<{
    data: T;
    usage: Usage;
  }>;
}
