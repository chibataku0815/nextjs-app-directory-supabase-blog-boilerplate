export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      bookmarks: {
        Row: {
          created_at: string | null;
          id: string;
          user_id: string | null;
        };
        Insert: {
          created_at?: string | null;
          id: string;
          user_id?: string | null;
        };
        Update: {
          created_at?: string | null;
          id?: string;
          user_id?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: 'bookmarks_user_id_fkey';
            columns: ['user_id'];
            isOneToOne: false;
            referencedRelation: 'users';
            referencedColumns: ['id'];
          },
        ];
      };
      categories: {
        Row: {
          created_at: string | null;
          id: string;
          slug: string | null;
          title: string | null;
        };
        Insert: {
          created_at?: string | null;
          id?: string;
          slug?: string | null;
          title?: string | null;
        };
        Update: {
          created_at?: string | null;
          id?: string;
          slug?: string | null;
          title?: string | null;
        };
        Relationships: [];
      };
      comments: {
        Row: {
          comment: string | null;
          created_at: string | null;
          id: string;
          post_id: string | null;
          user_id: string | null;
        };
        Insert: {
          comment?: string | null;
          created_at?: string | null;
          id?: string;
          post_id?: string | null;
          user_id?: string | null;
        };
        Update: {
          comment?: string | null;
          created_at?: string | null;
          id?: string;
          post_id?: string | null;
          user_id?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: 'comments_user_id_fkey';
            columns: ['user_id'];
            isOneToOne: false;
            referencedRelation: 'profiles';
            referencedColumns: ['id'];
          },
        ];
      };
      drafts: {
        Row: {
          author_id: string | null;
          category_id: string | null;
          content: string | null;
          created_at: string;
          description: string | null;
          id: string;
          image: string | null;
          published: boolean | null;
          slug: string | null;
          title: string | null;
          updated_at: string | null;
        };
        Insert: {
          author_id?: string | null;
          category_id?: string | null;
          content?: string | null;
          created_at?: string;
          description?: string | null;
          id?: string;
          image?: string | null;
          published?: boolean | null;
          slug?: string | null;
          title?: string | null;
          updated_at?: string | null;
        };
        Update: {
          author_id?: string | null;
          category_id?: string | null;
          content?: string | null;
          created_at?: string;
          description?: string | null;
          id?: string;
          image?: string | null;
          published?: boolean | null;
          slug?: string | null;
          title?: string | null;
          updated_at?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: 'drafts_author_id_fkey';
            columns: ['author_id'];
            isOneToOne: false;
            referencedRelation: 'profiles';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'drafts_category_id_fkey';
            columns: ['category_id'];
            isOneToOne: false;
            referencedRelation: 'categories';
            referencedColumns: ['id'];
          },
        ];
      };
      posts: {
        Row: {
          created_at: string;
          id: string;
          image_url: string;
          is_premium: boolean;
          is_publish: boolean;
          title: string;
        };
        Insert: {
          created_at?: string;
          id?: string;
          image_url: string;
          is_premium?: boolean;
          is_publish?: boolean;
          title: string;
        };
        Update: {
          created_at?: string;
          id?: string;
          image_url?: string;
          is_premium?: boolean;
          is_publish?: boolean;
          title?: string;
        };
        Relationships: [];
      };
      posts_contents: {
        Row: {
          blog_id: string;
          content: string;
          created_at: string;
        };
        Insert: {
          blog_id: string;
          content: string;
          created_at?: string;
        };
        Update: {
          blog_id?: string;
          content?: string;
          created_at?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'posts_contents_blog_id_fkey';
            columns: ['blog_id'];
            isOneToOne: true;
            referencedRelation: 'posts';
            referencedColumns: ['id'];
          },
        ];
      };
      profiles: {
        Row: {
          avatar_url: string | null;
          full_name: string | null;
          id: string;
          updated_at: string | null;
          username: string | null;
          website: string | null;
        };
        Insert: {
          avatar_url?: string | null;
          full_name?: string | null;
          id: string;
          updated_at?: string | null;
          username?: string | null;
          website?: string | null;
        };
        Update: {
          avatar_url?: string | null;
          full_name?: string | null;
          id?: string;
          updated_at?: string | null;
          username?: string | null;
          website?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: 'profiles_id_fkey';
            columns: ['id'];
            isOneToOne: true;
            referencedRelation: 'users';
            referencedColumns: ['id'];
          },
        ];
      };
      users: {
        Row: {
          created_at: string;
          display_name: string;
          email: string;
          id: string;
          image_url: string;
          role: string;
          stripe_customer_id: string | null;
          stripe_subscription_id: string | null;
          subscription_status: boolean;
        };
        Insert: {
          created_at?: string;
          display_name: string;
          email: string;
          id: string;
          image_url: string;
          role?: string;
          stripe_customer_id?: string | null;
          stripe_subscription_id?: string | null;
          subscription_status?: boolean;
        };
        Update: {
          created_at?: string;
          display_name?: string;
          email?: string;
          id?: string;
          image_url?: string;
          role?: string;
          stripe_customer_id?: string | null;
          stripe_subscription_id?: string | null;
          subscription_status?: boolean;
        };
        Relationships: [
          {
            foreignKeyName: 'users_id_fkey';
            columns: ['id'];
            isOneToOne: true;
            referencedRelation: 'users';
            referencedColumns: ['id'];
          },
        ];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (Database['public']['Tables'] & Database['public']['Views'])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions['schema']]['Tables'] &
        Database[PublicTableNameOrOptions['schema']]['Views'])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions['schema']]['Tables'] &
      Database[PublicTableNameOrOptions['schema']]['Views'])[TableName] extends {
      Row: infer R;
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (Database['public']['Tables'] &
        Database['public']['Views'])
    ? (Database['public']['Tables'] &
        Database['public']['Views'])[PublicTableNameOrOptions] extends {
        Row: infer R;
      }
      ? R
      : never
    : never;

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof Database['public']['Tables']
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions['schema']]['Tables']
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions['schema']]['Tables'][TableName] extends {
      Insert: infer I;
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof Database['public']['Tables']
    ? Database['public']['Tables'][PublicTableNameOrOptions] extends {
        Insert: infer I;
      }
      ? I
      : never
    : never;

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof Database['public']['Tables']
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions['schema']]['Tables']
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions['schema']]['Tables'][TableName] extends {
      Update: infer U;
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof Database['public']['Tables']
    ? Database['public']['Tables'][PublicTableNameOrOptions] extends {
        Update: infer U;
      }
      ? U
      : never
    : never;

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof Database['public']['Enums']
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions['schema']]['Enums']
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions['schema']]['Enums'][EnumName]
  : PublicEnumNameOrOptions extends keyof Database['public']['Enums']
    ? Database['public']['Enums'][PublicEnumNameOrOptions]
    : never;
