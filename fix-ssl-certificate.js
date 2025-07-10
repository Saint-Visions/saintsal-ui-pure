#!/usr/bin/env node

/**
 * 🔧 SSL Certificate Fix for Azure
 * Resolves certificate validation issues
 */

// Disable SSL certificate validation for Azure deployment
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

// Import the main server
require("./server.js");
