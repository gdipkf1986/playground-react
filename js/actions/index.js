import { CALL_API, Schemas } from '../middleware/gitHubApi'

import * as cms from './cms.js';
import * as gitHub from './github.js';

export default {...cms, ...gitHub};
