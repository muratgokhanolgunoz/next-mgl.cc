import React, { useState, useEffect } from "react";
import style from "../../../../../styles/BlogDetailsList.module.scss";
import { showToast } from "../../../../core/functions";
import { getBlogs } from "../../../../utils/services/blogService";
import { useRouter } from "next/router";
import BlogDetailsListRow from "./BlogDetailsListRow";
import { Container, Row, Col } from "react-bootstrap";

const BlogDetailsList = (_) => {
    const router = useRouter();
    const { locale } = router;
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        try {
            const data = {
                language: locale,
                itemsPerPage: 5,
                page: 1,
            };

            getBlogs(data).then((response) => {
                setBlogs(response.data.result);
            });
        } catch (error) {
            console.warn(error);
            showToast("bottom-right", error, "error");
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

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
                            width: "100%"
                        }}
                    >
                        {" "}
                        DİĞER YAZILARIMIZ{" "}
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
