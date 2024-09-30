import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { X } from "lucide-react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Ozgecmis({ description }: any) {
  return (
    <div className="font-serif">
      <Drawer>
        <DrawerTrigger asChild>
          <Button variant="outline">Özgeçmişi Görüntüle</Button>
        </DrawerTrigger>
        <DrawerContent className="h-[90vh] bg-white text-black">
          <div className="mx-auto w-full max-w-4xl relative h-full overflow-y-auto">
            <DrawerClose className="absolute right-2 top-2 z-10">
              <Button variant="ghost" size="icon">
                <X className="h-4 w-4" />
                <span className="sr-only">Kapat</span>
              </Button>
            </DrawerClose>
            <DrawerHeader className="items-center font-serif">
              <DrawerTitle>Özgeçmiş</DrawerTitle>
              <DrawerDescription>
                Kişisel ve profesyonel bilgiler
              </DrawerDescription>
            </DrawerHeader>
            <div className="p-4 flex flex-col md:flex-row font-serif">
              <div className="w-full md:w-1/3 pr-4 mb-4 md:mb-0">
                <Avatar className="w-40 h-40 mx-auto mb-4  ">
                  <AvatarImage
                    className="object-cover"
                    src={description.src}
                    alt="Profil Fotoğrafı"
                    style={{
                      objectPosition: "top",
                    }}
                  />
                  <AvatarFallback>PF</AvatarFallback>
                </Avatar>
                <h2 className="text-2xl font-bold text-center mb-2">
                  {description.name}
                </h2>
                <p className="text-center text-gray-600 mb-4">
                  {description.job}
                </p>
                <div className="space-y-2 text-center">
                  <p className="text-sm mb-4">{description.hakkinda}</p>
                </div>
              </div>
              <div className="w-full md:w-2/3 md:pl-4 md:border-l border-gray-200 font-serif">
                {/* <h3 className="text-lg font-semibold mb-2">Hakkında</h3>
              <p className="text-sm mb-4">{description.hakkinda}</p> */}

                <h3 className="text-lg font-semibold mb-2">Eğitim</h3>
                <li className="text-sm mb-4">{description.akademi}</li>

                <li className="text-sm mb-4">{description.akademi1}</li>
                <h3 className="text-lg font-semibold mb-2">
                  Akademik Çalışmalar
                </h3>
                <ul className="list-disc list-inside text-sm space-y-2 mb-4">
                  <li>
                    <span className="font-bold">Yüksek Lisans Tezi: </span>
                    {description.yuksek}
                  </li>

                  <li>{description.calismalar} </li>
                  <li>{description.calismaşar1} </li>
                  <li>{description.calismaşar2} </li>
                  <li>{description.calismaşar3} </li>
                  <li>{description.calismaşar4} </li>
                  <li>{description.calismaşar5} </li>
                  <li>{description.calismaşar6} </li>
                </ul>

                <h3 className="text-lg font-semibold mb-2">Dil Becerileri</h3>
                <ul className="list-disc list-inside text-sm space-y-2 mb-4">
                  <li>{description.dil} </li>
                  <li>{description.dil2} </li>
                </ul>
              </div>
            </div>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
