export default function DesignFileImage({ fileURL, fileTitle }) {
    return (
        <div className="flex justify-center bg-slate-50">
            <img className="object-fit" src="/app_design_image.png" alt={fileTitle} />
        </div>
    );
}
