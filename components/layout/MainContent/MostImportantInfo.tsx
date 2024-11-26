"use client";
import { Video } from "@/components/layout/Video";
import { YOUTUBE_VIDEO_ID } from "@/app/common/constant";

export function MostImportantInfo() {
  return (
    <section className="bg-secondary p-8 w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <div className="space-y-4">
          <h1 className="text-2xl md:text-3xl lg:text-5xl font-serif font-bold tracking-tight">
            Most Important Info
          </h1>
          <p className="text-md md:text-xl leading-relaxed max-w-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum a
            soluta suscipit impedit sed nesciunt doloremque enim saepe
            blanditiis eum perspiciatis doloribus eaque aspernatur, velit
            facilis praesentium accusamus omnis vel?
          </p>
        </div>
        <div className="bg-muted aspect-video flex items-center justify-center">
          <Video id={YOUTUBE_VIDEO_ID} />
        </div>
      </div>
    </section>
  );
}
