import { Router } from 'express';
import multer from 'multer';
import { createComplaint, departmentComplaints, getMyComplaints } from '../controllers/complaintController.js';
import { requireAuth, requireRole } from '../middleware/auth.js';

const upload = multer({ dest: 'uploads/' });
const router = Router();

router.get('/my', requireAuth, requireRole('CITIZEN'), getMyComplaints);
router.post('/', requireAuth, requireRole('CITIZEN'), createComplaint);
router.get('/department', requireAuth, requireRole('DEPARTMENT_ADMIN'), departmentComplaints);
router.post('/:id/media', requireAuth, upload.single('file'), (req, res) => {
  res.json({ message: 'File uploaded', file: req.file?.filename });
});

export default router;
