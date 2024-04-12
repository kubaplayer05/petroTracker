import {atom} from "jotai";
import {ImagePrediction} from "@/types";

const predictionsAtom = atom<ImagePrediction[]>([])
const isImageChosenAtom = atom(false)
const previewImageSrcAtom = atom("")
const isImageDetectionLoadingAtom = atom(false)

export {predictionsAtom, isImageChosenAtom, previewImageSrcAtom, isImageDetectionLoadingAtom}
