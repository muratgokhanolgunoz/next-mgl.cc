/* eslint-disable @next/next/link-passhref */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import { useRouter } from "next/router";
import { Col, Image } from "react-bootstrap";
import { useTranslation } from "next-i18next";
import styles from "../../../../../styles/Blog.module.scss";

const BlogItem = ({ blog }) => {
    const { t, i18n } = useTranslation("common");
    const router = useRouter();
    const { locale } = router;

    return (
        <>
            <Col className={styles.blogBox} xl={3} md={6} key={blog.BLOG_SECTION_ITEMS_ID}>
                <Link href={{ pathname: `${locale}/blog/${blog.BLOG_SECTION_ITEMS_ID}` }} passHref>
                    <a>
                        <div className={styles.blogBoxItem}>
                            <Image
                                className={styles.blogBoxImage}
                                src={blog.BLOG_SECTION_ITEMS_PHOTO}
                                fluid
                            />
                            <span className={styles.blogBoxItemAuthor}>
                                <span>{blog.BLOG_SECTION_ITEMS_DATE.substr(0, 10)} | </span>
                                <span>
                                    <small>
                                        {i18n.language === "tr" ? (
                                            <span>
                                                <b>{blog.BLOG_SECTION_ITEMS_AUTHOR} </b>
                                                {t("blog.body.BLOG_SECTION_ITEMS_AUTHOR_PREFIX")}
                                            </span>
                                        ) : (
                                            <span>
                                                <b>
                                                    {t(
                                                        "blog.body.BLOG_SECTION_ITEMS_AUTHOR_PREFIX"
                                                    )}{" "}
                                                </b>
                                                {blog.BLOG_SECTION_ITEMS_AUTHOR}
                                            </span>
                                        )}
                                    </small>
                                </span>
                            </span>
                            <h6>{blog.BLOG_SECTION_ITEMS_TITLE}</h6>
                            <p>{blog.BLOG_SECTION_ITEMS_SUMMARY} . . .</p>
                        </div>
                    </a>
                </Link>
            </Col>
        </>
    );
};

BlogItem.propTypes = {
    blog: PropTypes.object.isRequired,
};

export default BlogItem;
