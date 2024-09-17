import DashboardHeader from '../components/getstarted/DashboardHeader';
import Footer from '../components/landing/Footer';
import AppWalletProvider from '../components/AppWalletProvider';
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <DashboardHeader />
      <main>
        <AppWalletProvider>{children}</AppWalletProvider>
      </main>
      <Footer />
    </div>
  )
}
