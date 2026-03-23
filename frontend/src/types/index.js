// Type definitions as JSDoc for editor hints (no TypeScript required)

/**
 * @typedef {Object} Coin
 * @property {string} id
 * @property {string} name
 * @property {string} symbol
 * @property {number} score
 * @property {string} phase
 * @property {number} sentiment
 * @property {number} pumpProbability
 * @property {number} rugRisk
 */

/**
 * @typedef {Object} AlertItem
 * @property {string} id
 * @property {string} coinId
 * @property {string} type
 * @property {string} message
 * @property {string} triggeredAt
 */

/**
 * @typedef {Object} Prediction
 * @property {string} coinId
 * @property {string} phase
 * @property {number} pumpProbability
 * @property {number} rugRisk
 * @property {number} fusedScore
 */
