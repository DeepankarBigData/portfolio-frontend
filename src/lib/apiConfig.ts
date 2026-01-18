// ============================================
// BACKEND API CONFIGURATION
// ============================================
// Update this URL to point to your FastAPI backend
// Example: 'https://your-api.com/api/rag/query'
// For local development: 'http://localhost:8000/api/rag/query'

export const API_CONFIG = {
  // Main RAG query endpoint
  RAG_QUERY_URL: 'http://localhost:8000/api/rag/query',
  
  // Number of context chunks to retrieve
  DEFAULT_K: 3,
  
  // Request timeout in milliseconds
  TIMEOUT: 30000,
};

// Helper function to make API calls
export async function queryAgent(query: string, k: number = API_CONFIG.DEFAULT_K) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), API_CONFIG.TIMEOUT);

  try {
    const response = await fetch(API_CONFIG.RAG_QUERY_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query, k }),
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({ detail: 'Unknown error' }));
      throw new Error(errorData.detail || `HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    clearTimeout(timeoutId);
    if (error instanceof Error && error.name === 'AbortError') {
      throw new Error('Request timed out. Please try again.');
    }
    throw error;
  }
}