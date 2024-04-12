import ImageDetectionForm from "@/components/forms/imageDetectionForm";
import ImageDetectionPreview from "@/components/imageDetection/imageDetectionPreview";
import ImageDetectionPredictions from "@/components/imageDetection/imageDetectionPredictions";

export default function ImageDetectionPage() {

    return (
        <main className={"py-10 flex flex-col gap-10 items-center"}>
            <section className={"flex flex-col gap-6"}>
                <ImageDetectionPreview/>
                <div className={"flex gap-4"}>
                    <ImageDetectionForm/>
                    <ImageDetectionPredictions/>
                </div>
            </section>
        </main>
    )
}
