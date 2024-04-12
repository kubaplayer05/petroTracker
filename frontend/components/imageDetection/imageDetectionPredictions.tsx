"use client"

import {Card} from "@/components/ui/card";
import {BeatLoader} from "react-spinners";
import {useAtom} from "jotai";
import {isImageDetectionLoadingAtom, predictionsAtom} from "@/atoms/imageDetectionAtom";

export default function ImageDetectionPredictions() {

    const [predictions,] = useAtom(predictionsAtom)
    const [loading,] = useAtom(isImageDetectionLoadingAtom)

    return (
        <div className={"pl-4 w-1/2 flex flex-col items-center"}>
            {predictions.length === 0 && !loading &&
                <h3 className={"text-slate-400 text-center text-2xl"}>No Predictions</h3>}
            {predictions.length > 0 && predictions.map((prediction) => {
                const roundedConfidence = Math.round(prediction.confidence * 100)

                return (
                    <Card className={"bg-fuchsia-700 w-full px-6 py-4 text-white shadow-sm"}
                          key={prediction.detection_id}>
                        <h3 className={"uppercase font-bold"}>{prediction.class}</h3>
                        <p>Confidence: {roundedConfidence}%</p>
                    </Card>
                )
            })}
            <BeatLoader color={"#A21CAF"} className={"mx-auto"} loading={loading}/>
        </div>
    )
}
