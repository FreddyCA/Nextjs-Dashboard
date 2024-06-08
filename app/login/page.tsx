import AcmeLogo from '@/app/ui/acme-logo';
import LoginForm from '@/app/ui/login-form';

import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Login',
};

// actualizar las variables de entorno en proyecto vrcer, ver guia
export default function LoginPage() {
  return (
    <main className="flex items-center justify-center md:h-screen">
      <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32">
        <div className="flex h-20 w-full items-end rounded-lg bg-blue-500 p-3 md:h-36">
          <div className="w-32 text-white md:w-36">
            <Link href={'/'}>
              <AcmeLogo />
            </Link>
            {/* <AcmeLogo /> */}
          </div>
          {/* <Link
            className="mb-2 flex h-20 items-end justify-start rounded-md bg-blue-600 p-4 md:h-40"
            href="/"
          >
            <div className="w-32 text-white md:w-40">
              <AcmeLogo />
            </div>
          </Link> */}
        </div>
        <LoginForm />
      </div>
    </main>
  );
}
