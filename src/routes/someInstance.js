/**
 * Base: .../
 *
 * Description:
 *    Separate route scope for someInstance
 *
 * */
import {Router} from 'express'

import {
    getInstance,
    getInstanceList
} from '../controller/someInstance';

const router = Router();

router.get('/:id', getInstance);

router.get('/', getInstanceList);

export default router;