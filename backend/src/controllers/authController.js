import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { users } from '../config/data.js';

for (const u of users) {
  if (!u.passwordHash) u.passwordHash = bcrypt.hashSync('Password123!', 10);
}

export async function register(req, res) {
  const { fullName, email, password } = req.body;
  if (!fullName || !email || !password) return res.status(400).json({ message: 'Missing required fields' });
  const exists = users.find((u) => u.email === email);
  if (exists) return res.status(409).json({ message: 'Email already exists' });
  const user = {
    id: `u${users.length + 1}`,
    fullName,
    email,
    passwordHash: await bcrypt.hash(password, 10),
    role: 'CITIZEN'
  };
  users.push(user);
  res.status(201).json({ message: 'Registered successfully' });
}

export async function login(req, res) {
  const { email, password } = req.body;
  const user = users.find((u) => u.email === email);
  if (!user) return res.status(401).json({ message: 'Invalid credentials' });
  const valid = await bcrypt.compare(password, user.passwordHash);
  if (!valid) return res.status(401).json({ message: 'Invalid credentials' });

  const token = jwt.sign({ sub: user.id, role: user.role, email: user.email, department: user.department }, process.env.JWT_SECRET || 'dev-secret', { expiresIn: '1d' });
  res.json({ token, user: { id: user.id, fullName: user.fullName, email: user.email, role: user.role, department: user.department } });
}
