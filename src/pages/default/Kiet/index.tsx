import ContentCart from "@/components/SingleContent";
import { ESingleContentType } from "@/components/SingleContent/type";

import Data from "@/components/SingleContent/data.json"

export const Kiet = () => {

    const data = Data;

    return (
        <div>

            <div className="flex flex-row">

                <ContentCart

                    content={data[0]}
                />
                <ContentCart
                    type={ESingleContentType.normal}
                    content={data[0]}
                />

            </div>
            <div>
                <ContentCart
                    type={ESingleContentType.video}
                    content={data[1]}/>
            </div>
        </div>
    );
};
