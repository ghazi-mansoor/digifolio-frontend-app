import SignedInNavbar from "@/app/shared/components/navigation/signed-in-navbar";
import Footer from "@/app/shared/components/layout/footer";
import DesignDetailsHeader from "@/app/features/design-details/components/design-detail-header";
import DesignFileImage from "@/app/features/design-feed/components/design-file-image";

const designFile = {
        id: 1,
        title: 'Mobile App Design: Fitness App',
        designer: 'John Doe',
        comments: 0,
        likes: 2,
        views: '1.1k',
        source:
            'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
};

export default function DesignDetails() {
    return (
        <div className="flex flex-col w-full min-h-full space-y-14">
            <SignedInNavbar />
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
                <DesignDetailsHeader designer={designFile.designer} fileTitle={designFile.title} />
                <DesignFileImage fileURL={designFile.source} fileTitle={designFile.title} />

            </div>
            <Footer />
        </div>
    )
}
