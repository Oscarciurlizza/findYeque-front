import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function BusinessSkeleton() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-items-center">
      <Card className="bg-transparent border-black border-b-4 border-r-4 shadow-none w-full">
        <CardHeader className="p-4">
          <Skeleton className="h-40 max-w-full rounded-lg" />
        </CardHeader>
        <CardContent>
          <section className="flex justify-between items-end gap-x-2">
            <div>
              <Skeleton className="h-4 w-[250px]" />
              <Skeleton className="h-4 w-[250px] mt-2" />
              <Skeleton className="h-4 w-[200px] mt-2" />

              <div className="flex items-center gap-x-2 mt-3">
                <Skeleton className="h-4 w-[30px]" />
                <Skeleton className="h-4 w-[30px]" />
                <Skeleton className="h-4 w-[30px]" />
                <Skeleton className="h-4 w-[30px]" />
              </div>
            </div>
            <div>
              <Skeleton className="h-4 w-[100px]" />
            </div>
          </section>
        </CardContent>
      </Card>
    </section>
  );
}
