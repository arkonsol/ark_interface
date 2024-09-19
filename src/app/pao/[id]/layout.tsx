import DashboardHeader from "@/app/components/getstarted/DashboardHeader";
import Footer from "@/app/components/landing/Footer";
import AppWalletProvider from "@/app/components/AppWalletProvider";

export default function NewLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <main>
        <AppWalletProvider>
          <DashboardHeader />
          {children}
          <Footer />
        </AppWalletProvider>
      </main>
    </div>
  );
}
