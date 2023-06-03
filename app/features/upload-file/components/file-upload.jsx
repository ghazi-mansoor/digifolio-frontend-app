import SignedInNavbar from "@/app/shared/components/navigation/signed-in-navbar";
import Footer from "@/app/shared/components/layout/footer";

export default function FileUpload() {
    return (
        <div className="flex flex-col w-full min-h-full space-y-14">
            <SignedInNavbar />
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
                File upload component container
            </div>
            <Footer />
        </div>
    )
}
