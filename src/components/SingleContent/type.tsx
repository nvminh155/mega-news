import { TSingleContent } from "./Content"


enum ESingleContentType {
    normal = "nomral",
    imgFull = "imgFull",
    video = "video",
    type = "type",
}

type TSingleContentCart = {
    content: TSingleContent;
    type?: ESingleContentType;
}

export type { TSingleContentCart};
export { ESingleContentType};