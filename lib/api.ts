const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://lush-playground-api.fly.dev';

export interface ContentItem {
  id: string;
  title: string;
  description?: string;
  content_type: string;
  category?: string;
  url?: string;
  image_url?: string;
  author?: string;
  source?: string;
  published_date?: string;
  duration_minutes?: number;
  reading_time_minutes?: number;
  tags?: string[];
  metadata?: any;
  created_at: string;
  is_saved?: boolean;
}

export interface Collection {
  id: string;
  user_id: string;
  name: string;
  description?: string;
  is_public: boolean;
  created_at: string;
  updated_at: string;
  item_count?: number;
  items?: ContentItem[];
}

export interface Recommendation {
  id: string;
  content: ContentItem;
  score?: number;
  reason?: string;
}

export interface CreateContentData {
  title: string;
  description?: string;
  content_type: string;
  category?: string;
  url?: string;
  image_url?: string;
  author?: string;
  source?: string;
  published_date?: string;
  duration_minutes?: number;
  reading_time_minutes?: number;
  tags?: string[];
}

export interface CreateCollectionData {
  name: string;
  description?: string;
  is_public?: boolean;
}

class ApiClient {
  private baseUrl: string;
  private userId: string;

  constructor() {
    this.baseUrl = API_URL;
    this.userId = '00000000-0000-0000-0000-000000000001';
  }

  private async request(endpoint: string, options: RequestInit = {}) {
    const url = `${this.baseUrl}${endpoint}`;
    const headers = {
      'Content-Type': 'application/json',
      'x-user-id': this.userId,
      ...options.headers,
    };

    const response = await fetch(url, {
      ...options,
      headers,
    });

    if (!response.ok) {
      const error = await response.json().catch(() => ({ error: 'Request failed' }));
      throw new Error(error.error || `HTTP ${response.status}`);
    }

    return response.json();
  }

  // Content Items
  async getContent(params?: { 
    content_type?: string; 
    category?: string; 
    search?: string 
  }): Promise<ContentItem[]> {
    const queryParams = new URLSearchParams();
    if (params?.content_type) queryParams.append('content_type', params.content_type);
    if (params?.category) queryParams.append('category', params.category);
    if (params?.search) queryParams.append('search', params.search);
    
    const query = queryParams.toString();
    return this.request(`/api/content${query ? `?${query}` : ''}`);
  }

  async getContentItem(id: string): Promise<ContentItem> {
    return this.request(`/api/content/${id}`);
  }

  async createContent(data: CreateContentData): Promise<ContentItem> {
    return this.request('/api/content', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async updateContent(id: string, data: Partial<CreateContentData>): Promise<ContentItem> {
    return this.request(`/api/content/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  }

  async deleteContent(id: string): Promise<{ message: string }> {
    return this.request(`/api/content/${id}`, {
      method: 'DELETE',
    });
  }

  async saveContent(contentId: string, data?: { collection_name?: string; notes?: string }): Promise<any> {
    return this.request(`/api/content/${contentId}/save`, {
      method: 'POST',
      body: JSON.stringify(data || {}),
    });
  }

  async unsaveContent(contentId: string): Promise<{ message: string }> {
    return this.request(`/api/content/${contentId}/unsave`, {
      method: 'DELETE',
    });
  }

  async getSavedContent(): Promise<ContentItem[]> {
    return this.request('/api/content/saved/list');
  }

  async recordInteraction(contentId: string, interactionType: string): Promise<any> {
    return this.request(`/api/content/${contentId}/interact`, {
      method: 'POST',
      body: JSON.stringify({ interaction_type: interactionType }),
    });
  }

  // Collections
  async getCollections(): Promise<Collection[]> {
    return this.request('/api/collections');
  }

  async getCollection(id: string): Promise<Collection> {
    return this.request(`/api/collections/${id}`);
  }

  async createCollection(data: CreateCollectionData): Promise<Collection> {
    return this.request('/api/collections', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async updateCollection(id: string, data: Partial<CreateCollectionData>): Promise<Collection> {
    return this.request(`/api/collections/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  }

  async deleteCollection(id: string): Promise<{ message: string }> {
    return this.request(`/api/collections/${id}`, {
      method: 'DELETE',
    });
  }

  async addToCollection(collectionId: string, data: { 
    content_id: string; 
    position?: number; 
    notes?: string 
  }): Promise<any> {
    return this.request(`/api/collections/${collectionId}/items`, {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async removeFromCollection(collectionId: string, contentId: string): Promise<{ message: string }> {
    return this.request(`/api/collections/${collectionId}/items/${contentId}`, {
      method: 'DELETE',
    });
  }

  // Recommendations
  async getRecommendations(): Promise<Recommendation[]> {
    return this.request('/api/recommendations');
  }

  // Health check
  async healthCheck() {
    return this.request('/health');
  }
}

export const api = new ApiClient();
