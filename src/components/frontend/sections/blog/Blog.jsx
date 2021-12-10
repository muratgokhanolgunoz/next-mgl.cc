import React, { useEffect, useContext, useState } from "react";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import Context from "../../../../utils/context/Context";
import { getBlogs } from "../../../../utils/services/blogService";
import { showToast } from "../../../../core/functions";
import { Container, Row, Pagination } from "react-bootstrap";
import Title from "../../tools/Title";
import BlogItem from "./BlogItem";
import styles from "../../../../../styles/Blog.module.scss";

const Blog = (_) => {
    const { t } = useTranslation("common");
    const context = useContext(Context);
    const router = useRouter();
    const { locale } = router;
    const arrayPaginationTemp = [];

    const [blogs, setBlogs] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPage, setTotalPage] = useState(0);
    const [arrayPagination, setArrayPagination] = useState([]);

    useEffect(() => {
        context.funcsetBlogsStatus(blogs.length > 0 ? true : false);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [blogs]);

    useEffect(() => {
        for (let index = 1; index <= totalPage; index++) {
            arrayPaginationTemp.push(index);
        }
        setArrayPagination(arrayPaginationTemp);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [totalPage]);

    useEffect(() => {
        try {
            getBlogs(locale, 4, currentPage).then((response) => {
                setBlogs(response.data.result);
                setTotalPage(response.data.totalPage);
            });
        } catch (error) {
            console.warn(error);
            showToast("bottom-right", error, "error");
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [locale, currentPage]);

    const handlePaginationClick = (_i) => {
        setCurrentPage(_i);
    };

    // const sortArray = (_array) => {
    //     return _array.sort((i, j) => {
    //         return j.BLOG_SECTION_ITEMS_ID - i.BLOG_SECTION_ITEMS_ID;
    //     });
    // };

    return blogs.length > 0 ? (
        <div id="blog" className={`${styles.blog} section-padding`}>
            <Container>
                <Row>
                    <Title title={t("blog.header.BLOG_SECTION_TITLE")} />
                </Row>
                <Row>
                    {blogs.map((item, index) => (
                        <BlogItem key={index} blog={item} />
                    ))}
                </Row>
                {totalPage > 1 && (
                    <Row>
                        <Pagination size="md" className="justify-content-center">
                            <Pagination.First onClick={() => handlePaginationClick(1)} />
                            <Pagination.Prev
                                disabled={currentPage - 1 < 1 && true}
                                onClick={() => handlePaginationClick(currentPage - 1)}
                            />
                            {arrayPagination.map((i) => (
                                <Pagination.Item
                                    key={i}
                                    active={currentPage === i && true}
                                    onClick={() => handlePaginationClick(i)}
                                >
                                    {i}
                                </Pagination.Item>
                            ))}
                            <Pagination.Next
                                disabled={currentPage + 1 > totalPage && true}
                                onClick={() => handlePaginationClick(currentPage + 1)}
                            />
                            <Pagination.Last onClick={() => handlePaginationClick(totalPage)} />
                        </Pagination>
                    </Row>
                )}
            </Container>
        </div>
    ) : null;
};

export default Blog;
