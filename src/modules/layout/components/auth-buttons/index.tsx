import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export default function AuthButtons() {
  return (
    <section className="flex items-center space-x-4">
      <Button variant="link" asChild>
        <Link href="/auth/login">Iniciar Sesión</Link>
      </Button>
      <Button asChild>
        <Link href="/auth/register">Registrate Ahora</Link>
      </Button>
    </section>
  );
}
