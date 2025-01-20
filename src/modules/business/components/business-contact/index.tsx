import Facebook from "@modules/common/icons/facebook";
import Instagram from "@modules/common/icons/instagram";
import Twitter from "@modules/common/icons/twitter";
import Whatsapp from "@modules/common/icons/whatsapp";
import Link from "next/link";
import React from "react";

export default function BusinessContact() {
  return (
    <section className="grid grid-cols-1 gap-8 lg:grid-cols-2 py-12 border-b border-black">
      <div className="space-y-6">
        <div className="h-full border border-black">
          <img
            src="https://miro.medium.com/v2/resize:fit:2000/1*UzmjsSZkY4m7S_nBXMC9AQ.png"
            alt=""
          />
        </div>
      </div>
      <div className="text-right space-y-6">
        <h2 className="scroll-m-20 text-lg font-extrabold tracking-tight lg:text-xl">
          Encuentranos 🤠
        </h2>
        <div className="space-y-3">
          <h3>Dirección</h3>
          <p className="text-sm text-muted-foreground">
            123 Main Street, Anytown USA
          </p>
        </div>
        <div className="space-y-3">
          <h3>Horario</h3>
          <p className="text-sm text-muted-foreground">
            <span className="block">Lunes - Viernes: 7am - 9pm </span>
            <span>Sabado - Domingo: 8am - 10pm</span>
          </p>
        </div>
        <div className="space-y-3">
          <h3>Telefono</h3>
          <p className="text-sm text-muted-foreground">+51 999 999 999</p>
        </div>
        <div className="space-y-3">
          <h3>Redes Sociales</h3>
          <div className="flex justify-end items-center gap-x-2">
            <Link href="#">
              <Twitter />
            </Link>
            <Link href="#">
              <Facebook />
            </Link>
            <Link href="#">
              <Instagram />
            </Link>
            <Link href="#">
              <Whatsapp />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
