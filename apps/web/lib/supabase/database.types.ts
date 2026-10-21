export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[];

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string;
          display_name: string | null;
          locale: string;
          consent_ai_at: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id: string;
          display_name?: string | null;
          locale?: string;
          consent_ai_at?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          display_name?: string | null;
          locale?: string;
          consent_ai_at?: string | null;
          updated_at?: string;
        };
        Relationships: [];
      };
      questionnaires: {
        Row: {
          id: string;
          user_id: string;
          status: string;
          raw_answers: Json;
          submitted_at: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          status?: string;
          raw_answers?: Json;
          submitted_at?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          status?: string;
          raw_answers?: Json;
          submitted_at?: string | null;
          updated_at?: string;
        };
        Relationships: [];
      };
      verified_profiles: {
        Row: {
          id: string;
          user_id: string;
          questionnaire_id: string;
          fields: Json;
          status: string;
          verified_at: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          questionnaire_id: string;
          fields?: Json;
          status?: string;
          verified_at?: string | null;
        };
        Update: {
          fields?: Json;
          status?: string;
          verified_at?: string | null;
          updated_at?: string;
        };
        Relationships: [];
      };
      strategy_reports: {
        Row: {
          id: string;
          user_id: string;
          verified_profile_id: string;
          content: Json;
          status: string;
          model: string | null;
          input_hash: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          verified_profile_id: string;
          content?: Json;
          status?: string;
          model?: string | null;
          input_hash?: string | null;
        };
        Update: {
          content?: Json;
          status?: string;
          model?: string | null;
          updated_at?: string;
        };
        Relationships: [];
      };
      design_specs: {
        Row: {
          id: string;
          user_id: string;
          strategy_report_id: string;
          spec: Json;
          status: string;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          strategy_report_id: string;
          spec?: Json;
          status?: string;
        };
        Update: {
          spec?: Json;
          status?: string;
          updated_at?: string;
        };
        Relationships: [];
      };
      site_snapshots: {
        Row: {
          id: string;
          user_id: string;
          design_spec_id: string;
          snapshot: Json;
          created_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          design_spec_id: string;
          snapshot: Json;
        };
        Update: never;
        Relationships: [];
      };
      sites: {
        Row: {
          id: string;
          user_id: string;
          slug: string;
          published_snapshot_id: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          slug: string;
          published_snapshot_id?: string | null;
        };
        Update: {
          slug?: string;
          published_snapshot_id?: string | null;
          updated_at?: string;
        };
        Relationships: [];
      };
      ai_jobs: {
        Row: {
          id: string;
          user_id: string;
          job_type: string;
          status: string;
          input: Json;
          input_hash: string;
          result: Json | null;
          error: string | null;
          model: string | null;
          tokens_in: number | null;
          tokens_out: number | null;
          created_at: string;
          completed_at: string | null;
        };
        Insert: {
          id?: string;
          user_id: string;
          job_type: string;
          input?: Json;
          input_hash: string;
          status?: string;
        };
        Update: {
          status?: string;
          result?: Json | null;
          error?: string | null;
          model?: string | null;
          tokens_in?: number | null;
          tokens_out?: number | null;
          completed_at?: string | null;
        };
        Relationships: [];
      };
      leads: {
        Row: {
          id: string;
          name: string;
          email: string;
          phone: string | null;
          interest: string;
          message: string | null;
          source: string;
          locale: string;
          user_agent: string | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          email: string;
          phone?: string | null;
          interest?: string;
          message?: string | null;
          source?: string;
          locale?: string;
          user_agent?: string | null;
        };
        Update: never;
        Relationships: [];
      };
      reserved_slugs: {
        Row: { slug: string };
        Insert: { slug: string };
        Update: never;
        Relationships: [];
      };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: Record<string, never>;
    CompositeTypes: Record<string, never>;
  };
}
