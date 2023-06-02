import SignedInNavbar from "@/app/shared/components/navigation/signed-in-navbar";
import Footer from "@/app/shared/components/layout/footer";

export default function DesignFeed() {
    return (
        <div className="flex flex-col min-h-full">
            <SignedInNavbar />
            <Footer />
        </div>
    )
}
