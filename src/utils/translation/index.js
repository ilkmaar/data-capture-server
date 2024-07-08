import * as infoTranslators from './infoTranslators.js';
import * as timeTranslators from './timeTranslators.js';
import * as entityTranslators from './entityTranslators.js';
import * as actionTranslators from './actionTranslators.js';
import * as recordTranslators from './recordTranslators.js';

export default {
    ...infoTranslators,
    ...timeTranslators,
    ...entityTranslators,
    ...actionTranslators,
    ...recordTranslators
};