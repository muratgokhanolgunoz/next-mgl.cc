import React, { useState, useEffect } from "react";
import style from "../../../../../styles/BlogDetailsList.module.scss";
import { showToast } from "../../../../core/functions";
import { getBlogs } from "../../../../utils/services/blogService";
import { useRouter } from "next/router";
import BlogDetailsListRow from "./BlogDetailsListRow";
import { Container, Row } from "react-bootstrap";
import { useTranslation } from "next-i18next";

const BlogDetailsList = (_) => {
    const router = useRouter();
    const { locale, query } = router;
    const [blogs, setBlogs] = useState([]);
    const { t } = useTranslation("common");

    useEffect(() => {
        try {
            getBlogs(locale, 5, 1).then((response) => {
                setBlogs(
                    response.data.result.filter(
                        (blog) => blog.BLOG_SECTION_ITEMS_ID !== parseInt(query.blogId)
                    )
                );
            });
        } catch (error) {
            console.warn(error);
            showToast("bottom-right", error, "error");
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [query.blogId]);

    return (
        <>
            <Container>
                <Row>
                    <div
                        style={{
                            backgroundColor: "#333",
                            letterSpacing: "1px",
                            textAlign: "center",
                            color: "#fff",
                            padding: "15px",
                            margin: "0",
                            width: "100%",
                        }}
                    >
                        {t("blog.body.BLOG_SECTION_DETAILS_OTHER_BLOGS_HEADER")}
                    </div>
                    <div className={style.blogDetailsList}>
                        {blogs.map((blog) => (
                            <BlogDetailsListRow key={blog.BLOG_SECTION_ITEMS_ID} blog={blog} />
                        ))}
                    </div>
                </Row>
            </Container>
        </>
    );
};

export default BlogDetailsList;
