"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import Logo from "@modules/layout/components/logo";

const FormSchema = z.object({
  username: z.string().min(6, {
    message: "El nombre de usuario debe tener al menos 6 caracteres.",
  }),
  password: z.string().min(8, {
    message: "La contraseña debe tener al menos 8 caracteres.",
  }),
});

export function RegisterForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <Card className="mx-auto max-w-md bg-transparent border-none shadow-none">
      <CardHeader>
        <Logo />
        <CardTitle className="text-2xl">Registrate</CardTitle>
        <CardDescription>
          Introduzca su dirección de correo electrónico para acceder a su cuenta
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="w-full lg:grid lg:grid-cols-2 gap-x-4">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nombre</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="shadcn"
                        className="border-black"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      Este es tu nombre público.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Apellido</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="shadcn"
                        className="border-black"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      Este es tu nombre público.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div>
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Correo Electrónico</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="shadcn"
                        className="border-black"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      Este es tu nombre público.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="w-full lg:grid lg:grid-cols-2 gap-x-4">
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Contraseña</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="********"
                        className="border-black"
                        {...field}
                        type="password"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Repetir Contraseña</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="********"
                        className="border-black"
                        {...field}
                        type="password"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Button type="submit" className="w-full">
              Registrate
            </Button>
          </form>
          <div className="mt-4 text-center text-sm">
            Ya tienes una cuenta?{" "}
            <Link href="/auth/login" className="underline">
              Inicia Sesión
            </Link>
          </div>
        </Form>
      </CardContent>
    </Card>
  );
}
