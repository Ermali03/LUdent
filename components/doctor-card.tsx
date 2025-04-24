import Image from "next/image";
import Link from "next/link";
import { Calendar, Instagram } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface DoctorCardProps {
  name: string;
  specialty: string;
  bio: string;
  imageSrc: string;
  instagramURL?: string;
}

export function DoctorCard({
  name,
  specialty,
  bio,
  imageSrc,
  instagramURL,
}: DoctorCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="aspect-[3/4] relative">
        <Image
          src={imageSrc || "/placeholder.svg"}
          alt={name}
          fill
          className="object-cover"
        />
      </div>
      <CardHeader className="p-6">
        <div className="flex items-center gap-2">
          <CardTitle>{name}</CardTitle>
          {instagramURL && (
            <Link
              href={instagramURL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-500 hover:text-pink-600"
            >
              <Instagram className="h-5 w-5" />
            </Link>
          )}
        </div>
        <CardDescription>{specialty}</CardDescription>
      </CardHeader>
      <CardContent className="p-6 pt-0">
        <p className="text-muted-foreground">{bio}</p>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Link href="/appointment" className="w-full">
          <Button className="w-full gap-2">
            <Calendar className="h-4 w-4" />
            Book Appointment
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
