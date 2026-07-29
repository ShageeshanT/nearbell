/**
 * Retries a failed alert delivery with capped exponential
 * backoff before giving up.
 */
async function deliverWithRetry(sendFn, maxAttempts = 3, baseDelayMs = 500) {
  for (let attempt = 1; attempt <= maxAttempts; attempt += 1) {
    try {
      return await sendFn();
    } catch (err) {
      if (attempt === maxAttempts) throw err;
      const delay = baseDelayMs * 2 ** (attempt - 1);
      await new Promise((resolve) => setTimeout(resolve, delay));
    }
  }
}

module.exports = { deliverWithRetry };
