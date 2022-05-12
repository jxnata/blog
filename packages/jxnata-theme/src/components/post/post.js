import { Head, styled, connect, decode } from "frontity";
import { useEffect } from "react";
import FeaturedMedia from "./featured-media";
import {
  EntryContent,
  Post as _Post,
  PostHeader,
  PostInner,
  PostTitle,
  PostCaption,
  SectionContainer,
} from "./post-item";
import PostCategories from "./post-categories";
import PostMeta from "./post-meta";
import PostTags from "./post-tags";

/**
 * The Post component that the TwentyTwenty theme uses for rendering any kind of
 * "post type" (posts, pages, attachments, etc.).
 *
 * It doesn't receive any prop but the Frontity store, which it receives from
 * {@link connect}. The current Frontity state is used to know which post type
 * should be rendered.
 *
 * @param props - The Frontity store (state, actions, and libraries).
 *
 * @example
 * ```js
 * <Switch>
 *   <Post when={data.isPostType} />
 * </Switch>
 * ```
 *
 * @returns The {@link Post} element rendered.
 */
const Post = ({ state, actions, libraries }) => {
  // Get information about the current URL.
  const data = state.source.get(state.router.link);
  // Get the data of the post.
  const post = state.source[data.type][data.id];

  // Get the html2react component.
  const Html2React = libraries.html2react.Component;

  // Get all categories
  const allCategories = state.source.category;

  /**
   * The item's categories is an array of each category id. So, we'll look up
   * the details of each category in allCategories.
   */
  const categories =
    post.categories && post.categories.map((catId) => allCategories[catId]);

  // Get all tags
  const allTags = state.source.tag;

  /**
   * The item's categories is an array of each tag id. So, we'll look up the
   * details of each tag in allTags.
   */
  const tags = post.tags && post.tags.map((tagId) => allTags[tagId]);

  /**
   * Meta items and Open Graph
   */
  const postTags = tags.filter(Boolean).map((tag) => decode(tag.name));
  const postCategories = categories
    .filter(Boolean)
    .map((cat) => decode(cat.name));
  const postExcerpt = `${decode(post.excerpt.rendered).slice(0, 147)}...`;
  const postTitle = decode(post.title.rendered);
  const postAuthor = decode(state.source.author[post.author].name);
  const postDate = post.date;
  const postMedia = state.source.attachment[post.featured_media];
  const postUrl = `${state.frontity.url}${state.router.link}`;

  /**
   * Once the post has loaded in the DOM, prefetch both the
   * home posts and the list component so if the user visits
   * the home page, everything is ready and it loads instantly.
   */
  useEffect(() => {
    actions.source.fetch("/");
  }, [actions.source]);

  // Load the post, but only if the data is ready.
  return data.isReady ? (
    <PostArticle>
      <Head>
        <meta name="keywords" content={postTags} />
        <meta name="description" content={postExcerpt} />
        <meta name="language" content="pt" />
        <meta name="robots" content="index,follow" />
        <meta property="og:title" content={postTitle} />
        <meta property="og:url" content={postUrl} />
        <meta property="og:site_name" content={state.frontity.title} />
        <meta property="og:description" content={postExcerpt} />
        <meta property="og:type" content="article" />
        <meta property="article:author" content={postAuthor} />
        <meta property="article:section" content={postCategories[0]} />
        <meta property="article:tag" content={postTags} />
        <meta property="article:published_time" content={postDate} />
        <meta property="og:image" content={postMedia.source_url} />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:locale" content="pt_BR" />
      </Head>
      <Header>
        <SectionContainer>
          {/* If the post has categories, render the categories */}
          {post.categories && <PostCategories categories={categories} />}
          <PostTitle
            as="h1"
            className="heading-size-1"
            dangerouslySetInnerHTML={{ __html: post.title.rendered }}
          />
          {/* If the post has a caption (like attachments), render it */}
          {post.caption && (
            <PostCaption
              dangerouslySetInnerHTML={{ __html: post.caption.rendered }}
            />
          )}
          {/* The post's metadata like author, publish date, and comments */}
          <PostMeta item={post} />
        </SectionContainer>
      </Header>

      {/*
       * If the want to show featured media in the
       * list of featured posts, we render the media.
       */}
      {state.theme.featuredMedia.showOnPost && (
        <FeaturedImage id={post.featured_media} isSinglePost={true} />
      )}

      {/* If the post has a description (like attachments), we render it */}
      {post.description && (
        <PostInner size="thin">
          <EntryContent
            dangerouslySetInnerHTML={{ __html: post.description.rendered }}
          />
        </PostInner>
      )}

      {/* If the post has content, we render it */}
      {post.content && (
        <PostInner size="thin">
          <EntryContent>
            <Html2React html={post.content.rendered} />
          </EntryContent>
          {/* If the post has tags, render it */}
          {post.tags && <PostTags tags={tags} />}
        </PostInner>
      )}
    </PostArticle>
  ) : null;
};

export default connect(Post);

const Header = styled(PostHeader)`
  margin: 0;
  padding: 4rem 0;
  @media (min-width: 700px) {
    padding: 8rem 0;
  }
`;

const PostArticle = styled(_Post)`
  padding-top: 0 !important;
`;

const FeaturedImage = styled(FeaturedMedia)`
  margin-top: 0 !important;
  position: relative;

  > div {
    position: relative;
  }

  &:before {
    content: "";
    display: block;
    position: absolute;
    bottom: 50%;
    left: 0;
    right: 0;
    top: 0;
  }
`;
