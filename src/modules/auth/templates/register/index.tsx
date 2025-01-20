import { RegisterForm } from "@modules/auth/components/register-form";
import Image from "next/image";

export default function Register() {
  return (
    <main className="bg-gray-50 h-screen w-full lg:grid lg:grid-cols-2">
      <div className="hidden bg-muted lg:block">
        <Image
          src="/login.png"
          alt="Image"
          width="1920"
          height="1080"
          className="h-full w-full object-fill"
        />
      </div>
      <div className="flex items-center justify-center">
        <RegisterForm />
      </div>
    </main>
  );
}
