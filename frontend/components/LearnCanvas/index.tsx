import Button from "../common/Button";
import Header from '../common/Header';
import Footer from '../common/Footer';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useContractContext } from './../../context';
import Loading from "../common/Loading";
import Astar from "./LearnContent/Astar";
import Shiden from "./LearnContent/Shiden";
import Wasm from "./LearnContent/Wasm";

/**
 * LearnCanvas Component
 * @returns 
 */
const LearnCanvas = () => {
    const router = useRouter();
    // クエリパラメータから値を取得する。
    const { contentFlg } = router.query;

    // create contract
    const {
        actingAddress,
        mint,
        isLoading,
    }:any = useContractContext();

    return (
        <div className="text-center">
            <Header />
            {actingAddress !== '' ?
                <>
                    {isLoading ? 
                        <Loading/>
                    :
                        <>
                            <h2 className="text-2xl font-bold tracking-tight mb-5 text-white-900">Learning Page</h2>
                            {/* フラグによってコンテンツの内容を書き換える。 */}
                            <div className="text-left  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                <a href="#">
                                    {contentFlg == 'wasm' && <img className="mx-auto rounded-t-lg" src="/wasm-logo.png" alt="Astar_ring" />}
                                    {contentFlg == 'astar' && <img className="mx-auto rounded-t-lg" src="/Astar_ring.png" alt="Astar_ring" />}
                                    {contentFlg == 'shiden' && <img className="mx-auto rounded-t-lg h-80" src="/Shiden-Symbol.png" alt="Astar_ring" />}
                                </a>
                                <div className="p-5">
                                    <a href="#">
                                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                            {contentFlg} Learing Course
                                        </h5>
                                    </a>
                                    <p className="text mb-3 font-normal text-gray-700 dark:text-gray-400">
                                        {contentFlg === 'wasm' && <Wasm/>}
                                        {contentFlg === 'astar' && <Astar/>}
                                        {contentFlg === 'shiden' && <Shiden/>}
                                    </p>
                                    <div className="text-center">
                                        <Button 
                                            name="Let's Mint NFT!" 
                                            onClick={() => mint(contentFlg)}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="mt-5 mb-5"></div>
                            <Link href="/">
                                <Button name="トップへ戻る" />
                            </Link>
                        </> 
                    }
                </>
            :
                <h2 className="text-2xl font-bold tracking-tight h-screen w-screen flex justify-center items-center text-white-900">Please connect wallet</h2>
            }  
            <Footer />
        </div>
    );
};

export default LearnCanvas;