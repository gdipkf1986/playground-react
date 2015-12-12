/**
 * Created by jovi on 12/12/15.
 */
import { Schema, arrayOf, normalize } from 'normalizr'
import { camelizeKeys } from 'humps'
import 'isomorphic-fetch'

export const CMS_API_SYMBOL = Symbol('cmsApiSymbol');

