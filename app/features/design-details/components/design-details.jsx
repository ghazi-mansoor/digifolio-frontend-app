import SignedInNavbar from "@/app/shared/components/navigation/signed-in-navbar";
import Footer from "@/app/shared/components/layout/footer";
import DesignDetailsHeader from "@/app/features/design-details/components/design-detail-header";

export default function DesignDetails() {
    return (
        <div className="flex flex-col w-full min-h-full space-y-14">
            <SignedInNavbar />
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
                <DesignDetailsHeader />
            </div>
            <Footer />
        </div>
    )
}
