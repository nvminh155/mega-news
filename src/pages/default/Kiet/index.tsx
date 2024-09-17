import Explanation from "@/components/AboutUs/Explanation"
import postData from "@/components/AboutUs/explanationData.json"
import Contact from "@/components/AboutUs/Contact"
import Team from "@/components/AboutUs/Team"

export const Kiet = () => {

    const post = postData;
    return (
        <>
            <div className="">
                <Explanation
                    title={post.title}
                    content={post.content}
                    imageUrl={post.imageUrl}
                    alt={post.alt}
                />

                <Contact />
                <Team />
            </div>

        </>
    );
};
