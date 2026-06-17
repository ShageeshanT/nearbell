import { buildNotification } from '../src/notifications.js';
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => { if (message?.type === 'NEARBELL_ALERT') { chrome.notifications.create(buildNotification(message.payload)); sendResponse({ ok: true }); return true; } return false; });
