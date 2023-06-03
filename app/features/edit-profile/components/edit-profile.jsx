import SignedInNavbar from "@/app/shared/components/navigation/signed-in-navbar";
import Footer from "@/app/shared/components/layout/footer";
import EditProfileForm from "@/app/features/edit-profile/components/edit-profile-form";

export default function EditProfile() {
    return (
        <div className="flex flex-col w-full min-h-full space-y-14">
            <SignedInNavbar />
            <EditProfileForm />
            <Footer />
        </div>
    );
}
