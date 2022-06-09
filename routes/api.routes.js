import { Router } from "express";
export const route = Router();
import {shorted} from '../service/urlshort.js';

route.post('/short',shorted);
