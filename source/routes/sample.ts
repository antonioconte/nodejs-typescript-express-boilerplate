import express from 'express';
import controller from '../controllers/sample';

const router = express.Router();

router.get('/ping', controller.serverHealthCheck);
router.get('/hello', controller.sayHello);

export = router;
