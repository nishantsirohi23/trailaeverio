import { Card, CardContent } from "@/components/ui/card";

export default function CustomerCard({message, underText}) {
  return (
    <Card className="w-full max-w-xs rounded-xl border border-gray-800 bg-[#111] text-white">
      <CardContent className="p-6 text-center">
        <p className="text-3xl font-semibold">{message}</p>
        <p className="text-sm text-white/60 mt-1">{underText}</p>
      </CardContent>
    </Card>
  );
}

