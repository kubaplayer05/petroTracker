import {Card, CardContent, CardTitle} from "@/components/ui/card";
import {MineralWithDetails} from "@/types";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";
import {FaCircleQuestion} from "react-icons/fa6";

export default function MineralCardWithDetails({mineral}: { mineral: MineralWithDetails }) {

    return (
        <Card className={"px-5 py-7 mx-auto max-w-[800px] "}>
            <CardTitle className={"uppercase text-center py-2"}>{mineral.name}</CardTitle>
            <CardContent className={"flex flex-col gap-4 text-lg mt-5"}>
                <div>
                    <p><span className={"font-bold"}>Colors:</span> {mineral.color}</p>
                </div>
                <div>
                    <p><span className={"font-bold"}>Streak:</span> {mineral.streak}</p>
                </div>
                <div>
                    <p><span className={"font-bold"}>Luster:</span> {mineral.luster}</p>
                </div>
                <div>
                    <p><span className={"font-bold"}>Diaphaneity:</span> {mineral.diaphaneity}</p>
                </div>
                <div>
                    <p><span className={"font-bold"}>Cleavage:</span> {mineral.cleavage}</p>
                </div>
                <div className={"flex gap-3 items-center"}>
                    <p><span className={"font-bold"}>Mohs Hardness: </span>
                        {mineral.mohshardness}
                    </p>
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger>
                                <FaCircleQuestion className={"text-fuchsia-400"}/>
                            </TooltipTrigger>
                            <TooltipContent className={"max-w-[200px]"}>
                                <p>The Mohs scale of mineral hardness is a qualitative ordinal scale, from 1 to 10,
                                    characterizing scratch resistance of minerals through the ability of harder material
                                    to scratch softer material.</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </div>
                <div className={"flex gap-3 items-center"}>
                    <p><span className={"font-bold"}>Specific Gravity:</span> {mineral.specificgravity}</p>
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger>
                                <FaCircleQuestion className={"text-fuchsia-400"}/>
                            </TooltipTrigger>
                            <TooltipContent className={"max-w-[200px]"}>
                                <p>Specific gravity (also known as "relative density") is the ratio between the weight
                                    of a stone in air and the weight of an equal volume in water</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </div>
                <div>
                    <p><span className={"font-bold"}>Diagnostic Properties:</span> {mineral.diagnosticproperties}</p>
                </div>
                <div>
                    <p><span className={"font-bold"}>Crystal System:</span> {mineral.crystalsystem}</p>
                </div>
                <div>
                    <p><span className={"font-bold"}>Uses:</span> {mineral.uses}</p>
                </div>
                <div>
                    <p><span className={"font-bold"}>Chemical Classification:</span> {mineral.chemicalclassification}
                    </p>
                </div>
            </CardContent>
        </Card>
    )
}
