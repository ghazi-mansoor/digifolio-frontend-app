import SignedInNavbar from "@/app/shared/components/navigation/signed-in-navbar";
import Footer from "@/app/shared/components/layout/footer";
import FileUploadForm from "@/app/features/upload-file/components/file-upload-form";

export default function FileUpload() {
    return (
        <div className="flex flex-col w-full min-h-full space-y-14">
            <SignedInNavbar />
            <FileUploadForm />
            <Footer />
        </div>
    )
}
