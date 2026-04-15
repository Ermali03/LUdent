function LoadingCaseCard() {
  return (
    <div className="overflow-hidden rounded-[2rem] border border-teal-100 bg-white p-6 shadow-sm sm:p-8">
      <div className="mb-4 h-6 w-28 animate-pulse rounded-full bg-teal-100" />
      <div className="mb-3 h-8 w-2/3 animate-pulse rounded-full bg-neutral-200" />
      <div className="mb-2 h-4 w-full animate-pulse rounded-full bg-neutral-200" />
      <div className="mb-8 h-4 w-5/6 animate-pulse rounded-full bg-neutral-200" />
      <div className="grid gap-4 md:grid-cols-2">
        <div className="aspect-[4/3] animate-pulse rounded-[1.5rem] bg-neutral-200" />
        <div className="aspect-[4/3] animate-pulse rounded-[1.5rem] bg-neutral-200" />
      </div>
    </div>
  )
}

export default function Loading() {
  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#f6fffd_0%,#ffffff_35%,#f8fafc_100%)] pt-24">
      <section className="border-b border-teal-100/80 px-4 py-16 sm:px-6 md:py-24">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="mx-auto h-6 w-28 animate-pulse rounded-full bg-teal-100" />
          <div className="mx-auto mt-6 h-14 w-3/4 animate-pulse rounded-full bg-neutral-200" />
          <div className="mx-auto mt-4 h-4 w-2/3 animate-pulse rounded-full bg-neutral-200" />
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 md:py-16">
        <div className="container mx-auto grid gap-8 lg:gap-10">
          {Array.from({ length: 3 }).map((_, index) => (
            <LoadingCaseCard key={index} />
          ))}
        </div>
      </section>
    </div>
  )
}
