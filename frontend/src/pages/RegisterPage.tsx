import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/auth';

export function RegisterPage() {
  const register = useAuthStore((s) => s.register);
  const [fullName, setFullName] = useState('Demo User');
  const [email, setEmail] = useState('demo@smartcity.local');
  const [password, setPassword] = useState('Password123!');
  const navigate = useNavigate();

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    await register(fullName, email, password);
    navigate('/login');
  };

  return (
    <main className="min-h-screen grid place-items-center p-4">
      <form onSubmit={onSubmit} className="card w-full max-w-md space-y-3">
        <h1 className="text-xl font-bold">Citizen Registration</h1>
        <input className="input" value={fullName} onChange={(e) => setFullName(e.target.value)} aria-label="Full name" />
        <input className="input" value={email} onChange={(e) => setEmail(e.target.value)} aria-label="Email" />
        <input className="input" type="password" value={password} onChange={(e) => setPassword(e.target.value)} aria-label="Password" />
        <button className="btn-primary w-full" type="submit">Create account</button>
      </form>
    </main>
  );
}
