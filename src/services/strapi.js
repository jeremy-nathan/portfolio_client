/**
 * Strapi API Service
 * Handles all interactions with the Strapi backend API
 */
class StrapiService {
  constructor() {
    this.baseURL = import.meta.env.VITE_STRAPI_URL
    this.apiToken = import.meta.env.VITE_STRAPI_API_TOKEN
    this.apiURL = `${this.baseURL}/api`
  }

  /**
   * Generic HTTP request method
   * @param {string} endpoint - API endpoint
   * @param {Object} options - Request options
   * @returns {Promise<Object>} API response
   */
  async request(endpoint, options = {}) {
    const url = `${this.apiURL}${endpoint}`

    const config = {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        ...(this.apiToken && { Authorization: `Bearer ${this.apiToken}` }),
        ...options.headers,
      },
      ...options,
    }

    try {
      const response = await fetch(url, config)

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      return await response.json()
    } catch (error) {
      console.error('Strapi API request failed:', error)
      throw error
    }
  }

  // ==================== AUTHENTICATION ====================

  /**
   * Login user
   * @param {string} identifier - Email or username
   * @param {string} password - User password
   * @returns {Promise<Object>} User data and JWT token
   */
  async login(identifier, password) {
    return this.request('/auth/local', {
      method: 'POST',
      body: JSON.stringify({ identifier, password }),
    })
  }

  /**
   * Get current user profile
   * @returns {Promise<Object>} User profile data
   */
  async getMe() {
    const endpoint = '/me'
    const queryParams = this.buildQuery({ populate: ['image'] })

    const queryString = new URLSearchParams(queryParams).toString()
    return this.request(`${endpoint}?${queryString}`)
  }

  async getProjects() {
    const endpoint = '/projects'
    const queryParams = this.buildQuery({
      populate: ['image'],
    })

    const queryString = new URLSearchParams(queryParams).toString()
    return this.request(`${endpoint}?${queryString}`)
  }

  async getJobs() {
    return this.request('/jobs')
  }

  /**
   * Get media file URL
   * @param {Object|string} media - Media object or URL path
   * @returns {string} Full media URL
   */
  getMediaUrl(media) {
    if (!media) return null

    // Handle different Strapi v4 response structures
    let url = null

    if (typeof media === 'string') {
      url = media
    } else if (media.data?.attributes?.url) {
      // Strapi v4 format with data wrapper
      url = media.data.attributes.url
    } else if (media.attributes?.url) {
      // Strapi v4 format without data wrapper
      url = media.attributes.url
    } else if (media.url) {
      // Direct URL property
      url = media.url
    }

    if (!url) return null

    // Return full URL if already absolute, otherwise prepend base URL
    return url.startsWith('http') ? url : `${this.baseURL}${url}`
  }

  // ==================== UTILITY METHODS ====================

  /**
   * Build query parameters for Strapi API
   * @param {Object} options - Query options
   * @returns {Object} Formatted query parameters
   */
  buildQuery(options = {}) {
    const params = {}

    // Population
    if (options.populate) {
      if (Array.isArray(options.populate)) {
        params['populate'] = options.populate.join(',')
      } else if (typeof options.populate === 'object') {
        params['populate'] = JSON.stringify(options.populate)
      } else {
        params['populate'] = options.populate
      }
    }

    // Filters
    if (options.filters) {
      Object.keys(options.filters).forEach((key) => {
        params[`filters[${key}]`] = options.filters[key]
      })
    }

    // Sorting
    if (options.sort) {
      params['sort'] = Array.isArray(options.sort) ? options.sort.join(',') : options.sort
    }

    // Pagination
    if (options.pagination) {
      if (options.pagination.page) params['pagination[page]'] = options.pagination.page
      if (options.pagination.pageSize) params['pagination[pageSize]'] = options.pagination.pageSize
      if (options.pagination.start) params['pagination[start]'] = options.pagination.start
      if (options.pagination.limit) params['pagination[limit]'] = options.pagination.limit
    }

    return params
  }

  /**
   * Check if Strapi server is reachable
   * @returns {Promise<boolean>} Server status
   */
  async checkConnection() {
    try {
      const response = await fetch(`${this.baseURL}/_health`)
      return response.ok
    } catch (error) {
      console.error('Strapi connection check failed:', error)
      return false
    }
  }
}

// Create and export singleton instance
const strapiService = new StrapiService()
export default strapiService
