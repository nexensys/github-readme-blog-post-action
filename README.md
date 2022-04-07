# Github Readme Blog Post Action

A (somewhat) simple github action that generates a set of cards for recent blog posts.

Here's an example of how it looks given the URLs for DEV Community, JavaScript Weekly, and Echo JS:

<!-- post-list:start -->
## DEV Community

The most recent home feed on DEV Community.

[Read more](https://dev.to)
> Last updated: Wednesday, April 6, 2022 at 6:44:51 PM

> Showing 5 of 12 posts.

[![The Big Server Farm in the Sky](https://raw.githubusercontent.com/ErrorGamer2000/github-readme-blog-post-action/main/generated_files/DEV_Community/The_Big_Server_Farm_in_the_Sky.svg)](https://dev.to/zacharyp/the-big-server-farm-in-the-sky-b5c)
[![[Deepgram x DEV Hackathon Submission Post Placeholder Title]](https://raw.githubusercontent.com/ErrorGamer2000/github-readme-blog-post-action/main/generated_files/DEV_Community/[Deepgram_x_DEV_Hackathon_Submission_Post_Placeholder_Title].svg)](https://dev.to/banging12/deepgram-x-dev-hackathon-submission-post-placeholder-title-3di1)
[![How to Build Scalable Architecture for your Next.js Project](https://raw.githubusercontent.com/ErrorGamer2000/github-readme-blog-post-action/main/generated_files/DEV_Community/How_to_Build_Scalable_Architecture_for_your_Next.js_Project.svg)](https://dev.to/alexeagleson/how-to-build-scalable-architecture-for-your-nextjs-project-2pb7)
[![Optimizing Active Record queries](https://raw.githubusercontent.com/ErrorGamer2000/github-readme-blog-post-action/main/generated_files/DEV_Community/Optimizing_Active_Record_queries.svg)](https://dev.to/kattyacuevas/optimizing-active-record-queries-4i84)
[![Optimización de queries en Rails](https://raw.githubusercontent.com/ErrorGamer2000/github-readme-blog-post-action/main/generated_files/DEV_Community/Optimización_de_queries_en_Rails.svg)](https://dev.to/kattyacuevas/optimizacion-de-queries-en-rails-5hkj)


## JavaScript Weekly

A newsletter of JavaScript articles, news and cool projects

[Read more](https://javascriptweekly.com/)
> Last updated: Wednesday, April 6, 2022 at 6:44:55 PM

> Showing 4 of 4 posts.

[![Time to get decorating](https://raw.githubusercontent.com/ErrorGamer2000/github-readme-blog-post-action/main/generated_files/JavaScript_Weekly/Time_to_get_decorating.svg)](https://javascriptweekly.com/issues/583)
[![React 18 due any day now..](https://raw.githubusercontent.com/ErrorGamer2000/github-readme-blog-post-action/main/generated_files/JavaScript_Weekly/React_18_due_any_day_now...svg)](https://javascriptweekly.com/issues/582)
[![Getting creative with JavaScript](https://raw.githubusercontent.com/ErrorGamer2000/github-readme-blog-post-action/main/generated_files/JavaScript_Weekly/Getting_creative_with_JavaScript.svg)](https://javascriptweekly.com/issues/581)
[![Bringing static type syntax into JavaScript itself](https://raw.githubusercontent.com/ErrorGamer2000/github-readme-blog-post-action/main/generated_files/JavaScript_Weekly/Bringing_static_type_syntax_into_JavaScript_itself.svg)](https://javascriptweekly.com/issues/580)


## Echo JS

Description pending

[Read more](
http://www.echojs.com
)
> Last updated: Wednesday, April 6, 2022 at 6:45:01 PM

> Showing 5 of 30 posts.

[![GitHub - orefalo/svelte-splitpanes](https://raw.githubusercontent.com/ErrorGamer2000/github-readme-blog-post-action/main/generated_files/_Echo_JS_/GitHub_-_orefalo_svelte-splitpanes.svg)](https://github.com/orefalo/svelte-splitpanes)
[![GitHub - w-mcilhagga/dst: dead simple templating using tagged templates in javascript](https://raw.githubusercontent.com/ErrorGamer2000/github-readme-blog-post-action/main/generated_files/_Echo_JS_/GitHub_-_w-mcilhagga_dst__dead_simple_templating_using_tagged_templates_in_javascript.svg)](https://github.com/w-mcilhagga/dst)
[![Make Beautifully Resilient Apps With Progressive Enhancement](https://raw.githubusercontent.com/ErrorGamer2000/github-readme-blog-post-action/main/generated_files/_Echo_JS_/Make_Beautifully_Resilient_Apps_With_Progressive_Enhancement.svg)](https://austingil.com/resilient-applications-progressive-enhancement/)
[![Episode 5 - Code Quality and Why You Don't Need to Comment your Code with Christian Clausen - 20minJS](https://raw.githubusercontent.com/ErrorGamer2000/github-readme-blog-post-action/main/generated_files/_Echo_JS_/Episode_5_-_Code_Quality_and_Why_You_Don't_Need_to_Comment_your_Code_with_Christian_Clausen_-_20minJS.svg)](https://podcast.20minjs.com/1952066/10374519-episode-5-code-quality-and-why-you-don-t-need-to-comment-your-code-with-christian-clausen)
[![Replacing Enzyme with React Testing Library](https://raw.githubusercontent.com/ErrorGamer2000/github-readme-blog-post-action/main/generated_files/_Echo_JS_/Replacing_Enzyme_with_React_Testing_Library.svg)](http://wanago.io/2022/04/04/enzyme-react-testing-library/)


<!-- post-list:end -->

# Quick Start

This action runs out-of-the-box, with only one provided input.

Create a `.yml` file with the desired filename, and paste the following:

```yml
on:
  push:
  schedule:
    - cron: "0 */6 * * *"
jobs:
  blog:
    runs-on: ubuntu-latest
    name: Fetch and Generate Blog Posts
    steps:
      - name: Checkout
        uses: actions/checkout@v3
      - name: Generate
        uses: ErrorGamer2000/github-readme-blog-post-action@v1
        with:
          feed_urls: FEEDS
      - name: Commit changed files
        uses: stefanzweifel/git-auto-commit-action@v4
        with:
          commit_message: Save Generated Blog Posts
          skip_checkout: true
```

Replace the FEEDS with a comma-seperated list of [RSS feed](https://rss.com/blog/how-do-rss-feeds-work/) URLs, add

```md
<!-- blog-post-list:start -->
<!-- blog-post-list:end -->
```

in the README where you want the list, and **_BAM!_** You have yourself an automatic action that runs every 6 hours and when you change any of the files in your readme!

# Inputs

<table>
  <thead>
    <tr>
      <th>Option Name</th>
      <th>Type</th>
      <th>Default Value</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>feed_urls</code></td>
      <td><code>string</code></td>
      <td><code>""</code></td>
      <td>A (comma-seperated) list of RSS feed URLs to load posts from. This is the only required input.</td>
    </tr>
    <tr>
      <td><code>max_posts_per_url</code></td>
      <td><code>number</code></td>
      <td><code>5</code></td>
      <td>The maximum number of posts to show for each feed. If the number of posts is less than this, then all of the posts will be shown.</td>
    </tr>
    <tr>
      <td><code>position_indicator</code></td>
      <td><code>string</code></td>
      <td><code>blog-post-list</code></td>
      <td>The text of the comments that the action uses to inject the images into the README file. Everything between the two comments in the form <code>&lt;!-- position_indicator:start --&gt;</code> and <code>&lt;!-- position_indicator:end --&gt;</code> is replaced. Changing this can allow you to use multiple configurations for different feeds by using different markers for each.</td>
    </tr>
    <tr>
      <td><code>show_feed_data</code></td>
      <td><code>boolean</code></td>
      <td><code>true</code></td>
      <td>Whether or not to show the generated markdown describing the feed, which includes the title of the feed, the description of the feed, the <code>Read More</code> link, the last updated date, and the post count. Each of these can also be individually toggled with the following options. This will override any of the specific options, so it is better to disable/enable them specifically if you want to remove some elements.</td>
    </tr>
    <tr>
      <td><code>show_feed_title</code></td>
      <td><code>boolean</code></td>
      <td><code>true</code></td>
      <td>Whether or not to show the header containing the title of the feed. This will be formatted as an <code>h2</code> header. An option to customize this header will be in a future update.</td>
    </tr>
    <tr>
      <td><code>show_feed_description</code></td>
      <td><code>boolean</code></td>
      <td><code>true</code></td>
      <td>Whether or not to show the title of the feed that is provided by the RSS feed.</td>
    </tr>
    <tr>
      <td><code>show_read_more</code></td>
      <td><code>boolean</code></td>
      <td><code>true</code></td>
      <td>Whether or not to show the <code>Read More</code> link under the feed description.</td>
    </tr>
    <tr>
      <td><code>show_last_updated_date</code></td>
      <td><code>boolean</code></td>
      <td><code>true</code></td>
      <td>Whether or not to show the date and time of the last update of the list.</td>
    </tr>
    <tr>
      <td><code>show_post_count</code></td>
      <td><code>boolean</code></td>
      <td><code>true</code></td>
      <td>Whether or not to show the number of posts shown and the total number of posts provided by the RSS feed.</td>
    </tr>
    <tr>
      <td><code>show_post_date</code></td>
      <td><code>boolean</code></td>
      <td><code>true</code></td>
      <td>Whether or not to show the date of each post on the card.</td>
    </tr>
    <tr>
      <td><code>locale</code></td>
      <td><code>string</code></td>
      <td><code>"en"</code></td>
      <td>The locale of the project. This is used <strong>purely</strong> for formatting the dates of the cards and last update.</td>
    </tr>
    <tr>
      <td><code>time_zone</code></td>
      <td><code>string</code></td>
      <td><code>"UTC"</code></td>
      <td>A valid time zone to use for the last updated date.</td>
    </tr>
    <tr>
      <td><code>output_dir</code></td>
      <td><code>string</code></td>
      <td><code>"blog-post-list-output"</code></td>
      <td>The directory to store the post card images in. Must be in the root directory (i.e. no path separators <code>/</code> or <code>\</code>) and cannot include the characters <code>/\?%*:|"&lt;&gt;</code>.</td>
    </tr>
<!--
    <tr>
      <td><code></code></td>
      <td><cde></cde></td>
      <td><code></code></td>
      <td></td>
    </tr>
-->
  </tbody>
</table>

# Usage Notes

- Make sure that you use an action that will commit changed files to the repository after this action has run, so that the files actually get changed.
- I am a solo dev, and will get back to you as soon as I can, so expect to wait several weeks depending on how many other issues there are.
- Enjoy and share! 🤗
