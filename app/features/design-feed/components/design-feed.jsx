import SignedInNavbar from "@/app/shared/components/navigation/signed-in-navbar";
import Footer from "@/app/shared/components/layout/footer";
import DesignFeedHeader from "@/app/features/design-feed/components/design-feed-header";


export default function DesignFeed() {
    return (
        <div className="flex flex-col w-full min-h-full space-y-20">
            <SignedInNavbar />
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
                <DesignFeedHeader />
            </div>
            <Footer />
        </div>
    )
}
