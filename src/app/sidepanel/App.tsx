import AppShell from "@/components/layout/AppShell";
import Header from "@/components/layout/Header";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Input from "@/components/ui/Input";
import CurrentVideoCard from "@/features/current-video/components/CurrentVideoCard";

export default function App() {
  return (
    <AppShell>
      <div className="flex h-full w-full flex-col">
        <Header />

        <main className="flex flex-1 items-center justify-center p-6">
          <div className="w-full max-w-md">
            <CurrentVideoCard />
          </div>
        </main>
      </div>
    </AppShell>
  );
}
