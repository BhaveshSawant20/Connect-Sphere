"use client";
import React from "react";
import css from "@/styles/Post.module.css";
import { Avatar, Flex, Typography, Image } from "antd";
import Box from "../Box";
import dayjs from "dayjs";
import { getFileTypeFromUrl } from "@/utils";
import LikeButton from "./LikeButton";
import CommentButton from "./CommentButton";
import CommentSection from "./CommentSection";
const Post = ({data, queryId}) => {
  
  return (
    <div className={css.wrapper}>
      <Box>
        <div className={css.container}>
          <Flex align='center' justify='space-between'>
            <Flex gap={'.5rem'} align='center'>
              <Avatar size={40} src={data?.author?.image_url}/>
              <Flex vertical>
                  <Typography className="typoSubtitle2">
                    {data?.author?.first_name} {data?.author?.last_name}
                  </Typography>
                <Typography.Text
                  className="typoCaption"
                  type="secondary"
                  strong>
                  {dayjs(data?.created_at).format("DD MMM YYYY")}
                </Typography.Text>
              </Flex>
            </Flex>
          </Flex>
          <Typography.Text className="typoBody2">
            <div
              dangerouslySetInnerHTML={{
                __html: (data?.postText)?.replace(/\n/g, "<br/>"),
              }}
            ></div>
          </Typography.Text>
          {getFileTypeFromUrl(data?.media) === "image" && (
            <div className={css.media}>
              <Image
                preview={{ mask: null }}
                src={data?.media}
                alt="post"
                style={{ objectFit: "cover" }}
                fill
              />
            </div>
          )}
          {getFileTypeFromUrl(data?.media) === "video" && (
            <div className={css.media}>
              <video
                src={data?.media}
                controls
                style={{ width: "100%", height: "100%" }}
              />
            </div>
          )}
          {/* actions */}
          <Flex
            align="center"
            justify="space-between"
            style={{ padding: ".5rem 0rem" }}
          >
            {/* left side like and comment */}
            <Flex>
              <LikeButton
                postId={data?.id}
                likes={data?.likes}
                queryId={queryId}
              />
              <CommentButton comments={data?.comments?.length} />
            </Flex>

            {/* right side share */}
            {/* <ShareButton /> */}
          </Flex>

          {/* comments */}
          <CommentSection
            comments={data?.comments}
            expanded={false}
            postId={data?.id}
            queryId={queryId}
          />
        </div>
      </Box>
    </div>
  );
};

export default Post;
