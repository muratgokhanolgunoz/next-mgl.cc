/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useContext } from "react";
import BlogItem from "./BlogItem";
import { Container, Row } from "react-bootstrap";
import Title from "../../tools/Title";
import styles from "../../../../../styles/Blog.module.scss";
import { useTranslation } from "next-i18next";
import Context from "../../../../utils/context/Context";

const Blog = ({ blogs }) => {
    const { t, i18n } = useTranslation("common");
    const context = useContext(Context);

    useEffect(() => {
        context.funcsetBlogsStatus(blogs.length > 0 ? true : false);
    }, []);

    const sortArray = (_array) => {
        return _array.sort((i, j) => {
            return j.BLOG_SECTION_ITEMS_ID - i.BLOG_SECTION_ITEMS_ID;
        });
    };

    return blogs.length > 0 ? (
        <div id="blog" className={`${styles.blog} section-padding`}>
            <Container>
                <Row>
                    <Title title={t("blog.header.BLOG_SECTION_TITLE")} />
                </Row>
                <Row>
                    {sortArray(blogs).map((item, index) => (
                        <BlogItem
                            key={blogs.length - (index + 1)}
                            blogId={blogs.length - (index + 1)}
                            blog={item}
                        />
                    ))}
                </Row>
            </Container>
        </div>
    ) : null;
};

export default Blog;
