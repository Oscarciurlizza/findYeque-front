import { Card, CardContent, CardHeader } from "@/components/ui/card";
import React from "react";
import { Badge } from "@/components/ui/badge";
import Twitter from "@modules/common/icons/twitter";
import Facebook from "@modules/common/icons/facebook";
import Instagram from "@modules/common/icons/instagram";
import Link from "next/link";
import Whatsapp from "@modules/common/icons/whatsapp";

export default function BusinessPreview({ business }: { business: any }) {
  return (
    <Card className="bg-transparent border-black border-b-4 border-r-4 shadow-none">
      <CardHeader className="p-4">
        <Link href="/business/1234">
          <img
            src="https://placehold.co/600x400"
            alt="business-image"
            className="w-full h-40 object-cover rounded-lg"
          />
        </Link>
      </CardHeader>
      <CardContent>
        <section className="flex justify-between items-end gap-x-2">
          <div>
            <h2>{business.name}</h2>
            <p className="text-xs text-gray-400">
              Business Description goes here, outlining what the business.
            </p>
            <div className="flex items-center gap-x-2 mt-3">
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
          <div>
            <Badge>Pizza</Badge>
          </div>
        </section>
      </CardContent>
    </Card>
  );
}
