import DashboardHeader from '../components/getstarted/DashboardHeader';
import Footer from '../components/landing/Footer';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <DashboardHeader />
      <main>{children}</main>
      <Footer />
    </div>
  )
}