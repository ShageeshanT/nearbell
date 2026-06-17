import { normalizeOffsets } from '../src/validation.js';
const offsets = document.querySelector('#offsets');
const status = document.querySelector('#status');
document.querySelector('#save').addEventListener('click', async () => { const customOffsetsMinutes = normalizeOffsets(offsets.value.split(',')); await chrome.storage.sync.set({ 'nearbell-settings': { customOffsetsMinutes } }); status.textContent = `Saved: ${customOffsetsMinutes.join(', ')} minutes`; });
