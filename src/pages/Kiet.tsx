//pangination
import Pagination from "@/components/pagination/Pagination";

import Login from "@/components/user/login/Login"
import Nlogin from "@/components/user/login/NoLogin";

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
        <>
            <div>
                <Pagination totalPages={Pages} />
            </div>

            <div className="mt-10">
                <Nlogin />
            </div>

            <div className="mt-10">
                <Login name="Behzad" avatar="/avatar.svg" />
            </div>
        </>
    );
};
