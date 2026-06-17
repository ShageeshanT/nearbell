import { mergeSettings } from './settings.js';
export async function loadSettings(storage) { return mergeSettings((await storage.get('nearbell-settings')) || {}); }
export async function saveSettings(storage, settings) { await storage.set('nearbell-settings', settings); return mergeSettings(settings); }
