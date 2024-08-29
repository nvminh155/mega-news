import Pagination from "@/components/pagination/Pagination";

export const Kiet = () => {

    // useEffect(() => {
    //     const fetchPosts = async () => {
    //         setLoading(true)
    //         const res = await axios.get('')
    //         setPosts(res.data)
    //         setLoading(false)
    //     }

    //     fetchPosts()
    // }, []) get api pham muc

    const Pages = 9; //so trang

    return (
        <div>
            <Pagination totalPages={Pages} />
        </div>
    );
};
