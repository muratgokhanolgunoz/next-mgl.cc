/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from "react";
import Context from "../../src/utils/context/Context";
import Head from "next/head";
import Index from "../../src/components/dashboard/auth/Login";
import { useRouter } from "next/router";

const Login = (_) => {
    const router = useRouter();
    const context = useContext(Context);
    
    useEffect(() => {
        if(context.token !== "") {
           router.push("/sarici2021"); 
        }
    }, [context.token]);

    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta charSet="utf-8" />
                <meta name="google" content="notranslate" />
                <meta name="robots" content="noindex, nofollow" />
                <title>Login - Midas Global Logistic</title>
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
export default Login;
