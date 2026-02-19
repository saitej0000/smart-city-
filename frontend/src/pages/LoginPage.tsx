import { FormEvent, useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuthStore } from '../store/auth';

export function LoginPage() {
  const [email, setEmail] = useState('citizen@smartcity.local');
  const [password, setPassword] = useState('Password123!');
  const login = useAuthStore((s) => s.login);
  const user = useAuthStore((s) => s.user);
  const navigate = useNavigate();

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    await login(email, password);
  };

  useEffect(() => {
    if (!user) return;
    if (user.role === 'CITIZEN') navigate('/citizen/dashboard');
    if (user.role === 'DEPARTMENT_ADMIN') navigate('/department/dashboard');
    if (user.role === 'SUPER_ADMIN') navigate('/admin/dashboard');
  }, [user, navigate]);

  return (
    <main className="min-h-screen grid place-items-center p-4">
      <form onSubmit={onSubmit} className="card w-full max-w-md space-y-3">
        <h1 className="text-xl font-bold">Smart City Login</h1>
        <input className="input" value={email} onChange={(e) => setEmail(e.target.value)} aria-label="Email" />
        <input className="input" type="password" value={password} onChange={(e) => setPassword(e.target.value)} aria-label="Password" />
        <button className="btn-primary w-full" type="submit">Login</button>
        <p className="text-sm">New user? <Link className="text-brand-blue" to="/register">Register</Link></p>
      </form>
    </main>
  );
}
