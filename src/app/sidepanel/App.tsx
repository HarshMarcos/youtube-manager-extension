import AppShell from "@/components/layout/AppShell";
import Header from "@/components/layout/Header";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Input from "@/components/ui/Input";

export default function App() {
  return (
    <AppShell>
      <div className="flex h-full w-full flex-col">
        <Header />

        <main className="flex flex-1 items-center justify-center p-6">
          <Card className="w-full max-w-md space-y-5">
            <div>
              <h2 className="text-lg font-semibold text-[var(--foreground)]">
                Current Video
              </h2>

              <p className="mt-2 text-sm text-[var(--muted-foreground)]">
                Waiting for YouTube video...
              </p>
            </div>

            <Input placeholder="Write a quick note..." />

            <Button className="w-full">Save Note</Button>
          </Card>
        </main>
      </div>
    </AppShell>
  );
}
