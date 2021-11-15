/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from "react";
import Head from "next/head";
import Index from "../../src/components/dashboard/blogs/Index";
import Context from "../../src/utils/context/Context";
import { useRouter } from "next/router";

const Blogs = (_) => {
    const router = useRouter();
    const context = useContext(Context);

    useEffect(() => {
        if (context.token === "") {
            router.push("/sarici2021/login");
        }
    }, [context.token]);

    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta charSet="utf-8" />
                <meta name="google" content="notranslate" />
                <meta name="robots" content="noindex, nofollow" />
                <title>Blogs - Midas Global Logistic</title>
                <meta name="description" content="" />
                <link
                    rel="icon"
                    href={`${process.env.NEXT_PUBLIC_URL}/assets/img/favicon.ico`}
                    type="image/x-icon"
                />
            </Head>
            <Index />
        </>
    );
};
export default Blogs;
